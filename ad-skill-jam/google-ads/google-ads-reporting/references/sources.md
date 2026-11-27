# Sources and decisions

Verified on 2026-11-26 against [GAQL query structure](https://developers.google.com/google-ads/api/docs/query/structure) and [Search and SearchStream](https://developers.google.com/google-ads/api/rest/common/search).

- Use GoogleAdsFieldService or the versioned field reference to check compatibility. [GAQL query structure](https://developers.google.com/google-ads/api/docs/query/structure)
- Dates use account time zone. In v24 and later sub-monthly detail older than 37 months is unavailable; use supported coarser periods. [GAQL date ranges](https://developers.google.com/google-ads/api/docs/query/date-ranges)
- Segments change report grain and can affect which rows appear. Keep numerator and denominator scopes aligned. [GAQL segmentation](https://developers.google.com/google-ads/api/docs/reporting/segmentation)
- Search uses page tokens and SearchStream is a streaming alternative. [Search and SearchStream](https://developers.google.com/google-ads/api/rest/common/search)
- Cost fields and attributed outcomes have field-specific types and units. [v26 metric definitions](https://developers.google.com/google-ads/api/reference/rpc/v26/Metrics)
- Use conversion-date columns explicitly when needed; ordinary date reporting credits the interaction. [Conversion reporting](https://developers.google.com/google-ads/api/docs/conversions/reporting)
- Start from supported query patterns and verify against the effective version. [GAQL query cookbook](https://developers.google.com/google-ads/api/docs/query/cookbook)

## GAQL starting points

Replace the sample dates with the requested completed range in the client account's time zone. Check the final field set using the effective API version before execution.

Daily campaign delivery and attributed outcome totals.

```sql
SELECT segments.date, campaign.name, campaign.resource_name,
       metrics.impressions, metrics.clicks, metrics.cost_micros,
       metrics.conversions, metrics.conversions_value
FROM campaign
WHERE segments.date BETWEEN '2026-11-01' AND '2026-11-14'
ORDER BY segments.date, campaign.name
```

Performance Max search terms at campaign grain. Omit keyword-related segments to retain eligible Performance Max rows.

```sql
SELECT campaign.name, campaign_search_term_view.search_term, metrics.impressions,
       metrics.clicks, metrics.cost_micros
FROM campaign_search_term_view
WHERE campaign.advertising_channel_type = 'PERFORMANCE_MAX'
  AND segments.date BETWEEN '2026-11-01' AND '2026-11-14'
ORDER BY metrics.cost_micros DESC
```

Compare against an unsegmented campaign query for the same range before claiming full coverage. [GAQL query structure](https://developers.google.com/google-ads/api/docs/query/structure) · [v26 campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_view)
