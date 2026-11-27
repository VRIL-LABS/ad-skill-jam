---
name: youtube-ads-reporting
description: Paid video reporting for YouTube Ads. Use when asked to report YouTube reach, TrueView views or Demand Gen surface results.
---

# YouTube Ads paid video reporting

Verified on 2026-11-26 against [Demand Gen reporting](https://developers.google.com/google-ads/api/docs/demand-gen/reporting). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/youtube-ads.md).

## Inputs

Collect Google Ads account, reporting period, grain, metric definitions, attribution and campaign types.

## Workflow

1. Query Video and eligible Demand Gen separately as needed. For Demand Gen select network and subnetwork together.
2. Preserve impression, TrueView view and conversion denominators. Include view, engaged-view and click attribution separately where the requested report supports it.
3. Reconcile with Google Ads first and label YouTube Analytics channel totals as a distinct source and population.

## Output

Return the requested paid report with networks, definitions, attribution and suppressed fields.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-reporting](../../ads/ad-reporting/SKILL.md) rules where relevant. Continue with [Video conversion and lift review](../youtube-ads-tracking-attribution/SKILL.md) when that work is needed.
