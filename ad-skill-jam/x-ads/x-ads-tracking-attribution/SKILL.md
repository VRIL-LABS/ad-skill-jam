---
name: x-ads-tracking-attribution
description: Website conversion diagnosis for X Ads. Use when asked to verify X Pixel or Conversions API events and attribution.
---

# X Ads website conversion diagnosis

Verified on 2026-11-26 against [Website conversion tracking](https://business.x.com/en/help/campaign-measurement-and-analytics/conversion-tracking-for-websites). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/x-ads.md).

## Inputs

Collect conversion objective, event configuration, browser/server diagnostics, redirects and reporting windows.

## Workflow

1. Trace the intended event from user action to platform receipt. Confirm selected optimization event and link/click ID handling through redirects.
2. Where browser and server send the same conversion, verify supported deduplication fields and one outcome per test event.
3. Compare only matching attribution windows and identify click and view contributions before interpreting lift.

## Output

Return diagnostic evidence, confirmed causes or missing access and ordered verification steps.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-reporting](../../ads/ad-reporting/SKILL.md) rules where relevant. Continue with [Paid performance reporting](../x-ads-reporting/SKILL.md) when that work is needed.
