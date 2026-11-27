---
name: tiktok-ads-optimization
description: Pacing and bid diagnosis for TikTok Ads. Use when asked to diagnose TikTok underspend, learning resets or rising acquisition cost.
---

# TikTok Ads pacing and bid diagnosis

Verified on 2026-11-26 against [Learning phase](https://ads.tiktok.com/resources/help/article/learning-phase). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/tiktok-ads.md).

## Inputs

Collect unit economics, change history, event reliability, current bid strategy, pacing and eligible audience and creative.

## Workflow

1. Trace delivery from eligibility through auction and post-click conversion. Identify which layer owns budget and compare scheduling and event history.
2. Preserve comparable windows around meaningful edits. Review the active bid strategy, unit economics and lag before choosing a pacing or signal change.
3. Propose a single controlled adjustment with maximum exposure, review horizon and reversal.

## Output

Return constraint, evidence, proposed change, expected result and readback checks.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-audit](../../ads/ad-audit/SKILL.md) rules where relevant. Continue with [Pixel and Events API diagnostics](../tiktok-ads-tracking-attribution/SKILL.md) when that work is needed.
