# Sources and decisions

Verified on 2026-11-26 against [Retail listing groups](https://developers.google.com/google-ads/api/performance-max/listing-groups) and [Merchant Center product data specification](https://support.google.com/merchants/answer/7052112).

- Retail Performance Max uses AssetGroupListingGroupFilter trees; validate complete partitions. [Retail listing groups](https://developers.google.com/google-ads/api/performance-max/listing-groups)
- Use asset_group_product_group_view for eligible listing-filter reporting and appropriate product reporting for item performance. [Performance Max retail reporting](https://developers.google.com/google-ads/api/performance-max/retail-reporting)
- Google specifies required feed attributes and which depend on market or item type. [Merchant Center product data specification](https://support.google.com/merchants/answer/7052112)
- Inspect regional and landing-page mismatches and verify the affected products. [Merchant Center regional price and availability](https://support.google.com/merchants/answer/16785141)
- Standard Shopping partitions products under the ad group. When creating the tree through the API, send all nodes in one request. [Standard Shopping listing groups](https://developers.google.com/google-ads/api/docs/shopping-ads/create-listing-groups)
