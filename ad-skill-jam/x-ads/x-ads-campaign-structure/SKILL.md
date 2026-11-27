---
name: x-ads-campaign-structure
description: Campaign and line-item planning for X Ads. Use when asked to plan X Ads campaigns, line items and promoted posts.
---

# X Ads campaign and line-item planning

Verified on 2026-11-26 against [X Ads API campaign management](https://docs.x.com/x-ads-api/campaign-management). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/x-ads.md).

## Inputs

Collect account and funding scope, objective, targeting, placement, cap, eligible posts and permission to use them.

## Workflow

1. Map campaign-level schedule and budget ownership and line-item objective, bid, audience and placement.
2. Resolve promoted-post or card dependencies before staging. Record creative eligibility and access separately from delivery.
3. Preview paused campaign and line items and require a separate reviewed activation.

## Output

Return a setup matrix listing layer, fields, dependencies, proposed status and rollback.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Continue with [Promoted post and creative review](../x-ads-creative/SKILL.md) when that work is needed.
