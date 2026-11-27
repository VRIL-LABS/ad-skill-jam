---
name: apple-ads-budget-bidding
description: Budget and bid review for Apple Ads. Use when asked to diagnose Apple Ads pacing or propose a CPT and budget change.
---

# Apple Ads budget and bid review

Verified on 2026-11-26 against [Apple campaign reporting](https://ads.apple.com/app-store/help/reporting/0023-view-and-analyze-campaign-results). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/apple-ads.md).

## Inputs

Collect budget type and ownership, max CPT or active bid strategy, impression share where available, tap and install counts, qualified downstream outcomes and cost targets.

## Workflow

1. Distinguish eligibility, search volume, auction exposure and budget constraints from weak post-tap conversion.
2. For manual bidding, derive a provisional CPT ceiling from target cost per outcome times mature outcomes per tap, using the same storefront and cohort. Emphasize uncertainty with sparse observations.
3. For automated bidding document the optimization target and evaluate its signal before proposing changes. Preview one bounded change and set a readback and evaluation date.

## Output

Return observed constraint, spend exposure in account currency, proposed change and evaluation plan.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Continue with [Install and downstream attribution](../apple-ads-tracking-attribution/SKILL.md) when that work is needed.
