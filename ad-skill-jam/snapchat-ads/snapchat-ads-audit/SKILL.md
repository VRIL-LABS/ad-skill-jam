---
name: snapchat-ads-audit
description: Delivery audit for Snapchat Ads. Use when asked to audit Snapchat delivery, budget and conversion evidence.
---

# Snapchat Ads delivery audit

Verified on 2026-11-26 against [Snap ad squads](https://developers.snap.com/marketing-api/Ads-API/ad-squads). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/snapchat-ads.md).

## Inputs

Collect statuses and eligibility at each layer, pacing, dates, asset review and event diagnostics. For campaign inventory when connected, use `snapchat_get_campaigns`. Use an export for the other evidence.

## Workflow

1. Check the account, campaign, squad and ad for the first serving blocker. Identify which layer controls spend and optimization.
2. Compare eligible squads at the same goal, placement and window. Inspect swipe or click response and conversion separately.
3. Report confirmed findings and label signal issues that need event or Ads Manager evidence.

## Output

Return a blocker map with severity, accountable layer, observed impact and next read.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-audit](../../ads/ad-audit/SKILL.md) rules where relevant. Continue with [Campaign and ad squad planning](../snapchat-ads-campaign-structure/SKILL.md) when that work is needed.
