import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, rmdir, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { Client, INVALID_PARAMS } from '@modelcontextprotocol/client';
import { SkillsClient } from '@modelcontextprotocol/client/ext/skills';
import { StdioClientTransport } from '@modelcontextprotocol/client/stdio';
import { platforms } from '../shared/accounts.ts';

const entry = fileURLToPath(new URL('../gateway/stdio.ts', import.meta.url));
const pack = fileURLToPath(new URL('../../', import.meta.url));

test('stdio discovers tools and reads every skill with no account or credentials', { timeout: 30_000 }, async () => {
  const transport = new StdioClientTransport({ command: process.execPath, args: [entry], env: { ADJAM_ACCOUNTS_FILE: '' }, stderr: 'pipe' });
  const client = new Client({ name: 'adjam-smoke-test', version: '0.1.0' }, {
    versionNegotiation: { mode: { pin: '2026-07-28' } },
  });
  try {
    await client.connect(transport);
    assert.equal(client.getProtocolEra(), 'modern');
    const { tools } = await client.listTools();
    const names = tools.map(tool => tool.name);
    assert.equal(names.length, platforms.length + 3);
    assert.ok(tools.every(tool => tool.inputSchema && tool.outputSchema && tool.annotations?.readOnlyHint && !tool.annotations?.destructiveHint));
    const health = await client.callTool({ name: 'adjam_health_check', arguments: {} });
    assert.deepEqual(health.structuredContent, {
      status: 'ready', account_mode: 'unconfigured', configured_accounts: 0, accounts_ready_for_read: 0,
      provider_connections_tested: false, provider_writes: false,
    });
    const list = await client.callTool({ name: 'adjam_list_accounts', arguments: {} });
    assert.deepEqual(list.structuredContent, { source: 'local_configuration', accounts: [] });
    for (const platform of platforms) {
      const setup = await client.callTool({ name: 'adjam_get_platform_setup', arguments: { platform } });
      const name = platform + '_get_campaigns';
      assert.partialDeepStrictEqual(setup.structuredContent, { tool: name, platform });
      assert.ok(names.includes(name));
      const disconnected = await client.callTool({ name, arguments: { account_alias: 'unconnected' } });
      assert.equal(disconnected.isError, true);
      assert.partialDeepStrictEqual(disconnected.structuredContent, { code: 'ACCOUNT_NOT_CONFIGURED' });
      assert.equal(Object.hasOwn(disconnected.structuredContent ?? {}, 'campaigns'), false);
    }
    await assert.rejects(client.callTool({ name: 'adjam_execute_change', arguments: {} }), { code: INVALID_PARAMS });

    const skillClient = new SkillsClient(client);
    const { skills } = await skillClient.list();
    const expected = new Set<string>();
    for (const platform of platforms) {
      const index = await readFile(join(pack, platform + '-ads', 'README.md'), 'utf8');
      for (const match of index.matchAll(/\]\(([^/)]+)\/SKILL\.md\)/g)) expected.add(match[1]);
    }
    for (const name of ['ad-antislop', 'ad-approval-gates', 'ad-audit', 'ad-reporting']) expected.add(name);
    assert.deepEqual(new Set(skills.map(entry => entry.frontmatter.name)), expected);
    for (const entry of skills) {
      const verified = await skillClient.read(entry);
      assert.ok(verified.verified, entry.frontmatter.name);
      const source = await skillClient.read(entry, 'references/sources.md');
      assert.ok(source.verified, entry.frontmatter.name);
    }
  } finally {
    await client.close();
  }
});

test('stdio loads a minimal local account file and detects missing credentials', { timeout: 30_000 }, async () => {
  const directory = await mkdtemp(join(tmpdir(), 'adjam-stdio-'));
  const config = join(directory, 'accounts.json');
  const transport = new StdioClientTransport({ command: process.execPath, args: [entry], env: { ADJAM_ACCOUNTS_FILE: config }, stderr: 'pipe' });
  const client = new Client({ name: 'adjam-config-test', version: '0.1.0' });
  try {
    await writeFile(config, JSON.stringify({ accounts: [{
      alias: 'test-account', platform: 'pinterest', accountId: '1234567890', credentials: { token: 'ADJAM_TEST_UNSET' },
    }] }));
    await client.connect(transport);
    assert.equal(client.getProtocolEra(), 'legacy');
    const health = await client.callTool({ name: 'adjam_health_check', arguments: {} });
    assert.partialDeepStrictEqual(health.structuredContent, { account_mode: 'configuration_needed', accounts_ready_for_read: 0 });
    const accounts = await client.callTool({ name: 'adjam_list_accounts', arguments: { platform: 'pinterest' } });
    assert.deepEqual(accounts.structuredContent, { source: 'local_configuration', accounts: [{
      account_alias: 'test-account', platform: 'pinterest', status: 'missing_configuration', missing: ['token'], invalid: [],
    }] });
    const read = await client.callTool({ name: 'pinterest_get_campaigns', arguments: { account_alias: 'test-account' } });
    assert.equal(read.isError, true);
    assert.partialDeepStrictEqual(read.structuredContent, { code: 'ACCOUNT_NOT_READY' });
  } finally {
    await client.close();
    await rm(config, { force: true });
    await rmdir(directory);
  }
});
