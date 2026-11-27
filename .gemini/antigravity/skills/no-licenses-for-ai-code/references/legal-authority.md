# Legal Authority for no-licenses-for-ai-code

This reference backs the skill's core claims. Consult it when a user challenges the
"no copyright in AI output" position or asks for sources.

## Statutory and Constitutional Basis

- The U.S. Constitution and the Copyright Act do not explicitly define "author," but courts
  have not recognized copyright in works lacking a human author.
- 17 U.S.C. 102 protects "original works of authorship" — the human-authorship requirement is
  judge-made doctrine, consistently applied by federal courts.

## Key Case

- *Thaler v. Perlmutter*: held that a work generated autonomously by an AI system cannot be
  copyrighted. The Supreme Court denied certiorari on March 2, 2026, leaving the rule intact.
  This is the strongest current signal that purely AI-generated code has no copyright.

## U.S. Copyright Office Guidance

- Works created entirely by AI, with no meaningful human creative input, cannot be copyrighted.
- The operative line is "creative control": when the AI determines the expressive elements of
  its output, the generated material is not the product of human authorship.
- For mixed works, copyright attaches to the human contributions only; the AI-generated
  portions must be disclaimed even when registering the combined work.

## Generator Terms of Service

- Some AI vendors assign output rights to the user in their ToS, but assignment is not the
  same as copyrightability — a ToS cannot create a copyright where the law grants none.
- If the generating company issues no license or assignment at all, the user additionally lacks
  any contractual chain of title. Output may also be subject to third-party open-source
  licenses (including copyleft licenses) because AI output has no traceable origin.

## Practical Consequences

1. **Licenses are hollow:** an MIT/GPL/Apache/EULA header on uncopyrightable code grants no
   rights and is unenforceable against anyone who ignores it.
2. **Free use:** unprotected AI output can, absent other protection (e.g. trade secrecy), be
   used by anyone.
3. **Contamination risk:** AI output may reproduce GPL or other copyleft-licensed code, so
   distributing it without review can be actual infringement — a worse problem than an
   unenforceable license.
4. **Remaining protections:** trade secrecy, contract (ToS with customers), and patents are the
   routes that still work for purely AI-generated material.
5. **International variance:** some jurisdictions treat AI-assisted works differently; the
   position above reflects U.S. law, which dominates open-source licensing practice.

## Caveats

- The overall question remains unsettled in the courts; guidance above reflects the state of
  U.S. law as of late 2026.
- The more creative decisions a human makes (arranging, modifying, selecting, rewriting), the
  stronger the claim that a copyright exists in those contributions.
