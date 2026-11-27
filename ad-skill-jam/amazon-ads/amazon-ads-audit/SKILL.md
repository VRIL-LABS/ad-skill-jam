---
name: amazon-ads-audit
description: Retail and delivery audit for Amazon Ads. Use when asked to audit Amazon Sponsored Ads, product eligibility and spend.
---

# Amazon Ads retail and delivery audit

Verified on 2026-11-26 against [Sponsored Products best practices](https://advertising.amazon.com/library/guides/sponsored-products-best-practices). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/amazon-ads.md).

## Inputs

Collect marketplace and ad product, campaign and target scope, SKU or ASIN reports, offer, stock, listing and attribution maturity. For campaign inventory when connected, use `amazon_get_campaigns`. Use an export for the other evidence.

## Workflow

1. Verify retail eligibility and stock context before diagnosing bids. Check budget and campaign, ad group, ad and target status.
2. Compare search, placement and product evidence at the proper grain. Inspect intended portfolio or product grouping before attributing blended performance.
3. Prioritize retail blockers and high-exposure decisions. Separate coverage gaps and known spend.

## Output

Return retail and campaign findings with severity, evidence, impact and next diagnostic.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-audit](../../ads/ad-audit/SKILL.md) rules where relevant. Continue with [Sponsored Ads campaign planning](../amazon-ads-campaign-structure/SKILL.md) when that work is needed.
