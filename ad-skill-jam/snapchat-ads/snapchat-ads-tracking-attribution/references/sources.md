# Sources and decision notes

Verified on 2026-11-26 against [Snap conversion deduplication](https://developers.snap.com/marketing-api/Conversions-API/Deduplication) and [Snap Ads API quick start](https://developers.snap.com/marketing-api/Ads-API/quick-start).

Use Snap's event matching contract for the actual integration. Do not expose raw customer identifiers in diagnosis.

Evaluate recommendations against the advertiser's currency, goals, observed volume and reporting lag. Record missing evidence in the output.
