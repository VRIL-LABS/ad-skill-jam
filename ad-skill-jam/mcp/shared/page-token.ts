import { createCipheriv, createDecipheriv, randomBytes } from 'node:crypto';
import * as z from 'zod/v4';
import { ReadError } from './http.ts';

const payloadSchema = z.strictObject({
  offset: z.string().min(1).max(2048),
  expires: z.number().int(),
});

export function createPageTokens() {
  const key = randomBytes(32);
  return {
    encode(binding: string, offset: string): string {
      const iv = randomBytes(12);
      const cipher = createCipheriv('aes-256-gcm', key, iv);
      cipher.setAAD(Buffer.from(binding));
      const content = JSON.stringify({ offset, expires: Date.now() + 15 * 60_000 });
      return Buffer.concat([iv, cipher.update(content), cipher.final(), cipher.getAuthTag()]).toString('base64url');
    },
    decode(binding: string, token: string): string {
      try {
        const bytes = Buffer.from(token, 'base64url');
        if (bytes.toString('base64url') !== token || bytes.length < 29) throw new Error();
        const decipher = createDecipheriv('aes-256-gcm', key, bytes.subarray(0, 12));
        decipher.setAAD(Buffer.from(binding));
        decipher.setAuthTag(bytes.subarray(-16));
        const body = Buffer.concat([decipher.update(bytes.subarray(12, -16)), decipher.final()]);
        const { offset, expires } = payloadSchema.parse(JSON.parse(body.toString('utf8')));
        if (expires > Date.now()) return offset;
      } catch {
        // Return the same error for malformed, expired and mismatched tokens.
      }
      throw new ReadError('INVALID_PAGE_TOKEN', 'Use the token from the last page for this tool, alias and limit, or restart pagination.');
    },
  };
}
