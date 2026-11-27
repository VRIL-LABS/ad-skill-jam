# Amazon Ads API ledger

Verified on 2026-11-26 against [Sponsored Products](https://advertising.amazon.com/solutions/products/sponsored-products).

- Sponsored Products, Sponsored Brands, Sponsored Display and DSP have different campaign and reporting capabilities. Use the applicable product contract. [Sponsored Products](https://advertising.amazon.com/solutions/products/sponsored-products)
- The local MCP reads Sponsored Products through Unified Campaign Management v1 using `POST /adsApi/v1/query/campaigns`, the `Amazon-Ads-ClientId` header, the regional advertiser account scope and the required ad product filter. Verify product-specific mappings before migrating other operations. [Sponsored Products OpenAPI contract](https://github.com/amzn/ads-advanced-tools-docs/blob/main/unified-campaign-management-migration-skills/api-specs/unified-api-sp.json)
- Amazon's Sponsored Products search-term report has click-conditioned coverage. Preserve ad product, retail scope and attribution before comparing results. [Sponsored Products search-term report](https://advertising.amazon.com/help/G3HEFZYWZF84NPS9)
