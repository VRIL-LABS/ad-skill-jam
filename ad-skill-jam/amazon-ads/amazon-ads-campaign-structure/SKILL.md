---
name: amazon-ads-campaign-structure
description: Sponsored Ads campaign planning for Amazon Ads. Use when asked to design Sponsored Products targeting, budgets and portfolio layout.
---

# Amazon Ads sponsored ads campaign planning

Verified on 2026-11-26 against [Sponsored Products](https://advertising.amazon.com/solutions/products/sponsored-products). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/amazon-ads.md).

## Inputs

Collect ad product, marketplace, products, listing state, margins, objective, target families and budget envelope.

## Workflow

1. Choose campaign and ad-group scope for the ad product. For Sponsored Products assign automatic discovery and manual keyword or product targeting where supported.
2. Define portfolio and budget ownership, product grouping, target source and negatives. Check offer and listing eligibility.
3. Stage the setup paused with exact settings, reporting grain and activation criteria.

## Output

Return campaign and targeting plan per marketplace with retail dependency checklist.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Continue with [Query and product-target review](../amazon-ads-search-terms/SKILL.md) when that work is needed.
