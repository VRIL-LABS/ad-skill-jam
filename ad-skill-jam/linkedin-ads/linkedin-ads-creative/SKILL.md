---
name: linkedin-ads-creative
description: Ad and Lead Gen Form review for LinkedIn Ads. Use when asked to review LinkedIn ad messaging, lead forms and CRM routing.
---

# LinkedIn Ads ad and lead gen form review

Verified on 2026-11-26 against [Lead Sync](https://learn.microsoft.com/en-us/linkedin/marketing/lead-sync/leadsync). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/linkedin-ads.md).

## Inputs

Collect format, draft copy, company, audience, form fields and consent, destination and CRM workflow.

## Workflow

1. Match the offer and qualification requirements to the audience. Minimize form fields and preview the approved disclosure and follow-up path.
2. Confirm that the exact creative references the intended form and company. Check authorized lead synchronization with a privacy-safe test record.
3. Define success using form, acceptance and qualified-outcome counts at their own grains.

## Output

Return draft creative and form specification with permissions, test path and success measures.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-antislop](../../ads/ad-antislop/SKILL.md) rules where relevant. Continue with [Conversion and lead tracking](../linkedin-ads-tracking-attribution/SKILL.md) when that work is needed.
