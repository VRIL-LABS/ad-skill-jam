# Sources and decisions

Verified on 2026-11-26 against [Search terms report](https://support.google.com/google-ads/answer/2472708) and [Negative keywords](https://support.google.com/google-ads/answer/2453972).

- SearchTermView excludes Performance Max. [v26 SearchTermView](https://developers.google.com/google-ads/api/reference/rpc/v26/SearchTermView)
- CampaignSearchTermView provides campaign-level search terms. PMax rows are excluded when keyword-related segments are selected. [v26 campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_view)
- Google omits some queries for privacy. Avoid treating visible terms as all clicks or all spend. [Search terms report](https://support.google.com/google-ads/answer/2472708)
- Review the behavior of broad, phrase and exact negatives and their close-variant limitations. [Negative keywords](https://support.google.com/google-ads/answer/2453972)
- Confirm account-level application scope and inventory support before using a broad control. [Account-level negative keywords](https://support.google.com/google-ads/answer/11396330)
- Compare the report period with the date the exclusion was applied. [Troubleshoot negative keywords](https://support.google.com/google-ads/answer/9701952)

## Match checks before approval

For a two-word negative, broad can block both words in any order. Phrase checks the words in order and can block a query with additional words. Exact checks the complete ordered query. For example, test a proposed negative for `screen repair` against `repair screen today`, `same day screen repair`, and `screen repair`. Include known converting and adjacent queries in the review. Check close variants individually. [Negative keywords](https://support.google.com/google-ads/answer/2453972)
