# Pinterest Ads skills

Plan a Pinterest campaign around the Pins people will see and the products they can buy. Check crops, destinations, and catalog eligibility, then use the reporting and tracking skills to review attribution windows and reconcile browser and server events. Confirm the business profile and available formats before planning.

For account changes use [approval gates](../ads/ad-approval-gates/SKILL.md). See the [API ledger](../_shared/api-ledger/pinterest-ads.md), [source provenance](../_shared/provenance/SOURCES.md) and [eval instructions](../_shared/evals/README.md).

| Request | Skill |
| --- | --- |
| audit Pinterest campaign delivery, catalog eligibility or measurement | [Account and catalog audit](pinterest-ads-audit/SKILL.md) |
| plan Pinterest campaign structure, product groups or Shopping launch | [Campaign and product group planning](pinterest-ads-campaign-structure/SKILL.md) |
| review Pinterest Pin crops, destinations and promoted creative | [Promoted Pin and Shopping creative review](pinterest-ads-creative/SKILL.md) |
| reconcile Pinterest browser and server events | [Pinterest Tag and Conversions API diagnostics](pinterest-ads-tracking-attribution/SKILL.md) |
| report Pinterest campaign or product performance by attribution window | [Pinterest campaign reporting](pinterest-ads-reporting/SKILL.md) |

## Install this pack

<details>

<summary><strong>Install the skills</strong></summary>

```sh
npx skills add https://github.com/VRIL-LABS/ad-skill-jam/tree/main/ad-skill-jam/pinterest-ads --skill "*"
```

See [platform-pack scripts](../README.md#install-skills) for bulk selection and the shared skills.

</details>

[![Add Ad Skill Jam MCP to VS Code](https://img.shields.io/badge/VS_Code-Add_MCP-2564ad?style=flat)](https://vscode.dev/redirect?url=vscode%3Amcp%2Finstall%3F%257B%2522name%2522%253A%2522ad-skill-jam%2522%252C%2522type%2522%253A%2522stdio%2522%252C%2522command%2522%253A%2522node%2522%252C%2522args%2522%253A%255B%2522%2524%257BworkspaceFolder%257D%252Fad-skill-jam%252Fmcp%252Fgateway%252Fstdio.ts%2522%255D%257D) · [Cursor](../mcp/README.md#cursor) · [Kiro](../mcp/README.md#kiro) · [TRAE](../mcp/README.md#trae) · [Other clients](../mcp/README.md#other-clients) · [Desktop bundle](../mcp/README.md#install-a-desktop-bundle)

For the VS Code button, [prepare the checkout](../mcp/README.md#prepare-the-local-server), open its repository root, and install at workspace scope. Install the shared MCP once, then call `adjam_health_check`. Configure a `pinterest` account alias to use `pinterest_get_campaigns`.
