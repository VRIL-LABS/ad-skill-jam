# GitHub Repo SEO skill card

## Description
Improve GitHub repository discovery and readiness by auditing About metadata, language topics, README and community files, AI instructions and skills, and .github automation. <br>

Draft for maintainer review.

## Third-Party Community Consideration
Repository workspace maintained by [VRIL LABS](https://github.com/VRIL-LABS/ad-skill-jam).

### License and terms of use

The skill follows the repository's [GNU GPL v3 license](../../../LICENSE).

## Use Case
Maintainers and developer teams use the skill to audit, set up, or prepare GitHub repositories for release. <br>

### Deployment Geography for Use
Global <br>

## Requirements / Dependencies
**Requires API Key or External Credential:** [Optional] <br>
**Credential Type(s):** [OAuth Token] <br>

Do not include secrets in prompts/logs/output; use least-privilege credentials; rotate keys as appropriate. See skill body for more details. <br>

## Known Risks and Mitigations
Stale platform guidance can lead to broken discovery or incorrectly configured workflows. Verify behavior against current documentation and the target GitHub edition. Limit remote mutations to the user-authorized scope.

## Reference(s)
- [Discovery and topics](references/discovery.md) <br>
- [Markdown inventory](references/markdown-files.md) <br>
- [AI readiness](references/ai-ready.md) <br>
- [Advanced GitHub configuration](references/github-configuration.md) <br>
- [Verification examples](references/verification.md) <br>


## Skill Output
**Output Type(s):** [Analysis, Files, Configuration instructions] <br>
**Output Format:** [Markdown audit and verification summary with repository edits when requested] <br>
**Output Parameters:** [1D] <br>
**Other Properties Related to Output:** [Reports effective GitHub settings and outstanding checks when observable.] <br>

## Evaluation Tasks
One independent simulated launch audit covering topic selection, README precedence, issue-template inheritance, private vulnerability reporting, CI event coverage, and onboarding for Copilot and Codex. <br>

## Skill Version(s)
Initial workspace draft (no independent release assigned) <br>

## Review evidence

| Field | Evidence | Status |
| --- | --- | --- |
| Name and description | Skill frontmatter and workflow | Confirmed |
| Repository organization | Workspace Git remote | Confirmed for the workspace |
| Usage and distribution terms | Repository LICENSE | Documented |
| Audience and geographic scope | General repository-maintenance workflow with no geography specified | Inferred |
| Credentials | Public audit and authenticated GitHub paths documented in SKILL.md | Confirmed |
| References and output | Local reference files and Deliver section | Confirmed |
| Version | New workspace skill | No independent release |
| Evaluation | Independent simulated launch audit and structural checks | Client discovery untested |
