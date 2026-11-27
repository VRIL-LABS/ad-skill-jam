import { serveStdio } from '@modelcontextprotocol/server/stdio';
import { loadAccounts } from '../shared/accounts.ts';
import { buildSkillsCatalog } from '../skills-bridge/catalog.ts';
import { createServer } from './server.ts';

try {
  const accounts = loadAccounts(process.env.ADJAM_ACCOUNTS_FILE);
  const skills = await buildSkillsCatalog();
  serveStdio(() => createServer({ accounts, skills }));
} catch (error) {
  const message = error instanceof Error ? error.message : 'Unknown startup problem.';
  process.stderr.write('Ad Skill Jam MCP startup failed. ' + message + '\n');
  process.exitCode = 1;
}
