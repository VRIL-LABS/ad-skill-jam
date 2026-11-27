# Sources and decisions

Verified on 2026-11-26 against [Manage conversion goals](https://support.google.com/google-ads/answer/10993988) and [Offline conversion migration](https://developers.google.com/google-ads/api/docs/conversions/upload-offline).

- Check primary and secondary settings, self-serve goals and custom-goal exceptions. [Manage conversion goals](https://support.google.com/google-ads/answer/10993988)
- Distinguish conversion-action configuration, segmented metrics, and conversion date reporting. [Conversion reporting](https://developers.google.com/google-ads/api/docs/conversions/reporting)
- Google directs new integrations to Data Manager and documents legacy eligibility errors. [Offline conversion migration](https://developers.google.com/google-ads/api/docs/conversions/upload-offline)
- Verify the offline payload, the transaction ID behavior per action and event acceptance. Avoid duplicate submissions. [Data Manager offline event ingest](https://developers.google.com/data-manager/api/devguides/events/google-ads/offline/send-events)
- Check the operating account, linked account and destination conversion action for the integration. [Data Manager destinations](https://developers.google.com/data-manager/api/devguides/concepts/destinations)
- Validation-only requests have no diagnostics to poll. For accepted real requests, inspect request and destination state. [Data Manager diagnostics](https://developers.google.com/data-manager/api/devguides/diagnostics)
