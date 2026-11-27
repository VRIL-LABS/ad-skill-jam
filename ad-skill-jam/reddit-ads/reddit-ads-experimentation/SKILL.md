---
name: reddit-ads-experimentation
description: Plan or read a Reddit Ads split test. Use for creative, audience, placement, conversion-window, or app optimization comparisons with enough eligible traffic and budget.
---

# Reddit Ads experimentation

**Verified on 2026-11-26 against** [Reddit Split Testing](https://business.reddithelp.com/articles/Knowledge/split-testing) and [About the Learning Phase](https://business.reddithelp.com/articles/Knowledge/learning-phase). See [source and decision notes](references/sources.md) and the [API ledger](../../_shared/api-ledger/reddit-ads.md).

## Inputs

Collect the hypothesis, primary KPI and smallest useful effect, baseline and expected volume, budget, attribution, eligible campaigns/ad groups, and expected conversion lag.

## Workflow

1. Choose one intended factor. Verify the corresponding test type in Ads Manager Experiments. Use eligible and distinct control and variant entities. Reddit's split test serves a user one variant. Ordinary side-by-side delivery supplies exploratory evidence.
2. Set the winning metric, start/end dates, constraints and stop rule before launch. Reddit requires at least 14 days and approved ads for split testing. Allow for lag and choose a longer period where the expected sample needs it.
3. Treat the dashboard's winner threshold above 65% statistical confidence as a platform label. Choose a decision standard and meaningful effect before launch. If low sample, wide uncertainty or inadequate measurement prevents a decision, return inconclusive.
4. Get user approval for the exact spend and schedule through the shared gate. Check readiness and monitor the agreed guardrails. Changes to a test's campaigns or ad groups, including budget edits, can cancel the test. Read results at the planned decision point.
5. Return variant settings, split and sample assumptions, KPI and effect threshold, budget, timeline, guardrails, eligibility and the eventual decision with uncertainty.

## Approval and routing

Start with authorized read-only evidence. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for platform changes.

Send metrics to [reporting](../reddit-ads-reporting/SKILL.md) and pacing questions to [budget and bidding](../reddit-ads-budget-bidding/SKILL.md).
