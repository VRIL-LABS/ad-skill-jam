#!/usr/bin/env bash
set -euo pipefail

packs=(amazon apple google linkedin meta microsoft pinterest reddit snapchat tiktok x youtube shared)
source_url=https://github.com/VRIL-LABS/ad-skill-jam/tree/main/ad-skill-jam
usage() {
  printf 'Usage: bash install-packs.sh [--agent NAME] [--list] PACK...\n'
  printf 'Packs: %s\n' "${packs[*]}"
  printf 'Use all to select the full collection. Omit --agent to use Skills CLI agent selection.\n'
}

agent=
list=0
selected=()
selected_count=0
while (($#)); do
  case "$1" in
    -h|--help) usage; exit 0 ;;
    --list) list=1; shift ;;
    --agent)
      if (($# < 2)) || [[ ! "$2" =~ ^[a-z0-9][a-z0-9-]*$ ]]; then
        echo 'Expected a Skills CLI agent name after --agent.' >&2
        exit 2
      fi
      agent=$2
      shift 2
      ;;
    --*) printf 'Unknown option: %s\n' "$1" >&2; exit 2 ;;
    *) selected+=("$1"); ((selected_count += 1)); shift ;;
  esac
done

if ((selected_count == 0)); then
  usage >&2
  exit 2
fi
for pack in "${selected[@]}"; do
  case "$pack" in
    all)
      if ((selected_count != 1)); then
        echo 'Use all by itself.' >&2
        exit 2
      fi
      ;;
    amazon|apple|google|linkedin|meta|microsoft|pinterest|reddit|snapchat|tiktok|x|youtube|shared) ;;
    *) printf 'Unknown pack: %s\n' "$pack" >&2; exit 2 ;;
  esac
done

case "$(uname -s)" in
  Darwin|Linux) ;;
  *) echo 'Use install-packs.ps1 on Windows.' >&2; exit 2 ;;
esac

if ! command -v node >/dev/null || ! command -v npx >/dev/null || ! command -v git >/dev/null; then
  echo 'Install Node.js 24 or later with npm, and Git, then rerun this script.' >&2
  exit 2
fi
node -e 'if (Number(process.versions.node.split(".")[0]) < 24) process.exit(1)' || {
  echo 'Node.js 24 or later is required.' >&2
  exit 2
}

for pack in "${selected[@]}"; do
  url=$source_url
  case "$pack" in
    all) ;;
    shared) url+=/ads ;;
    *) url+="/$pack-ads" ;;
  esac
  args=(add "$url" --skill '*')
  if ((list)); then
    args+=(--list)
  else
    args+=(--copy)
    if [[ -n "$agent" ]]; then args+=(-a "$agent" --yes); fi
  fi
  npx --yes --ignore-scripts skills@1.9.1 "${args[@]}"
done
