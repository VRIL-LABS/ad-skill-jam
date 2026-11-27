---
name: pinterest-ads-reporting
description: Pinterest campaign reporting for Pinterest Ads. Use when asked to report Pinterest campaign or product performance by attribution window.
---

# Pinterest Ads pinterest campaign reporting

Verified on 2026-11-26 against [Ads reporting](https://developers.pinterest.com/docs/analytics-and-reports/ads-reporting/). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/pinterest-ads.md).

## Inputs

Collect account and campaign scope, grain, dates, currency, conversion windows and report-time settings.

## Workflow

1. Choose compatible report fields at the requested level. Keep click, engagement and view windows where applicable and note conversion report time.
2. Check page coverage and currency. Use provider-defined money units and normalize only after checking column documentation.
3. Align comparable outbound clicks, spend and conversions before calculating performance. Report unavailable product breakdowns explicitly.

## Output

Return rows with provenance, metrics, units, windows, suppression and reconciliation.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-reporting](../../ads/ad-reporting/SKILL.md) rules where relevant. Continue with [Account and catalog audit](../pinterest-ads-audit/SKILL.md) when that work is needed.
