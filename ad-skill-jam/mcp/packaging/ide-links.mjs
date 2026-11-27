import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
if (!existsSync(join(root, 'node_modules', '@modelcontextprotocol', 'server', 'package.json'))) {
  throw new Error('Install dependencies with npm ci --ignore-scripts before generating links.');
}
const name = 'ad-skill-jam';
const config = { command: process.execPath, args: [join(root, 'gateway', 'stdio.ts')] };
const encoded = encodeURIComponent(JSON.stringify(config));
const base64 = encodeURIComponent(Buffer.from(JSON.stringify(config), 'utf8').toString('base64'));
const links = [
  ['VS Code', 'vscode:mcp/install?' + encodeURIComponent(JSON.stringify({ name, type: 'stdio', ...config }))],
  ['Cursor', 'cursor://anysphere.cursor-deeplink/mcp/install?name=' + name + '&config=' + base64],
  ['Kiro', 'https://kiro.dev/launch/mcp/add?name=' + name + '&config=' + encoded],
  ['TRAE', 'trae://trae.ai-ide/mcp-import?type=stdio&name=' + name + '&config=' + base64],
  ['TRAE China', 'trae-cn://trae.ai-ide/mcp-import?type=stdio&name=' + name + '&config=' + base64],
];
const output = join(root, 'dist');
mkdirSync(output, { recursive: true });
const html = `<!doctype html>
<html lang="en">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="referrer" content="no-referrer">
<title>Install Ad Skill Jam MCP</title>
<style>
  :root { color-scheme: light dark; font: 100%/1.6 system-ui, sans-serif; }
  body { max-width: 44rem; margin: 7vh auto; padding: 0 1rem; }
  ul { display: flex; flex-wrap: wrap; gap: .75rem; padding: 0; list-style: none; }
  a { display: block; color: #fff; background: #59418a; padding: .55rem .9rem; border-radius: .45rem; }
  a:focus-visible { outline: .14rem solid currentColor; outline-offset: .25rem; }
</style>
<h1>Install Ad Skill Jam MCP</h1>
<p>Pick your editor, review its install prompt, and call <code>adjam_health_check</code>.
Install once to access all twelve providers. The server starts without an advertising account.</p>
<ul>
${links.map(([label, href]) => '  <li><a href="' + href.replaceAll('&', '&amp;') + '">Add to ' + label + '</a></li>').join('\n')}
</ul>
<p>The configuration includes the local Node executable and this checkout’s path. Kiro opens
its HTTPS launch page with those paths in the link. Keep this page local. Rerun
<code>npm run ide-links</code> after moving the checkout or changing your Node installation.</p>
</html>
`;
const target = join(output, 'install-mcp.html');
writeFileSync(target, html);
console.log('Open ' + target + ' in your browser.');
