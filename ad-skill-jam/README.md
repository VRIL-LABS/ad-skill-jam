# Ad Skill Jam skills

![Ad Skill Jam, by VRIL LABS](assets/readme-header.svg)

Start with a question about your ads. Give your agent the playbook for that platform and task, whether you’re auditing spend, planning a campaign, reviewing creative, or untangling conversion data. A redacted export can get you started without connecting an account.

## Use the skills

Choose a platform, then open the skill for your task. Give your agent the `SKILL.md` and keep the pack tree intact so it can read linked references. For exports, redact identifiers and include the date range, timezone, currency, and attribution settings.

<table>
  <tr>
    <td align="center" width="25%"><a href="meta-ads/README.md"><img src="assets/providers/facebook.svg" width="30" height="30" alt=""> <img src="assets/providers/instagram.svg" width="30" height="30" alt=""><br>Meta Ads</a></td>
    <td align="center" width="25%"><a href="google-ads/README.md"><img src="assets/providers/google.svg" width="30" height="30" alt=""><br>Google Ads</a></td>
    <td align="center" width="25%"><a href="youtube-ads/README.md"><img src="assets/providers/youtube.svg" width="30" height="30" alt=""><br>YouTube Ads</a></td>
    <td align="center" width="25%"><a href="linkedin-ads/README.md"><img src="assets/providers/linkedin.svg" width="30" height="30" alt=""><br>LinkedIn Ads</a></td>
  </tr>
  <tr>
    <td align="center" width="25%"><a href="reddit-ads/README.md"><img src="assets/providers/reddit.svg" width="30" height="30" alt=""><br>Reddit Ads</a></td>
    <td align="center" width="25%"><a href="tiktok-ads/README.md"><img src="assets/providers/tiktok.svg" width="30" height="30" alt=""><br>TikTok Ads</a></td>
    <td align="center" width="25%"><a href="x-ads/README.md"><img src="assets/providers/x.svg" width="30" height="30" alt=""><br>X Ads</a></td>
    <td align="center" width="25%"><a href="snapchat-ads/README.md"><img src="assets/providers/snapchat.svg" width="30" height="30" alt=""><br>Snapchat Ads</a></td>
  </tr>
  <tr>
    <td align="center" width="25%"><a href="pinterest-ads/README.md"><img src="assets/providers/pinterest.svg" width="30" height="30" alt=""><br>Pinterest Ads</a></td>
    <td align="center" width="25%"><a href="microsoft-ads/README.md"><img src="assets/providers/microsoft.svg" width="30" height="30" alt=""><br>Microsoft Advertising</a></td>
    <td align="center" width="25%"><a href="apple-ads/README.md"><img src="assets/providers/apple.svg" width="30" height="30" alt=""><br>Apple Ads</a></td>
    <td align="center" width="25%"><a href="amazon-ads/README.md"><img src="assets/providers/amazon.svg" width="30" height="30" alt=""><br>Amazon Ads</a></td>
  </tr>
</table>

## Install skills

From the project where you want the skills, run the [Bash installer](scripts/install-packs.sh) on Linux or macOS, or the [PowerShell installer](scripts/install-packs.ps1) on Windows. Use Node.js 24+, npm, and Git. Specify pack names such as `google` and `meta`, add `shared` for cross-platform skills, or choose `all` by itself. Each platform README also has a direct Skills CLI command.

<details>

<summary><strong>Shared advertising skills</strong></summary>

| Task | Skill |
| --- | --- |
| Score an audit and report evidence gaps | [Ad audit](ads/ad-audit/SKILL.md) |
| Review performance and reconcile reports | [Ad reporting](ads/ad-reporting/SKILL.md) |
| Edit advertising copy | [Ad copy review](ads/ad-antislop/SKILL.md) |
| Review and approve an account change | [Approval gate](ads/ad-approval-gates/SKILL.md) |

</details>

## Run the MCP

[![Add Ad Skill Jam MCP to VS Code](https://img.shields.io/badge/VS_Code-Add_MCP-2564ad?style=flat)](https://vscode.dev/redirect?url=vscode%3Amcp%2Finstall%3F%257B%2522name%2522%253A%2522ad-skill-jam%2522%252C%2522type%2522%253A%2522stdio%2522%252C%2522command%2522%253A%2522node%2522%252C%2522args%2522%253A%255B%2522%2524%257BworkspaceFolder%257D%252Fad-skill-jam%252Fmcp%252Fgateway%252Fstdio.ts%2522%255D%257D) · [Install links by IDE](mcp/README.md#install-in-an-ide) · [Desktop bundle](mcp/README.md#install-a-desktop-bundle)

The local server supports health checks, account setup, and skill browsing without credentials. With a configured account, use it to fetch read-only campaign inventory. Clients with Skills over MCP can look up a skill by its frontmatter `name` and open its supporting files from the catalog. [MCP setup and troubleshooting](mcp/README.md)

<details>

<summary><strong>Source notes and validation</strong></summary>

Each platform index links to its API ledger. See the [source manifest](_shared/provenance/SOURCES.md) for mined repositories and the [eval guide](_shared/evals/README.md) for pack validation and behavior fixtures.

</details>
