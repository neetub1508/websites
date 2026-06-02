# Deployments

We **do not deploy `main` directly.** Each deployment is a **named, versioned
release branch** — `<site>-v<major>.<minor>.<patch>`, e.g. `easypaycalc-v0.1.1`.
You always know exactly which site and version is live, and you choose when to
promote one.

```
 work on main ──commit──▶ ./release.sh ──▶ easypaycalc-v0.1.1 (pushed) ──▶ Cloudflare builds it
                                                                              │
                                                          set as Production branch ▼
                                                                          LIVE site
```

## Versioning

`major.minor.patch`, sourced from each app's `apps/<site>/package.json` `version`:

- **patch** (`0.1.0 → 0.1.1`) — small fixes, content/data tweaks  *(default)*
- **minor** (`0.1.1 → 0.2.0`) — new features (e.g. a batch of new states)
- **major** (`0.2.0 → 1.0.0`) — big/breaking releases, public launch

## How to cut a release

Commit your work on `main`, then from the repo root:

```bash
./release.sh                      # patch bump of easypaycalc   → easypaycalc-v0.1.1
./release.sh minor                # minor bump of easypaycalc   → easypaycalc-v0.2.0
./release.sh major easy1099tax    # major bump of another app   → easy1099tax-v1.0.0
```

The script:
1. bumps the version in `apps/<site>/package.json` and commits it to `main`,
2. creates branch `<site>-v<new-version>` and pushes it,
3. prints the branch name to point Cloudflare at.

## Cloudflare — one-time setup

Dashboard → project → **Settings → Build**:

1. **Production branch:** set it to the release branch you want live, e.g. `easypaycalc-v0.1.1`.
   (This takes `main` out of production.)
2. (Optional) enable **non-production branch builds** so other release branches
   get preview URLs to test before promoting.
3. Keep **`NODE_VERSION = 22`** (Wrangler requires it).

## Going live with a new release

1. `./release.sh` → say it creates `easypaycalc-v0.1.2`.
2. (Optional) test its **preview URL** from the Deployments tab.
3. Change **Production branch → `easypaycalc-v0.1.2`** and redeploy.

## Rollback

Point **Production branch** back to the previous good version (e.g.
`easypaycalc-v0.1.1`) and redeploy. Each release is an immutable branch, so
rolling back is just selecting an earlier version.

## Notes

- Never commit directly to a release branch — always go through `main` + `./release.sh`.
- The version bump commit lands on `main`; the release branch is cut right after.
- One repo, multiple apps: pass the app name as the 2nd arg (`./release.sh patch easy1099tax`).
