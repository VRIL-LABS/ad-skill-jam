---
name: x-ads-reporting
description: Paid performance reporting for X Ads. Use when asked to report X campaign, line-item or promoted-post performance.
---

# X Ads paid performance reporting

Verified on 2026-11-26 against [X Ads API analytics](https://docs.x.com/x-ads-api/analytics). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/x-ads.md).

## Inputs

Collect paid entity IDs via an authorized host or an Ads Manager export, reporting time zone, wanted grain, attribution and currency.

## Workflow

1. Choose entity and legal metric groups. Select consistent date boundaries, granularity and placement across the compared extracts.
2. Keep spend in the provider's documented unit until normalization and verify against an account total. Keep organic engagement outside paid totals.
3. Record missing rows, coverage and lag. Use async reporting only where the connector exposes it and preserve bounded outputs.

## Output

Return totals and segmented results with scope, units, window and coverage.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-reporting](../../ads/ad-reporting/SKILL.md) rules where relevant. Continue with [Account audit](../x-ads-audit/SKILL.md) when that work is needed.
