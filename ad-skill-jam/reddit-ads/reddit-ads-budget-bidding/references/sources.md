# Sources and decisions

Verified on 2026-11-26 against [Budgets and Bidding](https://business.reddithelp.com/articles/Knowledge/How-much-do-Reddit-Ads-cost) and [Create Campaign](https://ads-api.reddit.com/docs/v3/api/create-campaign).

- Reddit describes ad-group overspend of up to 20% and the campaign lifetime cap as a separate billing limit. Target Cost eligibility lists at least 200 selected goal events in 28 days for Sales/Lead Generation and 120 for App Promotion. Verify the selected optimization goal and active eligibility. [Budgets and Bidding](https://business.reddithelp.com/articles/Knowledge/How-much-do-Reddit-Ads-cost)
- Check the campaign/ad-group field ownership and valid strategy for the objective and delivery type. Older objective labels can remain in this reference. [Campaign objective matrix](https://ads-api.reddit.com/docs/v3/guides/programs/campaign/campaign-objective-matrix)
- Example raw budget and bid amounts use micros. A 50 USD budget is 50,000,000 micros when this is the raw field format. [Standard campaign setup](https://ads-api.reddit.com/docs/v3/guides/programs/campaign/campaign-setup)
- A change above 20% may affect learning. Use observed state and account constraints to decide if the proposed change is justified. [About the Learning Phase](https://business.reddithelp.com/articles/Knowledge/learning-phase)
- An optional CBO campaign-level schedule overrides ad-group schedule control when present. [Reddit Ads API changelog](https://ads-api.reddit.com/docs/v3/history)
