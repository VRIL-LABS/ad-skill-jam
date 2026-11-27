---
name: linkedin-ads-reporting
description: Campaign and demographic reporting for LinkedIn Ads. Use when asked to report LinkedIn campaign, creative, demographic or lead results.
---

# LinkedIn Ads campaign and demographic reporting

Verified on 2026-11-26 against [LinkedIn Ads reporting](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/ads-reporting). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/linkedin-ads.md).

## Inputs

Collect account scope, date range, privacy requirements, desired pivot, fields, attribution and CRM measures.

## Workflow

1. Select the documented analytics finder and compatible pivot and fields. Confirm version headers and export scope.
2. Check privacy-limited dimensions, completeness and reporting time. Reconcile at one grain before deriving rates.
3. Keep form metrics and CRM outcomes in related cohorts with comparable windows. State unmatched coverage.

## Output

Return requested rows with pivot, definitions, date range and missing dimensions.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-reporting](../../ads/ad-reporting/SKILL.md) rules where relevant. Continue with [Account and lead-quality audit](../linkedin-ads-audit/SKILL.md) when that work is needed.
