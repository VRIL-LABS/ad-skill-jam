# Sources and decision notes

Verified on 2026-11-27 against [Amazon's Sponsored Products migration guide](https://github.com/amzn/ads-advanced-tools-docs/blob/main/unified-campaign-management-migration-skills/skills/unified-sp-migration/SKILL.md) and [Sponsored Products OpenAPI contract](https://github.com/amzn/ads-advanced-tools-docs/blob/main/unified-campaign-management-migration-skills/api-specs/unified-api-sp.json).

For Unified Campaign Management v1, use the `Amazon-Ads-ClientId` header and the endpoint's JSON request schema. Check whether it expects an advertiser account ID, a profile ID, or both. For the local Sponsored Products campaign read, configure an advertiser account ID and the matching region. Reconcile scope and pagination against the legacy read before switching a job.

Evaluate recommendations against the advertiser's currency, goals, observed volume and reporting lag. Record missing evidence in the output.
