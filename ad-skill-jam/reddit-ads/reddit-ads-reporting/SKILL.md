---
name: reddit-ads-reporting
description: Pull or reconcile Reddit Ads Manager and API reports. Use for campaign, ad-group, ad or placement performance, hourly breakdowns, click vs view attribution, and Reddit microcurrency normalization.
---

# Reddit Ads reporting

**Verified on 2026-11-26 against** [Get A Report](https://ads-api.reddit.com/docs/v3/api/get-a-report) and [Reporting metric reference](https://ads-api.reddit.com/docs/v3/guides/programs/reporting/metric-reference). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/reddit-ads.md).

## Inputs

Collect the account alias, eligible metric names, currency, actual date and time zone, aggregation grain, requested breakdowns, selected event and action source, observed attribution and extraction time.

## Workflow

1. Use [shared reporting](../../ads/ad-reporting/SKILL.md). Query the v3 reporting operation at a compatible grain. The reporting operation uses HTTP POST for a read. Specify `time_zone_id` to match the intended local window because the API defaults to UTC. Verify date boundaries and follow the response's next-page links through the authorized connector.
2. Normalize by field. Raw `SPEND` and documented cost metrics such as `CPC` and `CONVERSION*ECPA` use micros. Raw `CONVERSION*TOTAL_VALUE` fields use the documented divisor of 100. Confirm whether the connector already normalized these values. Recompute rates from compatible totals, and get aggregated reach or frequency at the requested grain.
3. Use named `conversion_custom_events` for current custom-event queries; preserve historical slot values where needed for reconciliation. Compare clicks, onsite analytics visits and attributed conversions using aligned action source, event, windows and report freshness. Requery late data when necessary.
4. Check combination restrictions. Split long hourly reads into non-overlapping ranges of at most 7 days to prepare for the December 8, 2026 enforcement. Keep the cut and time zone consistent across slices, and retain unavailable cells. Use separate valid cuts for incompatible breakdowns.
5. Return dates, currency, time zone, provider and version, scope, definitions, coverage, spend, outcome count and cost or value metrics where defined. Clearly label partial, preliminary, unsupported and modeled results.

## Approval and routing

Start with authorized read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Route broken or double-counted tracking to [tracking](../reddit-ads-tracking-attribution/SKILL.md), then send mature decision inputs to [optimization](../reddit-ads-optimization/SKILL.md).
