# Microsoft Advertising skills

Review what came across from Google Ads before an import starts spending. The pack also helps you audit Microsoft search, Shopping, and audience campaigns, find search queries worth excluding, and check whether UET and offline conversions capture the outcomes you care about. Confirm customer and account ownership before approving delivery.

For account changes use [approval gates](../ads/ad-approval-gates/SKILL.md). See the [API ledger](../_shared/api-ledger/microsoft-ads.md), [source provenance](../_shared/provenance/SOURCES.md) and [eval instructions](../_shared/evals/README.md).

| Request | Skill |
| --- | --- |
| audit Microsoft Advertising delivery or review imported account settings | [Account and import audit](microsoft-ads-audit/SKILL.md) |
| plan Microsoft search, Shopping or Google Ads imports | [Campaign structure and Google import planning](microsoft-ads-campaign-structure/SKILL.md) |
| review Microsoft search queries, targeting or negative scope | [Search query review](microsoft-ads-search-terms/SKILL.md) |
| verify Microsoft UET goals, click IDs or offline conversions | [UET and offline conversion diagnostics](microsoft-ads-tracking-attribution/SKILL.md) |
| build Microsoft campaign, network or search query reports | [Microsoft Advertising performance reporting](microsoft-ads-reporting/SKILL.md) |

## Install this pack

<details>

<summary><strong>Install the skills</strong></summary>

```sh
npx skills add https://github.com/VRIL-LABS/ad-skill-jam/tree/main/ad-skill-jam/microsoft-ads --skill "*"
```

See [platform-pack scripts](../README.md#install-skills) for bulk selection and the shared skills.

</details>

[![Add Ad Skill Jam MCP to VS Code](https://img.shields.io/badge/VS_Code-Add_MCP-2564ad?style=flat)](https://vscode.dev/redirect?url=vscode%3Amcp%2Finstall%3F%257B%2522name%2522%253A%2522ad-skill-jam%2522%252C%2522type%2522%253A%2522stdio%2522%252C%2522command%2522%253A%2522node%2522%252C%2522args%2522%253A%255B%2522%2524%257BworkspaceFolder%257D%252Fad-skill-jam%252Fmcp%252Fgateway%252Fstdio.ts%2522%255D%257D) · [Cursor](../mcp/README.md#cursor) · [Kiro](../mcp/README.md#kiro) · [TRAE](../mcp/README.md#trae) · [Other clients](../mcp/README.md#other-clients) · [Desktop bundle](../mcp/README.md#install-a-desktop-bundle)

For the VS Code button, [prepare the checkout](../mcp/README.md#prepare-the-local-server), open its repository root, and install at workspace scope. Install the shared MCP once, then call `adjam_health_check`. Configure a `microsoft` account alias to use `microsoft_get_campaigns`.
