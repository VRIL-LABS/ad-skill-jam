---
name: google-ads-search-terms
description: Review observed queries, keyword match coverage, and negative candidates. Use for Google Search or Shopping query hygiene, AI Max drift, or Performance Max search term exclusions.
---

# Google Ads search terms and negatives

**Verified on 2026-11-26 against** [Search terms report](https://support.google.com/google-ads/answer/2472708) and [Negative keywords](https://support.google.com/google-ads/answer/2453972). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/google-ads.md).

## Inputs

Collect mature search-term performance, intended service and geo coverage, active positive and negative keywords and lists, valued conversions, campaign type and business targets.

## Workflow

1. Pick the report grain. Read Search queries at ad-group grain where supported and use campaign_search_term_view for Performance Max. Avoid keyword-related segments in the Performance Max query. Label missing query activity as unobserved.
2. Classify intent first. Separate confirmed irrelevant terms, ambiguous or sparse terms, and valuable queries. For a relevant query with zero conversions, check spend against the advertiser's acquisition target, signal reliability and lag before recommending a block.
3. Propose the narrowest supported negative match type and scope that solves the observed problem. Test candidates against converting queries, positive keywords, adjacent offers and shared list membership. Check spelling and close variants separately.
4. For each proposal show the term, match, scope, exemplars, cost and valued outcomes in the stated window, potential conflicts, and reversal. For new campaigns treat unobserved terms as launch hypotheses grounded in the actual service scope.
5. Keep the change in a proposal until approved. Verify the persisted match type and serving scope after a targeted write. Review future eligible data in a new window.

## Approval and routing

Start with authorized read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Route campaign-wide automation to [campaign structure](../google-ads-campaign-structure/SKILL.md) and broader CPA issues to [optimization](../google-ads-optimization/SKILL.md).
