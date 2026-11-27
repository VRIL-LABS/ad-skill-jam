# TikTok Ads skills

Plan a TikTok launch, then diagnose what happens once it starts spending. Compare manual and Smart+ setups, check Spark Ads permissions, and investigate underspend, creative fatigue, or event deduplication. Start by confirming the advertiser, objective, and optimization event.

For account changes use [approval gates](../ads/ad-approval-gates/SKILL.md). See the [API ledger](../_shared/api-ledger/tiktok-ads.md), [source provenance](../_shared/provenance/SOURCES.md) and [eval instructions](../_shared/evals/README.md).

| Request | Skill |
| --- | --- |
| audit TikTok delivery, conversion health or account structure | [Delivery and account audit](tiktok-ads-audit/SKILL.md) |
| design TikTok campaign hierarchy or Smart+ launch setup | [Manual and Smart+ campaign planning](tiktok-ads-campaign-structure/SKILL.md) |
| review Spark post permission, TikTok creative or fatigue | [Spark Ads and creative testing](tiktok-ads-creative/SKILL.md) |
| diagnose TikTok underspend, learning resets or rising acquisition cost | [Pacing and bid diagnosis](tiktok-ads-optimization/SKILL.md) |
| verify TikTok Pixel and Events API deduplication or conversion mapping | [Pixel and Events API diagnostics](tiktok-ads-tracking-attribution/SKILL.md) |
| build TikTok advertiser, campaign, ad group or ad reports | [Marketing API reporting](tiktok-ads-reporting/SKILL.md) |

## Install this pack

<details>

<summary><strong>Install the skills</strong></summary>

```sh
npx skills add https://github.com/VRIL-LABS/ad-skill-jam/tree/main/ad-skill-jam/tiktok-ads --skill "*"
```

See [platform-pack scripts](../README.md#install-skills) for bulk selection and the shared skills.

</details>

[![Add Ad Skill Jam MCP to VS Code](https://img.shields.io/badge/VS_Code-Add_MCP-2564ad?style=flat)](https://vscode.dev/redirect?url=vscode%3Amcp%2Finstall%3F%257B%2522name%2522%253A%2522ad-skill-jam%2522%252C%2522type%2522%253A%2522stdio%2522%252C%2522command%2522%253A%2522node%2522%252C%2522args%2522%253A%255B%2522%2524%257BworkspaceFolder%257D%252Fad-skill-jam%252Fmcp%252Fgateway%252Fstdio.ts%2522%255D%257D) · [Cursor](../mcp/README.md#cursor) · [Kiro](../mcp/README.md#kiro) · [TRAE](../mcp/README.md#trae) · [Other clients](../mcp/README.md#other-clients) · [Desktop bundle](../mcp/README.md#install-a-desktop-bundle)

For the VS Code button, [prepare the checkout](../mcp/README.md#prepare-the-local-server), open its repository root, and install at workspace scope. Install the shared MCP once, then call `adjam_health_check`. Configure a `tiktok` account alias to use `tiktok_get_campaigns`.
