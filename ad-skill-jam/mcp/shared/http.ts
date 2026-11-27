import { setTimeout as delay } from 'node:timers/promises';

export type ProviderRequest = {
  url: URL;
  headers?: Record<string, string>;
  body?: object;
  oauth?: () => string;
};

export class ReadError extends Error {
  readonly code: string;
  readonly retryAfterMs?: number;

  constructor(code: string, message: string, retryAfterMs?: number) {
    super(message);
    this.code = code;
    this.retryAfterMs = retryAfterMs;
  }
}

const MAX_BYTES = 4 * 1024 * 1024;

async function jsonBody(response: Response): Promise<unknown> {
  if (!response.body || Number(response.headers.get('content-length')) > MAX_BYTES) {
    await response.body?.cancel();
    throw new ReadError('INVALID_PROVIDER_RESPONSE', 'Provider response is empty or too large. Try a smaller page or use an export.');
  }
  const decoder = new TextDecoder();
  const reader = response.body.getReader();
  let bytes = 0;
  let body = '';
  try {
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > MAX_BYTES) {
        await reader.cancel();
        throw new ReadError('INVALID_PROVIDER_RESPONSE', 'Provider response exceeded the size limit. Try a smaller page or use an export.');
      }
      body += decoder.decode(value, { stream: true });
    }
    return JSON.parse(body + decoder.decode());
  } catch (error) {
    if (error instanceof ReadError) throw error;
    throw new ReadError('INVALID_PROVIDER_RESPONSE', 'Provider returned an unreadable response. Retry or use an export.');
  } finally {
    reader.releaseLock();
  }
}

function retryAfterMs(header: string | null): number | undefined {
  if (!header) return undefined;
  const ms = /^\d+$/.test(header) ? Number(header) * 1000 : Date.parse(header) - Date.now();
  return Number.isSafeInteger(ms) ? Math.max(0, ms) : undefined;
}

export function createReader(fetcher: typeof fetch = fetch) {
  const cooling = new Map<string, number>();
  return async function read(request: ProviderRequest, providerHosts: readonly string[], callerSignal?: AbortSignal): Promise<unknown> {
    const { url } = request;
    if (url.protocol !== 'https:' || url.port || url.username || url.password || !providerHosts.includes(url.hostname)) {
      throw new ReadError('INVALID_PROVIDER_URL', 'Provider URL is outside the allowed API endpoints.');
    }
    const remaining = (cooling.get(url.hostname) ?? 0) - Date.now();
    if (remaining > 0) throw new ReadError('RATE_LIMITED', 'Provider is cooling down. Retry after the indicated delay.', remaining);
    const signal = callerSignal ? AbortSignal.any([callerSignal, AbortSignal.timeout(15_000)]) : AbortSignal.timeout(15_000);
    for (let attempt = 0; attempt < 2; attempt += 1) {
      let response: Response;
      try {
        response = await fetcher(url, {
          method: request.body ? 'POST' : 'GET',
          headers: {
            accept: 'application/json',
            ...(request.body ? { 'content-type': 'application/json' } : {}),
            ...request.headers,
            ...(request.oauth ? { authorization: request.oauth() } : {}),
          },
          body: request.body ? JSON.stringify(request.body) : undefined,
          redirect: 'error',
          signal,
        });
      } catch {
        if (signal.aborted || attempt) throw new ReadError('PROVIDER_UNAVAILABLE', 'Provider call failed or timed out. Retry or use an export.');
        await delay(250, undefined, { signal }).catch(() => undefined);
        continue;
      }
      if (response.ok) return jsonBody(response);
      const retry = retryAfterMs(response.headers.get('retry-after'));
      await response.body?.cancel();
      if (response.status === 429) {
        const cooldown = retry ?? 1000;
        if (!attempt && cooldown <= 1000) {
          await delay(cooldown, undefined, { signal }).catch(() => undefined);
          continue;
        }
        cooling.set(url.hostname, Date.now() + cooldown);
        throw new ReadError('RATE_LIMITED', 'Provider rate limit reached. Retry after the indicated delay.', cooldown);
      }
      if ([401, 403].includes(response.status)) throw new ReadError('ACCESS_DENIED', 'Check token expiry, app entitlement and account role.');
      if ([408, 500, 502, 503, 504].includes(response.status)) {
        if (!attempt && (retry ?? 250) <= 1000) {
          await delay(retry ?? 250, undefined, { signal }).catch(() => undefined);
          continue;
        }
        throw new ReadError('PROVIDER_UNAVAILABLE', 'Provider is temporarily unavailable. Retry or use an export.', retry);
      }
      throw new ReadError('PROVIDER_REJECTED', 'Provider rejected the read. Check account scope, endpoint access and API version.');
    }
    throw new ReadError('PROVIDER_UNAVAILABLE', 'Provider call failed. Retry or use an export.');
  };
}
