---
name: youtube-ads-creative
description: Video asset review for YouTube Ads. Use when asked to draft or review YouTube in-stream, in-feed or Shorts creative.
---

# YouTube Ads video asset review

Verified on 2026-11-26 against [Video ad formats](https://support.google.com/google-ads/answer/2375464). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/youtube-ads.md).

## Inputs

Collect storyboard, media variants, destination, audience, placements, rights and the offer.

## Workflow

1. Map delivery format to media aspect, CTA constraints and preview. Prepare a readable mobile and sound-off version where relevant.
2. Check that opening frames establish the offer and that the landing page matches the creative. Use a stable offer and conversion goal when comparing edits.
3. Record eligible asset links and preview each negotiated format. Compare objective-relevant results within surface before reusing a winner.

## Output

Return a surface-specific asset and preview checklist plus test variants.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-antislop](../../ads/ad-antislop/SKILL.md) rules where relevant. Continue with [Video campaign planning](../youtube-ads-campaign-structure/SKILL.md) when that work is needed.
