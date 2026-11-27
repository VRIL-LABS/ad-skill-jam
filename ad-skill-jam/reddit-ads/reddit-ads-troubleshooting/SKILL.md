---
name: reddit-ads-troubleshooting
description: Diagnose Reddit Ads non-delivery, missing reports, rejected ads or API errors. Use for configured versus effective status, billing, access scopes, API migration, rate limits and uncertain writes.
---

# Reddit Ads troubleshooting

**Verified on 2026-11-26 against** [Reddit Ads API v3 overview](https://ads-api.reddit.com/docs/v3/api/reddit-advertising-api) and [Reddit Ads API rate limiting](https://ads-api.reddit.com/docs/v3/guides/quick-start/rate-limiting). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/reddit-ads.md).

## Inputs

Collect the account and entity aliases, connector version, exact symptom, timestamp, relevant campaign tree states, review reason, and sanitized request and error details.

## Workflow

1. Check the account and the campaign → ad group → ad hierarchy. Compare configured and effective state, funding, review, dates and time zone, remaining budget and cap, and delivery eligibility. For retired onsite forms or unsupported objective configurations, check the ledger.
2. For API errors, confirm version and scope against the operation. For example, reports use `adsread` and approved campaign management writes use `adsedit`. Check access to the specified account and assets. Use a narrow authorized read to isolate the cause.
3. For HTTP 429, inspect the `RateLimit` and `RateLimit-Policy` headers and any retry timing. Limit concurrency and resume bounded reads when the relevant policy recovers. Resolve permission and schema errors before retrying.
4. For report errors, check date and breakdown compatibility and whether a narrower read works. For uncertain writes, read back the concrete target state. Leave unresolved results unknown and follow the shared approval gate for any corrective change.
5. Return the symptom, scope, confirmed blocker or hypotheses, redacted evidence, and a verification or escalation step.

## Approval and routing

Start with authorized read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Send review blocks to [compliance](../reddit-ads-compliance-policy/SKILL.md), event gaps to [tracking](../reddit-ads-tracking-attribution/SKILL.md), and incomplete reports to [reporting](../reddit-ads-reporting/SKILL.md).
