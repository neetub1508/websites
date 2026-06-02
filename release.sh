#!/usr/bin/env bash
#
# release.sh — cut the next numbered release branch and push it for deployment.
#
# Workflow:
#   1. Do your work and commit it on `main`.
#   2. Run:  ./release.sh
#   3. It creates branch `release/<N>` (next number) from main and pushes it.
#   4. Cloudflare builds/deploys that branch. To make it the live site, set it
#      as the Production branch in Cloudflare (see DEPLOYMENTS.md).
#
# `main` is never deployed directly — only numbered release branches are.

set -euo pipefail

cd "$(git rev-parse --show-toplevel)"

# 1) Must be on main with a clean working tree -------------------------------
current="$(git rev-parse --abbrev-ref HEAD)"
if [ "$current" != "main" ]; then
  echo "✋ You're on '$current'. Switch to main first:  git switch main"
  exit 1
fi
if [ -n "$(git status --porcelain)" ]; then
  echo "✋ You have uncommitted changes. Commit or stash them first:"
  git status --short
  exit 1
fi

# 2) Sync main with origin ---------------------------------------------------
echo "→ Syncing main with origin…"
git fetch origin --prune --quiet
git pull --rebase origin main --quiet

# 3) Work out the next release number ---------------------------------------
last="$(
  { git branch --list 'release/*'; git ls-remote --heads origin 'release/*'; } \
    | grep -oE 'release/[0-9]+' | grep -oE '[0-9]+$' | sort -n | tail -1
)"
next=$(( ${last:-0} + 1 ))
rb="release/${next}"
sha="$(git rev-parse --short main)"

# 4) Create + push the release branch ---------------------------------------
echo "→ Creating ${rb} from main (${sha})…"
git switch -c "$rb" --quiet
git push -u origin "$rb" --quiet
git switch main --quiet

echo
echo "✅ Release #${next} pushed"
echo "   Branch : ${rb}"
echo "   Commit : ${sha}"
echo
echo "Cloudflare will build branch ${rb}."
echo "To make it the LIVE production site, set the Production branch to '${rb}'"
echo "in the Cloudflare dashboard (or promote its deployment). See DEPLOYMENTS.md."
