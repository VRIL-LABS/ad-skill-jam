---
name: tiktok-ads-reporting
description: Marketing API reporting for TikTok Ads. Use when asked to build TikTok advertiser, campaign, ad group or ad reports.
---

# TikTok Ads marketing api reporting

Verified on 2026-11-26 against [Reporting API](https://ads.tiktok.com/gateway/docs/index?doc_id=1701890949889025). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/tiktok-ads.md).

## Inputs

Collect authorized advertiser scope, report type, dimensions, metrics, desired grain, dates, timezone and comparison goals.

## Workflow

1. Choose documented compatible dimensions and metrics for the report type and level. Record conversion definitions and aggregation grain.
2. Inspect application response code, paging and date completeness. Use exports or async reporting for eligible large requests and record missing segments.
3. Compute rates from compatible counts. Resolve totals and time zone before comparing reports across advertiser scopes.

## Output

Return bounded rows, definitions, currency, date window and completeness evidence.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-reporting](../../ads/ad-reporting/SKILL.md) rules where relevant. Continue with [Delivery and account audit](../tiktok-ads-audit/SKILL.md) when that work is needed.
