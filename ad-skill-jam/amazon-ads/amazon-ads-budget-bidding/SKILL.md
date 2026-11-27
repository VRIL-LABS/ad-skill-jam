---
name: amazon-ads-budget-bidding
description: Margin, pacing and bid review for Amazon Ads. Use when asked to review Amazon Ads ACoS, placement modifiers or budget pacing.
---

# Amazon Ads margin, pacing and bid review

Verified on 2026-11-26 against [Sponsored Products best practices](https://advertising.amazon.com/library/guides/sponsored-products-best-practices). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/amazon-ads.md).

## Inputs

Collect net selling price, variable fees, product cost, target margin, attributed sales, campaign budget, placement settings and inventory.

## Workflow

1. Estimate contribution margin and break-even ACoS for the product with documented units. Compare with mature ad-attributed sales at matching grain.
2. Separate pacing limits, retail eligibility and conversion rate from bid pressure. Review placement and effective bid together.
3. Preview one bounded change and translate bid or budget into maximum proposed exposure. Keep account-level blended ratios separate from detail-level decisions.

## Output

Return a currency-scoped decision with margin assumptions, exposure and review horizon.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Continue with [Retail and delivery audit](../amazon-ads-audit/SKILL.md) when that work is needed.
