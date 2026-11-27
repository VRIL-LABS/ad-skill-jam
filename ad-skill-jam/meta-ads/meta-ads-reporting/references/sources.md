# Sources and decisions

Verified on 2026-11-26 against [Meta Ads Insights reference](https://developers.facebook.com/docs/graph-api/reference/adaccount/insights) and [Meta Insights best practices](https://developers.facebook.com/docs/marketing-api/insights/best-practices/v2.9/).

- Official level, fields, time range, action values and attribution-window schema. Check current endpoint behavior for the effective version. [Meta Ads Insights reference](https://developers.facebook.com/docs/graph-api/reference/adaccount/insights)
- The June 2025 update notice describes ad-set attribution and a mixed date basis. The same page has older override guidance. Prefer the dated notice and verify observed report behavior. [Meta Insights best practices](https://developers.facebook.com/docs/marketing-api/insights/best-practices/v2.9/)
- Meta documents supported combinations and restrictions for some offsite metrics. Query totals separately when breakdown detail is unavailable. [Meta Insights breakdowns](https://developers.facebook.com/docs/marketing-api/insights/breakdowns/v19.0/)
- Meta announced a phased March 2026 change for website and store conversions. Link clicks move into the click-through definition and other qualifying interactions into engage-through. Confirm rollout and report definitions for the account before comparing historical windows. [Meta March 2026 ad measurement announcement](https://about.fb.com/ltam/news/2026/03/simplificando-la-medicion-de-anuncios-para-un-mundo-social-first/)
- Use randomized experiments for causal comparison. Label attributed totals as reported credit. [Meta split testing](https://developers.facebook.com/docs/marketing-api/guides/split-testing/v2.9/)
- A page limit controls page size. Follow the connector's pagination until the requested result is complete. Keep cursor values and any credential-bearing URLs out of artifacts. [Meta Graph API pagination](https://developers.facebook.com/docs/graph-api/results/)
