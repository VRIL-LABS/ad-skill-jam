# Repository Markdown inventory

GitHub renders Markdown throughout a repository. A smaller set of filenames and paths activates discovery, display, or workflow behavior. Check the platform, feature, and default branch before counting a file as active.

## GitHub-recognized Markdown and related formats

| File or surface | Placement and behavior | What to write |
| --- | --- | --- |
| README.md | Repository landing page chooses .github, then root, then docs. Nested READMEs document their directories. A public user-profile repository named after the account uses a root README.md. An organization public profile uses profile/README.md in the organization’s public .github repository. | Lead with audience, purpose, prerequisites, quick start and expected output. Link usage, support, security, contribution and releases where they exist. |
| CONTRIBUTING.md | Recognized in .github, root or docs. GitHub links to it from contribution surfaces. Eligible for owner defaults. | Setup and test commands, how to propose changes, review expectations, and links to policy. Document a DCO or CLA only if enforced. |
| CODE_OF_CONDUCT.md | Recognized in .github, root or docs. Eligible for owner defaults. | Scope, conduct expectations, enforcement roles, and a reporting route someone actually monitors. Preserve required attribution if adopting a published code. |
| SUPPORT.md | Recognized in .github, root or docs. Eligible for owner defaults. | Route questions, bugs and confidential reports to their respective channels. State the support boundaries and versions. |
| SECURITY.md | Recognized in .github, root or docs and linked from the Security surface. Eligible for owner defaults. | Supported versions, confidential disclosure route, information to supply, and realistic response expectations. Test the report path and enable private reporting when appropriate. |
| ACCESSIBILITY.md | Documented community health file for accessibility. Eligible for owner defaults. | Describe accessibility goals, known barriers, how to report an issue, and any evidenced conformance status. |
| Markdown issue templates | Keep them in .github/ISSUE_TEMPLATE/ on the default branch with documented YAML frontmatter. YAML issue forms are another option. Repository issue templates or config take over the whole inherited issue-template folder. | Ask for reproducible, actionable details. Route support and vulnerability reports separately. Test the chooser and contact links. |
| Pull request templates | A single pull_request_template.md can live in .github, root or docs. Multiple templates live in a PULL_REQUEST_TEMPLATE directory in one of those locations and can be selected with a template URL query parameter. | Ask for purpose, verification, risks, and breaking changes only where useful. Verify the template on the default branch. |
| Copilot and agent Markdown | See [AI readiness](ai-ready.md) for client-specific paths, AGENTS.md, instructions, skills, prompts, and custom agents. | Keep commands tested, scope explicit, and instructions concise. |
| LICENSE and notices | Put the actual license text in a root LICENSE file for detection. GitHub documents LICENSE.txt and LICENSE.md as alternatives. | Use the license approved by the owner. Keep required notices with the applicable code or assets. Confirm detection and distinguish public visibility from permission to reuse. |
| CITATION.cff | Put it at the repository root for GitHub’s citation UI. This is Citation File Format YAML. | Set authors, title and project identifier. Align version, dates and preferred citation with the project’s release and citation policy. |

Sources for placement and behavior. [Repository README](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes), [Organization profile](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile), [Community health defaults and precedence](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file), [Community profile](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories), [Issue templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository), [PR templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository), [Licensing](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository), [Citation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-citation-files)

## Project documentation conventions

Add these where a real audience, task or policy justifies the extra page. Give them an owner and link from the relevant entry point.

| File or family | Include when useful |
| --- | --- |
| CHANGELOG.md, HISTORY.md, RELEASE_NOTES.md | Maintain chronological, versioned user-visible changes and migration links. GitHub Releases is a separate publishing surface. |
| CONTRIBUTORS.md, AUTHORS.md, MAINTAINERS.md, ACKNOWLEDGMENTS.md | Document credit, roles, ownership and maintained contact points. Obtain consent for personal contact details. |
| GOVERNANCE.md | Explain maintainer roles, decision-making, escalation, and succession when the project has a governance process. Link from CONTRIBUTING. GitHub’s documented default community health file list omits this filename. |
| INSTALL.md, QUICKSTART.md, docs/README.md, docs/API.md, docs/examples/ | Use for longer setup, integration or usage paths. Keep one canonical set of install commands and test them from the user’s working directory. |
| ARCHITECTURE.md, DEVELOPMENT.md, docs/adr/, TESTING.md | Record module boundaries, decision records, local build, test and debugging commands, and supported environments. |
| ROADMAP.md, RFCs, MIGRATION.md, UPGRADING.md, COMPATIBILITY.md | Clarify supported versions and transitions. Mark aspirations as such and link tracked commitments. |
| PRIVACY.md, NOTICE.md, THIRD_PARTY_NOTICES.md | Document real data handling or applicable notices when needed. Route legal text through the owner’s process. |
| FUNDING.md, FAQ.md, TROUBLESHOOTING.md, docs/runbooks/ | Add practical, maintained routes for funding or recurring operational problems. The native sponsor button uses .github/FUNDING.yml. |
| CODEOWNERS, .gitattributes, .gitignore, .editorconfig | Use their actual syntax and supported locations. Each has a distinct purpose from Markdown documentation. |

## Verify recognition and inheritance

For supported community files with multiple locations, GitHub generally checks .github, root, then docs. Confirm the specific file’s rules. Where an owner has a public .github repository and eligible defaults are inherited, check the visible notices and template behavior on the destination. Inherited files are displayed by GitHub and absent from the clone. Provide a repository-local file when project-specific behavior or offline discoverability requires it. Markdown rendering does not imply native recognition. Check community profile and the relevant interaction directly rather than assuming the presence of a file satisfies a state or policy.

Review accessibility and security using their feature-specific guidance. [Adding an accessibility page](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-an-accessibility-page-to-your-repository), [Adding a security policy](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/configure-vulnerability-reporting/add-security-policy)
