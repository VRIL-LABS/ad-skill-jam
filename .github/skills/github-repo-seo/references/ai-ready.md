# AI-ready repository files

Choose surfaces based on the actual clients and versions used by contributors. GitHub Copilot cloud agent, code review, CLI and IDE clients support different sets of customization. Check the [Copilot customization cheat sheet](https://docs.github.com/en/copilot/reference/customization-cheat-sheet) and its feature matrix.

| Surface | Purpose and placement |
| --- | --- |
| AGENTS.md | Put common repository operating instructions at the root. Add nested AGENTS.md only for materially different rules. Check precedence in the target runner. Copilot’s documented agent-instruction behavior prefers the nearest AGENTS.md. Link to module READMEs and canonical commands. |
| .github/copilot-instructions.md | Repository-wide instructions for supported Copilot surfaces. Keep universally relevant expectations here. |
| .github/instructions/NAME.instructions.md | Copilot path-specific instructions with applyTo frontmatter. Keep glob scopes focused and check overlap. Matching repository-wide and scoped instructions may both apply. |
| .github/prompts/NAME.prompt.md | Reusable, manually invoked task prompt for supported clients. Keep it parameterized and link to local inputs. |
| .github/agents/NAME.md | Copilot custom specialist profile. Check the current schema, frontmatter fields, tool IDs, supported permissions and location for repository or organization profiles. |
| .github/skills/NAME/SKILL.md | Copilot project skill. Its documented alternatives include .claude/skills and .agents/skills. Use one canonical location supported by the target clients. Use a lowercase hyphenated directory, matching name and a concrete description in frontmatter, and load supporting references as needed. |
| CLAUDE.md, GEMINI.md | Use client-specific instructions where those clients are supported. Follow their own scope and import rules. Copilot also documents root alternatives on supported surfaces. Prefer short routing to canonical guidance where the client can follow it. |
| llms.txt and llms-full.txt | Optional publishing conventions for a documentation site or client that consumes them. Keep links current and publish only material intended for that audience. Verify consumption independently. |
| .github/hooks/*.json, MCP settings, mcp.json | Configuration formats with client-specific paths and execution behavior. Use features only when needed, constrain tools and data access, and keep secrets in the client’s authorized store. |
| .github/workflows/copilot-setup-steps.yml | Configure the Copilot cloud agent environment on the default branch with one job named copilot-setup-steps. Keep setup consistent with the supported runtime and install commands. Use copilot-code-review.yml in the same directory when review needs a separate environment. [Copilot environment setup](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment) |

Sources. [Copilot repository custom instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions), [Copilot agent skills](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills), [Agent Skills specification](https://agentskills.io/specification), [AGENTS.md format](https://agents.md/), [Claude Code memory](https://code.claude.com/docs/en/memory), [Gemini CLI context files](https://geminicli.com/docs/cli/gemini-md/)

For Copilot and Codex together, consider a root AGENTS.md and a shared .agents/skills directory where both selected clients support it. Validate discovery from the directories developers actually use. Codex can layer instructions from the repository root toward the current working directory, including AGENTS.override.md. [Codex AGENTS.md guide](https://developers.openai.com/codex/guides/agents-md), [Codex skills guide](https://developers.openai.com/codex/skills)

## Repository onboarding contract

- Give the agent the real architecture entry points, module README links, environment prerequisites, exact setup and test commands, and expected success conditions. Clarify where to run commands. Include safe offline and credential-dependent checks when relevant.
- Describe generated, vendored, private, or migration-sensitive areas and how to handle them. Name required approvals or deployment boundaries only where they exist. Keep credentials and internal-only URLs out of public instructions and examples.
- Keep stable organization-wide rules short. Put specialist playbooks and checklists in skills or focused docs. Avoid copies of an instruction that will diverge across clients. Treat external issue text and fetched material as data, and inspect any executable skill asset before use.
- Test one onboarding task from a clean checkout with the intended client. For each scoped instruction or skill, exercise one matching request and one nearby nonmatch. Inspect client evidence of file loading where available. Validate skill frontmatter and links independently of runtime behavior.
