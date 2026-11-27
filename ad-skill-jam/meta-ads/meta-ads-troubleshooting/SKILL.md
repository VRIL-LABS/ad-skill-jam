---
name: meta-ads-troubleshooting
description: Diagnose Meta ads that are not delivering or a Marketing API failure. Use for configured versus effective status, rejected ads, billing or permissions blockers, empty results, timeouts, or rate limits.
---

# Meta Ads troubleshooting

**Verified on 2026-11-26 against** [Meta Graph API error handling](https://developers.facebook.com/docs/graph-api/guides/error-handling) and [Meta Ad reference](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/adgroup). See [source and decision notes](references/sources.md).

## Inputs

Collect the redacted account and entity aliases, effective connector version, timestamps and action, configured and effective status across parents, Ads Manager reason, requested fields and a sanitized error payload.

## Workflow

1. For no delivery, inspect the account and the campaign → ad set → ad chain. Check review state, schedule and time zone, configuration status, billing and restrictions, then eligible audiences, placements and bid or budget. Read the reason from Ads Manager when an API status lacks detail.
2. For a failed read, inspect the Meta error code, subcode, transient flag and trace ID when present. Check authorized account and asset access, required permissions and the versioned field contract. Reproduce with a narrow authorized read when appropriate. Treat missing or incompatible fields as unknown until verified.
3. When throttled, inspect available usage signals, including `X-Business-Use-Case-Usage` where supplied. Limit scope and concurrency and respect the reported recovery window. Retry transient reads with bounded backoff. Resolve permission and input errors before retrying.
4. For an uncertain change, use a read to reconcile the proposed fields and delivery status. Keep an unresolved outcome unknown. Use the approval gate for any repair or new write.
5. Return the symptom, tested scope, confirmed blocker or candidate causes, redacted evidence, and next verification step. Record remaining access or evidence needs.

## Approval and routing

Start with read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Send rejections to [compliance](../meta-ads-compliance-policy/SKILL.md), missing event data to [tracking](../meta-ads-tracking-attribution/SKILL.md), and incomplete Insights to [reporting](../meta-ads-reporting/SKILL.md).
