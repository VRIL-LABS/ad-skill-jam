---
name: apple-ads-search-terms
description: Search term and keyword review for Apple Ads. Use when asked to promote valuable Apple search terms or review negative keywords.
---

# Apple Ads search term and keyword review

Verified on 2026-11-26 against [Search Match](https://ads.apple.com/app-store/help/keywords/0024-understand-search-match). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/apple-ads.md).

## Inputs

Collect search-term and keyword reports, Search Match flag, active exact and broad scope, negatives and downstream value by storefront.

## Workflow

1. Map the observed term to its ad group, matched source and storefront. Inspect exact-match traffic for meaningful variations.
2. For a promising discovery term, verify downstream evidence and consider an explicit exact keyword. Simulate the exact negative at the discovery scope against relevant traffic.
3. Maintain the existing route until the replacement is eligible. Record the rollback and confirm persisted match and scope after approval.

## Output

Return a term decision table with evidence, destination group, proposed match and optional scoped negative.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-audit](../../ads/ad-audit/SKILL.md) rules where relevant. Continue with [Campaign planning](../apple-ads-campaign-structure/SKILL.md) when that work is needed.
