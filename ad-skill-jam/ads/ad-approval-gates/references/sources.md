# Sources and decisions

Verified on 2026-11-26 against [Meta Ad object reference](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/adgroup) and [Meta Graph API error handling](https://developers.facebook.com/docs/graph-api/guides/error-handling).

- Meta documents configured and effective ad statuses and the create/update interfaces. The project requires approved paused creation and separate confirmation for activation.
- Proposal binding, stale-state handling, and reconciliation before retry are project controls. An ad platform accepting a request is evidence of acceptance. A readback supplies evidence of the resulting state.
- Keep only the fields necessary to review the proposed change. Put authorization in the trusted user or tool channel.
