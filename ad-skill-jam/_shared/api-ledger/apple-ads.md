# Apple Ads API ledger

Verified on 2026-11-26 against [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

- Apple's replacement API is Apple Ads Platform API v1. Use `POST https://api.ads.apple.com/v1/campaigns/query` with `X-AP-Context: adAccountId=<id>` for campaign inventory. [Calling the Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api/calling-apple-ads-platform-api)
- The legacy Campaign Management API v5 is deprecated and sunsets January 26, 2027. Validate replacement access and reconcile one account before switching reporting jobs. [Legacy API OAuth and sunset](https://developer.apple.com/documentation/apple_ads/implementing-oauth-for-the-apple-search-ads-api)
- Read report definitions and allowed placements before mapping keyword or attribution data. [Apple campaign reporting](https://ads.apple.com/app-store/help/reporting/0023-view-and-analyze-campaign-results)
