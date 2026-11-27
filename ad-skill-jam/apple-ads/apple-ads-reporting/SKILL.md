---
name: apple-ads-reporting
description: Performance reporting for Apple Ads. Use when asked to report Apple Ads campaign, keyword or search term results.
---

# Apple Ads performance reporting

Verified on 2026-11-26 against [Apple campaign reporting](https://ads.apple.com/app-store/help/reporting/0023-view-and-analyze-campaign-results). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/apple-ads.md).

## Inputs

Collect storefront and placement, date range and timezone, requested report grain, currency and outcome definition.

## Workflow

1. Select campaign, ad group, keyword or search-term grain appropriate to the eligible placement. Check filters and pagination before comparing aggregates.
2. Preserve tap and view measures and install definitions in separate columns when available. Weight ratio metrics over compatible counts.
3. For an API migration, compare the old and new extracts with identical scope and note field or row coverage changes before using the new report for decisions.

## Output

Return a dated table with window, currency, account alias, grain, metric definitions and reconciliation notes.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-reporting](../../ads/ad-reporting/SKILL.md) rules where relevant. Continue with [Account audit](../apple-ads-audit/SKILL.md) when that work is needed.
