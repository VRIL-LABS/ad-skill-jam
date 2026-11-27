# Sources and decisions

Verified on 2026-11-26 against [Performance Max setup](https://developers.google.com/google-ads/api/performance-max/getting-started) and [Performance Max asset group reporting](https://developers.google.com/google-ads/api/performance-max/asset-group-reporting).

- Use campaign, asset, group and asset link requirements for the specified PMax type. Dependent create operations require a single request without partial failure. [Performance Max setup](https://developers.google.com/google-ads/api/performance-max/getting-started)
- Asset-group metrics and coverage are available. There is no individual generated-ad performance report. [Performance Max asset group reporting](https://developers.google.com/google-ads/api/performance-max/asset-group-reporting)
- Channel reporting uses compatible campaign metrics and segments. Check the current fields and coverage. [Performance Max channel reporting](https://developers.google.com/google-ads/api/performance-max/campaign-reporting)
- Validate audience signals, brand, negative and final URL controls for the configured type. [Performance Max optimizations](https://developers.google.com/google-ads/api/performance-max/optimizations)
- Retail asset groups require a valid product partition tree. [Retail listing groups](https://developers.google.com/google-ads/api/performance-max/listing-groups)
