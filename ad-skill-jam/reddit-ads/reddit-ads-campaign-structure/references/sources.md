# Sources and decisions

Verified on 2026-11-26 against [Standard campaign setup](https://ads-api.reddit.com/docs/v3/guides/programs/campaign/campaign-setup) and [Campaign objective migration](https://ads-api.reddit.com/docs/v3/guides/programs/campaign/campaign-objective-migration).

- Check the hierarchy, campaign and ad-group fields and paused creation. Resolve the applicable objective variant with the migration table. [Standard campaign setup](https://ads-api.reddit.com/docs/v3/guides/programs/campaign/campaign-setup)
- Max uses a separate automated hierarchy and `DYNAMICCREATIVEADTEMPLATE` ads. Confirm objective eligibility with the dated changelog. [Reddit Max campaign setup](https://ads-api.reddit.com/docs/v3/guides/programs/campaign/max-campaign-setup)
- September 30 retired new onsite form creation. October 1 added Sales and Lead Generation to the Max Create Campaign contract. Existing onsite form leads remain retrievable where authorized. [Reddit Ads API changelog](https://ads-api.reddit.com/docs/v3/history)
- Use `BRAND_AWARENESS` and `SALES` where applicable. `use_catalog=true` is for Sales with a catalog and requires a `product_set_id` for each ad group. The catalog Purchase optimization combination uses `SEVEN_DAY_CLICKS_ONE_DAY_VIEW`. [Campaign objective migration](https://ads-api.reddit.com/docs/v3/guides/programs/campaign/campaign-objective-migration)
- Community, keyword and automated audiences operate separately from Feed and Conversation placement choices. [Reddit Audiences](https://business.reddithelp.com/s/article/reddit-audiences)
- The v3 Create Campaign contract requires `conversion_pixel_id` for all CBO campaigns from July 13, 2026. [Create Campaign](https://ads-api.reddit.com/docs/v3/api/create-campaign)
- Confirm status and asset support in the ad create/read contract. [Create Ad](https://ads-api.reddit.com/docs/v3/api/create-ad)
