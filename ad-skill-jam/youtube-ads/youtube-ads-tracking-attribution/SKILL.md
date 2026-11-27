---
name: youtube-ads-tracking-attribution
description: Video conversion and lift review for YouTube Ads. Use when asked to interpret YouTube engaged-view, view-through and click-through conversions.
---

# YouTube Ads video conversion and lift review

Verified on 2026-11-26 against [Video view metrics](https://support.google.com/google-ads/answer/2375431). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/youtube-ads.md).

## Inputs

Collect campaign conversion actions, format, attribution windows, outcome source, and experiment eligibility.

## Workflow

1. Confirm which conversion event and window feed each exported metric. Check lag and the first-party outcome path.
2. Report engagement-linked, view-through and click-linked measures with the provider's actual labels. Check overlap before combining totals.
3. Use controlled lift or a comparison design when the question is incremental impact. Document audience overlap and changes that can confound the result.

## Output

Return conversion reconciliation and a decision on what the available evidence supports.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-reporting](../../ads/ad-reporting/SKILL.md) rules where relevant. Continue with [Paid video reporting](../youtube-ads-reporting/SKILL.md) when that work is needed.
