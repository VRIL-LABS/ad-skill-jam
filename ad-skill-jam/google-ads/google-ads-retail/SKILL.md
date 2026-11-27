---
name: google-ads-retail
description: Audit Google Shopping or retail Performance Max inventory, Merchant Center feed, listing group filters and item performance. Use for disapprovals, missing products or weak retail outcomes.
---

# Google Ads retail and Shopping

**Verified on 2026-11-26 against** [Retail listing groups](https://developers.google.com/google-ads/api/performance-max/listing-groups) and [Merchant Center product data specification](https://support.google.com/merchants/answer/7052112). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/google-ads.md).

## Inputs

Collect linked Merchant Center account alias, product scope, country and feed context, item diagnostics and catalog export, listing tree, landing pages, costs, purchase values and stock constraints.

## Workflow

1. Check linkage and product eligibility for the intended market. Start with disapprovals and stock changes. Compare feed price, currency and availability with the landing page and checkout. Verify item identifiers and required attributes against the destination market and category.
2. Inspect inclusions, exclusions, the remainder branch and active listing groups. Confirm which partition type applies to Standard Shopping versus retail Performance Max. Use compatible product and listing-group reports to determine where spend and purchase value are concentrated.
3. Compare compatible product cuts with mature conversion value, margin or stock constraints. Treat a feed row with no delivery as unresolved until eligibility and partition assignment are known.
4. Return an issue table with item alias or cohort, market, evidence, scope, proposed fix and verification. Gate Merchant Center edits and Ads listing changes separately if they affect different resources.

## Approval and routing

Start with authorized read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Route related campaign, event and policy issues to [Performance Max](../google-ads-performance-max/SKILL.md), [tracking](../google-ads-tracking-attribution/SKILL.md), or [compliance](../google-ads-compliance-policy/SKILL.md).
