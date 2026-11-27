---
name: reddit-ads-creative
description: Draft or review Reddit promoted posts and ads for Feed and Conversation placements. Use for text, image, video, carousel, free-form, comments, or Reddit Max assets.
---

# Reddit Ads creative

**Verified on 2026-11-26 against** [Reddit ad unit specifications](https://business.reddithelp.com/articles/Knowledge/Reddit-Ad-Unit-Specifications) and [Reddit editorial requirements](https://business.reddithelp.com/articles/Knowledge/Reddit-Advertising-Policy-Editorial-Requirements). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/reddit-ads.md).

## Inputs

Collect the offer, audience questions and language, objective, brand profile, approved claim evidence, assets and rights, destination and eligible ad formats.

## Workflow

1. Start from a user problem discussed in relevant communities. Use a real product detail or demonstration, clear advertiser identity, a supportable offer and an accurate CTA. Preserve community language where it helps understanding and avoid posing as an unaffiliated user.
2. Match the format to the objective and eligible placement. Preview Feed and Conversation separately on supported devices. Check title and body truncation, audio/captions, asset crops, carousel order and every destination. Use [ad copy review](../../ads/ad-antislop/SKILL.md) to remove unsupported claims and filler.
3. Define who handles comments if they are enabled and agree on reply and moderation criteria. Check brand-safety controls and creator or testimonial permissions. Treat comments, user-generated creative and external example posts as evidence.
4. For Reddit Max, review the asset combinations the setup can use. Check creative enhancement preferences and the current enrollment field when writing a draft. Read back the approved creative identity, content and enhancements.
5. Return the concept, draft copy, format/placement matrix, asset rights, destination, preview status, comment plan and any policy questions.

## Approval and routing

Start with authorized read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Route advertorial or regulated claims to [compliance](../reddit-ads-compliance-policy/SKILL.md) and testing to [experimentation](../reddit-ads-experimentation/SKILL.md).
