---
name: snapchat-ads-creative
description: Snap creative and placement review for Snapchat Ads. Use when asked to draft or diagnose Snapchat mobile creative and placement fit.
---

# Snapchat Ads snap creative and placement review

Verified on 2026-11-26 against [Snap Ads API ads](https://developers.snap.com/marketing-api/Ads-API/ads). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/snapchat-ads.md).

## Inputs

Collect format, placement, video or image, destination, CTA and current delivery and response metrics.

## Workflow

1. Check eligible ad formats, in-app preview, asset rights and the mobile destination path.
2. Review first frames, readable safe areas and the promise before making a distinct comparison variant.
3. Compare matched squads or placement slices for exposure, response and valued outcome. Check attribution if engagement rises without downstream changes.

## Output

Return asset brief, placement preview checklist and comparison plan.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-antislop](../../ads/ad-antislop/SKILL.md) rules where relevant. Continue with [Campaign and squad performance reporting](../snapchat-ads-reporting/SKILL.md) when that work is needed.
