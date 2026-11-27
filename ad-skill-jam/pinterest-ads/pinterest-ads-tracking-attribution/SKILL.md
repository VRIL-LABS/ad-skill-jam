---
name: pinterest-ads-tracking-attribution
description: Pinterest Tag and Conversions API diagnostics for Pinterest Ads. Use when asked to reconcile Pinterest browser and server events.
---

# Pinterest Ads pinterest tag and conversions api diagnostics

Verified on 2026-11-26 against [Conversions API](https://developers.pinterest.com/docs/track-conversions/track-conversions-in-the-api/). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/pinterest-ads.md).

## Inputs

Collect Tag and API setup, intended conversion event, test diagnostics, event IDs and approved data handling.

## Workflow

1. Trace the event through browser and server records. Verify event acceptance for the correct ad account and event type.
2. Compare the duplicate identifiers when both channels send the same conversion. Retain stable IDs across retries.
3. Reconcile conversion totals with source events using compatible attribution windows and outcome definitions.

## Output

Return event diagnostics, duplicate risk, receipt evidence and reporting impact.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-reporting](../../ads/ad-reporting/SKILL.md) rules where relevant. Continue with [Pinterest campaign reporting](../pinterest-ads-reporting/SKILL.md) when that work is needed.
