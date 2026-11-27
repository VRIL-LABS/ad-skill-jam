---
name: tiktok-ads-tracking-attribution
description: Pixel and Events API diagnostics for TikTok Ads. Use when asked to verify TikTok Pixel and Events API deduplication or conversion mapping.
---

# TikTok Ads pixel and events api diagnostics

Verified on 2026-11-26 against [Event deduplication](https://ads.tiktok.com/resources/help/article/event-deduplication). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/tiktok-ads.md).

## Inputs

Collect event source, pixel and server configuration, event names, representative event identifiers and attribution settings.

## Workflow

1. Trace the configured optimization event in browser and server diagnostics using privacy-safe test records.
2. For duplicate browser and server copies use the same event name and event_id. Preserve the ID through retries and use different IDs for distinct events.
3. Reconcile accepted events and attributed outcomes with source events, window, lag and timezone. Treat missing identifiers as a measurement issue.

## Output

Return an event flow map with receipt, matching, deduplication and downstream gaps.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-reporting](../../ads/ad-reporting/SKILL.md) rules where relevant. Continue with [Marketing API reporting](../tiktok-ads-reporting/SKILL.md) when that work is needed.
