---
name: amazon-ads-reporting
description: Retail ad performance reporting for Amazon Ads. Use when asked to report Amazon search terms, advertised products, placements or attributed sales.
---

# Amazon Ads retail ad performance reporting

Verified on 2026-11-26 against [Sponsored Products search-term report](https://advertising.amazon.com/help/G3HEFZYWZF84NPS9). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/amazon-ads.md).

## Inputs

Collect report type, marketplace, ad product, grain, date range, currency, attribution and product scope.

## Workflow

1. Choose a report that distinguishes advertised products and purchased products when relevant. Treat search-term report coverage as conditional on clicks.
2. Check attribution maturity, reporting scope and report completeness before comparing. Retain account currency and product versus campaign grain.
3. Compute ratios from aggregate compatible values. Reconcile sales with supported reporting definitions before comparing with retailer totals.

## Output

Return dated results with report grain, attribution, spend and sales definitions and known gaps.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-reporting](../../ads/ad-reporting/SKILL.md) rules where relevant. Continue with [Retail and delivery audit](../amazon-ads-audit/SKILL.md) when that work is needed.
