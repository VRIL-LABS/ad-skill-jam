# Verification examples

## Worked topic and docs audit

A public repository ships a Python CLI with a small, maintained TypeScript web viewer. GitHub’s Languages panel also detects vendored JavaScript and fixture HTML. The About panel lists ai, javascript, and developer-tools. The README has sample output but lacks a tested installation command. The project supports OpenAPI schema comparison and has no AI functionality.

A grounded result keeps python and typescript as the language baseline and selects openapi and cli if their GitHub topic pages fit the audience. It considers a precise schema-comparison topic only if there is a useful audience for it. It explains that ai, vendored javascript, and fixture html have no evidence as product or language topics. It checks which existing topics should be retained before applying changes.

Add one runnable install and example with expected output. Link support and contribution routes from the front page. Propose a private reporting route only if the maintainers can operate one. Record actual GitHub topic limits, the final set, and whether it was applied and read back. A request for a topics-only review leaves the files and remote state untouched.

## Trigger and behavior cases

| Prompt | Expected behavior |
| --- | --- |
| Prepare this GitHub repository for its first public release. | Use the full workflow. Identify recognition and effective settings, prioritize install and contribution paths, and verify what is possible. |
| Give this repo better topics. Its maintained code is Go and Rust. | Include go and rust before adding purpose topics. Avoid overloading and report the evidence. |
| Make this monorepo AI-ready for Copilot and Codex. | Verify both clients’ paths, design root and scoped instructions, link real commands and smoke-test onboarding. |
| Audit our .github folder and tell us which files activate features. | Check syntax, placement, inheritance, settings, and permissions. Avoid remote edits during an audit. |
| Rewrite this landing page to rank on Google. | Ordinary website SEO belongs in a different workflow. |
| Add a glossary link to one Markdown page. | Limit the edit to the requested link. |
| Debug a flaky test in an existing CI run. | Diagnose the test or workflow directly unless the request expands to repository setup or policy. |

## Evidence to collect

For every requested surface, capture its effective source (local file, owner default, or GitHub setting), operational result, and verification state. Check one fresh checkout, one rendered or effective GitHub view where available, one topic readback, and one onboarding run for an AI-ready request. Record intentionally omitted artifacts with the reason when the omission affects the user’s decision.
