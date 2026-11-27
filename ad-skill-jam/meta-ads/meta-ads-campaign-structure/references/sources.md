# Sources and decisions

Verified on 2026-11-26 against [Meta Campaign reference](https://developers.facebook.com/docs/marketing-api/reference/adcampaigngroup/) and [Meta Marketing API v26.0 changelog](https://developers.facebook.com/documentation/development/graph-api/changelog/version26.0).

- New campaign planning uses the six outcome-driven objectives and validates the objective, destination and optimization mapping. Check the ODAX validation section. [Meta Campaign reference](https://developers.facebook.com/docs/marketing-api/reference/adcampaigngroup/)
- Confirm the ad set fields and eligibility for budget, optimization, targeting and promoted object. [Meta Ad Set reference](https://developers.facebook.com/docs/graph-api/reference/ad-campaign/)
- Audience suggestions can expand. Check the product's audience controls and restrictions for strict requirements. [Meta Advantage+ Audience](https://en-gb.facebook.com/business/ads/meta-advantage-plus/audience)
- Meta supports instant forms and website forms. Treat differences in quality or cost as account hypotheses. [Meta lead ads with forms](https://business-auth.facebook.com/business/ads/ad-objectives/lead-generation/lead-ads-with-forms)
- In v26, reject explicit Instagram Explore Feed and clear historical Messenger Stories from proposed manual settings. The explicit Advantage+ Audience flag applies only to the specified restricted, non-broad ad-set creation case. [Meta Marketing API v26.0 changelog](https://developers.facebook.com/documentation/development/graph-api/changelog/version26.0)
- Check the ad creation and configured/effective status contract. [Meta Ad reference](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/adgroup)

## API planning

| Campaign outcome | Objective |
| --- | --- |
| Awareness | `OUTCOME_AWARENESS` |
| Traffic | `OUTCOME_TRAFFIC` |
| Engagement | `OUTCOME_ENGAGEMENT` |
| Leads | `OUTCOME_LEADS` |
| App promotion | `OUTCOME_APP_PROMOTION` |
| Sales | `OUTCOME_SALES` |

For an instant form, Meta documents `OUTCOME_LEADS`, `destination_type=ON_AD`, an eligible lead optimization goal, and the Page in the promoted object. Confirm form access and the creative's form attachment. [Meta lead ads API guide](https://developers.facebook.com/docs/marketing-api/guides/lead-ads/create/v2.6/)

Use the authorized connector's versioned account edges for campaigns, ad sets, creatives and ads. Resolve the required parent, identity and creative references before staging each child. Capture configured and effective status from the readback. If the connector cannot stage an entity paused, return an offline draft for review. [Meta Marketing API reference](https://developers.facebook.com/docs/marketing-api/reference/v27.0/) · [Meta Campaign reference](https://developers.facebook.com/docs/marketing-api/reference/adcampaigngroup/) · [Meta Ad reference](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/adgroup)
