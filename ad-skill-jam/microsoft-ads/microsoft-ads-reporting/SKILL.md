---
name: microsoft-ads-reporting
description: Microsoft Advertising performance reporting for Microsoft Advertising. Use when asked to build Microsoft campaign, network or search query reports.
---

# Microsoft Advertising microsoft advertising performance reporting

Verified on 2026-11-26 against [Reporting availability](https://learn.microsoft.com/en-us/advertising/guides/report-attributes-performance-statistics?view=bingads-13). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/microsoft-ads.md).

## Inputs

Collect report type, scope, aggregation, dates, timezone, columns and data availability.

## Workflow

1. Select supported columns and explicit aggregation for the requested report. Preserve currency and conversion definitions.
2. Check report completeness and data last completed fields where available. Keep conversions, all conversions and revenue aligned with the goal scope.
3. Reconcile report rows against one comparable total before interpreting differences in CTR, CPA or ROAS.

## Output

Return dated rows or export instructions with currency, coverage and metric definitions.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-reporting](../../ads/ad-reporting/SKILL.md) rules where relevant. Continue with [Account and import audit](../microsoft-ads-audit/SKILL.md) when that work is needed.
