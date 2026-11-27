---
name: linkedin-ads-optimization
description: B2B targeting and spend diagnosis for LinkedIn Ads. Use when asked to diagnose LinkedIn ABM, lead quality or budget allocation.
---

# LinkedIn Ads b2b targeting and spend diagnosis

Verified on 2026-11-26 against [LinkedIn campaigns](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaigns?view=li-lms-2026-11). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/linkedin-ads.md).

## Inputs

Collect target company cohort, role and seniority logic, forecast, spend, frequency, CRM progression and attribution lag.

## Workflow

1. Check eligibility and overlap among company, geography and role rules. Review actual delivery breakdowns where permitted.
2. Compare auditable segments on the business outcome. Check whether expansion, offsite mix or form friction changed before drawing conclusions.
3. Propose one bounded audience, creative or budget change. Define a quality outcome and protect approved exclusions.

## Output

Return a diagnosis by segment and a staged proposal with a measurement plan.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-audit](../../ads/ad-audit/SKILL.md) rules where relevant. Continue with [Campaign and demographic reporting](../linkedin-ads-reporting/SKILL.md) when that work is needed.
