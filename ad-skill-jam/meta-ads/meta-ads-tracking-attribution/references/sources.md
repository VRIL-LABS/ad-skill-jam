# Sources and decisions

Verified on 2026-11-26 against [Meta event deduplication guide](https://developers.facebook.com/documentation/ads-commerce/conversions-api/deduplicate-pixel-and-server-events) and [Meta server event reference](https://developers.facebook.com/documentation/ads-commerce/conversions-api/parameters/server-event).

- Match the browser and server event name and identifier in the same data source within 48 hours. Use the Events Manager evidence to verify the pair. [Meta event deduplication guide](https://developers.facebook.com/documentation/ads-commerce/conversions-api/deduplicate-pixel-and-server-events)
- Use Unix seconds and inspect the 7-day batch rejection rule for this interface. Check other interfaces separately. [Meta server event reference](https://developers.facebook.com/documentation/ads-commerce/conversions-api/parameters/server-event)
- Check website-required fields and the per-field hashing and normalization rules before implementing. [Meta Conversions API parameters](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/v25.0/)
- Test Events shows receipts. Events sent with a test code can still flow into measurement and targeting. [Meta Test Events guide](https://developers.facebook.com/documentation/ads-commerce/conversions-api/using-the-api)
- Meta describes use of first-party CRM outcomes with eligible lead campaigns. [Meta Conversions API for CRM](https://en-gb.facebook.com/business/learn/video/conversions-api-CRM)
- Meta documents restrictions on custom conversions that can contain disallowed health or financial information. Inspect allowable event payloads before proposing transmission. [Meta custom conversions reference](https://developers.facebook.com/docs/marketing-api/reference/custom-conversion/)
