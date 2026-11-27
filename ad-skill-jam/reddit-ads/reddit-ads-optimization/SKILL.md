---
name: reddit-ads-optimization
description: Diagnose rising Reddit Ads CPA, weak click-to-visit or lead quality, fatigue, or unstable delivery. Use for comparable-window analysis and an evidence-based improvement plan.
---

# Reddit Ads optimization

**Verified on 2026-11-26 against** [About the Learning Phase](https://business.reddithelp.com/articles/Knowledge/learning-phase) and [Reporting discrepancies](https://business.reddithelp.com/s/article/Third-Party-Reporting-Doesnt-Match-Reddit-Ads-Manager). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/reddit-ads.md).

## Inputs

Collect mature date windows, campaign and ad-group learning state, placement and creative breakdowns, changes, optimization-event volume, business target, and landing-page or CRM outcomes.

## Workflow

1. Validate the funnel and report definitions first. Check effective status, spend, measurement health and comparable conversion lag. Use the configured attribution type, event and grain.
2. Break down the movement through delivery and auction cost, outbound traffic, landing sessions and business outcome. Investigate destination load and tagging when Reddit clicks diverge from site visits. Compare Feed and Conversation where metrics are available. Segment by community or placement only where the report directly supports that cut.
3. Read learning at the campaign level for CBO and at ad-group level otherwise. Reddit describes about 20 optimization events as typical for a new ad group. Treat the observed state as controlling and document potentially material edits before recommending another.
4. Check creative fatigue against comparable delivery. Falling response and rising exposure on the same ad are stronger evidence after checking placement mix, auction cost, offer and tracking. Treat low exposure, incomplete measurement and immature leads as reasons to collect more evidence before scaling.
5. Return change, volume, competing explanations, confidence, one proposed action and a review window. Judge lead-gen on qualified CRM outcomes alongside form conversion cost.

## Approval and routing

Start with authorized read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Send spend changes to [budget and bidding](../reddit-ads-budget-bidding/SKILL.md), event anomalies to [tracking](../reddit-ads-tracking-attribution/SKILL.md), and causal comparisons to [experimentation](../reddit-ads-experimentation/SKILL.md).
