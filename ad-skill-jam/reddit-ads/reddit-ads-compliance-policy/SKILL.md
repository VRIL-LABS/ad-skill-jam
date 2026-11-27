---
name: reddit-ads-compliance-policy
description: Review Reddit ads, targeting, landing pages or account review issues. Use for ad rejection, regulated products or geographies, brand safety inventory, comment plans, and substantiation.
---

# Reddit Ads compliance and policy

**Verified on 2026-11-26 against** [Reddit Ads Policy](https://business.reddithelp.com/articles/Knowledge/Reddit-Advertising-Policy-Overview) and [Reddit editorial requirements](https://business.reddithelp.com/articles/Knowledge/Reddit-Advertising-Policy-Editorial-Requirements). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/reddit-ads.md).

## Inputs

Collect the product and offer, exact creative, identity, final destination, all delivery regions, targeting and exclusions, review evidence, and any requirements for restricted categories.

## Workflow

1. Classify the offer under the current Reddit Ads Policy. Check prohibited and restricted categories, required permissions/disclosures, markets, and landing page conditions. If eligibility is unresolved, keep launch blocked pending evidence.
2. Review the supplied creative and final mobile flow for accurate claims, advertiser identity, functional links, consistent price and offer, and any customer information requested. Flag misrepresentation and unsupported claims for correction.
3. Inspect inventory tier, community and keyword exclusions and comment settings against the brief. Document which controls can actually be verified through the current account. Treat suitability and ad eligibility as separate checks.
4. Read the rejection reason from Ads Manager or the review notice. Prepare the compliant correction or request human review through Reddit's documented support route where the record supports it.
5. Return the affected asset, geography, exact problem, policy source, severity, compliant revision and current review status.

## Approval and routing

Start with authorized read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Send creative or destination revisions to [creative](../reddit-ads-creative/SKILL.md), and account delivery diagnosis to [troubleshooting](../reddit-ads-troubleshooting/SKILL.md).
