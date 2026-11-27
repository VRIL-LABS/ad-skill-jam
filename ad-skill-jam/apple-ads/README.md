# Apple Ads skills

Follow App Store ad performance from a search term to an install or an in-app outcome. Review bids and custom product pages by storefront and placement, then reconcile tap-attributed installs, downstream events, and last-touch mobile measurement partner counts as separate measures. Confirm the app and account scope first.

For account changes use [approval gates](../ads/ad-approval-gates/SKILL.md). See the [API ledger](../_shared/api-ledger/apple-ads.md), [source provenance](../_shared/provenance/SOURCES.md) and [eval instructions](../_shared/evals/README.md).

| Request | Skill |
| --- | --- |
| audit Apple Ads delivery and measurement | [Account audit](apple-ads-audit/SKILL.md) |
| plan App Store placements and campaign structure | [Campaign planning](apple-ads-campaign-structure/SKILL.md) |
| promote valuable Apple search terms or review negative keywords | [Search term and keyword review](apple-ads-search-terms/SKILL.md) |
| diagnose Apple Ads pacing or propose a CPT and budget change | [Budget and bid review](apple-ads-budget-bidding/SKILL.md) |
| match custom product pages to Apple Ads query intent or placement | [Product page and ad review](apple-ads-creative/SKILL.md) |
| reconcile Apple Ads installs with AdServices or app events | [Install and downstream attribution](apple-ads-tracking-attribution/SKILL.md) |
| report Apple Ads campaign, keyword or search term results | [Performance reporting](apple-ads-reporting/SKILL.md) |

## Install this pack

<details>

<summary><strong>Install the skills</strong></summary>

```sh
npx skills add https://github.com/VRIL-LABS/ad-skill-jam/tree/main/ad-skill-jam/apple-ads --skill "*"
```

See [platform-pack scripts](../README.md#install-skills) for bulk selection and the shared skills.

</details>

[![Add Ad Skill Jam MCP to VS Code](https://img.shields.io/badge/VS_Code-Add_MCP-2564ad?style=flat)](https://vscode.dev/redirect?url=vscode%3Amcp%2Finstall%3F%257B%2522name%2522%253A%2522ad-skill-jam%2522%252C%2522type%2522%253A%2522stdio%2522%252C%2522command%2522%253A%2522node%2522%252C%2522args%2522%253A%255B%2522%2524%257BworkspaceFolder%257D%252Fad-skill-jam%252Fmcp%252Fgateway%252Fstdio.ts%2522%255D%257D) · [Cursor](../mcp/README.md#cursor) · [Kiro](../mcp/README.md#kiro) · [TRAE](../mcp/README.md#trae) · [Other clients](../mcp/README.md#other-clients) · [Desktop bundle](../mcp/README.md#install-a-desktop-bundle)

For the VS Code button, [prepare the checkout](../mcp/README.md#prepare-the-local-server), open its repository root, and install at workspace scope. Install the shared MCP once, then call `adjam_health_check`. Configure a `apple` account alias to use `apple_get_campaigns`.
