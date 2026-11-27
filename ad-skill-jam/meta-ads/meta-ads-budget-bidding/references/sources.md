# Sources and decisions

Verified on 2026-11-26 against [Meta Campaign reference](https://developers.facebook.com/docs/marketing-api/reference/adcampaigngroup/) and [Meta budget and scheduling guidance](https://business-auth.facebook.com/business/m/small-business/am-advertiser-success-center/ad-creation/budget-and-schedule).

- Meta lists the auction campaign bid strategies and tradeoffs. Map the UI label to the verified endpoint field for the connector. [Meta Campaign reference](https://developers.facebook.com/docs/marketing-api/reference/adcampaigngroup/)
- Inspect eligible ad-set budget fields, spend limits, and bid settings. Read the specific amount unit for the field and currency. [Meta Ad Set reference](https://developers.facebook.com/docs/graph-api/reference/ad-campaign/)
- Meta describes daily budgets as averages and explains lifetime budgets and schedules. Plan separately for hard user constraints. [Meta budget and scheduling guidance](https://business-auth.facebook.com/business/m/small-business/am-advertiser-success-center/ad-creation/budget-and-schedule)
- Significant edits can affect learning. Size changes from the advertiser's conditions and approved exposure. A fixed scaling percentage is outside this pack's decision rules. [Meta Ads Manager tips](https://business-auth.facebook.com/business/tools/ads-manager/tips)

## Planning examples

- Meta's budget guidance describes days with spend up to 75% above the daily average budget. A 100 USD/day setting can exceed a 100 USD calendar-day cap. Verify the controls available for the account and show the exposure before seeking approval. [Meta budget and scheduling guidance](https://business-auth.facebook.com/business/m/small-business/am-advertiser-success-center/ad-creation/budget-and-schedule)
- On a proposal to move a budget from 100 USD/day to 110 USD/day, report +10 USD/day and +10%. Estimate exposure using the applicable controls and schedule. Include the maximum exposure the user authorizes and the evidence that would trigger a new proposal to reverse the change.
