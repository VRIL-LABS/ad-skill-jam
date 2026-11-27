import { fileURLToPath } from 'node:url';
import { SkillsExtension } from '@modelcontextprotocol/server/ext/skills';
import { nodeSkillFiles } from '@modelcontextprotocol/server/ext/skills/node';
import { platforms } from '../shared/accounts.ts';

const packRoot = fileURLToPath(new URL('../../', import.meta.url));
const groups = new Set(['ads', 'marketing', ...platforms.map(platform => platform + '-ads')]);
const files = nodeSkillFiles(packRoot);

export function buildSkillsCatalog() {
  // Exclude development files, package dependencies, and repository metadata.
  return SkillsExtension.load({
    async list(path) {
      const entries = await files.list(path);
      return path ? entries : entries.filter(entry => entry.kind === 'directory' && groups.has(entry.name));
    },
    read(path) {
      return files.read(path);
    },
  }, { strict: true, cacheHint: { ttlMs: 0, cacheScope: 'public' } });
}
