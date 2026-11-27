---
name: meta-ads-audit
description: Audit a Facebook or Instagram ad account, including a cold-start account. Use for an account health review, prioritized findings, or an evidence-backed optimization backlog.
---

# Meta Ads audit

**Verified on 2026-11-26 against** [Meta Performance 5](https://en-gb.facebook.com/business/ads/performance-marketing) and [Meta Ads Insights reference](https://developers.facebook.com/docs/graph-api/reference/adaccount/insights). See [source and decision notes](references/sources.md).

## Inputs

Collect the account alias, time zone and currency, business outcome, comparable reporting windows, active entity tree, Ads Insights data, Events Manager evidence, and recent changes. Request redacted exports when reads are unavailable.

## Workflow

1. Use the [shared audit rubric](../../ads/ad-audit/SKILL.md). Establish the current account and delivery scope before grading. Keep the review provisional when critical evidence is absent.
2. Check account status and restrictions, billing and schedule evidence, configured and effective status, objective and conversion-location alignment, budget owner, and bid settings. Check Special Ad Category, eligible audience controls and placements against the campaign geography.
3. Check event receipt, event source, browser/server deduplication where applicable, optimization event, and currency/value for supported purchase reporting. Match Ads Insights definitions and attribution before judging CPA or ROAS. Treat missing conversion history on a cold start as unknown where history is required.
4. Review placement previews, destination and offer continuity. Compare recent mature performance with an equivalent baseline when available. Use account evidence to qualify learning, fatigue and efficiency observations. Keep Meta's Opportunity Score separate.
5. Return check, state, citation or account evidence, severity, and next step. Include counts, observed pass rate and coverage. Prioritize verified delivery blockers, spend exposure and broken measurement before efficiency suggestions.

## Approval and routing

Start with read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Send missing or inconsistent Insights to [reporting](../meta-ads-reporting/SKILL.md), measurement gaps to [tracking](../meta-ads-tracking-attribution/SKILL.md), and blocked delivery to [troubleshooting](../meta-ads-troubleshooting/SKILL.md).
