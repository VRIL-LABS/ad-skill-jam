# Sources and decisions

Verified on 2026-11-26 against [Google Ads API errors](https://developers.google.com/google-ads/api/docs/best-practices/understand-api-errors) and [Search delivery troubleshooting](https://support.google.com/google-ads/answer/9208915).

- Verify client customer versus manager login context and required credentials inside the connector. [API authorization](https://developers.google.com/google-ads/api/rest/auth)
- Google documents request and operation-level diagnostics. [Google Ads API errors](https://developers.google.com/google-ads/api/docs/best-practices/understand-api-errors)
- Check delivery blockers before judging spend or optimization. [Search delivery troubleshooting](https://support.google.com/google-ads/answer/9208915)
- Validation-only requests validate without applying operations. [v26 Mutate request](https://developers.google.com/google-ads/api/reference/rpc/v26/MutateGoogleAdsRequest)
- Partial failure can commit successful independent operations while returning errors for others. Disable it for interdependent creates. [Partial-failure semantics](https://developers.google.com/google-ads/api/docs/best-practices/partial-failures)
