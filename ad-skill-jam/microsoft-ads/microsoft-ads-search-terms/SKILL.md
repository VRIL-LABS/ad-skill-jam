---
name: microsoft-ads-search-terms
description: Search query review for Microsoft Advertising. Use when asked to review Microsoft search queries, targeting or negative scope.
---

# Microsoft Advertising search query review

Verified on 2026-11-26 against [Search query columns](https://learn.microsoft.com/en-us/advertising/reporting-service/searchqueryperformancereportcolumn). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/microsoft-ads.md).

## Inputs

Collect Search Query Performance or Product Search Query rows, match and network fields, negative scope, mature conversions and business intent.

## Workflow

1. Choose the report type for the campaign and preserve the query, keyword and match dimensions.
2. Distinguish irrelevant queries, relevant sparse traffic and costly relevant traffic with stable evidence. Check targets and lag before making exclusions.
3. Preview negative impact on active keywords and converting variants. Prefer the narrowest scope covering confirmed unwanted intent.

## Output

Return query groups and exact proposed match/scope with conflict and reversal notes.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-audit](../../ads/ad-audit/SKILL.md) rules where relevant. Continue with [Microsoft Advertising performance reporting](../microsoft-ads-reporting/SKILL.md) when that work is needed.
