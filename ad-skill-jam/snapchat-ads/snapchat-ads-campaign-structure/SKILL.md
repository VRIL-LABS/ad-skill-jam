---
name: snapchat-ads-campaign-structure
description: Campaign and ad squad planning for Snapchat Ads. Use when asked to plan Snapchat objectives, squads, placements and pacing.
---

# Snapchat Ads campaign and ad squad planning

Verified on 2026-11-26 against [Snap Ads API quick start](https://developers.snap.com/marketing-api/Ads-API/quick-start). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/snapchat-ads.md).

## Inputs

Collect campaign goal, destination, regional availability, budget ownership, bid and conversion event source.

## Workflow

1. Choose a supported objective and squad optimization, audience, placement and budget arrangement.
2. Map each ad and creative to its squad and preview on the chosen surface. Check launch dependencies and queue a paused proposal.
3. Document limits, schedule and exposure by account currency. After an approved write re-read parent and child state.

## Output

Return a draft hierarchy with settings, placement and creative dependencies, and activation conditions.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Continue with [Snap creative and placement review](../snapchat-ads-creative/SKILL.md) when that work is needed.
