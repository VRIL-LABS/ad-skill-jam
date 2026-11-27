# Repository instructions

Read [AGENTS.md](../AGENTS.md) for platform routing, repository boundaries, approval rules, and validation commands. It is the source for repository conventions.

Start with the affected pack README under `ad-skill-jam/` or the [MCP setup guide](../ad-skill-jam/mcp/README.md). Treat `ref/` as read-only and use the tracked provenance and API ledgers in public checkouts. Keep MCP checks independent of advertising credentials and require explicit approval before any campaign change that could spend money or go live.

From the repository root, run `python -X utf8 ad-skill-jam/_shared/evals/check_pack.py`. For MCP changes, use Node.js 24 or later and run `npm ci --ignore-scripts`, `npm run check`, and `npm test` in `ad-skill-jam/mcp`.
