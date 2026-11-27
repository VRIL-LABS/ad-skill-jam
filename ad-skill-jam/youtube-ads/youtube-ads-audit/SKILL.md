---
name: youtube-ads-audit
description: Inventory and delivery audit for YouTube Ads. Use when asked to audit paid YouTube inventory, performance and suitability.
---

# YouTube Ads inventory and delivery audit

Verified on 2026-11-26 against [Demand Gen reporting](https://developers.google.com/google-ads/api/docs/demand-gen/reporting). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/youtube-ads.md).

## Inputs

Collect Google Ads customer alias, campaign types, channel and surface reports, creatives, exclusions and outcomes. For campaign inventory when connected, use `youtube_get_campaigns`. Use an export for the other evidence.

## Workflow

1. Identify eligible campaign types and paid networks. For mixed inventory reconcile the YouTube subtotal and document other surfaces.
2. Check asset eligibility, suitability settings, exclusions, frequency and format delivery before explaining costs.
3. Evaluate outcomes using format-appropriate denominators and document evidence coverage.

## Output

Return an account-scoped audit with YouTube surface, campaign type and decision priority.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-audit](../../ads/ad-audit/SKILL.md) rules where relevant. Continue with [Paid video reporting](../youtube-ads-reporting/SKILL.md) when that work is needed.
