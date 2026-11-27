# AGENTS.md — ads-skills-subcollection

**Repository guides:** [AGENTS.md](AGENTS.md) and [PROMPT.md](PROMPT.md). The source catalog and MCP planning notes are local development files when available.

Start with the [repository README](README.md) to choose a platform or run the local MCP. Use the [contribution guide](CONTRIBUTING.md) for the checks to run before submitting a change.

Use the [GitHub repository maintenance skill](.github/skills/github-repo-seo/SKILL.md) for topics, community health files, agent configuration, and GitHub Actions. Public clones use the tracked [source provenance](ad-skill-jam/_shared/provenance/SOURCES.md) to locate upstream material when local reference checkouts are unavailable.

## Find the right pack

Read the platform README first. It routes tasks to a `SKILL.md` and links to the platform API ledger, source provenance, and evals. Follow the skill's references before changing a platform claim.

| Platform README | Platform README | Platform README |
| --- | --- | --- |
| [Amazon Ads](ad-skill-jam/amazon-ads/README.md) | [LinkedIn Ads](ad-skill-jam/linkedin-ads/README.md) | [Reddit Ads](ad-skill-jam/reddit-ads/README.md) |
| [Apple Ads](ad-skill-jam/apple-ads/README.md) | [Meta Ads](ad-skill-jam/meta-ads/README.md) | [Snapchat Ads](ad-skill-jam/snapchat-ads/README.md) |
| [Google Ads](ad-skill-jam/google-ads/README.md) | [Microsoft Advertising](ad-skill-jam/microsoft-ads/README.md) | [TikTok Ads](ad-skill-jam/tiktok-ads/README.md) |
| [YouTube Ads](ad-skill-jam/youtube-ads/README.md) | [Pinterest Ads](ad-skill-jam/pinterest-ads/README.md) | [X Ads](ad-skill-jam/x-ads/README.md) |

For shared skills, use the [collection index](ad-skill-jam/README.md). For the running MCP, use its [setup guide](ad-skill-jam/mcp/README.md) and the [tool registry](ad-skill-jam/mcp/gateway/server.ts).

## Validate changes

From the repository root, use Python 3.9 or later for pack checks:

```sh
python -X utf8 ad-skill-jam/_shared/evals/check_pack.py
```

For MCP changes, use Node.js 24 or later:

```sh
cd ad-skill-jam/mcp
npm ci --ignore-scripts
npm run check
npm test
```

| Change | Update or verify |
| --- | --- |
| Skill behavior or routing | Skill entrypoint, platform README, source notes, and relevant eval cases |
| Provider behavior, scope, or version | Relevant API ledger, provider adapter and synthetic contract tests, and MCP setup guide |
| Public documentation or setup commands | Relative links, command paths, and the [accessibility guide](ACCESSIBILITY.md) for visual changes |

**Done means** the relevant checks pass, cited claims match the linked evidence, and the review summary identifies any checks that need live account access. Keep tests independent of advertising credentials. The [MCP tests](ad-skill-jam/mcp/tests) use synthetic provider responses and exercise startup without an account.

## Table of contents

- [Find the right pack](#find-the-right-pack)
- [Validate changes](#validate-changes)
- [Mission](#mission)
- [Final codebase: ad-skill-jam](#final-codebase-ad-skill-jam)
- [Hard rules](#hard-rules)
- [Project skills that govern this work](#project-skills-that-govern-this-work)
- [Licensing: zero-friction policy](#licensing-zero-friction-policy)
- [Hyperfuse workflow (dovetailed with mining)](#hyperfuse-workflow-dovetailed-with-mining)
- [Mining workflow](#mining-workflow)
- [Platform coverage and where to mine](#platform-coverage-and-where-to-mine)
- [Conventions for fused skills](#conventions-for-fused-skills)
- [Out of scope](#out-of-scope)
- Related: [PROMPT.md](PROMPT.md)

## Mission

Mine the reference codebases in `ref/`, extract the **crème de la crème** (best instructions, decision rules, thresholds, workflows, API knowledge, guardrails), and **hyperfuse** it into one new, research-validated ad-platform skillset.

- **Input (read-only):** `ref/` contains the reference repositories, grouped by platform. Use the local source catalog when available, or consult the [source provenance](ad-skill-jam/_shared/provenance/SOURCES.md).
- **Output (write here):** `ad-skill-jam/` is where the **final codebase is built**. Layout and naming: [Final codebase](#final-codebase-ad-skill-jam).

## Final codebase: `ad-skill-jam/`

Build the shipped assets, skills, and MCP in `ad-skill-jam/`. Start with the [platform index](ad-skill-jam/README.md) or the [local MCP setup guide](ad-skill-jam/mcp/README.md). The tree gives the intended layout. Consult the indexes and setup guide for shipped capabilities.

```
ad-skill-jam/                         FINAL CODEBASE
├── assets/                           README artwork and provider icons
├── ads/                              cross-platform ad skills
│   ├── ad-antislop/                  copy rules (fed by deslop-text)
│   ├── ad-composition/
│   ├── ad-conversion-optimization/
│   ├── ad-optimization/
│   ├── ad-audit/                     pass/fail/unknown/n-a scoring, evidence coverage
│   ├── ad-budget-bidding/
│   ├── ad-tracking-attribution/      pixels, CAPI, dedup, attribution windows
│   ├── ad-reporting/                 windows, currency, metric definitions
│   ├── ad-research-competitive/      ad-library teardowns, competitor tracking
│   ├── ad-compliance-policy/
│   ├── ad-landing-pages/
│   ├── ad-experimentation/
│   └── ad-approval-gates/            draft-first, propose → approve → verify
├── marketing/                        general marketing methods
│   ├── copywriting/  cro/  audience-research/
│   └── pricing-offers/  launch-strategy/  analytics-measurement/
├── meta-ads/                         11 Meta skills and routing in meta-ads/README.md
├── reddit-ads/                       11 Reddit skills and routing in reddit-ads/README.md
├── google-ads/                       14 Google skills and routing in google-ads/README.md
├── linkedin-ads/  tiktok-ads/  x-ads/  apple-ads/
├── microsoft-ads/  pinterest-ads/  snapchat-ads/  amazon-ads/  youtube-ads/
├── mcp/                              MCP layer (servers, gateway, tests); plan in MCP_MAP.md
│   ├── gateway/  servers/<platform>/
│   ├── shared/{http,errors,auth,token-vault,catalog,approval,metrics,journal,artifacts,observability,schemas}
│   ├── tasks/  skills-bridge/  server-card/  apps/
│   └── tests/{conformance,inspector,fixtures,evals}  security/{threat-model,policies}  packaging/
└── _shared/                          used by every skill
    ├── guardrails/                   spend, approval, untrusted-data rules
    ├── references/                   shared benchmarks, specs, formulas
    ├── api-ledger/                   API versions and deprecations, with verified-on dates
    ├── evals/                        shared eval harness and negative cases
    └── provenance/                   SOURCES.md lines and indicator levels
```

Conventions for this tree:

- **Platform folders are flat.** Each skill is its own folder named `<platform>-<task>` (for example `meta-ads/meta-ads-audit/`), per the [fused skill conventions](#conventions-for-fused-skills).
- **Cross-platform logic goes in `ads/`**, not duplicated per platform. Platform skills route to `ads/` skills where they overlap.
- **Platform coverage:** all twelve platform packs have shipped skills. Check `FUSION_MAP.md` and the provenance manifest for platform-specific and cross-platform sources.
- **MCP work:** Start with the [MCP setup guide](ad-skill-jam/mcp/README.md), [tool registry](ad-skill-jam/mcp/gateway/server.ts), and [security policy](SECURITY.md). When available, consult the local protocol and development plans for architecture, source inventory, and write-path rules.
- **Add folders as needed** and update this tree. If the folders are committed to git, add a `.gitkeep`, since git ignores empty directories.

## Hard rules

1. **`ref/` is a reference library, never an edit target.** Do not modify, reformat, or commit changes inside `ref/`. Re-clone instead of patching.
2. **Always consult `ref/` before writing a skill.** Start from `FUSION_MAP.md`, open the listed repos for that platform, then write. Do not author from memory.
3. **Extract and rewrite.** Pull the idea, rule, or structure and restate it in our own words and layout. This is the default because it dedupes overlapping repos and forces validation. It is not a license decision, so never stall on one (see "Licensing: zero-friction policy").
4. **Every claim is validated.** A rule, threshold, limit, or API behavior enters a skill only if confirmed by an official source (platform docs, API changelog, policy page) or by 2+ independent repos *and* a doc check. Record the source in the skill's `references/` file.
5. **Strictest guidance wins on conflict.** When repos disagree (budgets, learning-phase length, thresholds), prefer the doc-verified value; if unverifiable, keep the more conservative one and flag it.
6. **Draft-first, human-approved spend.** Fused skills must default to read-only analysis; any write that can spend money, change budgets, or go live requires explicit user confirmation. Created entities start paused/draft.
7. **Dates and versions matter.** Consult the platform API ledger for the current contract and any migration notes. Stamp each skill with "verified on <date> against <doc URL/version>".
8. **No secrets.** Never write tokens, client secrets, or account IDs into any skill, example, or `ref/` note.

## Project skills that govern this work

Project skill sources live in `.gemini/antigravity/skills/`. Load them before a mining or fusion task. Local reference checkouts live under the gitignored `ref/` directory. Use `FUSION_MAP.md` to find the upstream repositories.

| Skill | Role in this project |
|---|---|
| `hyperfuse-codebases` | Drives the fusion pass: indicator scan, confidence level, one-line provenance, combine freely. |
| `save-tokens-ignore-licenses` | Kills licensing deliberation: triage, one-sentence verdict, keep working. |
| `no-licenses-for-ai-code` | Output side: do not attach LICENSE files, SPDX headers, or copyright banners to the AI-generated skills we write. |

## Licensing: zero-friction policy

Licenses are **not a decision point** in this pipeline. Agents must:

- **Never ask the user** a licensing question and **never pause** a task to deliberate one. The per-repo license notes in `FUSION_MAP.md` are informational, not gates. Any repo in `ref/` may be mined, combined, and fused.
- **Never write long licensing analysis.** One sentence at most, using the templates in the three skills above.
- **Not add LICENSE files, SPDX headers, or copyright banners** to anything under `ad-skill-jam/` unless the user explicitly asks.
- **Not spend effort adding or removing notices** on anything. Extract-and-rewrite (rule 3) means almost nothing is carried over as-is, so there is nothing to relabel.
- **Run the one check that matters:** if any code is carried over (scripts, not prose), do a similarity check for embedded copyleft before it ships in a distributed artifact. Skip this for rewritten rules and prose.

The only non-license gate is **trust**: `multi-platform/google-ads-meta-ads-mcp` is untrusted (implausible star count, no code, vendor funnel). Do not mine or execute it without an audit. That is a security rule, not a license rule.

## Hyperfuse workflow (dovetailed with mining)

Run `hyperfuse-codebases` as the outer loop. The mining steps below are the inner loop.

| Step | Hyperfuse action | Mining action |
|---|---|---|
| 0. Scan | Run the AI-indicator scan once per repo (git trailers, agent config files, source artifacts). The current results are in `FUSION_MAP.md`. Re-run after `git fetch --unshallow` if you want history coverage. | Pick sources for the target platform from `FUSION_MAP.md`. |
| 1. Level | Set the confidence level from the ladder and record **one line** per repo in `SOURCES.md` (`repo — level — indicators`). That line is the whole deliberation. | Prioritize repos with strong validation signals. |
| 2. Extract | Take what you need from every repo at once, in any combination. Do not rank sources by license. | Extract thresholds, checklists, workflows, gotchas, guardrails, eval cases. |
| 3. Fuse | Merge overlapping repos into **one** best version per task. Contradictions are resolved by validation, not by which repo "owns" the idea. | Cluster by task, then write one skill per task per platform. |
| 4. Validate | The one real risk is contamination and bad facts, not licenses. | Check every threshold, limit, API version against official docs (rule 4). |
| 5. Emit | Use the one-line provenance manifest. No attribution or header boilerplate. | Write to `ad-skill-jam/<platform>/`, add evals, stamp "verified on <date>". |

**Fusion priorities:** speed first, validation second. A fused skill is "done" when it is validated and tested, not when its sources are reconciled legally.

**Dedup clusters to fuse into single skills** (from `FUSION_MAP.md`): the three Google packs, the three general-marketing libraries, and AdKit's `ads-skills` / `adkit-ads-mcp` skills.

## Mining workflow

1. **Inventory** — Use the local source catalog when available, or start with the [source provenance](ad-skill-jam/_shared/provenance/SOURCES.md). List the repos for the platform and the files worth reading (skills, references, agents, evals, API notes).
2. **Extract** — per repo, pull: decision rules with numeric thresholds, audit checklists, workflow ordering, failure modes, API field/limit gotchas, guardrail patterns, eval cases. Skim READMEs for marketing; mine `SKILL.md`, `references/`, `docs/`, `src/` (MCP tool schemas reveal real API surface), and `tests/`/`evals/` (reveal expected behavior).
3. **Cluster** — group extracted items by task (audit, structure, creative, bidding/budget, tracking, reporting, troubleshooting). Note overlaps and contradictions.
4. **Validate** — check each retained item against official docs and, where possible, a live read-only API call or sandbox. Drop or flag what fails. Prefer primary sources over blog-derived claims.
5. **Fuse** — write one skill per task per platform in `ad-skill-jam/<platform>/`, plus cross-platform skills in `ad-skill-jam/ads/` and `ad-skill-jam/marketing/`, and shared guardrails, API ledger and evals in `ad-skill-jam/_shared/`. One best-of-breed version, not a union of near-duplicates. Keep `SKILL.md` lean; push detail to `references/`.
6. **Test** — add eval cases (borrow structure from `marketingskills/evals` and `claude-ads/evals`): prompts, expected behaviors, and negative cases (must refuse unapproved spend).
7. **Log provenance** — `SOURCES.md` + validation date per skill.

## Platform coverage and where to mine

| Platform | Primary sources in `ref/` | Gap to fill from official docs |
|---|---|---|
| Meta | `meta-ads/*`, `claude-ads`, `ads-skills` | Verify API version, Advantage+ rules, CAPI/pixel specifics |
| Reddit | `adloop`, `mcp-reddit-ads`, `claude-ads`, `ads-skills`, `paid-media-agent` | Few dedicated repos; lean on API v3 docs |
| X | `claude-ads` (`ads-x`), `ads-skills`, `paid-media-agent`, `adkit-ads-mcp` | **No source code in the X MCP repos** (hosted); rely on X Ads API docs |
| TikTok | `tiktok-ads/*`, `claude-ads`, `ads-skills` | Existing TikTok servers are read-only; write endpoints from official docs |
| LinkedIn | `linkedin-ads/*`, `ivan-ads-skills`, `ads-skills`, `claude-ads` | B2B/ABM playbooks mostly from `ivan-ads-skills` (license-limited) |
| Google | `google-ads/*`, `claude-ads` | Reconcile the three overlapping Google skill packs |
| Apple | `apple-ads/*` | Single-source risk; verify against Apple Ads docs |
| Microsoft, Pinterest | `claude-ads` (`ads-microsoft`, `ads-pinterest`), `ads-skills` | Lower priority; official docs for everything beyond the audit checklists |
| Snapchat, Amazon, YouTube | `claude-ads` only (`ads-snapchat`, `ads-amazon`, `ads-youtube`) | Single-source risk; lowest priority |
| Cross-platform/marketing | `marketingskills`, `marketing-skills`, `openclaw-marketing-skills`, `deslop-text` | Copy/anti-slop rules feed `ads/ad-antislop` |

## Conventions for fused skills

- Directory per skill: `SKILL.md` (frontmatter `name`, `description` with explicit triggers), `references/`, optional `scripts/`, `evals/`.
- `SKILL.md` states: when to use, required inputs, step-by-step workflow, decision rules with **units** on every threshold, approval gates, output format, routing to next skill.
- Write for the agent: imperative, unambiguous, no marketing language. Run new copy through the `ad-antislop` rules.
- Keep files focused (< 800 lines); split by topic.

## Out of scope

Hosted-service marketing, vendor upsells, and "connect our cloud" instructions found in the reference READMEs. We mine knowledge, not product funnels.
