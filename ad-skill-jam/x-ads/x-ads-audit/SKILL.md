---
name: x-ads-audit
description: Account audit for X Ads. Use when asked to audit X Ads delivery, spend and evidence coverage.
---

# X Ads account audit

Verified on 2026-11-26 against [X Ads API campaign management](https://docs.x.com/x-ads-api/campaign-management). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/x-ads.md).

## Inputs

Collect campaign, line item and promoted-post status, flight dates, account reporting scope and event diagnostics. For campaign inventory when connected, use `x_get_campaigns`. Use an export for the other evidence.

## Workflow

1. Walk the hierarchy and locate the narrowest entity exhibiting zero or reduced delivery. Check funding, dates, eligibility and serving status.
2. Compare performance by objective and placement at a consistent grain. Inspect conversion mapping and lag before calling a campaign inefficient.
3. Tag constraints as observed or unverified and prioritize by spend or decision impact.

## Output

Return a ranked audit with entity, evidence, coverage and next diagnostic.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-audit](../../ads/ad-audit/SKILL.md) rules where relevant. Continue with [Campaign and line-item planning](../x-ads-campaign-structure/SKILL.md) when that work is needed.
