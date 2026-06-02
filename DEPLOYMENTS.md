# Deployments

We **do not deploy `main` directly.** Instead, each deployment is a numbered
release branch (`release/1`, `release/2`, …). You always know exactly which
numbered release is live, and you choose when to promote one.

```
 work on main ──commit──▶ ./release.sh ──▶ release/N (pushed) ──▶ Cloudflare builds it
                                                                      │
                                                  set as Production branch ▼
                                                                  LIVE site
```

## How to cut a release

1. Do your work and commit it on `main` (push to `origin/main` as usual).
2. From the repo root, run:
   ```bash
   ./release.sh
   ```
   It creates the next `release/N` branch from `main` and pushes it. `main`
   stays your integration branch and is never the live site.

The script prints the release number and branch name.

## Cloudflare — one-time setup

In the Cloudflare dashboard → your project → **Settings → Build**:

1. **Production branch:** set it to the release branch you want live, e.g. `release/1`.
   - This is the key step that takes `main` out of production.
2. **Non-production (preview) branch builds:** enable them so every other
   `release/N` branch also builds, each at its own preview URL — handy for
   testing a release before promoting it.
3. Keep **`NODE_VERSION = 22`** in the environment variables (Wrangler needs it).

## Going live with a new release

1. `./release.sh` → say it creates `release/4`.
2. (Optional) open its **preview URL** from the Deployments tab and test it.
3. When happy, change **Production branch → `release/4`** (Settings → Build) and
   trigger a deploy (retry the latest build on that branch).
4. `release/4` is now the live `easypaycalc.com`.

## Rollback

Something wrong with `release/4`? Set **Production branch** back to `release/3`
(the previous good one) and redeploy. Because each release is its own immutable
branch, rolling back is just pointing production at an earlier number.

## Notes

- Release branches are cheap snapshots of `main` at deploy time — never commit
  directly to a `release/*` branch; always go through `main` + `./release.sh`.
- Numbering is automatic: the script finds the highest existing `release/N`
  (local **and** on origin) and uses `N+1`.
- `NODE_VERSION` must stay `22` (the Wrangler deploy step requires Node 22+).
