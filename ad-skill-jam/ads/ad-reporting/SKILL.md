---
name: ad-reporting
description: Normalize paid-ad reports. Use to align dates, currencies, attribution windows, click and conversion definitions, metric denominators, and data completeness before comparing or rolling up performance.
---

# Paid ads reporting

**Verified on 2026-11-26 against** [Meta's Ads Insights reference](https://developers.facebook.com/docs/graph-api/reference/adaccount/insights). The normalization rules below apply to project reports.

1. Capture window and time zone, report grain, currency, selected click and conversion definitions, attribution, conversion lag and source. Label preliminary windows and partial exports.
2. Calculate compatible metrics from underlying counts and spend. CPM is `spend × 1,000 / impressions` in account currency per 1,000 impressions. CTR is `100 × clicks / eligible denominator` as a percent. Label the click type and use the source's matching denominator. CPC is `spend / clicks`, CPA is `spend / selected actions`, and ROAS is `compatible attributed value / spend`. Show the numerator, denominator, units and source for custom rates. For purchase value and spend in different currencies, use a documented common-currency conversion or leave ROAS unavailable.
3. Across compatible, non-overlapping rows, sum additive counts and recompute ratios. Get reach, frequency and unique metrics at the requested aggregation level. Preserve absent, suppressed, incomplete and undefined values as unavailable. Use zero for an explicit zero with a valid denominator.
4. When sources disagree, compare actual dates, time zone, attribution settings, lag, and event and counting definitions. Show irreconcilable totals side by side and explain the differences. Obtain the platform-specific query and field mapping from the reporting or tracking skill. Use read-only evidence.

See [source and metric notes](references/sources.md).
