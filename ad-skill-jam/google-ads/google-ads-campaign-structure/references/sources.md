# Sources and decisions

Verified on 2026-11-26 against [Create campaigns](https://developers.google.com/google-ads/api/docs/campaigns/create-campaigns) and [Campaign types](https://developers.google.com/google-ads/api/docs/campaigns/overview).

- Use paused campaign creation and link the appropriate configured campaign budget. [Create campaigns](https://developers.google.com/google-ads/api/docs/campaigns/create-campaigns)
- Review Search matching, automation and URL settings as separate configuration choices. [AI Max for Search setup](https://developers.google.com/google-ads/api/docs/campaigns/ai-max-for-search-campaigns/getting-started)
- Inspect geographic coverage and advanced location options. [Geographic targeting](https://support.google.com/google-ads/answer/1722043)
- Use the channel-specific minimum for the account currency and select eligible bidding. [Demand Gen campaign creation](https://developers.google.com/google-ads/api/docs/demand-gen/create-campaign)
- Verify supported Demand Gen channels and the exact ad-group configuration. [Demand Gen channel controls](https://developers.google.com/google-ads/api/docs/demand-gen/channel-controls)
- App campaigns use MULTI_CHANNEL and disallow shared budgets and portfolio bidding. [App campaign setup](https://developers.google.com/google-ads/api/docs/app-campaigns/create-campaign)
- From September 23, 2026, new Smart campaigns cannot be created. Existing ones can still serve and be updated. [Google Ads API feature changes](https://developers.google.com/google-ads/api/docs/deprecations)
- GeneratePMaxDraftCampaign can validate the migration or create a paused, incomplete draft. Check supported request fields. [Google Ads API release notes](https://developers.google.com/google-ads/api/docs/release-notes)
