---
name: linkedin-ads-audit
description: Account and lead-quality audit for LinkedIn Ads. Use when asked to audit LinkedIn delivery and B2B lead quality.
---

# LinkedIn Ads account and lead-quality audit

Verified on 2026-11-26 against [Campaign groups](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaign-groups). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/linkedin-ads.md).

## Inputs

Collect group and campaign states, priority audiences, expansion and offsite settings, creative and lead forms, CRM stages and reporting. For campaign inventory when connected, use `linkedin_get_campaigns`. Use an export for the other evidence.

## Workflow

1. Check parent budgets, delivery eligibility, audience fit and the selected optimization goal before assessing performance.
2. Separate lead submission, qualified lead and opportunity outcomes. Compare comparable cohorts with mature CRM coverage.
3. Rank fixes by evidenced delivery or quality impact. Mark audience, pipeline or configuration claims unknown when their data is absent.

## Output

Return evidence-backed findings by owner, scope and funnel stage.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-audit](../../ads/ad-audit/SKILL.md) rules where relevant. Continue with [Conversion and lead tracking](../linkedin-ads-tracking-attribution/SKILL.md) when that work is needed.
