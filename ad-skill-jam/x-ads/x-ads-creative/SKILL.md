---
name: x-ads-creative
description: Promoted post and creative review for X Ads. Use when asked to review X ad copy, media, cards and destinations.
---

# X Ads promoted post and creative review

Verified on 2026-11-26 against [X Ads creative specifications](https://business.x.com/en/help/campaign-setup/creative-ad-specifications). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/x-ads.md).

## Inputs

Collect proposed post, media, card type, placement, destination, CTA and eligible account or author.

## Workflow

1. Validate rendering and current placement specs for the selected promoted format.
2. Check the post-to-destination promise, ownership and tracking. Review policy status and record a first comparable variant.
3. Hold schedule and targeting steady if testing creative. Compare metrics aligned to the objective and include downstream signal when available.

## Output

Return draft copy and asset checklist with preview, destination and test hypothesis.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-antislop](../../ads/ad-antislop/SKILL.md) rules where relevant. Continue with [Campaign and line-item planning](../x-ads-campaign-structure/SKILL.md) when that work is needed.
