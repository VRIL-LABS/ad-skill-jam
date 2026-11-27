# Snapchat Ads skills

Trace a Snapchat delivery problem from campaign to ad squad to ad. Review mobile creative in context, check pacing at the level that controls it, and reconcile Pixel and Conversions API events before proposing a budget or creative change. Use the reporting skill to keep attribution settings visible alongside the results.

For account changes use [approval gates](../ads/ad-approval-gates/SKILL.md). See the [API ledger](../_shared/api-ledger/snapchat-ads.md), [source provenance](../_shared/provenance/SOURCES.md) and [eval instructions](../_shared/evals/README.md).

| Request | Skill |
| --- | --- |
| audit Snapchat delivery, budget and conversion evidence | [Delivery audit](snapchat-ads-audit/SKILL.md) |
| plan Snapchat objectives, squads, placements and pacing | [Campaign and ad squad planning](snapchat-ads-campaign-structure/SKILL.md) |
| draft or diagnose Snapchat mobile creative and placement fit | [Snap creative and placement review](snapchat-ads-creative/SKILL.md) |
| verify Snapchat conversion event receipt, deduplication or attribution | [Pixel and Conversions API diagnostics](snapchat-ads-tracking-attribution/SKILL.md) |
| report Snapchat campaign, squad or ad outcomes with attribution context | [Campaign and squad performance reporting](snapchat-ads-reporting/SKILL.md) |

## Install this pack

<details>

<summary><strong>Install the skills</strong></summary>

```sh
npx skills add https://github.com/VRIL-LABS/ad-skill-jam/tree/main/ad-skill-jam/snapchat-ads --skill "*"
```

See [platform-pack scripts](../README.md#install-skills) for bulk selection and the shared skills.

</details>

[![Add Ad Skill Jam MCP to VS Code](https://img.shields.io/badge/VS_Code-Add_MCP-2564ad?style=flat)](https://vscode.dev/redirect?url=vscode%3Amcp%2Finstall%3F%257B%2522name%2522%253A%2522ad-skill-jam%2522%252C%2522type%2522%253A%2522stdio%2522%252C%2522command%2522%253A%2522node%2522%252C%2522args%2522%253A%255B%2522%2524%257BworkspaceFolder%257D%252Fad-skill-jam%252Fmcp%252Fgateway%252Fstdio.ts%2522%255D%257D) · [Cursor](../mcp/README.md#cursor) · [Kiro](../mcp/README.md#kiro) · [TRAE](../mcp/README.md#trae) · [Other clients](../mcp/README.md#other-clients) · [Desktop bundle](../mcp/README.md#install-a-desktop-bundle)

For the VS Code button, [prepare the checkout](../mcp/README.md#prepare-the-local-server), open its repository root, and install at workspace scope. Install the shared MCP once, then call `adjam_health_check`. Configure a `snapchat` account alias to use `snapchat_get_campaigns`.
