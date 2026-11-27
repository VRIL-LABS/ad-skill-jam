---
name: tiktok-ads-creative
description: Spark Ads and creative testing for TikTok Ads. Use when asked to review Spark post permission, TikTok creative or fatigue.
---

# TikTok Ads spark ads and creative testing

Verified on 2026-11-26 against [Spark Ads](https://ads.tiktok.com/help/article/spark-ads). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/tiktok-ads.md).

## Inputs

Collect approved post or video, asset permission, objective, placement, spend, response and conversion by creative.

## Workflow

1. Verify the Spark identity and authorization period if using an organic post. Check destination, render and linked CTA.
2. Develop distinct concepts and hooks. Control offer, audience and conversion source when comparing edits.
3. Check whether response declines with exposure and stable delivery mix. Explore tracking, destination and auction changes before refreshing all ads.

## Output

Return a creative brief and test matrix with rights, preview and evidence for any replacement.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-antislop](../../ads/ad-antislop/SKILL.md) rules where relevant. Continue with [Marketing API reporting](../tiktok-ads-reporting/SKILL.md) when that work is needed.
