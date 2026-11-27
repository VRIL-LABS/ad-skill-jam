# Sources and decisions

Verified on 2026-11-26 against [Meta Ad Account Insights](https://developers.facebook.com/docs/graph-api/reference/adaccount/insights) and [Meta Insights breakdown guidance](https://developers.facebook.com/docs/marketing-api/insights/breakdowns/v19.0/).

Meta exposes multiple click and action types and supports different breakdowns. These formula and rollup rules define project metrics. Use the provider's own definition and label for named native metrics. For instance, unique outbound CTR uses a reach denominator when defined that way by the provider. Preserve the provider definition when exporting it.
