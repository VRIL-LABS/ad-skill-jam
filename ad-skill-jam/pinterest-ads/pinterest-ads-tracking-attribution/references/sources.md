# Sources and decision notes

Verified on 2026-11-26 against [Conversions API](https://developers.pinterest.com/docs/track-conversions/track-conversions-in-the-api/) and [List campaigns](https://developers.pinterest.com/docs/api/v5/campaigns-list/).

Check test events before production attribution. Minimize or redact identifiers and avoid mutating data during a read-only diagnosis.

Evaluate recommendations against the advertiser's currency, goals, observed volume and reporting lag. Record missing evidence in the output.
