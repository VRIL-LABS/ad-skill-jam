import { readFileSync } from 'node:fs';
import * as z from 'zod/v4';

export const platforms = [
  'apple', 'x', 'youtube', 'tiktok', 'snapchat', 'microsoft',
  'pinterest', 'linkedin', 'amazon', 'google', 'meta', 'reddit',
] as const;
export const platformSchema = z.enum(platforms);
export type Platform = z.infer<typeof platformSchema>;

export const aliasSchema = z.string().regex(/^[a-z][a-z0-9-]{0,39}$/).describe('Local account alias from adjam_list_accounts.');
const providerId = z.string().regex(/^[a-zA-Z0-9_-]{1,128}$/);
const envName = z.string().regex(/^[A-Z][A-Z0-9_]{2,79}$/);
const accountSchema = z.strictObject({
  alias: aliasSchema,
  platform: platformSchema,
  accountId: providerId,
  version: z.string().regex(/^[a-zA-Z0-9.]{1,12}$/).optional(),
  managerId: providerId.optional(),
  region: z.enum(['na', 'eu', 'fe']).optional(),
  credentials: z.partialRecord(z.enum(['token', 'developerToken', 'clientId', 'consumerKey', 'consumerSecret', 'tokenSecret']), envName),
});
export type Account = z.infer<typeof accountSchema>;
export type Credential = keyof Account['credentials'];
export type Secrets = Partial<Record<Credential, string>>;

export function loadAccounts(path: string | undefined): Account[] {
  if (!path) return [];
  let value: unknown;
  try {
    value = JSON.parse(readFileSync(path, 'utf8'));
  } catch {
    throw new Error('Could not read ADJAM_ACCOUNTS_FILE as JSON. Check the path and account configuration.');
  }
  const parsed = z.strictObject({ accounts: z.array(accountSchema).max(100) }).safeParse(value);
  if (!parsed.success) {
    const fields = parsed.error.issues.map(issue => issue.path.join('.')).join(', ');
    throw new Error('Invalid account configuration fields: ' + fields);
  }
  const accounts = parsed.data.accounts;
  if (new Set(accounts.map(account => account.alias)).size !== accounts.length) {
    throw new Error('Account aliases must be unique.');
  }
  return accounts;
}

export function readSecrets(account: Account, env: NodeJS.ProcessEnv): Secrets {
  const secrets: Secrets = {};
  for (const key of Object.keys(account.credentials) as Credential[]) {
    const name = account.credentials[key];
    const value = name && env[name];
    if (value?.trim() && !/[\u0000-\u001f\u007f]/.test(value)) secrets[key] = value.trim();
  }
  return secrets;
}
