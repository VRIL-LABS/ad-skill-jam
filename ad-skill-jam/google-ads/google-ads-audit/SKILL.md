---
name: google-ads-audit
description: Audit a Google Ads account using authorized reads or exports, including spend, campaign structure, measurement, bidding, creative, policy and coverage.
---

# Google Ads audit

**Verified on 2026-11-26 against** [Campaign types](https://developers.google.com/google-ads/api/docs/campaigns/overview) and [Manage conversion goals](https://support.google.com/google-ads/answer/10993988). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/google-ads.md).

## Inputs

Collect client account alias, time zone, currency, business goal, channel mix, comparable completed dates, change history, conversions by action, campaigns, relevant settings and access gaps.

## Workflow

1. Use the [shared audit rubric](../../ads/ad-audit/SKILL.md). Establish scope and applicability by campaign type. Ensure the account view contains the intended client campaigns.
2. Inspect billing and policy status, configured and serving status, budget ownership, recent changes, geography and targeting, and unwanted overlap. Treat opt-in recommendations and feature adoption as proposals or discovery.
3. Check conversion actions, goals, attribution, lag and deduplication. Match downstream leads or revenue to the outcome used by bidding. Cover Search terms and assets, retail feed or Performance Max listing groups only where applicable.
4. Compare compatible mature performance against business targets. Identify verified blockers first. Mark missing exports and unsupported cuts unknown, and out-of-scope checks not applicable.
5. Return check, state, impact, evidence and owner or next action. Include counts, observed pass rate, evidence coverage and a provisional flag where evidence is incomplete.

## Approval and routing

Start with authorized read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Route tracking, delivery and query gaps to [tracking](../google-ads-tracking-attribution/SKILL.md), [troubleshooting](../google-ads-troubleshooting/SKILL.md), and [reporting](../google-ads-reporting/SKILL.md).
