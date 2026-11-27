# Sources and decisions

Verified on 2026-11-26 against [Get A Report](https://ads-api.reddit.com/docs/v3/api/get-a-report) and [Reddit Ads API changelog](https://ads-api.reddit.com/docs/v3/history).

- Use documented metric grain, units and approved date windows. [Get A Report](https://ads-api.reddit.com/docs/v3/api/get-a-report)
- Check retired features and changed objective labels before grading. [Reddit Ads API changelog](https://ads-api.reddit.com/docs/v3/history)
- Inspect targeting and expansion separately from where the ads are shown. [Reddit Audiences](https://business.reddithelp.com/s/article/reddit-audiences)
- Double-source event delivery requires a deduplication check. [Reddit event deduplication](https://business.reddithelp.com/articles/Knowledge/event-deduplication)
- For current catalog Sales campaigns confirm product set mapping at each ad group. [Campaign objective migration](https://ads-api.reddit.com/docs/v3/guides/programs/campaign/campaign-objective-migration)
- Grade the configured inventory tier against the advertiser's actual suitability requirements. [Ad inventory types](https://business.reddithelp.com/s/article/About-ad-inventory-types)
