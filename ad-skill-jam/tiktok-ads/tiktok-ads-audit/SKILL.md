---
name: tiktok-ads-audit
description: Delivery and account audit for TikTok Ads. Use when asked to audit TikTok delivery, conversion health or account structure.
---

# TikTok Ads delivery and account audit

Verified on 2026-11-26 against [Learning phase](https://ads.tiktok.com/resources/help/article/learning-phase). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/tiktok-ads.md).

## Inputs

Collect campaign, ad group and ad status, reporting dates, eligibility, learning status, event delivery and creative diagnostics. For campaign inventory when connected, use `tiktok_get_campaigns`. Use an export for the other evidence.

## Workflow

1. Identify budget ownership and learning changes at the layer that controls delivery. Check schedule, creative review and conversion receipt in the same window.
2. Segment comparable groups by objective, optimization event and campaign mode. Compare exposure, response and conversion separately.
3. Prioritize observable blockers and label absent configuration or tracking evidence.

## Output

Return findings ranked by decision impact with affected layer, evidence and next diagnostic.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-audit](../../ads/ad-audit/SKILL.md) rules where relevant. Continue with [Pacing and bid diagnosis](../tiktok-ads-optimization/SKILL.md) when that work is needed.
