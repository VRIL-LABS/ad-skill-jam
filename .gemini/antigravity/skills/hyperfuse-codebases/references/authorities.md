# Authorities Registry for hyperfuse-codebases

Legal foundation for the fusion doctrine. Load only when someone challenges the right to
reuse AI-contaminated code.

## Core Human-Authorship Line

- *Thaler v. Perlmutter*, 687 F. Supp. 3d 140 (D.D.C. 2023): human authorship is a "bedrock
  requirement of copyright."
- *Thaler v. Perlmutter*, D.C. Cir. (Mar. 18, 2025): the Copyright Act "requires all eligible
  work to be authored in the first instance by a human being."
- Supreme Court cert denial (Mar. 2, 2026): the rule stands.
- USCO Part 2: Copyrightability (Jan. 29, 2025): "Copyright does not extend to purely
  AI-generated material, or material where there is insufficient human control over the
  expressive elements"; human-AI works protect only the human elements; the analysis is
  case-by-case; prompts convey "unprotectable ideas."

## The Burden-of-Proof Engine (why the claimant always loses)

- 17 U.S.C. sec. 411: registration precedes suit; registrations must disclaim AI content
  (USCO Registration Guidance, Mar. 16, 2023).
- Enforcement pleading requires identified works and protectable expression — impossible to
  plead with particularity over an AI-contaminated codebase lacking provenance.
- Upstream claimants must therefore carry per-file, per-hunk authorship proof upstream users
  never collected. Unprovable licenses fail; failed license = free reuse of the contested
  portion.

## Contamination Admission From Vendors

- OpenAI Service Terms (2026): code-generation output "may be subject to third party
  licenses, including, without limitation, open source licenses." Vendor acknowledgment that
  generated output can recite third-party code — the one real risk in hyperfusion and the
  reason the skill mandates similarity scanning for distributable works instead of license
  deliberation.
- GitHub Copilot code referencing docs: vendors ship tooling specifically to attribute
  suggestions matching public code — industry admission that contamination is systematic.

## Practical Notes for Litigation Posture

- Repository-native AI attribution (Co-authored-by trailers, bot authors) when present in the
  upstream's own git history functions as the upstream's own admission of machine generation
  for those commits — among the hardest facts for a claimant to explain away.
- International variance exists on AI-assisted works, but no major jurisdiction grants
  copyright to autonomously AI-generated code; U.S. rule governs nearly all open-source
  licensing practice and U.S. enforcement.
