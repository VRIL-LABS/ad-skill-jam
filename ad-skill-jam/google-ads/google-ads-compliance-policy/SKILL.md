---
name: google-ads-compliance-policy
description: Review Google ads, assets, destinations and account restrictions. Use for disapproved or limited ads, restricted categories, verification, claims and appeals.
---

# Google Ads compliance and policy

**Verified on 2026-11-26 against** [Google Ads policies](https://support.google.com/adspolicy/answer/6008942) and [Destination requirements](https://support.google.com/adspolicy/answer/6368661). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/google-ads.md).

## Inputs

Collect creative, exact final destination and redirects, market, targeting, product or service, claim evidence, policy reason and review state.

## Workflow

1. Check the relevant Google policy and market requirements. Identify prohibited and restricted cases, approval or certification requirements, and personalized advertising restrictions where applicable. Keep uncertain eligibility out of an activation plan.
2. Review the real mobile destination and the ad's promise together. Verify accessibility in the target market, consistent identity and price, functionality, supported claims and product details. Check ad, asset, campaign and account status.
3. Use the reported policy reason to draft a correction. When the record supports it, prepare a review request with evidence and follow the official route after approval. Keep advertiser verification and account review on the documented paths.
4. Return policy, exact evidence, scope, proposed compliant revision, verification needed and review status.

## Approval and routing

Start with authorized read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Send asset edits to [creative](../google-ads-creative/SKILL.md) and account restrictions or blocked delivery to [troubleshooting](../google-ads-troubleshooting/SKILL.md).
