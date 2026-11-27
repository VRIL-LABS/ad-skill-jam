---
name: meta-ads-budget-bidding
description: Review or propose Meta spend allocation, daily or lifetime budgets, Advantage+ campaign budget, cost or bid caps, and scaling or pacing changes.
---

# Meta Ads budget and bidding

**Verified on 2026-11-26 against** [Meta Campaign reference](https://developers.facebook.com/docs/marketing-api/reference/adcampaigngroup/) and [Meta budget and scheduling guidance](https://business-auth.facebook.com/business/m/small-business/am-advertiser-success-center/ad-creation/budget-and-schedule). See [source and decision notes](references/sources.md).

## Inputs

Collect the account currency, budget owner and daily or lifetime interval, schedule and approved cap, strategy and optimization goal, mature spend and result counts, business target and recent changes.

## Workflow

1. Read budget ownership and configured amounts before computing a change. Use Advantage+ campaign budget for shared allocation when that is the intended design. Use ad-set budget where separately controlled allocation is needed. Check any existing eligible ad-set spend limits.
2. Treat daily budget as an average. For a strict spend requirement, verify an eligible lifetime budget, supported limit, pacing window or other control that fits the authorized exposure. Read the account currency and connector's amount unit before translating API values.
3. Match the strategy to the goal. Highest volume seeks more results within budget. Cost per result goal addresses average result cost where supported. Bid cap limits the auction bid. ROAS goal fits eligible value optimization with reliable value evidence. Verify eligible goals and required fields and flag possible underspend with constraints.
4. Compare mature segments against the same economic target. Compute spend per matched action, and for qualified leads use the defined CRM cohort. Use approved spend and tolerable downside to set a change size and review point. Allow for learning and reporting lag. With missing target, unverified tracking, or immature data, hold scaling and specify the evidence needed.
5. Return current and proposed values, owner, currency, period, bid setting, absolute and relative change, total exposure or unknown exposure, assumptions, and review and rollback criteria.

## Approval and routing

Start with read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Use [reporting](../meta-ads-reporting/SKILL.md) for rate reconciliation and [experimentation](../meta-ads-experimentation/SKILL.md) for a bid or budget comparison.
