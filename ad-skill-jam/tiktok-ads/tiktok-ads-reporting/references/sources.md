# Sources and decision notes

Verified on 2026-11-26 against [Reporting API](https://ads.tiktok.com/gateway/docs/index?doc_id=1701890949889025) and [TikTok API for Business](https://ads.tiktok.com/gateway/docs/index?doc_id=1740591846408194).

Treat an application error as a failed report even when HTTP returns success. Campaign IDs and advertiser IDs are opaque.

Evaluate recommendations against the advertiser's currency, goals, observed volume and reporting lag. Record missing evidence in the output.
