---
name: meta-ads-tracking-attribution
description: Validate Meta Pixel, CAPI, Events Manager, website purchase or lead signals, deduplication, and CRM event quality. Use to diagnose missing events, double counting, bad revenue, or event lag.
---

# Meta Pixel, Conversions API, and attribution

**Verified on 2026-11-26 against** [Meta event deduplication guide](https://developers.facebook.com/documentation/ads-commerce/conversions-api/deduplicate-pixel-and-server-events) and [Meta server event reference](https://developers.facebook.com/documentation/ads-commerce/conversions-api/parameters/server-event). See [source and decision notes](references/sources.md).

## Inputs

Collect a redacted event map, source and destination aliases, the trigger for each event, consent behavior, event samples and timestamps, Events Manager diagnostics, and compatible first-party counts.

## Workflow

1. Map each business action to the expected source and event. Inspect trigger, destination dataset, event name, event time, and for purchase the value and currency. Verify consent handling and data permissions before considering data transmission. Keep personal data and credentials out of artifacts.
2. For duplicate browser/server copies of one website action, use the same name and data source and match browser `eventID` to server `event_id`. Use an identifier unique per action, and reuse it across attempts for that action. Meta documents a 48-hour receipt window for this matching method.
3. Validate website requirements, including `action_source`, `event_source_url`, and `client_user_agent` as documented. Use event time in Unix seconds for the actual action. Reject stale records from the outgoing batch. Meta's server-event reference states that an event more than 7 days old rejects the entire request for this interface. Follow the applicable normalization and hashing guidance for each field.
4. Inspect Events Manager Test Events and Diagnostics and compare observed events with a first-party action or order record. An API acceptance alone establishes receipt. Check each source, deduplication, values and downstream counts. Use an authorized test source and approval before sending a test event. Meta documents that `test_event_code` events can be used for ads measurement and targeting.
5. Return event, source, expected action, observed behavior, evidence, failure mode, and proposed fix with verification checks. For CRM lead quality, confirm stage definition and eligibility before proposing a new optimization signal.

## Approval and routing

Start with read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Route attribution-window or Ads Manager versus backend totals to [reporting](../meta-ads-reporting/SKILL.md). Route lead-quality diagnosis to [optimization](../meta-ads-optimization/SKILL.md).
