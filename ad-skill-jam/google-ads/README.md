# Google Ads skills

Turn a Google Ads performance change into a concrete next check. Find waste in search queries, diagnose Performance Max or Shopping, and use GAQL to reconcile reports. Bring authorized read-only access or redacted evidence from Google Ads, GA4, your CRM, or Merchant Center, as the question requires. [API ledger](../_shared/api-ledger/google-ads.md) · [Source provenance](../_shared/provenance/SOURCES.md)

| Request | Skill |
| --- | --- |
| Audit account health and prioritize findings | [Google Ads audit](google-ads-audit/SKILL.md) |
| Design or stage campaigns and migration plans | [Google Ads campaign structure](google-ads-campaign-structure/SKILL.md) |
| Review queries, match types and negatives | [Google Ads search terms and negatives](google-ads-search-terms/SKILL.md) |
| Diagnose or stage Performance Max | [Google Ads Performance Max](google-ads-performance-max/SKILL.md) |
| Check Shopping, Merchant Center and product groups | [Google Ads retail and Shopping](google-ads-retail/SKILL.md) |
| Draft and validate responsive ads and assets | [Google Ads creative](google-ads-creative/SKILL.md) |
| Diagnose CPA, ROAS, quality and delivery changes | [Google Ads optimization](google-ads-optimization/SKILL.md) |
| Review pacing, exposure and bid strategy | [Google Ads budget and bidding](google-ads-budget-bidding/SKILL.md) |
| Verify goals, conversion data and offline ingestion | [Google Ads conversion tracking and attribution](google-ads-tracking-attribution/SKILL.md) |
| Build GAQL queries and reconcile reports | [Google Ads reporting and GAQL](google-ads-reporting/SKILL.md) |
| Review policy, destination and appeal evidence | [Google Ads compliance and policy](google-ads-compliance-policy/SKILL.md) |
| Design and interpret controlled tests | [Google Ads experimentation](google-ads-experimentation/SKILL.md) |
| Research creative and auction competitors | [Google Ads competitive research](google-ads-competitive-research/SKILL.md) |
| Diagnose account delivery, access and API failures | [Google Ads troubleshooting](google-ads-troubleshooting/SKILL.md) |

Use [approval gates](../ads/ad-approval-gates/SKILL.md) for account changes. See the [eval instructions](../_shared/evals/README.md) for pack checks and behavior evals.

## Install this pack

<details>

<summary><strong>Install the skills</strong></summary>

```sh
npx skills add https://github.com/VRIL-LABS/ad-skill-jam/tree/main/ad-skill-jam/google-ads --skill "*"
```

See [platform-pack scripts](../README.md#install-skills) for bulk selection and the shared skills.

</details>

[![Add Ad Skill Jam MCP to VS Code](https://img.shields.io/badge/VS_Code-Add_MCP-2564ad?style=flat)](https://vscode.dev/redirect?url=vscode%3Amcp%2Finstall%3F%257B%2522name%2522%253A%2522ad-skill-jam%2522%252C%2522type%2522%253A%2522stdio%2522%252C%2522command%2522%253A%2522node%2522%252C%2522args%2522%253A%255B%2522%2524%257BworkspaceFolder%257D%252Fad-skill-jam%252Fmcp%252Fgateway%252Fstdio.ts%2522%255D%257D) · [Cursor](../mcp/README.md#cursor) · [Kiro](../mcp/README.md#kiro) · [TRAE](../mcp/README.md#trae) · [Other clients](../mcp/README.md#other-clients) · [Desktop bundle](../mcp/README.md#install-a-desktop-bundle)

For the VS Code button, [prepare the checkout](../mcp/README.md#prepare-the-local-server), open its repository root, and install at workspace scope. Install the shared MCP once, then call `adjam_health_check`. Configure a `google` account alias to use `google_get_campaigns`.
