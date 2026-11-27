# Amazon Ads skills

Connect ad spend to the retail details that shape it. Audit product eligibility by marketplace, review Sponsored Products bids against margin, and turn search-term reports into keyword or ASIN decisions. Start with the right account or profile and ad product. For new compatible integrations, check the Unified Campaign Management contract.

For account changes use [approval gates](../ads/ad-approval-gates/SKILL.md). See the [API ledger](../_shared/api-ledger/amazon-ads.md), [source provenance](../_shared/provenance/SOURCES.md) and [eval instructions](../_shared/evals/README.md).

| Request | Skill |
| --- | --- |
| audit Amazon Sponsored Ads, product eligibility and spend | [Retail and delivery audit](amazon-ads-audit/SKILL.md) |
| design Sponsored Products targeting, budgets and portfolio layout | [Sponsored Ads campaign planning](amazon-ads-campaign-structure/SKILL.md) |
| promote Amazon search terms or review keyword and ASIN exclusions | [Query and product-target review](amazon-ads-search-terms/SKILL.md) |
| review Amazon Ads ACoS, placement modifiers or budget pacing | [Margin, pacing and bid review](amazon-ads-budget-bidding/SKILL.md) |
| report Amazon search terms, advertised products, placements or attributed sales | [Retail ad performance reporting](amazon-ads-reporting/SKILL.md) |
| troubleshoot Amazon Ads profile access or migrate Sponsored Products API calls | [API migration and access review](amazon-ads-access-troubleshooting/SKILL.md) |

## Install this pack

<details>

<summary><strong>Install the skills</strong></summary>

```sh
npx skills add https://github.com/VRIL-LABS/ad-skill-jam/tree/main/ad-skill-jam/amazon-ads --skill "*"
```

See [platform-pack scripts](../README.md#install-skills) for bulk selection and the shared skills.

</details>

[![Add Ad Skill Jam MCP to VS Code](https://img.shields.io/badge/VS_Code-Add_MCP-2564ad?style=flat)](https://vscode.dev/redirect?url=vscode%3Amcp%2Finstall%3F%257B%2522name%2522%253A%2522ad-skill-jam%2522%252C%2522type%2522%253A%2522stdio%2522%252C%2522command%2522%253A%2522node%2522%252C%2522args%2522%253A%255B%2522%2524%257BworkspaceFolder%257D%252Fad-skill-jam%252Fmcp%252Fgateway%252Fstdio.ts%2522%255D%257D) · [Cursor](../mcp/README.md#cursor) · [Kiro](../mcp/README.md#kiro) · [TRAE](../mcp/README.md#trae) · [Other clients](../mcp/README.md#other-clients) · [Desktop bundle](../mcp/README.md#install-a-desktop-bundle)

For the VS Code button, [prepare the checkout](../mcp/README.md#prepare-the-local-server), open its repository root, and install at workspace scope. Install the shared MCP once, then call `adjam_health_check`. Configure a `amazon` account alias to use `amazon_get_campaigns`.
