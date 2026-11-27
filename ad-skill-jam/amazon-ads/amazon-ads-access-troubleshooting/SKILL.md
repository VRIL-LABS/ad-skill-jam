---
name: amazon-ads-access-troubleshooting
description: API migration and access review for Amazon Ads. Use when asked to troubleshoot Amazon Ads profile access or migrate Sponsored Products API calls.
---

# Amazon Ads API migration and access review

Verified on 2026-11-27 against [Amazon's Unified Campaign Management migration kit](https://github.com/amzn/ads-advanced-tools-docs/tree/main/unified-campaign-management-migration-skills). See [source and decision notes](references/sources.md) for Sponsored Products header differences and the [API ledger](../../_shared/api-ledger/amazon-ads.md) for the local MCP contract.

## Inputs

Collect marketplace region, authorized API account, selected profile or advertiser scope, endpoint/media type and expected resource version.

## Workflow

1. Verify the login, region, role and scope with the host. For the local MCP, call `adjam_get_platform_setup` for `amazon` and use the advertiser account ID for Unified Campaign Management. Keep credentials and identifiers in the connection configuration.
2. Compare the legacy and Unified Campaign Management schema for the ad product and endpoint. Reconcile one representative read before switching jobs.
3. Check status, pagination tokens, identifiers and status filters for coverage. Use a redacted export if access is unavailable.

## Output

Return an access or migration checklist and a field-level reconciliation result.

## Approval and routing

Start with authorized read-only data or redacted exports. Use [approval gates](../../ads/ad-approval-gates/SKILL.md) for account changes. Stage new entities paused or in draft when supported. Apply the shared [ad-audit](../../ads/ad-audit/SKILL.md) rules where relevant. Continue with [Retail ad performance reporting](../amazon-ads-reporting/SKILL.md) when that work is needed.
