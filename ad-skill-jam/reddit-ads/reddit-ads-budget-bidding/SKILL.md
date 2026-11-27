---
name: reddit-ads-budget-bidding
description: Set or review Reddit Ads budgets, pacing, bids, campaign spend caps, Lowest Cost, Target Cost, Cost Cap, or CBO. Use when evaluating the exposure of a spend change.
---

# Reddit Ads budget and bidding

**Verified on 2026-11-26 against** [Budgets and Bidding](https://business.reddithelp.com/articles/Knowledge/How-much-do-Reddit-Ads-cost) and [Create Campaign](https://ads-api.reddit.com/docs/v3/api/create-campaign). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/reddit-ads.md).

## Inputs

Collect currency, dates and schedule, current goal and bid fields, CBO status and campaign cap, optimization event, account eligibility, mature outcome volume, target and permitted spend exposure.

## Workflow

1. Identify which entity owns budget and bid strategy. CBO allocates a campaign budget across ad groups. When CBO is off, verify each ad-group budget and calculate combined exposure. Check any separate campaign lifetime spend cap and current spending against it.
2. Verify the amount unit and interval before proposing values. In raw v3 setup, supported budget and monetary bid values use microcurrency. Treat `goal_value` as the configured budget amount for budget goal types and `bid_value` as the strategy's bid or target where required. Check connector normalization to avoid converting twice.
3. Use eligible Lowest Cost for volume when it fits the brief, and check Target Cost or Cost Cap eligibility where controlling average action cost matters. Quote eligibility and constraints for the actual objective and event. Reddit's ad-group guidance allows budget overspend of up to 20%, so verify a separate eligible control for a strict limit.
4. Compare a mature result against the same CPA or ROAS target. Factor in learning, current spend, reporting delay, and authorized downside. An uncertain result warrants monitoring or a bounded test proposal.
5. Report budget owner, currency and interval, before/after values, absolute and relative change, spending conditions, eligibility, review point and triggers for a separately approved reversal.

## Approval and routing

Start with authorized read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Use [reporting](../reddit-ads-reporting/SKILL.md) for consistent cost units and [experimentation](../reddit-ads-experimentation/SKILL.md) before changing an active test.
