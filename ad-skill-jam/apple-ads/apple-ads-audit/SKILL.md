---
name: apple-ads-audit
description: Account audit for Apple Ads. Use when asked to audit Apple Ads delivery and measurement.
---

# Apple Ads account audit

Verified on 2026-11-26 against [Apple campaign reporting](https://ads.apple.com/app-store/help/reporting/0023-view-and-analyze-campaign-results). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/apple-ads.md).

## Inputs

Collect app and storefront scope, serving states, placements, report dates, Search Match settings and downstream outcomes. For campaign inventory when connected, use `apple_get_campaigns`. Use an export for the other evidence.

## Workflow

1. Check placement eligibility and campaign, ad group and ad serving state before attributing low spend to bids.
2. For search results compare branded, category, competitor and discovery intent within each storefront. Check search-term evidence, negative conflicts and product page alignment.
3. Reconcile spend and tap installs before comparing install CPA with trial or payer CPA. Show evidence coverage and missing controls.

## Output

Return prioritized findings by storefront and placement with evidence, confidence and next read.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-audit](../../ads/ad-audit/SKILL.md) rules where relevant. Continue with [Performance reporting](../apple-ads-reporting/SKILL.md) when that work is needed.
