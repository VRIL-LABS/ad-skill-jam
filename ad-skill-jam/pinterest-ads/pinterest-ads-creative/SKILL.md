---
name: pinterest-ads-creative
description: Promoted Pin and Shopping creative review for Pinterest Ads. Use when asked to review Pinterest Pin crops, destinations and promoted creative.
---

# Pinterest Ads promoted pin and shopping creative review

Verified on 2026-11-26 against [Pinterest Ads overview](https://developers.pinterest.com/docs/work-with-ads/ads-overview/). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/pinterest-ads.md).

## Inputs

Collect Pin or catalog creative, formats, product destination, rights, intended audience, offer and eligible placements.

## Workflow

1. Check the selected ad format and mobile preview. Align the first frame or image and Pin promise to the destination.
2. For catalog ads verify item image, price and product availability in the intended market. Keep intended tracking and destination in the review.
3. Define a useful variant and compare within consistent format and audience conditions.

## Output

Return a format-specific creative brief, destination checks and a test comparison.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-antislop](../../ads/ad-antislop/SKILL.md) rules where relevant. Continue with [Pinterest campaign reporting](../pinterest-ads-reporting/SKILL.md) when that work is needed.
