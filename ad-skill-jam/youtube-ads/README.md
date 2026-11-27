# YouTube Ads skills

Plan video ads for in-stream, in-feed, or Shorts placements, then review reach, views, and conversions in the context of paid delivery. Use the [Google Ads pack](../google-ads/README.md) for shared account setup. Keep YouTube Analytics channel totals separate from paid campaign reports.

For account changes use [approval gates](../ads/ad-approval-gates/SKILL.md). See the [API ledger](../_shared/api-ledger/youtube-ads.md), [source provenance](../_shared/provenance/SOURCES.md) and [eval instructions](../_shared/evals/README.md).

| Request | Skill |
| --- | --- |
| audit paid YouTube inventory, performance and suitability | [Inventory and delivery audit](youtube-ads-audit/SKILL.md) |
| choose Video reach, Video views or YouTube-eligible Demand Gen structure | [Video campaign planning](youtube-ads-campaign-structure/SKILL.md) |
| draft or review YouTube in-stream, in-feed or Shorts creative | [Video asset review](youtube-ads-creative/SKILL.md) |
| report YouTube reach, TrueView views or Demand Gen surface results | [Paid video reporting](youtube-ads-reporting/SKILL.md) |
| interpret YouTube engaged-view, view-through and click-through conversions | [Video conversion and lift review](youtube-ads-tracking-attribution/SKILL.md) |

## Install this pack

<details>

<summary><strong>Install the skills</strong></summary>

```sh
npx skills add https://github.com/VRIL-LABS/ad-skill-jam/tree/main/ad-skill-jam/youtube-ads --skill "*"
```

See [platform-pack scripts](../README.md#install-skills) for bulk selection and the shared skills.

</details>

[![Add Ad Skill Jam MCP to VS Code](https://img.shields.io/badge/VS_Code-Add_MCP-2564ad?style=flat)](https://vscode.dev/redirect?url=vscode%3Amcp%2Finstall%3F%257B%2522name%2522%253A%2522ad-skill-jam%2522%252C%2522type%2522%253A%2522stdio%2522%252C%2522command%2522%253A%2522node%2522%252C%2522args%2522%253A%255B%2522%2524%257BworkspaceFolder%257D%252Fad-skill-jam%252Fmcp%252Fgateway%252Fstdio.ts%2522%255D%257D) · [Cursor](../mcp/README.md#cursor) · [Kiro](../mcp/README.md#kiro) · [TRAE](../mcp/README.md#trae) · [Other clients](../mcp/README.md#other-clients) · [Desktop bundle](../mcp/README.md#install-a-desktop-bundle)

For the VS Code button, [prepare the checkout](../mcp/README.md#prepare-the-local-server), open its repository root, and install at workspace scope. Install the shared MCP once, then call `adjam_health_check`. Configure a `youtube` account alias to use `youtube_get_campaigns`.
