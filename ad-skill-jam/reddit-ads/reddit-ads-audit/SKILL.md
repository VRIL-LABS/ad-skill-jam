---
name: reddit-ads-audit
description: Audit a Reddit Ads account. Use for account health, measurement readiness, campaign and targeting review, or a prioritized backlog based on Ads Manager exports or authorized reads.
---

# Reddit Ads audit

**Verified on 2026-11-26 against** [Get A Report](https://ads-api.reddit.com/docs/v3/api/get-a-report) and [Reddit Ads API changelog](https://ads-api.reddit.com/docs/v3/history). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/reddit-ads.md).

## Inputs

Collect the account alias, objective, maturity, currency, time zone, comparable dates, campaign tree, audience and placement settings, event diagnostics, change history and policy or billing evidence.

## Workflow

1. Apply the [shared audit rubric](../../ads/ad-audit/SKILL.md). Determine applicability before grading. Mark inaccessible accounts or missing exports as evidence gaps.
2. Check configured and effective delivery across campaign, ad group and ad. Check objective and optimization goal, funding, schedule, budget ownership, creative eligibility and current campaign type. Review legacy objective labels and onsite lead forms against the API ledger.
3. Check community, keyword and first-party audience rationale, automated targeting and exclusions. Verify Feed and Conversation placement settings independently. Review creative previews, comment handling, landing-page continuity and relevant inventory tiers.
4. Verify Pixel or CAPI events and intended optimization action. Check deduplication when both sources send the same event. For catalog campaigns, check product set mapping and alignment between the destination, available items, price and reported outcomes.
5. Return per-check status, reason, evidence, severity and next step. Include observed pass rate and coverage with counts. Flag cold-start results as provisional where outcomes are immature. Prioritize delivery, measurement and spend exposure before efficiency suggestions.

## Approval and routing

Start with authorized read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Route API and delivery issues to [troubleshooting](../reddit-ads-troubleshooting/SKILL.md), measurement to [tracking](../reddit-ads-tracking-attribution/SKILL.md), and performance decisions to [optimization](../reddit-ads-optimization/SKILL.md).
