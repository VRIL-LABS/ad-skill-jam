---
name: pinterest-ads-audit
description: Account and catalog audit for Pinterest Ads. Use when asked to audit Pinterest campaign delivery, catalog eligibility or measurement.
---

# Pinterest Ads account and catalog audit

Verified on 2026-11-26 against [Pinterest Ads overview](https://developers.pinterest.com/docs/work-with-ads/ads-overview/). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/pinterest-ads.md).

## Inputs

Collect campaign, ad group, creative and catalog status, product coverage, target geography, conversion source and dates. For campaign inventory when connected, use `pinterest_get_campaigns`. Use an export for the other evidence.

## Workflow

1. Check eligibility from account through the promoted Pin. For Shopping inspect catalog item availability, destination and product-group coverage.
2. Compare campaign and ad group delivery at equal objective and attribution scope. Reconcile conversions with receipt diagnostics before judging performance.
3. Rank verified blockers first and call out missing item-level or conversion evidence.

## Output

Return a prioritized account and catalog audit with next checks.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-audit](../../ads/ad-audit/SKILL.md) rules where relevant. Continue with [Campaign and product group planning](../pinterest-ads-campaign-structure/SKILL.md) when that work is needed.
