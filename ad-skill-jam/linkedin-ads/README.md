# LinkedIn Ads skills

Follow a LinkedIn lead from the ad and form to the CRM. Audit delivery, review B2B targeting and spend, and judge lead quality with a privacy-safe cohort. Use Campaign Manager or the Marketing APIs to confirm which account owns the campaign group, creative, or form.

For account changes use [approval gates](../ads/ad-approval-gates/SKILL.md). See the [API ledger](../_shared/api-ledger/linkedin-ads.md), [source provenance](../_shared/provenance/SOURCES.md) and [eval instructions](../_shared/evals/README.md).

| Request | Skill |
| --- | --- |
| audit LinkedIn delivery and B2B lead quality | [Account and lead-quality audit](linkedin-ads-audit/SKILL.md) |
| design LinkedIn campaigns, targeting and creative dependencies | [Campaign group and campaign planning](linkedin-ads-campaign-structure/SKILL.md) |
| diagnose LinkedIn ABM, lead quality or budget allocation | [B2B targeting and spend diagnosis](linkedin-ads-optimization/SKILL.md) |
| review LinkedIn ad messaging, lead forms and CRM routing | [Ad and Lead Gen Form review](linkedin-ads-creative/SKILL.md) |
| verify LinkedIn Insight Tag, Conversions API or CRM outcomes | [Conversion and lead tracking](linkedin-ads-tracking-attribution/SKILL.md) |
| report LinkedIn campaign, creative, demographic or lead results | [Campaign and demographic reporting](linkedin-ads-reporting/SKILL.md) |

## Install this pack

<details>

<summary><strong>Install the skills</strong></summary>

```sh
npx skills add https://github.com/VRIL-LABS/ad-skill-jam/tree/main/ad-skill-jam/linkedin-ads --skill "*"
```

See [platform-pack scripts](../README.md#install-skills) for bulk selection and the shared skills.

</details>

[![Add Ad Skill Jam MCP to VS Code](https://img.shields.io/badge/VS_Code-Add_MCP-2564ad?style=flat)](https://vscode.dev/redirect?url=vscode%3Amcp%2Finstall%3F%257B%2522name%2522%253A%2522ad-skill-jam%2522%252C%2522type%2522%253A%2522stdio%2522%252C%2522command%2522%253A%2522node%2522%252C%2522args%2522%253A%255B%2522%2524%257BworkspaceFolder%257D%252Fad-skill-jam%252Fmcp%252Fgateway%252Fstdio.ts%2522%255D%257D) · [Cursor](../mcp/README.md#cursor) · [Kiro](../mcp/README.md#kiro) · [TRAE](../mcp/README.md#trae) · [Other clients](../mcp/README.md#other-clients) · [Desktop bundle](../mcp/README.md#install-a-desktop-bundle)

For the VS Code button, [prepare the checkout](../mcp/README.md#prepare-the-local-server), open its repository root, and install at workspace scope. Install the shared MCP once, then call `adjam_health_check`. Configure a `linkedin` account alias to use `linkedin_get_campaigns`.
