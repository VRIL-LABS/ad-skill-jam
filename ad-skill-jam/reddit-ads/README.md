# Reddit Ads skills

Plan ads for the communities and placements you want to reach. Draft creative for Feed, Conversation, or Max campaigns, then use the reporting and tracking skills to investigate pacing, event quality, or lead quality. Start with read-only access or a redacted export from Ads Manager or Events Manager. [API ledger](../_shared/api-ledger/reddit-ads.md) · [Source provenance](../_shared/provenance/SOURCES.md)

| Request | Skill |
| --- | --- |
| Audit account health and prioritize findings | [Reddit Ads audit](reddit-ads-audit/SKILL.md) |
| Choose an objective, placements, targeting, and campaign type | [Reddit Ads campaign structure](reddit-ads-campaign-structure/SKILL.md) |
| Draft and preview Feed, Conversation, and Max creative | [Reddit Ads creative](reddit-ads-creative/SKILL.md) |
| Diagnose performance, learning, and lead quality | [Reddit Ads optimization](reddit-ads-optimization/SKILL.md) |
| Review pacing, bidding, and spend exposure | [Reddit Ads budget and bidding](reddit-ads-budget-bidding/SKILL.md) |
| Verify Pixel, CAPI, and events | [Reddit Pixel, Conversions API, and attribution](reddit-ads-tracking-attribution/SKILL.md) |
| Pull or reconcile reports and normalize units | [Reddit Ads reporting](reddit-ads-reporting/SKILL.md) |
| Review ad eligibility, suitability, and destinations | [Reddit Ads compliance and policy](reddit-ads-compliance-policy/SKILL.md) |
| Design or interpret a split test | [Reddit Ads experimentation](reddit-ads-experimentation/SKILL.md) |
| Research ad examples and community insights | [Reddit Ads competitive research](reddit-ads-competitive-research/SKILL.md) |
| Diagnose delivery, access, schema, and rate limits | [Reddit Ads troubleshooting](reddit-ads-troubleshooting/SKILL.md) |

Use [approval gates](../ads/ad-approval-gates/SKILL.md) for platform changes. See the [eval instructions](../_shared/evals/README.md) for validation and model-based checks.

## Install this pack

<details>

<summary><strong>Install the skills</strong></summary>

```sh
npx skills add https://github.com/VRIL-LABS/ad-skill-jam/tree/main/ad-skill-jam/reddit-ads --skill "*"
```

See [platform-pack scripts](../README.md#install-skills) for bulk selection and the shared skills.

</details>

[![Add Ad Skill Jam MCP to VS Code](https://img.shields.io/badge/VS_Code-Add_MCP-2564ad?style=flat)](https://vscode.dev/redirect?url=vscode%3Amcp%2Finstall%3F%257B%2522name%2522%253A%2522ad-skill-jam%2522%252C%2522type%2522%253A%2522stdio%2522%252C%2522command%2522%253A%2522node%2522%252C%2522args%2522%253A%255B%2522%2524%257BworkspaceFolder%257D%252Fad-skill-jam%252Fmcp%252Fgateway%252Fstdio.ts%2522%255D%257D) · [Cursor](../mcp/README.md#cursor) · [Kiro](../mcp/README.md#kiro) · [TRAE](../mcp/README.md#trae) · [Other clients](../mcp/README.md#other-clients) · [Desktop bundle](../mcp/README.md#install-a-desktop-bundle)

For the VS Code button, [prepare the checkout](../mcp/README.md#prepare-the-local-server), open its repository root, and install at workspace scope. Install the shared MCP once, then call `adjam_health_check`. Configure a `reddit` account alias to use `reddit_get_campaigns`.
