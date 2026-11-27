# Sources and decisions

Verified on 2026-11-26 against [Conversions API v3 direct integration](https://ads-api.reddit.com/docs/v3/guides/programs/capi/direct-integration) and [Reddit event deduplication](https://business.reddithelp.com/articles/Knowledge/event-deduplication).

- Direct integration documents supported channels, the v3 timestamp unit and same-channel deduplication. [Conversions API v3 direct integration](https://ads-api.reddit.com/docs/v3/guides/programs/capi/direct-integration)
- The v3 endpoint specifies event fields, UTC epoch milliseconds and the optional test identifier. [Post Conversion Events](https://ads-api.reddit.com/docs/v3/operations/Post%20Conversion%20Events)
- Explicit matching conversion IDs are the preferred method. Match event type and custom name and send within two days. Session-based deduplication has separate conditions. [Reddit event deduplication](https://business.reddithelp.com/articles/Knowledge/event-deduplication)
- Event Testing supplies the ID used as `test_id` in the v3 test request and shows the received test events. [Verify Conversion Events](https://ads-api.reddit.com/docs/v3/capi-verify-events)
- Inspect actual click-through and view-through settings. Separate delivery, event receipt and attributed reporting. [Reddit attribution overview](https://business.reddithelp.com/s/article/Web-Attribution-Overview)
