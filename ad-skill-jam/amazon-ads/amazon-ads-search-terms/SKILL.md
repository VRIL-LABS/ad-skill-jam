---
name: amazon-ads-search-terms
description: Query and product-target review for Amazon Ads. Use when asked to promote Amazon search terms or review keyword and ASIN exclusions.
---

# Amazon Ads query and product-target review

Verified on 2026-11-26 against [Sponsored Products search-term report](https://advertising.amazon.com/help/G3HEFZYWZF84NPS9). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/amazon-ads.md).

## Inputs

Collect report, target metadata, ad group, ASIN and marketplace, attributed outcomes, negatives and margins.

## Workflow

1. Distinguish the reported customer search term from the biddable keyword or product target. Treat ASIN-like report values as product candidates to verify.
2. Check contextual and profitable performance after sufficient attribution maturity. Promote proven terms or product targets to the intended manual group when appropriate.
3. Before negative targeting, verify overlap, destination coverage, and whether the targeting type and scope support the candidate.

## Output

Return query and product-target decisions with spend, purchases, maturity, scope and rollback.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-audit](../../ads/ad-audit/SKILL.md) rules where relevant. Continue with [Retail ad performance reporting](../amazon-ads-reporting/SKILL.md) when that work is needed.
