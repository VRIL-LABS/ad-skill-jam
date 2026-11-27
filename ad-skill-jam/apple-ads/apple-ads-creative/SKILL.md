---
name: apple-ads-creative
description: Product page and ad review for Apple Ads. Use when asked to match custom product pages to Apple Ads query intent or placement.
---

# Apple Ads product page and ad review

Verified on 2026-11-26 against [Custom product pages](https://developer.apple.com/app-store/custom-product-pages/). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/apple-ads.md).

## Inputs

Collect placement, eligible page assets, localization, observed terms and post-tap outcomes.

## Workflow

1. Map the promise, screenshot sequence and localized value proposition to traffic intent. Check product page eligibility in the target storefront.
2. Preview the user journey from the ad into the page. Use a consistent control and capture baseline storefront and query mix before comparing variants.
3. Check status and delivery after approval. Compare post-tap outcomes with exposure and source mix.

## Output

Return a page and ad-variation brief with storefront, intent, assets, eligibility and test outcome.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-antislop](../../ads/ad-antislop/SKILL.md) rules where relevant. Continue with [Install and downstream attribution](../apple-ads-tracking-attribution/SKILL.md) when that work is needed.
