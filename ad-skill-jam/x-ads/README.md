# X Ads skills

See which line items and promoted posts account for your X Ads results. Audit delivery, review post copy and destinations, or investigate website conversion tracking before changing the campaign. For API work, confirm that the app has Ads API access in addition to any access it has to the posts API.

For account changes use [approval gates](../ads/ad-approval-gates/SKILL.md). See the [API ledger](../_shared/api-ledger/x-ads.md), [source provenance](../_shared/provenance/SOURCES.md) and [eval instructions](../_shared/evals/README.md).

| Request | Skill |
| --- | --- |
| audit X Ads delivery, spend and evidence coverage | [Account audit](x-ads-audit/SKILL.md) |
| plan X Ads campaigns, line items and promoted posts | [Campaign and line-item planning](x-ads-campaign-structure/SKILL.md) |
| review X ad copy, media, cards and destinations | [Promoted post and creative review](x-ads-creative/SKILL.md) |
| verify X Pixel or Conversions API events and attribution | [Website conversion diagnosis](x-ads-tracking-attribution/SKILL.md) |
| report X campaign, line-item or promoted-post performance | [Paid performance reporting](x-ads-reporting/SKILL.md) |

## Install this pack

<details>

<summary><strong>Install the skills</strong></summary>

```sh
npx skills add https://github.com/VRIL-LABS/ad-skill-jam/tree/main/ad-skill-jam/x-ads --skill "*"
```

See [platform-pack scripts](../README.md#install-skills) for bulk selection and the shared skills.

</details>

[![Add Ad Skill Jam MCP to VS Code](https://img.shields.io/badge/VS_Code-Add_MCP-2564ad?style=flat)](https://vscode.dev/redirect?url=vscode%3Amcp%2Finstall%3F%257B%2522name%2522%253A%2522ad-skill-jam%2522%252C%2522type%2522%253A%2522stdio%2522%252C%2522command%2522%253A%2522node%2522%252C%2522args%2522%253A%255B%2522%2524%257BworkspaceFolder%257D%252Fad-skill-jam%252Fmcp%252Fgateway%252Fstdio.ts%2522%255D%257D) · [Cursor](../mcp/README.md#cursor) · [Kiro](../mcp/README.md#kiro) · [TRAE](../mcp/README.md#trae) · [Other clients](../mcp/README.md#other-clients) · [Desktop bundle](../mcp/README.md#install-a-desktop-bundle)

For the VS Code button, [prepare the checkout](../mcp/README.md#prepare-the-local-server), open its repository root, and install at workspace scope. Install the shared MCP once, then call `adjam_health_check`. Configure a `x` account alias to use `x_get_campaigns`.
