# Regenerating documentation screenshots

All docs screenshots are generated from a **local, seeded demo instance** of the
SysWard web app (org **"Uptime Funk Inc."**) and captured by a committed
Playwright harness. Nothing here touches staging, production, or the e2e test
database — it is entirely local.

The three moving parts all live in the app repo (`~/dev/sysward/web`):

| Piece | Path (in `~/dev/sysward/web`) |
|---|---|
| Demo data seed | `scripts/demo-seed.sql` |
| Demo runner | `scripts/demo-up.sh` |
| Capture harness | `playwright/screenshots/capture-docs.spec.ts` (+ `capture.config.ts`) |

Screenshots are written to **`~/dev/docs.sysward.com/screenshots-staging/`** for
QA. They are **not** copied into `static/images/` automatically — a human reviews
staging first, then promotes the ones they want.

---

## 1. Seed + start the demo instance

From `~/dev/sysward/web`:

```bash
./scripts/demo-up.sh up          # creates sysward_demo, loads schema + demo-seed.sql, starts :3200
```

This:

- creates `sysward_demo` (+ empty `cve_demo` / `appliance_demo` the app needs to boot),
- loads `initial-schema.sql` then `scripts/demo-seed.sql`,
- reuses the existing `sw-nats` streaming container on :4222,
- reuses the already-built `./sysward` binary + `public/assets` (pass `up --build` to force a rebuild),
- serves the app on **http://localhost:3200** (never :3000 dev / :3100 e2e).

**Demo login:** `demo@uptimefunk.com` / `red123`

Useful subcommands: `./scripts/demo-up.sh restart` (reseed + restart, after editing
the seed), `status`, `down` (stops the server; leaves DBs + nats intact).

## 2. Capture the screenshots

From `~/dev/sysward/web`, with the demo instance up:

```bash
DEMO_BASE_URL="http://localhost:3200" \
  npx playwright test --config=playwright/screenshots/capture.config.ts
```

This logs in once and walks every documented screen at **1920×973**, asserting a
real element is present before each capture (an empty screen fails loudly). PNGs
land in `~/dev/docs.sysward.com/screenshots-staging/`. It is fully re-runnable —
one command regenerates everything.

Overrides (env): `DEMO_BASE_URL`, `DOCS_SHOT_DIR`, `DEMO_EMAIL`, `DEMO_PASSWORD`.

## 3. QA + promote

Review `screenshots-staging/`, then copy the approved images into
`static/images/` yourself, e.g.:

```bash
cp screenshots-staging/dashboard.png static/images/dashboard.png
```

---

## Notes / caveats

- **Subscription page**: renders from `organizations.agents` (shows
  "Current Subscription: 50", "$1.00 agent/month"). The Chargebee checkout
  button is powered by external `Chargebee.js`, which is **not** loaded locally,
  so the "Subscribe" / "Manage Account" buttons are inert in the capture — the
  page itself renders fully.
- **`agent_scheduled_jobs.png`** is captured from the same `/scheduled` screen as
  `scheduled_jobs.png` (the app has a single scheduled-jobs surface). Decide
  during QA whether you still want a separate file.
- **`agent_groups.png`** is captured from the agents list filtered to a group
  (there is no dedicated per-agent "groups" route). Confirm it matches the intent
  of the legacy image.
- **Network Information** on the agent detail view is empty — the app does not
  currently decorate agent interfaces, so no seed data can populate it.
- **OS logos**: the frontend maps `os_name` to a logo by case-insensitive
  substring (`ubuntu`, `debian`, `redhat`, `rocky`, `alma`, `centos`, `fedora`,
  `amazon`, `suse`, …). The seed uses matching names on purpose — e.g. `RedHat`
  (one word) so `.includes("redhat")` matches; `Red Hat` would fall through to no
  logo.
