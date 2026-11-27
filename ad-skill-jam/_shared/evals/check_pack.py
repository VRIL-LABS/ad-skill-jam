"""Check platform skill links, metadata, references, and eval fixtures."""

import json
import re
import sys
from pathlib import Path


PACK = Path(__file__).resolve().parents[2]
PLATFORMS = (
    "meta-ads", "reddit-ads", "google-ads", "apple-ads", "x-ads",
    "youtube-ads", "tiktok-ads", "snapchat-ads", "microsoft-ads",
    "pinterest-ads", "linkedin-ads", "amazon-ads",
)
SHARED_SKILLS = ("ad-antislop", "ad-approval-gates", "ad-audit", "ad-reporting")
MARKDOWN_LINK = re.compile(r"\]\(([^)]+)\)")
FRONTMATTER = re.compile(r"\A---\nname: ([a-z0-9-]+)\ndescription: (\S[^\n]*)\n---\n")
VERIFIED = re.compile(r"verified on \d{4}-\d{2}-\d{2}", re.IGNORECASE)
CASE_FIELDS = {"id", "prompt", "required_behaviors", "forbidden_behaviors"}


def read(path):
    return path.read_text(encoding="utf-8")


def check_document(path, errors):
    if not path.is_file():
        errors.append(f"{path.relative_to(PACK)} is missing")
        return ""

    content = read(path)
    if len(content.splitlines()) >= 800:
        errors.append(f"{path.relative_to(PACK)} must have fewer than 800 lines")
    for link in MARKDOWN_LINK.findall(content):
        target = link.split("#", 1)[0]
        if not target or target.startswith("https://"):
            continue
        resolved = (path.parent / target).resolve()
        if not resolved.is_relative_to(PACK) or not resolved.is_file():
            errors.append(f"{path.relative_to(PACK)} has an invalid pack link to {link}")
    return content


def check_cases(path, skill_name, seen_ids, errors):
    label = path.relative_to(PACK)
    try:
        payload = json.loads(read(path))
    except (OSError, ValueError) as error:
        errors.append(f"{label} cannot be read ({error})")
        return 0

    if not isinstance(payload, dict) or payload.get("skill_name") != skill_name:
        errors.append(f"{label} must identify {skill_name}")
        return 0
    cases = payload.get("evals")
    if not isinstance(cases, list) or not cases:
        errors.append(f"{label} must contain eval cases")
        return 0

    for index, case in enumerate(cases, start=1):
        if not isinstance(case, dict) or case.keys() != CASE_FIELDS:
            errors.append(f"{label} case {index} has unexpected fields")
            continue
        case_id = case["id"]
        if not isinstance(case_id, str) or not re.fullmatch(r"[a-z0-9-]+", case_id):
            errors.append(f"{label} case {index} has an invalid identifier")
        elif case_id in seen_ids:
            errors.append(f"{label} reuses case ID {case_id}")
        else:
            seen_ids.add(case_id)
        if not isinstance(case["prompt"], str) or not case["prompt"].strip():
            errors.append(f"{label} case {index} needs a prompt")
        for field in ("required_behaviors", "forbidden_behaviors"):
            criteria = case[field]
            if not isinstance(criteria, list) or not criteria or not all(
                isinstance(item, str) and item.strip() for item in criteria
            ):
                errors.append(f"{label} case {index} needs text criteria in {field}")
    return len(cases)


def check_platform(platform, errors):
    platform_root = PACK / platform
    index = check_document(platform_root / "README.md", errors)
    skills = sorted(path for path in platform_root.glob(f"{platform}-*") if path.is_dir())
    indexed = {
        link for link in MARKDOWN_LINK.findall(index)
        if re.fullmatch(r"[^/]+/SKILL\.md", link)
    }
    expected = {f"{path.name}/SKILL.md" for path in skills}
    missing_from_index = expected - indexed
    unexpected_index_entries = indexed - expected
    if not skills or missing_from_index or unexpected_index_entries:
        errors.append(
            f"{platform} skill index mismatch. Missing {sorted(missing_from_index)}. "
            f"Unexpected {sorted(unexpected_index_entries)}."
        )
    check_document(PACK / "_shared" / "api-ledger" / f"{platform}.md", errors)
    return skills


def main():
    errors = []
    skills = [PACK / "ads" / name for name in SHARED_SKILLS]
    for platform in PLATFORMS:
        skills.extend(check_platform(platform, errors))
    uncovered = {path.parent for path in PACK.rglob("SKILL.md")} - set(skills)
    if uncovered:
        errors.append(f"Skills outside the pack index: {sorted(str(path.relative_to(PACK)) for path in uncovered)}")
    check_document(PACK / "_shared" / "provenance" / "SOURCES.md", errors)
    case_count = 0
    seen_ids = set()
    for skill in skills:
        content = check_document(skill / "SKILL.md", errors)
        sources = check_document(skill / "references" / "sources.md", errors)
        metadata = FRONTMATTER.match(content)
        if not metadata or metadata[1] != skill.name or ": " in metadata[2]:
            errors.append(f"{skill.name} needs matching name and description frontmatter")
        if not all(
            VERIFIED.search(document) and "https://" in document
            for document in (content, sources)
        ):
            errors.append(f"{skill.name} needs dated source links in its skill and reference")
        case_count += check_cases(skill / "evals" / "evals.json", skill.name, seen_ids, errors)

    check_document(PACK / "README.md", errors)
    if errors:
        print("\n".join(errors), file=sys.stderr)
        return 1
    print(f"Validated {len(skills)} skills and {case_count} eval fixtures.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
