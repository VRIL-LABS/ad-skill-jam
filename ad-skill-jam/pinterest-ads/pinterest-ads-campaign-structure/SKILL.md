---
name: pinterest-ads-campaign-structure
description: Campaign and product group planning for Pinterest Ads. Use when asked to plan Pinterest campaign structure, product groups or Shopping launch.
---

# Pinterest Ads campaign and product group planning

Verified on 2026-11-26 against [Pinterest Ads overview](https://developers.pinterest.com/docs/work-with-ads/ads-overview/). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/pinterest-ads.md).

## Inputs

Collect objective, eligibility, placement, target audience, catalog feed and ad/landing pairs.

## Workflow

1. Match objective, optimization, format and destination. For catalog use eligible product groups with the right coverage and exclusions.
2. Confirm the budget owner and how ad groups partition targeting and inventory. Document catalog and destination dependencies.
3. Stage a reviewed paused plan and require separate approval to launch or change allocation.

## Output

Return a hierarchy with product groups, budget ownership, assets and launch checks.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Continue with [Promoted Pin and Shopping creative review](../pinterest-ads-creative/SKILL.md) when that work is needed.
