# Sources and decisions

Verified on 2026-11-26 against [Reddit Ads API v3 overview](https://ads-api.reddit.com/docs/v3/api/reddit-advertising-api) and [Reddit Ads API rate limiting](https://ads-api.reddit.com/docs/v3/guides/quick-start/rate-limiting).

- Use the official endpoint scopes, OAuth guidance and versioned operation contract. [Reddit Ads API v3 overview](https://ads-api.reddit.com/docs/v3/api/reddit-advertising-api)
- Read the policy and current usage headers. Distinguish request groups and respond to 429 using reset and retry timing. [Reddit Ads API rate limiting](https://ads-api.reddit.com/docs/v3/guides/quick-start/rate-limiting)
- Inspect object state, parent relationships and eligibility. [Ads API object reference](https://ads-api.reddit.com/docs/v3/api/ads)
- Confirm approved and rejected statuses and relevant reason through Ads Manager. [Reddit ad review process](https://business.reddithelp.com/s/article/About-Reddits-ad-review-process)
- Inspect payment and account funding evidence when delivery is blocked. [Reddit billing and payment](https://business.reddithelp.com/s/article/When-are-you-charged)
- Check retired onsite form creation and field changes for stale payloads. [Reddit Ads API changelog](https://ads-api.reddit.com/docs/v3/history)
- Use date and breakdown requirements for report validation. [Get A Report](https://ads-api.reddit.com/docs/v3/api/get-a-report)
