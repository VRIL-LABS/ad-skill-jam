---
name: linkedin-ads-tracking-attribution
description: Conversion and lead tracking for LinkedIn Ads. Use when asked to verify LinkedIn Insight Tag, Conversions API or CRM outcomes.
---

# LinkedIn Ads conversion and lead tracking

Verified on 2026-11-26 against [LinkedIn Conversions API](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/conversions-api). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/linkedin-ads.md).

## Inputs

Collect conversion rules, data sources, dedup evidence, campaign association, attribution windows and privacy-safe CRM counts.

## Workflow

1. Trace the actual conversion, challenge incomplete mappings and check the associated campaigns and event source.
2. When browser and server duplicate an action, test the supported deduplication configuration. Keep submitted leads and qualified CRM stages distinct.
3. Align lag, report grain and attribution window before comparing platform and CRM volume.

## Output

Return conversion proof, campaign association, reporting differences and next checks.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-reporting](../../ads/ad-reporting/SKILL.md) rules where relevant. Continue with [Campaign and demographic reporting](../linkedin-ads-reporting/SKILL.md) when that work is needed.
