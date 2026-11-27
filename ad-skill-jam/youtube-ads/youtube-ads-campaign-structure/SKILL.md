---
name: youtube-ads-campaign-structure
description: Video campaign planning for YouTube Ads. Use when asked to choose Video reach, Video views or YouTube-eligible Demand Gen structure.
---

# YouTube Ads video campaign planning

Verified on 2026-11-26 against [Video campaign setup](https://support.google.com/google-ads/answer/2375497). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/youtube-ads.md).

## Inputs

Collect campaign goal, conversion signal, availability of video assets, audience and placement control requirements.

## Workflow

1. Pick an eligible subtype whose bid and billing event align with reach, views or conversion intent.
2. Confirm video access, destination, suitability and format compatibility. For Demand Gen, document selected channel controls and what inventory is eligible.
3. Prepare a paused draft plan and verify creation support for the selected subtype in the client or UI.

## Output

Return a campaign plan with subtype, eligible surfaces, bidding, assets and conversion goal.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Continue with [Video asset review](../youtube-ads-creative/SKILL.md) when that work is needed.
