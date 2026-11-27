import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { cpSync, existsSync, lstatSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, writeFileSync } from 'node:fs';
import { basename, dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Client } from '@modelcontextprotocol/client';
import { SkillsClient } from '@modelcontextprotocol/client/ext/skills';
import { StdioClientTransport } from '@modelcontextprotocol/client/stdio';
import { platforms } from '../shared/accounts.ts';

const mcp = fileURLToPath(new URL('../', import.meta.url));
const pack = fileURLToPath(new URL('../../', import.meta.url));
const npm = process.env.npm_execpath;
if (!npm) throw new Error('Run this command with npm run bundle.');
// npm run may forward an IDE's allow-scripts setting. These child commands pass
// --ignore-scripts and require no lifecycle scripts.
const npmEnv = Object.fromEntries(Object.entries(process.env).filter(([key]) => key.toLowerCase() !== 'npm_config_allow_scripts'));

function runNpm(args, cwd, captureOutput = false) {
  const result = spawnSync(process.execPath, [npm, ...args], {
    cwd, env: npmEnv, encoding: 'utf8', stdio: ['inherit', captureOutput ? 'pipe' : 'inherit', 'inherit']
  });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error('npm ' + args[0] + ' failed.');
  return result.stdout;
}

function copyTree(source, destination, extensions) {
  cpSync(source, destination, {
    recursive: true,
    filter(path) {
      if (basename(path).startsWith('.') || basename(path) === 'accounts.local.json') return false;
      const entry = lstatSync(path);
      return entry.isDirectory() || (entry.isFile() && extensions.includes(extname(path)));
    }
  });
}

const output = join(mcp, 'dist');
mkdirSync(output, { recursive: true });
const stage = mkdtempSync(join(realpathSync(output), 'bundle-'));
const stagedPack = join(stage, 'ad-skill-jam');
const stagedMcp = join(stagedPack, 'mcp');
mkdirSync(stagedMcp, { recursive: true });

try {
  const manifest = JSON.parse(readFileSync(join(mcp, 'packaging', 'manifest.json'), 'utf8'));
  manifest.version = JSON.parse(readFileSync(join(mcp, 'package.json'), 'utf8')).version;
  writeFileSync(join(stage, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
  for (const entry of ['README.md', '_shared', 'ads', 'assets', 'scripts', ...platforms.map(platform => platform + '-ads')]) {
    copyTree(join(pack, entry), join(stagedPack, entry), ['.md', '.json', '.svg', '.py', '.sh', '.ps1']);
  }
  const marketing = join(pack, 'marketing');
  if (existsSync(marketing)) {
    copyTree(marketing, join(stagedPack, 'marketing'), ['.md', '.json', '.py', '.sh', '.ps1']);
  }
  for (const entry of ['package-lock.json', 'README.md', 'accounts.example.json', 'gateway', 'servers', 'shared', 'skills-bridge']) {
    copyTree(join(mcp, entry), join(stagedMcp, entry), ['.json', '.md', '.ts']);
  }
  const runtimePackage = JSON.parse(readFileSync(join(mcp, 'package.json'), 'utf8'));
  delete runtimePackage.devDependencies;
  writeFileSync(join(stagedMcp, 'package.json'), JSON.stringify(runtimePackage, null, 2) + '\n');
  runNpm(['ci', '--omit=dev', '--ignore-scripts'], stagedMcp);
  const sbom = runNpm(['sbom', '--omit=dev', '--sbom-format', 'cyclonedx'], stagedMcp, true);
  JSON.parse(sbom);

  const client = new Client({ name: 'adjam-bundle-check', version: manifest.version });
  try {
    const config = manifest.server.mcp_config;
    await client.connect(new StdioClientTransport({
      command: process.execPath,
      args: config.args.map(arg => arg.replace('${__dirname}', stage)),
      env: { ADJAM_ACCOUNTS_FILE: config.env.ADJAM_ACCOUNTS_FILE.replace('${user_config.accounts_file}', manifest.user_config.accounts_file.default) }
    }));
    const health = await client.callTool({ name: 'adjam_health_check', arguments: {} });
    assert.equal(health.structuredContent?.account_mode, 'unconfigured');
    assert.equal((await client.listTools()).tools.length, platforms.length + 3);
    assert.ok((await new SkillsClient(client).list()).skills.some(skill => skill.frontmatter.name === 'google-ads-audit'));
  } finally {
    await client.close();
  }

  const tool = ['exec', '--yes', '--ignore-scripts', '--package=@anthropic-ai/mcpb@2.1.2', '--', 'mcpb'];
  runNpm([...tool, 'validate', join(stage, 'manifest.json')], mcp);
  runNpm([...tool, 'pack', stage, join(output, 'ad-skill-jam.mcpb')], mcp);
  writeFileSync(join(output, 'ad-skill-jam-mcp.sbom.json'), sbom);
} finally {
  // Remove only the staging directory allocated inside dist.
  if (dirname(realpathSync(stage)) === realpathSync(output)) {
    rmSync(stage, { recursive: true, force: true });
  }
}
