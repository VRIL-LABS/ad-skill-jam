---
name: microsoft-ads-campaign-structure
description: Campaign structure and Google import planning for Microsoft Advertising. Use when asked to plan Microsoft search, Shopping or Google Ads imports.
---

# Microsoft Advertising campaign structure and google import planning

Verified on 2026-11-26 against [Google import options](https://learn.microsoft.com/en-us/advertising/campaign-management-service/googleimportoption). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/microsoft-ads.md).

## Inputs

Collect source and destination account scope, network requirements, campaign types, bids, goals, merchant feed and URLs.

## Workflow

1. Select the import or manual setup path. Resolve types, owners, geography, network, schedule and destination before drafting.
2. Review import options that can change entity state or overwrite settings. Confirm account-specific budget and conversion goals and eligible Shopping inventory.
3. Stage paused with a diff and re-read status, URLs, network and goals following an approved import.

## Output

Return a type-aware campaign plan and field-level import review.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Continue with [Account and import audit](../microsoft-ads-audit/SKILL.md) when that work is needed.
