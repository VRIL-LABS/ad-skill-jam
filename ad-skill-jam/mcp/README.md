# Ad Skill Jam MCP

Try the local MCP server before connecting an ad account. Look up provider setup and browse the catalog in clients that support Skills over MCP. When you need current campaign inventory, connect an account for read-only access. For performance, targeting, and creative analysis, bring a redacted export to the matching skill.

## Start without an account

1. Install Node.js 24 or later. Open a terminal in `ad-skill-jam/mcp`.
2. Install the pinned dependencies and run the checks.

   ```sh
   npm ci --ignore-scripts
   npm run check
   npm test
   ```

   If an IDE terminal reports `EALLOWSCRIPTS`, run these commands from a system terminal. Keep `--ignore-scripts` on the install command.

3. Add the following entry to your MCP client's configuration. Replace the path with the absolute path to `gateway/stdio.ts`. Forward slashes work on Windows, including in paths that contain spaces. If the client cannot find Node, replace `node` with the absolute path to the Node executable.

   ```json
   {
     "mcpServers": {
       "ad-skill-jam": {
         "command": "node",
         "args": ["C:/path/to/ad-skill-jam/mcp/gateway/stdio.ts"]
       }
     }
   }
   ```

   For Codex CLI, register the same stdio command with:

   ```sh
   codex mcp add ad-skill-jam -- node "C:/path/to/ad-skill-jam/mcp/gateway/stdio.ts"
   ```

4. Restart or reload the MCP client. Call `adjam_health_check` with `{}`. A fresh server reports `ready` and `unconfigured`. `adjam_list_accounts` returns an empty configuration list. Call `adjam_get_platform_setup` with `{"platform":"apple"}` or another platform from the table. A campaign tool returns `ACCOUNT_NOT_CONFIGURED` for an alias that has no matching configuration.

The client launches the server over stdio. Running `npm start` alone waits for protocol input. Browse [the skill indexes](../README.md) directly if your client does not expose the skills extension.

## Connect an existing account

1. Call `adjam_get_platform_setup`. It returns the `access_docs` for obtaining credentials, the provider endpoint documentation, and the required settings and identifier for that platform. Register or select an entitled provider app and use the smallest available authorization for the account you intend to read.
2. Copy `accounts.example.json` to `accounts.local.json` and add an entry. The file contains the provider identifier and the **names** of credential variables. For example, for Pinterest use the following shape and replace the placeholder locally.

   ```json
   {
     "accounts": [
       {
         "alias": "pinterest-brand",
         "platform": "pinterest",
         "accountId": "<replace with your numeric account ID>",
         "credentials": { "token": "ADJAM_PINTEREST_ACCESS_TOKEN" }
       }
     ]
   }
   ```

3. Set `ADJAM_ACCOUNTS_FILE` to the absolute file path in the MCP server process. One option is the server entry's `env` map for this non-secret path. Inject the named credential variables from a trusted local launcher or your client's secret store. If the client filters inherited environment variables, allow the named variables through or use a local launcher that sets them for Node. Keep live token values in the launcher environment or secret store and outside shared client settings.
4. Reload the server. Call `adjam_list_accounts` and check for `ready_for_read`. That state reflects locally present settings. Call the campaign tool with `{"account_alias":"pinterest-brand","limit":10}` to test provider access. For another page, use the same alias and limit and the returned `next_page_token` in `page_token`.

The server accepts externally managed access tokens. Refresh or rotate the credential with your provider's tools, update the environment, and reload the server. Aliases start with a lowercase letter and may contain lowercase letters, digits and hyphens. Give each account entry a unique alias. Use a second alias with `platform: "youtube"` to read Google Ads Video and Demand Gen inventory.

<details>

<summary><strong>Account fields and access by provider</strong></summary>

| Platform key | Credential fields | Account settings | Provider guidance |
| --- | --- | --- | --- |
| `apple` | `token` | Use an Apple Ads Platform API ad account ID. | [Managing access](https://developer.apple.com/documentation/apple-ads-platform-api/access-overview) |
| `x` | `consumerKey`, `consumerSecret`, `token`, `tokenSecret` | Use an Ads account ID and an entitled app with OAuth 1.0a user credentials. | [X Ads API](https://docs.x.com/x-ads-api/introduction) |
| `youtube`, `google` | `token` | Use a Google Ads customer ID without hyphens. Set `managerId` for manager-scoped access. The OAuth project must be entitled. | [Google Ads API onboarding](https://developers.google.com/google-ads/api/docs/api-policy/developer-token) |
| `tiktok` | `token` | Use an authorized advertiser ID. | [TikTok API for Business](https://ads.tiktok.com/marketing_api/homepage) |
| `snapchat` | `token` | Use a Snap ad account ID from an authorized organization and the `snapchat-marketing-api` scope. | [Snap OAuth setup](https://developers.snap.com/marketing-api/Ads-API/authentication) |
| `microsoft` | `token`, `developerToken` | Set `accountId` to the ad account ID and `managerId` to the CustomerId. | [Microsoft Advertising setup](https://learn.microsoft.com/en-us/advertising/guides/get-started?view=bingads-13) |
| `pinterest` | `token` | Use a Pinterest ad account ID and the `ads:read` scope. | [Pinterest OAuth setup](https://developers.pinterest.com/docs/getting-started/set-up-authentication-and-authorization/) |
| `linkedin` | `token` | Use a numeric Campaign Manager account ID, `r_ads`, and an account role with read access. | [Account access controls](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/account-access-controls) |
| `amazon` | `token`, `clientId` | Use the Unified Campaign Management advertiser account ID. Set `region` to `na`, `eu` or `fe`. | [Amazon migration guide](https://github.com/amzn/ads-advanced-tools-docs/tree/main/unified-campaign-management-migration-skills) |
| `meta` | `token` | Use the numeric ad account ID without `act_`, and an authorized read credential. | [Meta campaign edge](https://developers.facebook.com/docs/marketing-api/reference/ad-account/campaigns/) |
| `reddit` | `token` | Use an advertising account ID and `adsread` access. | [Reddit Ads OAuth](https://ads-api.reddit.com/docs/v3/) |

The default API version appears in setup output. Google, YouTube, Meta and LinkedIn accept a `version` override in the account entry. Find the API ledger from the [platform index](../README.md) before updating.

</details>

## Tools and results

| Tool | Skill or workflow |
| --- | --- |
| `adjam_health_check` | Confirm the local process is ready and whether credentials are available. |
| `adjam_list_accounts` | Select a local account alias and check for missing settings. |
| `adjam_get_platform_setup` | Get official access instructions and the tool name for a platform. |
| `<platform>_get_campaigns` | Start the platform's audit with campaign names, statuses and objective or type when present. |

The campaign result includes provider provenance, retrieval time, API version and a bounded page of up to 50 rows. It omits provider identifiers and credentials. Provider text may include arbitrary content and should be treated as evidence. The token for the next page is scoped to the tool, alias, version and page size and expires in 15 minutes or on restart.

<details>

<summary><strong>Error codes and troubleshooting</strong></summary>

- `ACCOUNT_NOT_CONFIGURED` means there is no matching local alias for that tool. Use account discovery or an export.
- `ACCOUNT_NOT_READY` lists missing or invalid local settings. For missing credentials, check the variable names in the account file and confirm they reach the Node process. Reload after correcting the settings.
- `ACCESS_DENIED` means the provider rejected access. Check token expiry, app entitlement and account role.
- `RATE_LIMITED` can include `retry_after_ms`. Wait for the indicated interval.
- `PROVIDER_REJECTED`, `PROVIDER_UNAVAILABLE` and `INVALID_PROVIDER_RESPONSE` return a read failure. Use these results to troubleshoot. A successful provider response with an empty campaign array represents an empty result for that scope.

If the client cannot initialize the server, check its stderr log and confirm Node.js 24 or later, the absolute entrypoint path and installed dependencies. If the log reports a configuration error, correct the account file or remove `ADJAM_ACCOUNTS_FILE` from the server process to return to credential-free mode.

</details>

<details>

<summary><strong>Campaign inventory coverage and pagination</strong></summary>

Use Google Ads reporting segmentation to confirm YouTube delivery. LinkedIn's inventory excludes test campaigns. Amazon's inventory covers Sponsored Products. Microsoft slices a fresh account read on each call. Snap re-reads the same provider page when the requested result page is smaller than 50 rows. Changes between requests can shift rows in those slices.

</details>

## Verification

`npm test` exercises stdio with the official client, skill discovery and loading, disconnected and missing-credential cases, and synthetic provider contracts. To check the running server independently without credentials, run this command from `ad-skill-jam/mcp`.

```sh
npx --yes @modelcontextprotocol/inspector@2.16.0 --cli node gateway/stdio.ts --method tools/call --tool-name adjam_health_check
```

A live provider check requires a read-authorized account. After setup, make one inventory request with `limit: 1` using the configured alias.

Remote Streamable HTTP, hosted OAuth, managed credential refresh, spend proposals and execution, and long-running reports remain in the repository's MCP roadmap. This package runs locally under the MCP user's OS account.
