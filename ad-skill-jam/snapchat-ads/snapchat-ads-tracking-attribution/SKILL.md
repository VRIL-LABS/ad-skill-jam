---
name: snapchat-ads-tracking-attribution
description: Pixel and Conversions API diagnostics for Snapchat Ads. Use when asked to verify Snapchat conversion event receipt, deduplication or attribution.
---

# Snapchat Ads pixel and conversions api diagnostics

Verified on 2026-11-26 against [Snap conversion deduplication](https://developers.snap.com/marketing-api/Conversions-API/Deduplication). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/snapchat-ads.md).

## Inputs

Collect browser and server event configuration, redacted sample identifiers and selected optimization event.

## Workflow

1. Follow a test action to Pixel and server diagnostics. Confirm correct destination, event name and timing.
2. Check the documented matching IDs for duplicate copies. Retain the same event identity across retries and verify distinct events still count separately.
3. Record swipe or click and view windows alongside conversion counts. Reconcile to the first-party event source with lag.

## Output

Return event receipt and deduplication evidence and its effect on reporting confidence.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-reporting](../../ads/ad-reporting/SKILL.md) rules where relevant. Continue with [Campaign and squad performance reporting](../snapchat-ads-reporting/SKILL.md) when that work is needed.
