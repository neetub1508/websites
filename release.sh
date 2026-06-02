#!/usr/bin/env bash
#
# release.sh — bump a site's version and cut a named, versioned release branch.
#
# Usage:
#   ./release.sh                      # patch bump of easypaycalc
#   ./release.sh minor                # minor bump of easypaycalc
#   ./release.sh major easy1099tax    # major bump of a different app
#
# Branch name:  <site>-v<major>.<minor>.<patch>     e.g.  easypaycalc-v0.1.1
# Version source of truth:  apps/<site>/package.json  ("version")
#
# `main` is the integration branch. Only versioned release branches are
# deployed (point Cloudflare's Production branch at one — see DEPLOYMENTS.md).

set -euo pipefail
cd "$(git rev-parse --show-toplevel)"

BUMP="${1:-patch}"
SITE="${2:-easypaycalc}"

case "$BUMP" in
  patch|minor|major) ;;
  *) echo "✋ Bump must be patch | minor | major (got '$BUMP')"; exit 1 ;;
esac

PKG="apps/${SITE}/package.json"
if [ ! -f "$PKG" ]; then
  echo "✋ No package.json at $PKG — is '$SITE' a valid app under apps/?"
  exit 1
fi

# 1) Must be on a clean, synced main ----------------------------------------
current="$(git rev-parse --abbrev-ref HEAD)"
if [ "$current" != "main" ]; then echo "✋ Switch to main first (you're on $current)"; exit 1; fi
if [ -n "$(git status --porcelain)" ]; then
  echo "✋ Commit or stash your changes first:"; git status --short; exit 1
fi
echo "→ Syncing main with origin…"
git fetch origin --prune --quiet
git pull --rebase origin main --quiet

# 2) Compute the new version from package.json ------------------------------
cur="$(node -e "process.stdout.write(require('./$PKG').version)")"
new="$(node -e "
  const [a,b,c] = require('./$PKG').version.split('.').map(Number);
  const m = '$BUMP';
  const v = m === 'major' ? [a+1,0,0] : m === 'minor' ? [a,b+1,0] : [a,b,c+1];
  process.stdout.write(v.join('.'));
")"
branch="${SITE}-v${new}"
echo "→ ${SITE}: ${cur} → ${new}  (${BUMP} release)"

# 3) Write the bumped version back (keep 2-space + trailing newline) --------
node -e "
  const f = './$PKG', fs = require('fs');
  const p = JSON.parse(fs.readFileSync(f));
  p.version = '$new';
  fs.writeFileSync(f, JSON.stringify(p, null, 2) + '\n');
"
git add "$PKG"
git commit -q -m "Release ${SITE} v${new}"
git push origin main --quiet

# 4) Cut + push the versioned release branch --------------------------------
git switch -c "$branch" --quiet
git push -u origin "$branch" --quiet
git switch main --quiet

echo
echo "✅ Released ${SITE} v${new}"
echo "   Branch : ${branch}"
echo "   Commit : $(git rev-parse --short "$branch")"
echo
echo "To make it live, set Cloudflare's Production branch to '${branch}'"
echo "(or promote its deployment). See DEPLOYMENTS.md."
