---
name: microsoft-ads-audit
description: Account and import audit for Microsoft Advertising. Use when asked to audit Microsoft Advertising delivery or review imported account settings.
---

# Microsoft Advertising account and import audit

Verified on 2026-11-26 against [Google import options](https://learn.microsoft.com/en-us/advertising/campaign-management-service/googleimportoption). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/microsoft-ads.md).

## Inputs

Collect imported job history, campaign and group settings, network, goal, UET, tracking templates and eligibility. For campaign inventory when connected, use `microsoft_get_campaigns`. Use an export for the other evidence.

## Workflow

1. Check serving and spending controls, imported status and schedule, account currency and effective campaign defaults.
2. Reconcile imported targets, bids, negatives, URLs and goals against the destination account. Note unsupported settings and newly enabled defaults.
3. Check ad network and conversion outcomes by comparable segment before ranking issues.

## Output

Return campaign audit findings and an import discrepancy list with priority and evidence.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-audit](../../ads/ad-audit/SKILL.md) rules where relevant. Continue with [Campaign structure and Google import planning](../microsoft-ads-campaign-structure/SKILL.md) when that work is needed.
