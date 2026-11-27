---
name: google-ads-reporting
description: Build or reconcile Google Ads API or exported reports. Use for GAQL compatibility, Search or SearchStream, segmentation, currency and conversion-date alignment.
---

# Google Ads reporting and GAQL

**Verified on 2026-11-26 against** [GAQL query structure](https://developers.google.com/google-ads/api/docs/query/structure) and [Search and SearchStream](https://developers.google.com/google-ads/api/rest/common/search). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/google-ads.md).

## Inputs

Collect client alias, source and version, currency and time zone, requested grain, dates, outcome definition and date basis, compatible breakdowns and desired comparison.

## Workflow

1. Use [shared reporting](../../ads/ad-reporting/SKILL.md). Read account time zone and currency, then write a narrow GAQL query with a finite date filter. Validate FROM resource, field selectability/filterability, and segment/metric combinations using versioned metadata.
2. Read all Search pages or complete the SearchStream response. Keep segmented and aggregate cuts distinct, and preserve unavailable fields. Read conversion-action rows in a separate compatible query when spend belongs to campaign or ad grain. Check the provider's date-granularity limits on historical reads.
3. Convert raw cost_micros to account currency by dividing by 1,000,000 once. Use the conversion value field's documented unit. Preserve fractional attributed outcomes. Recompute compatible CPA, CTR and ROAS from underlying totals and keep unsupported denominator combinations unavailable.
4. Record whether conversion metrics use ad interaction or conversion date. Avoid aligning conversion-time outcomes with interaction-date spend to present cohort CPA unless the calculation and date basis are explicit and fit the task.
5. Return scope, dates, time zone, grain, fields, currency, status, metrics and known discrepancies. Supply the GAQL query or export provenance without identifiers or secrets.

## Approval and routing

Start with authorized read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Send missing outcomes to [tracking](../google-ads-tracking-attribution/SKILL.md) and query diagnosis to [search terms](../google-ads-search-terms/SKILL.md).
