---
name: google-ads-performance-max
description: Plan or diagnose Performance Max asset groups, audience signals, channel mix, search terms, Final URL Expansion, brand overlap, or missing product delivery.
---

# Google Ads Performance Max

**Verified on 2026-11-26 against** [Performance Max setup](https://developers.google.com/google-ads/api/performance-max/getting-started) and [Performance Max asset group reporting](https://developers.google.com/google-ads/api/performance-max/asset-group-reporting). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/google-ads.md).

## Inputs

Collect campaign and asset-group performance, goals, budget and bid target, creative coverage, channel and search-term reports, expansion controls, feed and listing groups when applicable.

## Workflow

1. Verify objective, conversion action quality, lag and current delivery. Inspect asset-group primary status, asset coverage and landing pages. Treat asset-group metrics as aggregated evidence and generated ad combinations as a separate view.
2. Inspect available campaign channel reporting, then query campaign-level search terms with compatible fields. Mark inaccessible or privacy-limited cuts. For suspected overlap with Search check exact eligible terms, settings, branded demand and total outcomes before inferring displacement.
3. Review audience signals as guidance to the delivery system. Inspect Search themes, eligible negatives and brand exclusions, text automation and Final URL Expansion separately. Use webpage exclusion criteria for disallowed destinations where applicable.
4. For retail, check Merchant Center product eligibility and listing tree completeness. Distinguish product issues from campaign setup, feed mismatch and changes to paid delivery.
5. Return one supported diagnosis and prioritized proposal. For a new connected PMax tree validate dependent operations together and disable partial failure when the create path uses temporary IDs. Stage paused after approval.

## Approval and routing

Start with authorized read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Route product data to [retail](../google-ads-retail/SKILL.md), search controls to [search terms](../google-ads-search-terms/SKILL.md), and overlap hypotheses to [experimentation](../google-ads-experimentation/SKILL.md).
