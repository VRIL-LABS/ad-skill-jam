---
name: linkedin-ads-campaign-structure
description: Campaign group and campaign planning for LinkedIn Ads. Use when asked to design LinkedIn campaigns, targeting and creative dependencies.
---

# LinkedIn Ads campaign group and campaign planning

Verified on 2026-11-26 against [LinkedIn campaigns](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaigns?view=li-lms-2026-11). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/linkedin-ads.md).

## Inputs

Collect ad account alias, objective, group and campaign boundaries, forecast, audience rules, format, conversion associations and budget.

## Workflow

1. Identify which budget and schedule belong to the group and which belong to the campaign. Map campaigns to the intended group.
2. Document geography, audiences, exclusions, expansion and placement controls exposed for the selected objective. Compare expected reach and overlap.
3. Resolve creative, lead form, company and conversion dependencies. Stage DRAFT or supported paused state for review.

## Output

Return a hierarchy with budget ownership, exact targeting, dependencies and staged status.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Continue with [Account and lead-quality audit](../linkedin-ads-audit/SKILL.md) when that work is needed.
