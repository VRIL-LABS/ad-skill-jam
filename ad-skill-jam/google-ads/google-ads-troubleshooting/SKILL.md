---
name: google-ads-troubleshooting
description: Diagnose Google Ads non-delivery, API auth and GAQL errors, billing and eligibility, partial failures, or uncertain mutations. Use for a read-first recovery plan.
---

# Google Ads troubleshooting

**Verified on 2026-11-26 against** [Google Ads API errors](https://developers.google.com/google-ads/api/docs/best-practices/understand-api-errors) and [Search delivery troubleshooting](https://support.google.com/google-ads/answer/9208915). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/google-ads.md).

## Inputs

Collect client and manager aliases, scheduled dates, campaign and child state, serving reasons and funding or policy evidence, connector version, and redacted error details.

## Workflow

1. Check account eligibility, permissions and billing. Read campaign, ad group, ad or asset group state and recent changes. Inspect configured versus actual serving state, then check dates, budget, goals, policy and targeting restrictions.
2. For API access, verify effective version, advertiser customer, manager context, developer token status and OAuth scope through the connector. For a query failure, run a narrow authorized read and check versioned field compatibility, dates and paging.
3. Record the request ID, canonical error and failing operation index where available. Resolve permanent permission and input problems before retrying. Back off bounded transient reads and preserve partial-data status.
4. Use validate_only for supported preflight checks. Know whether partial_failure can commit independent operations; inspect the response per operation. If a write result is uncertain, reconcile current state before retrying. Display exact approved scope for any corrective change.
5. Return symptom, verified scope, evidence and candidate causes, then the next readback or official support path.

## Approval and routing

Start with authorized read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Send rejected ads to [compliance](../google-ads-compliance-policy/SKILL.md) and report failures to [reporting](../google-ads-reporting/SKILL.md).
