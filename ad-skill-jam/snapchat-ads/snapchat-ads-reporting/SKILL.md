---
name: snapchat-ads-reporting
description: Campaign and squad performance reporting for Snapchat Ads. Use when asked to report Snapchat campaign, squad or ad outcomes with attribution context.
---

# Snapchat Ads campaign and squad performance reporting

Verified on 2026-11-26 against [Snap measurement](https://developers.snap.com/marketing-api/Ads-API/measurement). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/snapchat-ads.md).

## Inputs

Collect entity scope, time dates, granularity, currency and attribution settings.

## Workflow

1. Select the documented measurement fields at the chosen entity level. Check time boundaries and attribution windows.
2. Normalize money from documented microcurrency where applicable. Keep impressions, swipes or clicks, views and conversions at matched scope.
3. Reconcile parent and child reports without adding them together. Report missing metrics and provisional windows explicitly.

## Output

Return performance table with grain, currency, window and outcome definitions.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-reporting](../../ads/ad-reporting/SKILL.md) rules where relevant. Continue with [Delivery audit](../snapchat-ads-audit/SKILL.md) when that work is needed.
