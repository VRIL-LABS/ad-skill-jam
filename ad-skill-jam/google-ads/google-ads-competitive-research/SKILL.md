---
name: google-ads-competitive-research
description: Use Auction Insights and Google Ads Transparency Center to study visible competitor ads and auction overlap. Use for competitor creative, impression share, and original campaign hypotheses.
---

# Google Ads competitive research

**Verified on 2026-11-26 against** [Auction Insights](https://support.google.com/google-ads/answer/2579754) and [Google Ads Transparency Center](https://adstransparency.google.com/). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/google-ads.md).

## Inputs

Collect campaign type, market, time range, competitor domains, objective, evidence coverage and authorized Auction Insights export where available.

## Workflow

1. Read eligible Auction Insights for the specified campaign type and scope. Define impression share, overlap, outranking and placement metrics separately. Label missing domains and low-coverage cuts. Google describes a reporting floor below 10% impression share.
2. Use the Transparency Center to record visible creatives, advertiser and displayed context, date or market filters, format, claim, offer and CTA. Cite the observation. Keep observations linked to the displayed source.
3. Look for recurring auction pressure or messaging gaps. State the scope of auction overlap and creative coverage. Leave spend, bids, targeting, conversion and ROAS unknown without direct evidence.
4. Return evidence by source, hypotheses, and an original creative or campaign test tied to the advertised goal.

## Approval and routing

Start with authorized read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Send rankings and share diagnosis to [optimization](../google-ads-optimization/SKILL.md) and test designs to [experimentation](../google-ads-experimentation/SKILL.md).
