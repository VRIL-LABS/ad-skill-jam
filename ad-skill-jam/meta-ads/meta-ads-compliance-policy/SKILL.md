---
name: meta-ads-compliance-policy
description: Review Meta ads, audiences, lead forms and destinations for policy risk. Use for rejected ads, Special Ad Categories, regulated offers, personal-attribute claims, or eligibility questions.
---

# Meta Ads compliance and policy

**Verified on 2026-11-26 against** [Meta Advertising Standards guidance](https://en-gb.facebook.com/business/learn/lessons/advertising-standards-best-practices) and [Meta ad review guidelines](https://secure.facebook.com/business/ads/review-policy-guidelines?locale=en_GB). See [source and decision notes](references/sources.md).

## Inputs

Collect the exact product and offer, creative, copy, targeting and placements, geography, final destination or form, substantiation and review reasons. Use current platform policy for the relevant market.

## Workflow

1. Identify the category and geography. Check restrictions, required authorizations, disclosures and targeting controls. For Housing, Employment, or Financial Products and Services, validate the matching category and any country-specific setup. Check Meta's current rules for political, electoral and social issue ads in each delivery market.
2. Review copy and media for unsupported or misleading claims and assertions about personal attributes. Inspect the final mobile destination and form for continuity, access, required disclosures and allowed data collection. Document the exact evidence that needs revision.
3. Read the provider's rejection detail or account restriction when available. Propose a compliant correction, or use Meta's review process when evidence supports an appeal. Retain the affected asset, reason and evidence in redacted form.
4. For API setup, check the restricted-audience rule in the [API ledger](../../_shared/api-ledger/meta-ads.md) and verify the supported configuration. Treat unresolved eligibility as blocked for launch.
5. Return each issue with region, category, evidence, policy link, severity and a compliant revision. Describe platform review status separately from the internal draft review.

## Approval and routing

Start with read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Route rewrites and previews to [creative](../meta-ads-creative/SKILL.md), and account restrictions or effective delivery status to [troubleshooting](../meta-ads-troubleshooting/SKILL.md).
