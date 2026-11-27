# PROMPT.md — task prompt

**Repository guides:** [AGENTS.md](AGENTS.md) and [PROMPT.md](PROMPT.md). The source catalog and MCP planning notes are local development files when available.

## Table of contents

- [Task prompt](#task-prompt)
- [Top-3 source repos](#top-3-source-repos)
- [Honorable mentions and notes](#honorable-mentions-and-notes)
- Related: [AGENTS.md → Hard rules](AGENTS.md#hard-rules) · [Licensing policy](AGENTS.md#licensing-zero-friction-policy) · [Hyperfuse workflow](AGENTS.md#hyperfuse-workflow-dovetailed-with-mining) · [Mining workflow](AGENTS.md#mining-workflow)

## Task prompt

**TARGET:** meta-ads   (options: meta-ads | reddit-ads | x-ads | tiktok-ads | linkedin-ads | google-ads | apple-ads | ads | marketing | ALL)

Read [AGENTS.md](AGENTS.md) first. Consult the local source catalog when available. Load the project skills in `.agents/skills/` (see [AGENTS.md → Project skills](AGENTS.md#project-skills-that-govern-this-work)) and follow the [hyperfuse workflow](AGENTS.md#hyperfuse-workflow-dovetailed-with-mining).

## Top-3 source repos

Ranked by quality across tests, evals, CI, validation tooling, and platform relevance.

1. marketingskills (Corey Haines): 53 skills, about 180 test files, 73 eval files, 7 CI workflows and validation scripts. Much of it is general marketing rather than ads-specific.
2. claude-ads: 34 skills and 25 agents. It is the only repo with a dedicated skill for each of Meta, Reddit, X, TikTok, LinkedIn, Apple and Google. It has an eval gate and source-verifier agents. Its SKILL.md files are short, so the depth is in `ads/references/`.
3. langchain-ai/paid-media-agent: it covers all five target platforms, with tests, evals, CI and
   approval-gated writes. Its skills are shallow; the value is the agent design and guardrails.

## Honorable mentions and notes

Honorable mentions:
- google-ads-skills-3
- adloop
- google-ads-skills
- marketing-skills
- Repo count: the map covers 32 repos. Earlier I said 29, which was a miscount.
- `ad-skill-jam/` holds the fused output and the remaining scaffold. See the skill indexes for [Meta Ads](ad-skill-jam/meta-ads/README.md), [Reddit Ads](ad-skill-jam/reddit-ads/README.md), and [Google Ads](ad-skill-jam/google-ads/README.md).
