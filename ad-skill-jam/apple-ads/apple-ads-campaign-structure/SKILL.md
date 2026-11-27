---
name: apple-ads-campaign-structure
description: Campaign planning for Apple Ads. Use when asked to plan App Store placements and campaign structure.
---

# Apple Ads campaign planning

Verified on 2026-11-26 against [Apple Ads campaign setup](https://ads.apple.com/app-store/help/campaigns/0018-create-campaigns). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/apple-ads.md).

## Inputs

Collect advertised app, storefronts, unit economics, approved budget envelope, placements and available product pages.

## Workflow

1. Pick placement based on the acquisition hypothesis and eligibility. Build separate search results intent groups when there is enough traffic to measure them.
2. Set keyword match type and Search Match deliberately. Give discovery a budget boundary and define how proven queries move into exact targeting.
3. Record intended storefront, destination, budget and status in the draft. Verify these fields before an activation proposal.

## Output

Return a campaign and ad group map with match policy, page mapping, staged states and measurement plan.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Continue with [Search term and keyword review](../apple-ads-search-terms/SKILL.md) when that work is needed.
