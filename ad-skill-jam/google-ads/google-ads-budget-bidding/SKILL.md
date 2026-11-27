---
name: google-ads-budget-bidding
description: Review Google Ads daily or total budgets, shared budget exposure, Smart Bidding, Target CPA or ROAS, pacing and forecast scenarios.
---

# Google Ads budget and bidding

**Verified on 2026-11-26 against** [Google Ads spending limits](https://support.google.com/google-ads/answer/10486637) and [Evaluate automated bidding](https://support.google.com/google-ads/answer/10167267). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/google-ads.md).

## Inputs

Collect spend and target in account currency, pacing dates, budget ownership, strategy, conversion goals, conversion cycles, proposed exposure and approved constraints.

## Workflow

1. Read campaign budget type and ownership. Inspect linked campaigns for each shared budget. Check whether the campaign uses an average daily budget, eligible total budget or another delivery mode.
2. For most average-daily campaigns, Google documents a daily spending limit of 2 times the budget and a monthly limit of 30.4 times. Check exceptions and in-month edits before stating exposure. Verify an eligible control for any strict calendar-day requirement.
3. Match bidding to measurable volume or value and to channel eligibility. For target CPA or target ROAS, check the actual primary goals, selected values, observed targets and lag. A target sets optimization direction. Budget, constraints and auction demand influence what is achievable.
4. Model a bounded proposal from the advertiser's target and measured results. Show assumptions and a range where evidence is sparse. Read the bid strategy and recent changes, then compare mature results across full conversion cycles.
5. Return amount, currency, period, owner, affected campaigns, before/after values and exposure, evidence, review interval and trigger for a separately approved reversal.

## Approval and routing

Start with authorized read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Use [reporting](../google-ads-reporting/SKILL.md) for metrics and [experimentation](../google-ads-experimentation/SKILL.md) for a controlled strategy change.
