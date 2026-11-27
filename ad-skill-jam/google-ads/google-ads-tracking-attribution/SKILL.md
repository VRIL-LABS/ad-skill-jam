---
name: google-ads-tracking-attribution
description: Audit Google Ads tags, conversion goals, imported GA4 events, enhanced conversions for leads, and offline Data Manager uploads. Use for duplicate, missing or delayed conversions and lead quality.
---

# Google Ads conversion tracking and attribution

**Verified on 2026-11-26 against** [Manage conversion goals](https://support.google.com/google-ads/answer/10993988) and [Offline conversion migration](https://developers.google.com/google-ads/api/docs/conversions/upload-offline). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/google-ads.md).

## Inputs

Collect conversion action and customer aliases, source and outcome map, active goals, count and value settings, historical attribution windows, consent evidence, conversion lag, redacted diagnostics and CRM counts.

## Workflow

1. Map one business action to each configured source. Review order or transaction deduplication, count setting, time and currency, and the Ads versus analytics source. Check conversion ownership, selected campaign goals and custom goals. A secondary action in a custom goal can be used for bidding.
2. Separate receipt, matching, attribution, and use in bidding. Inspect action-level reporting and reconcile matured counts with first-party evidence. Check conversions, all conversions, and conversion-time columns separately.
3. For offline lead stages, map submission, qualified lead and closed sale with valid timestamps, values and approved match data. Since June 15, 2026, use Data Manager for new offline and enhanced-lead integrations. Treat use of the legacy upload method as subject to confirmed eligibility.
4. Validate payload and destination without ingestion where supported. Only submit real or test events within explicit authorization. For a successful non-validation Data Manager request, check per-destination diagnostics and subsequent attribution. Preserve stable transaction identifiers in the authorized source, and reconcile uncertain results before re-uploading.
5. Return action, source, intent, observed outcome, discrepancy, impact, proposed fix and verification. Keep personal data and identifiers out of reports and examples.

## Approval and routing

Start with authorized read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Send attribution reconciliation to [reporting](../google-ads-reporting/SKILL.md) and goal changes to [budget and bidding](../google-ads-budget-bidding/SKILL.md).
