import { createHmac, randomBytes } from 'node:crypto';
import { ReadError } from '../shared/http.ts';

export type Row = Record<string, unknown>;
export type Page = { rows: Row[]; next?: string };

export function asObject(value: unknown): Row {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) invalidResponse();
  return value as Row;
}

export function asRows(value: unknown): Row[] {
  if (!Array.isArray(value)) invalidResponse();
  return value.map(asObject);
}

export function optionalObject(value: unknown): Row | undefined {
  return value === null || value === undefined ? undefined : asObject(value);
}

export function invalidResponse(): never {
  throw new ReadError('INVALID_PROVIDER_RESPONSE', 'Provider returned an unexpected result. Check API version and entitlement, or use an export.');
}

export function nextValue(value: unknown): string | undefined {
  if (value === null || value === undefined || value === '') return undefined;
  if (typeof value !== 'string' || value.length > 2048) invalidResponse();
  return value;
}

export function urlWithQuery(origin: string, route: string, query: Record<string, string | number | undefined> = {}): URL {
  const url = new URL(route, origin);
  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined) url.searchParams.set(key, String(value));
  }
  return url;
}

export function oauth1Header(url: URL, keys: { consumerKey: string; consumerSecret: string; token: string; tokenSecret: string }): string {
  const escape = (s: string) => encodeURIComponent(s).replace(/[!'()*]/g, char => '%' + char.charCodeAt(0).toString(16).toUpperCase());
  const oauth = {
    oauth_consumer_key: keys.consumerKey,
    oauth_nonce: randomBytes(16).toString('hex'),
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: String(Math.floor(Date.now() / 1000)),
    oauth_token: keys.token,
    oauth_version: '1.0',
  };
  const parameters = [...url.searchParams, ...Object.entries(oauth)]
    .map(([key, value]) => [escape(key), escape(value)] as const)
    .sort(([leftKey, leftValue], [rightKey, rightValue]) =>
      leftKey === rightKey ? (leftValue < rightValue ? -1 : Number(leftValue > rightValue)) : (leftKey < rightKey ? -1 : 1))
    .map(([key, value]) => key + '=' + value).join('&');
  const base = ['GET', url.origin + url.pathname, parameters].map(escape).join('&');
  const signature = createHmac('sha1', escape(keys.consumerSecret) + '&' + escape(keys.tokenSecret)).update(base).digest('base64');
  return 'OAuth ' + Object.entries({ ...oauth, oauth_signature: signature })
    .map(([key, value]) => key + '="' + escape(value) + '"').join(', ');
}
