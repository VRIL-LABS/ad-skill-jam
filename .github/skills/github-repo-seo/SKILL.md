---
name: github-repo-seo
description: Improve GitHub repository discovery and readiness by auditing About metadata, language topics, README and community files, AI instructions and skills, and .github automation. Use when setting up, polishing, or preparing a GitHub repository for release, or when fixing a specific discovery or repository configuration issue.
---

# GitHub Repo SEO

Make the repository easy to find, evaluate, install, contribute to, and maintain. Use documented GitHub discovery behavior and report what you verified.

## Inputs

Identify the repository, default branch, GitHub edition, visibility, owner, intended users, release or package channels, installed agent clients, and whether the user wants an audit, local edits, or remote configuration. Derive facts from the repository and its published releases. Ask about policies, ownership, or support contacts when evidence is missing and the choice affects the result.

Audit public documentation and local files without credentials. Private repository access or remote changes may require an authenticated GitHub session with the relevant repository permissions. Use an existing session where available, such as GitHub CLI authenticated through OAuth. Keep credentials out of examples and repository files.

## Workflow

1. **Inventory the actual surfaces.** Check the default branch, tracked files, docs tree, version manifests, GitHub About settings, language breakdown, community profile, releases, and available repository features. For organization defaults, inspect the owner’s .github repository when accessible. Record access or edition limits as unverified.
2. **Make the front page answer the first questions.** Lead with what the project does, who uses it, and one working install or example. Include meaningful supported integrations and versions. Link to deeper guides and actual releases. Check relative paths, anchor links, readme precedence, badges, accessibility, and social preview. Use [discovery and topics](references/discovery.md).
3. **Set language topics as the baseline.** Every topic setup or refresh begins by mapping each maintained implementation language to its established GitHub topic. Check GitHub’s detected languages against tracked source, manifests, and build entry points. Add only precise, evidenced purpose, ecosystem, or integration topics. Explain exclusions and any prioritization required by GitHub’s cap. Use [discovery and topics](references/discovery.md) for the decision rules.
4. **Select repository files by function.** Check the [Markdown inventory](references/markdown-files.md) for recognition, location, precedence, and when each artifact earns its place. Include applicable community and support files with real working routes. Keep project-specific policy in one authoritative location and link to it where readers need it.
5. **Set up AI entry points.** Start with the supported instruction entry point for each target agent. Include exact setup and verification commands, module boundaries, generated/private paths, and contribution rules. Use scoped instructions for directory-specific rules and a skill for reusable multi-step work. See [AI readiness](references/ai-ready.md).
6. **Configure maintained services.** Read [advanced GitHub configuration](references/github-configuration.md) for workflows, templates, funding, ownership, releases, and repository settings. Verify feature flags, plan limitations, ownership, conditions, and permissions. Apply remote configuration within the user’s authorized scope.
7. **Verify the experience.** Test links and install commands from a clean checkout at the documented revision. Validate format-specific files and confirm the effective GitHub settings after rollout. Verify CI for the intended event and branch, community reporting routes, topics, and one AI onboarding task when possible. Distinguish local checks from public GitHub checks and pending results.

## Deliver

Summarize what changed or is proposed, name the final topics and evidence for their selection, list configured GitHub surfaces with their paths, and report check results and remaining decisions. Prioritize blockers that affect installation, safe contribution, or release. For a worked scenario and trigger checks, use [verification examples](references/verification.md).
