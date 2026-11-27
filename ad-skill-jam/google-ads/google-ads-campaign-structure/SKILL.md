---
name: google-ads-campaign-structure
description: Plan or stage Search, Performance Max, Shopping, Demand Gen, or App campaigns. Use for account structure, geographic controls, AI Max setup, and migration of an existing Smart campaign.
---

# Google Ads campaign structure

**Verified on 2026-11-26 against** [Create campaigns](https://developers.google.com/google-ads/api/docs/campaigns/create-campaigns) and [Campaign types](https://developers.google.com/google-ads/api/docs/campaigns/overview). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/google-ads.md).

## Inputs

Collect client account alias, objective, target markets, conversion goal, format, landing pages, product feed or app identity where relevant, schedule and approved exposure.

## Workflow

1. Resolve the authorized client and campaign type. Capture defaults already in force for networks, location targeting, campaign goals, shared negatives, budgets and bidding. Start from the business goal and constraints.
2. For Search, group related intent with a matching landing page, keyword mix, exclusions and responsive assets. Record networks, geo targeting options and whether each audience is a restriction or observation. For AI Max, explicitly review term matching, text customization and final URL controls.
3. For Performance Max or Shopping, validate catalog and conversion dependencies. For Demand Gen, inspect supported visual channels and the minimum for the account currency. For App, validate objective and app data source and use a dedicated budget and bid setup.
4. If replacing Smart, preserve the existing setup during the proposal. Google ended new Smart campaign creation. When supported, validate a migration or generate a paused, incomplete Performance Max draft only after approval.
5. Return channel, dependency graph, target criteria, conversion goals, budget owner, schedule and paused creation plan. If the approved API path supports it, run a validation-only request before staging. Read back each delivery entity and require separate activation approval.

## Approval and routing

Start with authorized read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Use [search terms](../google-ads-search-terms/SKILL.md), [creative](../google-ads-creative/SKILL.md), [Performance Max](../google-ads-performance-max/SKILL.md) or [retail](../google-ads-retail/SKILL.md) for channel details.
