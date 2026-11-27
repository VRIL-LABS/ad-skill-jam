---
name: apple-ads-tracking-attribution
description: Install and downstream attribution for Apple Ads. Use when asked to reconcile Apple Ads installs with AdServices or app events.
---

# Apple Ads install and downstream attribution

Verified on 2026-11-26 against [AdServices](https://developer.apple.com/documentation/adservices). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/apple-ads.md).

## Inputs

Collect Apple reporting definitions, AdServices/MMP mapping, app events, timezone, lag and privacy constraints.

## Workflow

1. Confirm that the app emits the expected AdServices token flow and that the downstream system links attribution to the intended app events.
2. Reconcile new downloads and redownloads and identify tap and view attribution windows where available. Align cohorts on timestamp, storefront and app.
3. Document install and downstream denominators separately. Use privacy-safe aggregates and label suppressed or unlinked records.

## Output

Return an event and attribution map, reconciliation residual and evidence gaps.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-reporting](../../ads/ad-reporting/SKILL.md) rules where relevant. Continue with [Performance reporting](../apple-ads-reporting/SKILL.md) when that work is needed.
