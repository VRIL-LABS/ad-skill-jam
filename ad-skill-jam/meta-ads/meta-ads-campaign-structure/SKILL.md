---
name: meta-ads-campaign-structure
description: Design or stage Meta campaigns, ad sets, and ads. Use for objective selection, Advantage+ versus manual configuration, placements, audience controls, conversion location, or a paused launch plan.
---

# Meta Ads campaign structure

**Verified on 2026-11-26 against** [Meta Campaign reference](https://developers.facebook.com/docs/marketing-api/reference/adcampaigngroup/) and [Meta Marketing API v26.0 changelog](https://developers.facebook.com/documentation/development/graph-api/changelog/version26.0). See [source and decision notes](references/sources.md).

## Inputs

Collect the business outcome and KPI, offer and destination, geo and category, identity and approved assets, available events and eligible controls, schedule, account currency and approved budget constraints.

## Workflow

1. Select the campaign's outcome objective. Confirm the ad set's conversion location, performance or optimization goal, billing event, and any required promoted object together. For instant-form lead generation, confirm the Page and form. For website sales, confirm the purchase event and corresponding data source.
2. Set budget ownership, schedule and bidding. Choose distinct ad sets where geography, required controls, destination, optimization or test purpose demands it. Preserve a simpler structure when the same ad sets would compete for a limited signal pool.
3. Inspect Advantage+ audience, placements and budget independently. Record audience suggestions separately from hard controls. Check the actual special-category restrictions and verify that legally or contractually required constraints are represented as enforceable controls.
4. Check the [API ledger](../../_shared/api-ledger/meta-ads.md) for removed placements and version-specific rules. Confirm access to the Page, applicable Instagram identity, assets, destination, form/catalog where used, and event source. Preview the ads in each planned format.
5. Return a campaign → ad set → ad proposal with objective, conversion path, audience controls, placement settings, budget owner and interval, bid, schedule, assets, and unresolved eligibility. When authorized to stage platform entities, set campaign, ad sets and ads to `PAUSED` and verify their configured and effective status. Treat activation as a separate proposal.

## Approval and routing

Start with read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Send event validation to [tracking](../meta-ads-tracking-attribution/SKILL.md), budget design to [budget and bidding](../meta-ads-budget-bidding/SKILL.md), and assets to [creative](../meta-ads-creative/SKILL.md).
