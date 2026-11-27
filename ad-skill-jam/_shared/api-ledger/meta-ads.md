# Meta Ads API ledger

Verified on 2026-11-26 against the [Meta Graph and Marketing API v26.0 changelog](https://developers.facebook.com/documentation/development/graph-api/changelog/version26.0) and [platform versioning](https://developers.facebook.com/docs/graph-api/guides/versioning?locale=en_US).

| Item | Verified behavior | Use in this pack |
| --- | --- | --- |
| Marketing API baseline | Meta's release changelog publishes Marketing API v26.0, released July 29, 2026. The [aggregate versions table](https://developers.facebook.com/docs/graph-api/changelog/versions/) has an older Marketing API table. | Treat v26.0 as the versioned change baseline. Confirm the effective connector version and endpoint contract before reads or writes. The unversioned object references can display a newer schema. |
| v24.0 | The aggregate table lists October 6, 2026 as Marketing API expiration. | Treat v24.0 pins in older integrations as historical. Graph API lifecycle dates apply separately. |
| Delivery estimate | The deprecated `daily_outcomes_curve`, `budget_guardrail`, and `estimate_dau` fields were removed across supported versions on October 27, 2026. | Treat missing forecast fields as unavailable. Use observed account data for planning. |
| Manual placements | v26.0 reports an error for an explicitly requested Instagram Explore Feed placement. Meta documents that Messenger Stories is dropped from effective placements, with the change reaching all versions October 27, 2026. | Validate proposed and effective placements. Historical targeting can still show Messenger Stories. |
| Restricted audiences | v26.0 requires an explicit `targeting_automation.advantage_audience` of `0` or `1` when creating non-broad Housing, Employment or Financial Products and Services ad sets with relaxable targeting. | Check the category and the exact condition. Broad and default setups are outside this requirement. |
| Creative and destination | Website and App conversion locations disallow web-only app-link treatment. Poll creation or creative updates with poll components are unavailable. Eligible creatives may default to Website and Shop when the advertiser has a shop. | Check destination, behavior after save, and supported creative components. See the changelog for endpoint and version scope. |

Recheck the ledger when a connector upgrade, deprecation, changed schema, or conflicting readback affects the current task. Record the specific source, date, and version with any update.
