# Sources and decisions

Verified on 2026-11-26 against [Google Ads spending limits](https://support.google.com/google-ads/answer/10486637) and [Evaluate automated bidding](https://support.google.com/google-ads/answer/10167267).

- For most campaigns check 2 times average daily and 30.4 times monthly limits, account for exceptions and recompute exposure after changes. [Google Ads spending limits](https://support.google.com/google-ads/answer/10486637)
- Google recommends evaluating Target ROAS against realized ROAS after one to two full conversion cycles, using the bid strategy report. Longer lag and limited data affect the decision. [Evaluate automated bidding](https://support.google.com/google-ads/answer/10167267)
- Learning calibration varies with event data and change scope. Use observed state. Avoid universal fixed scaling percentages. [Smart Bidding learning](https://support.google.com/google-ads/answer/13020501)
- Normalize documented raw micros fields in account currency before interpreting or proposing values. [v26 metric definitions](https://developers.google.com/google-ads/api/reference/rpc/v26/Metrics)
