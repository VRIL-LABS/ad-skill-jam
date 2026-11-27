---
name: google-ads-experimentation
description: Design or evaluate a Google Ads experiment for creative, Search AI Max, bidding, or Performance Max. Use for controlled tests, eligible uplift designs and result interpretation.
---

# Google Ads experimentation

**Verified on 2026-11-26 against** [Google Ads experiment types](https://developers.google.com/google-ads/api/docs/experiments/overview) and [Google Ads experiment reporting](https://developers.google.com/google-ads/api/docs/experiments/reporting). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/google-ads.md).

## Inputs

Collect hypothesis, baseline KPI, minimum meaningful change in KPI units, expected exposure, feasible budget, conversion lag and supported test type.

## Workflow

1. Select the supported experiment workflow and define control and treatment. Test one intended change while keeping other settings, eligibility and measurements aligned. Verify traffic allocation and actual campaign or arm mapping.
2. Set KPI and decision rule, expected sample and minimum meaningful effect, duration, conversion lag and guardrails before requesting launch. If assignment or volume cannot support a decision, plan an exploratory read or defer.
3. Use approved paused prep where the surface supports it and obtain separate approval before scheduling or serving. Monitor guardrails without changing the plan after early favorable observations.
4. Report arm eligibility and measures, sample, effect and uncertainty at the planned readout. Use the experiment reporting surface supported for this type. Return inconclusive when the result cannot support the business decision. Propose any application of the result separately.

## Approval and routing

Start with authorized read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Use [reporting](../google-ads-reporting/SKILL.md) for definitions and [budget and bidding](../google-ads-budget-bidding/SKILL.md) for exposure.
