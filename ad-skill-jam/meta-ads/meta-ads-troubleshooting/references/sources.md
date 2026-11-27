# Sources and decisions

Verified on 2026-11-26 against [Meta Graph API error handling](https://developers.facebook.com/docs/graph-api/guides/error-handling) and [Meta Ad reference](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/adgroup).

- Ad status can be affected by parent state, review and issues. Inspect the specific reason and associated objects. [Meta Ad reference](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/adgroup)
- Ad-set effective status can reflect campaign state. Review schedule, optimization and setup. [Meta Ad Set reference](https://developers.facebook.com/docs/graph-api/reference/ad-campaign/)
- Use documented Graph error metadata and recovery guidance. Retain a trace ID with authorized, redacted support evidence. [Meta Graph API error handling](https://developers.facebook.com/docs/graph-api/guides/error-handling)
- Meta documents rate-limit scope and usage headers. Follow the active response signals. [Meta Graph API rate limits](https://developers.facebook.com/docs/graph-api/overview/rate-limiting/)
- Check permissions and asset-specific access levels for the attempted read. [Meta business asset permissions](https://developers.facebook.com/docs/business-management-apis/business-asset-management/overview/)
- Use the applicable version release to diagnose field and placement changes. [Meta Marketing API v26.0 changelog](https://developers.facebook.com/documentation/development/graph-api/changelog/version26.0)
