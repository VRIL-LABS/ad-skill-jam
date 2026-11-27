# Snapchat Ads API ledger

Verified on 2026-11-26 against [Snap Ads API quick start](https://developers.snap.com/marketing-api/Ads-API/quick-start).

- The Ads API uses v1. Campaigns are account-scoped and ad squads carry targeting, placement and bid controls. [Snap Ads API quick start](https://developers.snap.com/marketing-api/Ads-API/quick-start)
- The campaigns endpoint accepts a provider page size of 50 to 1,000 rows. Follow its pagination cursor. Read the current objective from `objective_v2_properties.objective_v2_type` when present. [Snap campaign inventory](https://developers.snap.com/marketing-api/Ads-API/campaigns#fetch-all-campaigns-under-an-ad-account)
- Measure with explicit entity and granularity and retain the configured attribution window and raw money units. [Snap measurement](https://developers.snap.com/marketing-api/Ads-API/measurement)
