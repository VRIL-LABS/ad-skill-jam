---
name: microsoft-ads-tracking-attribution
description: UET and offline conversion diagnostics for Microsoft Advertising. Use when asked to verify Microsoft UET goals, click IDs or offline conversions.
---

# Microsoft Advertising uet and offline conversion diagnostics

Verified on 2026-11-26 against [Offline conversions](https://learn.microsoft.com/en-us/advertising/campaign-management-service/applyofflineconversions?view=bingads-13). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/microsoft-ads.md).

## Inputs

Collect goal definition, UET diagnostics, landing redirects, consent status, offline click mapping, time zones and CRM outcome.

## Workflow

1. Verify UET detection and selected goal before reviewing delivery. Trace the applicable click identifier through redirects and CRM handling.
2. Check the supported identifiers, time and goal rules for offline ingestion. Inspect partial errors before claiming a batch succeeded.
3. Reconcile platform-reported outcomes with matured qualified outcomes and use privacy-safe samples.

## Output

Return a goal map, event traceback, failure evidence and next verification.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-reporting](../../ads/ad-reporting/SKILL.md) rules where relevant. Continue with [Microsoft Advertising performance reporting](../microsoft-ads-reporting/SKILL.md) when that work is needed.
