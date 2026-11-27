---
name: reddit-ads-campaign-structure
description: Design or stage Reddit campaigns, ad groups, and ads. Use for Standard versus Reddit Max, objective choice, community and keyword targeting, placements, catalog sales or an offsite lead launch plan.
---

# Reddit Ads campaign structure

**Verified on 2026-11-26 against** [Standard campaign setup](https://ads-api.reddit.com/docs/v3/guides/programs/campaign/campaign-setup) and [Campaign objective migration](https://ads-api.reddit.com/docs/v3/guides/programs/campaign/campaign-objective-migration). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/reddit-ads.md).

## Inputs

Collect the business outcome and event, destination and creative assets, brand profile and funding eligibility, markets, audience rationale and exclusions, placement constraints, budget and schedule.

## Workflow

1. Identify current objective and eligible optimization and billable action. Preserve raw legacy objective values in reads and use the official migration table for new proposals. For Lead Generation, use a tested offsite form and compatible event path. Check the current catalog Sales requirements when products are in scope.
2. Choose Standard when the required manual configuration or objective calls for it. Check Max eligibility from the current create contract and changelog. Max uses a distinct campaign, automated ad groups and matching creative. Draft a new Max tree when migrating from Standard.
3. Use ad groups to separate material targeting, geography, placement, budget or measurement decisions. Community targeting identifies people who engage with selected subreddits. Verify where the ad may serve using placement and brand-safety controls. Record included and excluded audiences, automated expansion and audience rationale.
4. Resolve campaign budget optimization (CBO) versus ad-group budgets, campaign/ad-group schedules and bid settings. Before API staging, check CBO Pixel requirements and, for catalog Sales, verify each ad group's product set. Confirm identity, asset and landing-page access.
5. Return a campaign → ad group → ad plan with budget owner, currency, event, placements, targeting and unknowns. For approved staging, explicitly set each supported delivery entity to `configured_status: PAUSED`. Read back status and parent links. Prepare activation separately.

## Approval and routing

Start with authorized read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Send spend design to [budget and bidding](../reddit-ads-budget-bidding/SKILL.md), signal readiness to [tracking](../reddit-ads-tracking-attribution/SKILL.md), and creative to [creative](../reddit-ads-creative/SKILL.md).
