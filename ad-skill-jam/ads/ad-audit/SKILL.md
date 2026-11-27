---
name: ad-audit
description: Score paid-ad audits with pass, fail, unknown, and not applicable. Use to define evidence requirements, grade account controls, calculate evidence coverage, and prioritize findings.
---

# Paid ads audit rubric

**Verified on 2026-11-26 against** [Meta's guidance on personalized account recommendations](https://en-gb.facebook.com/business/tools/opportunity-score/faq/recommendations). The scoring model is a project convention.

1. Record the account alias, date range, currency, objective, active scope, evidence available and evidence freshness. Ask for redacted evidence if the account is inaccessible. Start read-only.
2. Use platform checks. Rate each check `pass` for verified compliance, `fail` for verified failure, `unknown` when evidence is inadequate, or `not_applicable` when evidence establishes irrelevance. Treat uncertain applicability as unknown. Name the source for each finding.
3. Calculate **observed pass rate** as `100 × pass / (pass + fail)` and **evidence coverage** as `100 × (pass + fail) / (pass + fail + unknown)` for equally weighted checks. Display both with counts and percent units. Show an undefined rate as unavailable when its denominator is zero. Leave verified inapplicable checks out of both denominators. Mark any assessment with unknowns as provisional and surface missing critical evidence at the top.
4. Report the highest impact verified issues, blocked checks, evidence needed, owners or next actions, and the platform skill for each fix. Keep Meta's Opportunity Score separate as a vendor recommendation signal. Use [approval gates](../ad-approval-gates/SKILL.md) for any proposed writes.

See [source and scoring notes](references/sources.md).
