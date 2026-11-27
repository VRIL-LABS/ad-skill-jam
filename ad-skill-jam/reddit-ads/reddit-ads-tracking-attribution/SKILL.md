---
name: reddit-ads-tracking-attribution
description: Validate Reddit Pixel, Conversions API, Events Manager, event deduplication, and offsite purchase or lead measurement. Use for missing events, double counting, wrong values or attribution disagreements.
---

# Reddit Pixel, Conversions API, and attribution

**Verified on 2026-11-26 against** [Conversions API v3 direct integration](https://ads-api.reddit.com/docs/v3/guides/programs/capi/direct-integration) and [Reddit event deduplication](https://business.reddithelp.com/articles/Knowledge/event-deduplication). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/reddit-ads.md).

## Inputs

Collect the event map, Pixel or integration alias, channel and event type, trigger and elapsed time, approved processing basis, independently observed actions, and redacted diagnostics.

## Workflow

1. Map each true action to the event type, data source, event time, expected count and for commerce the value, order reference and currency where supported. Validate consent and allowed data use. Keep raw identifiers and customer data inside the authorized system.
2. For the same action sent by Pixel and CAPI in the same channel, match the event type and the custom name when applicable. Use one stable conversion ID for both copies, and a distinct ID per genuine action. Reddit documents a two-day delivery window for deduplication. Explicitly inspect which source and deduplication method actually applied.
3. For v3 CAPI, use Unix epoch milliseconds for `event_at`; validate the current event type, action source, and metadata contract. Use the documented match keys and normalization when approved. Treat session-based deduplication as an alternative requiring its own identity and session evidence.
4. Use Events Manager to compare the expected trigger with actual event receipt, source, diagnostics, deduplication and business totals. Prepare or run a test only within the approved scope. Use the v3 `test_id` path for a CAPI test and confirm its results in Event Testing.
5. Return event, expected and observed payload shape, evidence, discrepancy, proposed correction and readback steps. For mismatched conversion counts, align click/view attribution, date basis, action source and lag before changing the setup.

## Approval and routing

Start with authorized read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Send report comparison to [reporting](../reddit-ads-reporting/SKILL.md) and measurement readiness findings to [audit](../reddit-ads-audit/SKILL.md).
