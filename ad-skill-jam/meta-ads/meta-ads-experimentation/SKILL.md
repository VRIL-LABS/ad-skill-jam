---
name: meta-ads-experimentation
description: Design or evaluate a Meta Ads Manager A/B test or lift study. Use for creative, audience, placement, landing-page, or bid comparisons and for incrementality questions.
---

# Meta Ads experimentation

**Verified on 2026-11-26 against** [Meta A/B testing](https://ky-kg.facebook.com/business/measurement/ab-testing) and [Meta split testing](https://developers.facebook.com/docs/marketing-api/guides/split-testing/v2.9/). See [source and decision notes](references/sources.md).

## Inputs

Collect the hypothesis, objective, KPI definition and baseline, smallest useful effect in KPI units, eligible test scope, conversion lag, feasible traffic and budget, and Meta experiment availability.

## Workflow

1. State the decision and define the control and treatment. Prefer the Meta A/B test workflow where eligible. Change one intended factor and hold objective, measurement, timing and other settings steady. For a destination test with the same ad, keep the destination as the intended factor.
2. Confirm random assignment and audience separation in the tool. Ordinary parallel ad sets produce exploratory evidence. For a causal lift question, check eligibility for a holdout or Conversion Lift design.
3. Before launch, record the primary metric, sample and duration estimate, reporting lag, guardrails, stopping rule, and what result would change the decision. If the available budget or signal is too low, plan an exploratory read or defer the test. Use qualified leads with a defined CRM lag when lead quality is the hypothesis.
4. Review readiness and prepare the spend proposal. Once approved and running, log changes and check guardrails. Read the primary result at the planned decision point. Record sample, observed effect, uncertainty and guardrail outcomes. Return inconclusive when the evidence cannot support a choice.

## Approval and routing

Start with read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Use [reporting](../meta-ads-reporting/SKILL.md) for definitions and [budget and bidding](../meta-ads-budget-bidding/SKILL.md) for exposure and budget ownership.
