# Contributing

Use [AGENTS.md](AGENTS.md) for the repository workflow and [the pack index](ad-skill-jam/README.md) to find the affected skill. Treat [reference checkouts](FUSION_MAP.md) as read-only. Put product changes in `ad-skill-jam/` and repository guides at the root.

## Make a change

- For skills, mine the listed references, verify platform claims against primary documentation, and update the skill's source notes and verification date. Update the API ledger when API behavior changes.
- For MCP tools, use the existing provider adapters and shared HTTP client. Use synthetic responses in tests and keep credentials and private account data out of the repository.
- Update the affected platform index or setup guide in the same change. Repository maintainers review public setup instructions for each release and recheck provider references when changing a contract or API version.

## Validate locally

Run the pack checker from the repository root with Python 3.9 or later.

```sh
python ad-skill-jam/_shared/evals/check_pack.py
```

For MCP changes, use Node.js 24 or later.

```sh
cd ad-skill-jam/mcp
npm ci --ignore-scripts
npm run check
npm test
```

## Open a pull request

Describe the affected platform or tool, link the primary evidence for changed platform claims, and list the checks you ran. Include only redacted or synthetic examples. For private reports, use [SECURITY.md](SECURITY.md).
