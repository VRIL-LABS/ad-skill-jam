---
name: google-ads-creative
description: Write or review Responsive Search Ads, assets, landing-page message match and creative automation. Use for RSA variants, pinning, sitelinks, previews, and ad or asset report interpretation.
---

# Google Ads creative

**Verified on 2026-11-26 against** [Responsive Search Ads](https://support.google.com/google-ads/answer/7684791) and [Responsive Search Ads API guide](https://developers.google.com/google-ads/api/docs/responsive-search-ads/overview). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/google-ads.md).

## Inputs

Collect target search intent, offer and substantiated claims, brand constraints, final URL and assets, target market, and format-specific or policy requirements.

## Workflow

1. Write standalone assets that can combine in any valid order. Address the query intent with an accurate claim, proof or concrete product detail and next action. Use [ad copy review](../../ads/ad-antislop/SKILL.md) before preview.
2. Check each RSA field against the current count and length limits. Google permits up to 15 headlines of 30 characters, 4 descriptions of 90 characters, and up to 15 characters per path field. Apply the double-width character rule and verify all fields after drafting.
3. Pin only where the brief or required disclosure needs it. For text required in every served RSA, use Headline 1, Headline 2, or Description 1 and check that every eligible asset for the pinned slot preserves the text. Review automated text and URL settings, destination readiness, and separately served assets.
4. Read asset and ad metrics at the supported grain. Treat labels and Ad Strength as diagnostics, with comparisons subject to serving mix and exposure. Return draft copy with length check, pinned positions, preview notes, claims and destination evidence.

## Approval and routing

Start with authorized read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Route policy or claims to [compliance](../google-ads-compliance-policy/SKILL.md) and creative tests to [experimentation](../google-ads-experimentation/SKILL.md).
