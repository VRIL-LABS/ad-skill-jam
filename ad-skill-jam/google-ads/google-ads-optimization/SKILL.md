---
name: google-ads-optimization
description: Diagnose a Google Ads CPA or ROAS change, low lead quality, budget or rank losses, Quality Score issues, or performance drift. Use when deciding what to fix or monitor.
---

# Google Ads optimization

**Verified on 2026-11-26 against** [Search delivery troubleshooting](https://support.google.com/google-ads/answer/9208915) and [About Quality Score](https://support.google.com/google-ads/answer/6167118). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/google-ads.md).

## Inputs

Collect mature comparable windows, campaign type and status, performance by relevant cut, change history, conversion action and lag, and business outcomes or account targets.

## Workflow

1. Verify reporting and signal integrity first. Align chosen outcomes, date basis, currency and lag. Check recent changes and locate the shift across impressions, clicks, cost per click, conversion rate and conversion value or lead quality.
2. Segment on one meaningful dimension at a time, such as term, device, location, network, or placement where supported. Check whether mix explains apparent movement. Compare Google Ads form activity with qualified lead stages before changing acquisition targets.
3. For Search, distinguish budget-limited share from rank-limited share using the appropriate impression-share fields. Use expected CTR, ad relevance and landing page experience to diagnose Quality Score. Treat quality scores and visibility indicators as diagnostics and avoid spend estimates from missing or censored rows.
4. When measurement is reliable and the sample is adequate for the business decision, propose one attributable change and monitoring interval. If results are immature, keep the action as monitor and request the missing evidence.
5. Return the observed movement, comparable inputs, likely and competing causes, confidence, one proposed action and expected review time.

## Approval and routing

Start with authorized read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Send query drift to [search terms](../google-ads-search-terms/SKILL.md), goal issues to [tracking](../google-ads-tracking-attribution/SKILL.md), and scaling to [budget and bidding](../google-ads-budget-bidding/SKILL.md).
