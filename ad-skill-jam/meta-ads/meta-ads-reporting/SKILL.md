---
name: meta-ads-reporting
description: Pull, interpret, or reconcile Meta Ads Insights, Ads Manager exports, and first-party reports. Use for campaign, ad-set and ad reports, breakdowns, attribution comparisons, or metric definitions.
---

# Meta Ads reporting

**Verified on 2026-11-26 against** [Meta Ads Insights reference](https://developers.facebook.com/docs/graph-api/reference/adaccount/insights) and [Meta Insights best practices](https://developers.facebook.com/docs/marketing-api/insights/best-practices/v2.9/). See [source and decision notes](references/sources.md).

## Inputs

Collect account alias, time zone, currency, date range and comparator, entity level, click variant, named action and value, observed attribution settings, and required breakdowns. Record the source and effective API version.

## Workflow

1. Use the [shared reporting method](../../ads/ad-reporting/SKILL.md). Query `insights` at the target level with an explicit date range. Start with a small unbroken query. Fetch all needed pages through the connector. Use the documented async report path when supported for large reports. Mark partial results and report time of extraction.
2. Name the click type and action type. Match the same action in `actions` and `action_values` for cost and value calculations when using those fields. Avoid summing overlapping purchase or lead aliases. Preserve unavailable or privacy-limited cells. Fetch aggregate reach, frequency and uniques at the report's grain.
3. Validate one breakdown at a time against supported fields and combinations. If the conversion cell is missing in the breakdown, retry the evidence read at an eligible grain and retain the original as unavailable.
4. Read the actual ad-set and report attribution context. Compare conversion event, time basis, time zone, currency and lag before reconciling Meta with analytics or CRM. Meta's Insights guidance describes a change that disregards `action_report_time` and `use_unified_attribution_setting`. Check live behavior before attributing differences to either request parameter.
5. Return a table with dates, grain, spend, outcome, CPA or ROAS where defined, attributed definition, completeness and observed differences. Annotate historical comparisons if attribution definitions changed. Keep attributed and incremental results distinct.

## Approval and routing

Start with read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Route missing or doubled signals to [tracking](../meta-ads-tracking-attribution/SKILL.md) and then send verified decision inputs to [optimization](../meta-ads-optimization/SKILL.md).
