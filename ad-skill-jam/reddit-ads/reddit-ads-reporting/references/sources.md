# Sources and decisions

Verified on 2026-11-26 against [Get A Report](https://ads-api.reddit.com/docs/v3/api/get-a-report) and [Reporting metric reference](https://ads-api.reddit.com/docs/v3/guides/programs/reporting/metric-reference).

- Reddit documents UTC default, pagination, field-specific divisors, compatible breakdowns and metrics that take up to 6 hours to stabilize. Historical conversions may update on the daily refresh. [Get A Report](https://ads-api.reddit.com/docs/v3/api/get-a-report)
- Use the current reporting metric names and outcome/value definitions. Example: 2,500,000 raw SPEND is 2.50 in account currency and 500 raw purchase total value is 5.00 in its documented currency. When currencies agree, that gives ROAS of 2.0. [Reporting metric reference](https://ads-api.reddit.com/docs/v3/guides/programs/reporting/metric-reference)
- From December 8, hourly ranges over 7 days and restricted breakdown combinations return HTTP 400. Check the listed combinations as part of migration. [Upcoming Reporting API changes](https://ads-api.reddit.com/docs/v3/guides/programs/reporting/upcoming-reporting-api-changes)
- Named `conversion_custom_events` accepts up to 20 events per request. Slot-based custom-event fields are legacy. [Reddit Ads API changelog](https://ads-api.reddit.com/docs/v3/history)
- Clicks and visits differ, and third-party reporting may use different attribution assumptions. [Reporting discrepancies](https://business.reddithelp.com/s/article/Third-Party-Reporting-Doesnt-Match-Reddit-Ads-Manager)
- Use server-supplied pagination links for complete results. [Reddit Ads API v3 overview](https://ads-api.reddit.com/docs/v3/api/reddit-advertising-api)
