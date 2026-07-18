---
title: "Remediating Vulnerabilities"
description: "The end-to-end workflow: from a detected CVE to a patched, verified server."
lead: ""
date: 2026-07-09T00:00:00+00:00
lastmod: 2026-07-09T00:00:00+00:00
draft: false
images: []
menu:
  docs:
    parent: "using-sysward"
weight: 55
toc: true
---

SysWard turns "these servers are vulnerable" into "these servers are patched."
Here's the end-to-end workflow.

## 1. Find what's vulnerable

- The [CVEs](/docs/using-sysward/cves/) page lists every vulnerability across
  your fleet; select a CVE to see every affected host.
- An individual server's **CVE** tab shows just that host's vulnerabilities.
- The [Packages](/docs/using-sysward/packages/) page shows which packages have a
  newer **candidate** version available.

## 2. Apply a fix

Queue an upgrade from wherever you're working:

- **From a CVE** — click **Upgrade** on a CVE row to patch the affected package
  on that host.
- **Across the fleet** — select packages on the Packages page and choose
  **Upgrade** to patch every host that has them.
- **On a single server** — on the agent's **Pending** tab, pick packages and
  apply Security, Regular, or All updates.

## 3. Now or later

When you apply an upgrade you can run it immediately or **schedule** it for a
specific date and time — handy for maintenance windows.

## 4. Hold packages you don't want upgraded

Need to pin a package to a specific version? Use an agent's **Unheld / Held
Packages** tabs to hold it; held packages are skipped by upgrades until you
release them. See [Agents](/docs/using-sysward/agents/).

## 5. Track and verify

- Every queued upgrade appears on the
  [Scheduled Jobs](/docs/using-sysward/scheduled_jobs/) page with its status —
  cancel a pending one if you change your mind.
- The [History](/docs/using-sysward/history/) trail records what ran and who
  initiated it, and a server's pending-update counts drop once the upgrade
  completes and it checks back in.
