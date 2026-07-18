# PRD-001: docs.sysward.com Overhaul — Content + Screenshots

**Status:** Completed (SSO/air-gap/REST-API docs deferred, tracked as blocked beads web-y8d.14/.15)
**Date:** 2026-07-09 (completed 2026-07-18)
**Author:** Josh Rendek

## Problem Statement

`docs.sysward.com` (Hugo + Doks theme, deployed on Netlify) has not had a real
content update since ~2020–2024. It predates the June 2026 accessibility /
multi-theme UI redesign, so it no longer describes the shipped product:

- **22 markdown pages** across 3 sections (General ×12, Agent ×1, Self-Hosted
  Appliance ×6) plus leftover Doks theme boilerplate (`contributors/`,
  draft `contact`/`privacy-policy`).
- **30 product screenshots** in `static/images/`, all `1920×973`, **all captured
  2023-07-23** — i.e. the pre-redesign UI. Embedded via raw
  `<a href><img class="img-fluid rounded"></a>` HTML with a clean image→page
  mapping.
- Front-matter dates read `2020`; last content commit was 2024-06-04.
- Concrete rot: the Uninstall page renders "Start local development server:"
  directly above `rm -rf /opt/sysward` (a copy-paste error); `support.png` is
  orphaned; the appliance/agent docs reference brittle hardcoded URLs.
- Toolchain is EOL: `netlify.toml` pins `NODE_VERSION = 16.16.0`.

Because SysWard is a security product, **stale or over-claiming docs are a
credibility risk** (mirroring bead `web-wul.3`, "align marketing copy with
shipped code"). The docs must describe what actually ships today.

## Goals

- **Content pass (full overhaul):** restructure the information architecture,
  accuracy-refresh every existing page against the shipped product, and add
  documentation for **shipped-but-undocumented** features.
- **Screenshot pass (automated + repeatable):** regenerate every product
  screenshot against the redesigned UI from a **locally-seeded demo instance**
  (no customer data), via a scripted Playwright/gstack harness that is
  one-command re-runnable at the next redesign.
- **Do no harm to credibility:** every claim cross-checked against
  `~/dev/sysward/web` source + the running app before it ships. Genuinely
  unshipped features are **deferred**, not written speculatively.
- **Modernize the toolchain** so the site builds cleanly on current Netlify,
  and add lightweight automated checks (build + lint + image/link integrity).

## Non-Goals

- Documenting features that are not shipped yet. **Deferred** (tracked, blocked
  on their shipping beads):
  - **SSO / SAML** — `web-wul.10` (open, unshipped)
  - **Appliance air-gap mode** — `web-wul.12` (in progress)
  - **Public REST API reference** — only the agent API (`/api/v1/*`) and
    session `/ui/*` exist; no customer-facing REST API to document today.
- Redesigning the Doks theme itself or migrating off Hugo.
- Marketing-site (`sysward/web` Astro `marketing-site/`) changes — that is a
  separate surface tracked under `web-fbi.3` / `web-wul.3`.

## Solution

### Governing principle — accuracy guardrail

Every page is verified against the source of truth before publish:

| Claim area | Verify against (`~/dev/sysward/web`) |
|---|---|
| Agent install one-liner / OS support | `install.sh`, `controllers/api.go`, `cve/` distro lists |
| Dashboard / agents / groups / CVEs / jobs UI | running app (`go run cmd/main.go` + Angular `frontend/`) |
| Webhooks / notifications scope | webhook service code (Slack/Discord only per `web-wul.3`) |
| Subscription / billing | Chargebee flow; `billing-handler` sibling repo |
| Appliance install / update / trials | appliance docs + `appliance_manager` sibling repo |

Unshipped → a deferred bead blocked on the feature's shipping bead. Never prose.

### New information architecture

| Section (weight) | Pages |
|---|---|
| **Getting Started** (10) | Introduction · Quick Start · Installing the Agent (OS matrix, one-liner, manual, arch variants) · First steps after install |
| **Using SysWard** (20) | Dashboard · Agents · Groups · Packages · CVEs & remediation workflow · Scheduled Jobs · History / audit trail |
| **Account & Billing** (30) | Organization & Users · Profile & Security (2FA) · API Keys\* · Subscription & Billing (Chargebee) |
| **Integrations** (40) | Webhooks & Notifications (Slack/Discord, per-category) · *SSO/SAML → deferred* |
| **Self-Hosted Appliance** (50) | Overview · Requirements · Install · Email/SMTP · Updating · Backup & Restore · Custom SSL · Troubleshooting · Trials & Licensing · FAQ · *Air-gap → deferred* |
| **Reference** (60) | Supported OS matrix · Agent commands/CLI · Changelog · *REST API → deferred* |

\* Confirm the API-keys feature exists during the refresh; drop or defer if not.

### Content pass

1. Restructure `config/_default/menus.toml`, section `_index.md` files, and
   per-page front-matter weights to the new IA.
2. Accuracy-refresh every existing page against the guardrail table; fix the
   copy-paste bugs (uninstall page et al.).
3. Author shipped-but-undocumented pages: Webhooks & Notifications; History /
   audit trail + CVE remediation depth; Reference (supported-OS matrix, agent
   CLI/commands, changelog); appliance Backup/Restore + Custom SSL; expanded
   Agent Troubleshooting.
4. Cleanup: remove Doks `contributors/` boilerplate, resolve draft
   `contact`/`privacy-policy` pages, delete/repurpose orphaned `support.png`.

### Screenshot pass

1. **Demo-data seed** — a reproducible local seed: agents across several
   distros, CVEs, groups, scheduled jobs, package holds, and history, so every
   documented screen has realistic-but-synthetic data. No customer data.
2. **Capture harness** — a Playwright/gstack script that logs into the locally
   running instance, visits each documented screen at a fixed viewport
   (standardize on the existing `1920×973`), asserts the target rendered
   (expected element present, non-blank), and writes PNGs into `static/images/`
   **reusing the existing filenames** so markdown references keep resolving,
   plus new filenames for the new pages.
3. **Integrate** — regenerate all 30 existing images + new-page screenshots;
   verify no image retains a 2023 mtime.
4. **Runbook** — `SCREENSHOTS.md` documenting one-command regeneration.
5. Default (light) theme now; dark-theme variants are an optional follow-up.

### Infra / toolchain

- Bump `netlify.toml` `NODE_VERSION` (16 → 20 or 22) and validate the Hugo
  extended + `netlify-lambda` build still passes.
- Add automated checks: `hugo --gc --minify` builds clean · `markdownlint`
  passes (`npm run lint:markdown`) · an **image-reference checker** (every
  `<img src>` resolves to a file in `static/images`; no stale-mtime images) ·
  internal-link check.

## Test Flow

Docs "tests" = build + integrity gates, run before done:

1. `npm run build` (`hugo --gc --minify`) completes with **zero errors/warnings**.
2. `npm run lint:markdown` (markdownlint) passes across `content/**/*.md`.
3. **Image-reference check:** every `<img src="/images/...">` in `content/`
   resolves to an existing file under `static/images/`; **zero** images still
   carry a `2023-07-23` timestamp after the screenshot pass.
4. **Internal-link check:** no broken intra-site links.
5. **Screenshot harness self-verifies:** each capture asserts its screen
   rendered before writing (a blank/failed screen fails the run).
6. **Real-browser spot check:** `hugo server` (or gstack browse) on the built
   site; visually confirm rendered pages + fresh images on a sample per section.
7. **Accuracy audit:** each refreshed page's claims traced to `sysward/web`
   source or the running app per the guardrail table.

## Metrics

**Before:**
- Last content update: 2024-06-04 (single Ubuntu-24 note); front-matter 2020.
- Screenshots: 30, all pre-redesign (2023-07-23).
- Sections: 3; documented feature gaps: many (webhooks, history/audit,
  remediation depth, OS matrix, appliance backup/SSL, API keys).
- Toolchain: Node 16.16.0 (EOL).

**After:**
- 100% of pages verified against shipped product; 0 known copy-paste bugs.
- 100% of screenshots regenerated from the redesigned UI, reproducibly.
- 6-section IA; shipped-but-undocumented features covered; unshipped ones
  explicitly deferred (not over-claimed).
- Build + markdownlint + image/link integrity gates green; modern Node.

## Related Documentation

- Repo under change: `~/dev/docs.sysward.com` (Hugo + Doks + Netlify).
- Source of truth for accuracy: `~/dev/sysward/web` (Go/Echo + Angular),
  siblings `billing-handler`, `appliance_manager`, `sysward-agent`.
- Adjacent beads: `web-wul.3` (align marketing copy with shipped code — related),
  `web-wul.10` (SSO/SAML — blocks deferred SSO docs), `web-wul.12` (appliance
  air-gap — blocks deferred air-gap docs).
- Tracking: beads in this repo's `bd` (prefixed `Docs:`) under the overhaul epic.

## Commits

- _pending_
