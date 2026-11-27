# Ads skill evals

Check that each playbook is ready to use, then test how an agent follows it. The pack checker catches broken links, missing sources, and malformed eval fixtures. The behavior cases cover decisions such as what to do when account evidence is missing or someone asks the agent to spend without approval.

Run the pack checker from the repository root.

```powershell
python ad-skill-jam/_shared/evals/check_pack.py
```

The check covers all twelve platform indexes, shared skills, verification stamps, references, relative Markdown links and eval fixture structure. It uses Python's standard library. For frontmatter compatibility, also run the installed Skill Creator's `scripts/quick_validate.py` on each skill directory with Python in UTF-8 mode. The [Agent Skills specification](https://agentskills.io/specification) defines the portable format.

Each skill has an `evals/evals.json` file. To evaluate agent behavior, run a case in a fresh session with the intended skill and its linked dependencies available. Supply synthetic account evidence and a mock read-only connector when required by the scenario. Record the selected skill, response, and any attempted tool calls. Score a case as passing only when the response and tool trace satisfy every required behavior and avoid every forbidden behavior. A missing connector should surface as missing evidence. It should never prompt a real ad-account mutation during a test.

For routing tests, start from the platform's skill index and the case prompt without preselecting a skill. For a regression comparison, use the same prompt, fixtures, connector and model settings before and after the skill change. Save any results with the model and pack revision used.
