# Meta Ads skills

Find what changed in your Facebook or Instagram campaigns before deciding where to act. Audit delivery, review creative fatigue, and reconcile Ads Insights with Pixel, Conversions API, or CRM data. Start with an authorized read-only connector or an export from Ads Manager or Events Manager. [API ledger](../_shared/api-ledger/meta-ads.md) · [Source provenance](../_shared/provenance/SOURCES.md)

| Request | Skill |
| --- | --- |
| Review account health and prioritize findings | [Audit](meta-ads-audit/SKILL.md) |
| Design a campaign, ad sets, and ads | [Campaign structure](meta-ads-campaign-structure/SKILL.md) |
| Write, review, or preview Facebook and Instagram ads | [Creative](meta-ads-creative/SKILL.md) |
| Diagnose performance and fatigue | [Optimization](meta-ads-optimization/SKILL.md) |
| Set bidding or propose a spend change | [Budget and bidding](meta-ads-budget-bidding/SKILL.md) |
| Debug Meta Pixel, Conversions API, or CRM event quality | [Tracking and attribution](meta-ads-tracking-attribution/SKILL.md) |
| Pull or reconcile Ads Insights | [Reporting](meta-ads-reporting/SKILL.md) |
| Review an ad, destination, or Special Ad Category | [Compliance and policy](meta-ads-compliance-policy/SKILL.md) |
| Design a Meta A/B test | [Experimentation](meta-ads-experimentation/SKILL.md) |
| Review competitors in Meta Ad Library | [Competitive research](meta-ads-competitive-research/SKILL.md) |
| Diagnose delivery, account, or API errors | [Troubleshooting](meta-ads-troubleshooting/SKILL.md) |

Use [approval gates](../ads/ad-approval-gates/SKILL.md) to prepare and review changes. The skills work with redacted exports when a live connector is unavailable. Each skill's `evals/evals.json` contains prompts and grading criteria. See the [eval instructions](../_shared/evals/README.md).

## Install this pack

<details>

<summary><strong>Install the skills</strong></summary>

```sh
npx skills add https://github.com/VRIL-LABS/ad-skill-jam/tree/main/ad-skill-jam/meta-ads --skill "*"
```

See [platform-pack scripts](../README.md#install-skills) for bulk selection and the shared skills.

</details>

[![Add Ad Skill Jam MCP to VS Code](https://img.shields.io/badge/VS_Code-Add_MCP-2564ad?style=flat)](https://vscode.dev/redirect?url=vscode%3Amcp%2Finstall%3F%257B%2522name%2522%253A%2522ad-skill-jam%2522%252C%2522type%2522%253A%2522stdio%2522%252C%2522command%2522%253A%2522node%2522%252C%2522args%2522%253A%255B%2522%2524%257BworkspaceFolder%257D%252Fad-skill-jam%252Fmcp%252Fgateway%252Fstdio.ts%2522%255D%257D) · [Cursor](../mcp/README.md#cursor) · [Kiro](../mcp/README.md#kiro) · [TRAE](../mcp/README.md#trae) · [Other clients](../mcp/README.md#other-clients) · [Desktop bundle](../mcp/README.md#install-a-desktop-bundle)

For the VS Code button, [prepare the checkout](../mcp/README.md#prepare-the-local-server), open its repository root, and install at workspace scope. Install the shared MCP once, then call `adjam_health_check`. Configure a `meta` account alias to use `meta_get_campaigns`.
