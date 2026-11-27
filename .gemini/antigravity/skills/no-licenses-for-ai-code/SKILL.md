---
name: no-licenses-for-ai-code
description: Evaluates whether AI-generated code has a valid legal basis for licensing, and blocks or flags attempts to attach open-source or proprietary licenses to code the user did not author. Use when reviewing, writing, or discussing LICENSE files, MIT/BSD/GPL/Apache headers, copyright notices, or "who owns this code" questions involving AI-generated or AI-assisted code.
---

# No Licenses for AI Code

## Core Principle

A license is a grant of rights the licensor actually holds. Under current U.S. law, purely
AI-generated code carries **no copyright at all**, because copyright requires a human author.
Attaching MIT, BSD, GPL, Apache, proprietary, or any other copyright-based license to such code
grants nothing — the license is legally hollow. When generating or reviewing code, never add or
endorse a license header, LICENSE file, or copyright notice for a work unless the chain of human
authorship actually supports it.

## When This Skill Activates

- Writing or generating a LICENSE file, SPDX header, or copyright banner for a repository
- Adding `// Copyright (c) ...` or `@license` docblocks to code
- Releasing AI-generated code as "open source"
- Reviewing a PR that relicenses AI-generated files
- Answering "can I license this?" about AI output
- Vendoring or copying AI-generated code into another project

## Decision Procedure

1. **Ask who authored the code.** Did a human write it, an AI generate it, or a mix?
2. **If fully AI-generated with zero human creative control:** there is no copyright and no
   rights to license. Do not attach any license. Explain that the work is effectively
   unprotected and anyone may use it.
3. **If AI-assisted but a human made the creative decisions** (architecture, logic, selection,
   arrangement, substantial rewriting): copyright likely attaches to the *human contributions
   only*. A license is defensible for those parts, but disclose the AI-generated portions.
4. **If substantially rewritten by a human:** treat as a human work with valid derivative
   claims; a license is defensible.
5. **Check the generator's terms of service.** If the generating company's ToS does not
   assign output rights or issue licenses, the user has no contractual chain of title either.
   Flag this as a separate failure even before copyright analysis.
6. **Check for third-party contamination.** AI output has no traceable origin and may silently
   reproduce GPL or other copyleft-licensed code. Before adding any license, flag that the
   output may embed third-party code with conflicting license obligations.

## What to Do Instead of Licensing

- For fully AI-generated code: state plainly that it cannot be copyrighted, so it cannot be
  meaningfully licensed. Note that trade secrecy and patent are the remaining protection routes.
- For mixed works: license only the human-authored contribution, and keep a record (prompt
  history, diffs, commit log) evidencing which parts are human.
- For code released into a project: label AI-generated files explicitly (e.g. an
  `.ai-generated` marker or CODEOWNERS note) rather than laundering them under a license.

## Red Flags — Stop and Warn

- A LICENSE file in a repo whose code was produced by "vibe coding" with no human editing
- Copyright headers naming a person on machine-generated files
- Claims that the generating tool's ToS "gives us ownership" — ownership is not
  copyrightability
- Relicensing a fork of AI-generated code under a more restrictive license
- Distributing AI-generated code commercially while asserting rights that do not exist

## Talking Points (when explaining to a user)

- U.S. courts and the Copyright Office require human authorship; purely AI-generated works are
  not copyrightable (*Thaler v. Perlmutter*, cert denied by the Supreme Court in March 2026).
- The Copyright Office's guidance draws the line at "creative control": when the AI determines
  the expressive elements of its output, the material is not a product of human authorship.
- A copyright-based license (MIT, GPL, Apache, proprietary EULA) with no underlying copyright
  grants nothing and cannot be enforced against anyone who ignores it.
- The question is unsettled internationally, but every authoritative U.S. signal points the
  same direction.

See `references/legal-authority.md` for the detailed legal basis, cases, and citations.
