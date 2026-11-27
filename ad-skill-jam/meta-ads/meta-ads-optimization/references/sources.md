# Sources and decisions

Verified on 2026-11-26 against [Meta Performance 5](https://en-gb.facebook.com/business/ads/performance-marketing) and [Meta Ads Manager tips](https://business-auth.facebook.com/business/tools/ads-manager/tips).

- Meta discusses learning, account simplification and creative diversification. Frequency, CTR and cost in combination are diagnostic evidence, with thresholds set from the account. [Meta Performance 5](https://en-gb.facebook.com/business/ads/performance-marketing)
- Meta advises allowing learning before making significant edits. Use the observed state and history. [Meta Ads Manager tips](https://business-auth.facebook.com/business/tools/ads-manager/tips)
- Use named Insights fields and comparable aggregation to locate changes. [Meta Ads Insights reference](https://developers.facebook.com/docs/graph-api/reference/adaccount/insights)
- Meta documents form locations and quality optimization. Use CRM outcomes to test the effectiveness of either location. [Meta lead ads with forms](https://business-auth.facebook.com/business/ads/ad-objectives/lead-generation/lead-ads-with-forms)
- Meta documents connecting first-party CRM outcomes to lead optimization when eligible. [Meta Conversions API for CRM](https://en-gb.facebook.com/business/learn/video/conversions-api-CRM)

## Decision example

An instant form spends 200 USD on 20 leads with two qualified in CRM. A website form spends 200 USD on 10 leads with five qualified. With equivalent cohorts and maturity, the instant form costs 10 USD per lead and 100 USD per qualified lead. The website form costs 20 USD per lead and 40 USD per qualified lead. Use the business target and uncertainty around the small qualified counts to choose a follow-up test or monitoring threshold.

The mined workflows disagree on fixed fatigue cutoffs and scaling increments. Keep a conservative monitor decision when matched account evidence or a business target is missing. Treat any numeric alert supplied by the advertiser as a review trigger, with its unit, denominator and date window recorded.
