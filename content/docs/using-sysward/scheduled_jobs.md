---
title: "Scheduled Jobs"
description: "Track every queued, running, and completed job across your infrastructure, and cancel pending ones."
lead: ""
date: 2020-10-13T15:21:01+02:00
lastmod: 2026-07-09T00:00:00+00:00
draft: false
images: []
menu:
  docs:
    parent: "using-sysward"
weight: 60
toc: true
---

<a href="/images/scheduled_jobs.png" target=_blank><img src="/images/scheduled_jobs.png" alt="SysWard Scheduled Jobs table" class="img-fluid rounded"/></a>

The **Scheduled Jobs** page lists every job across your infrastructure — the
upgrades you queue from the [CVEs](/docs/using-sysward/cves/),
[Packages](/docs/using-sysward/packages/), and [Agents](/docs/using-sysward/agents/)
pages all land here. Each row shows:

- **ID** — the job identifier
- **Agent** — the target server
- **Package** — the package the job acts on
- **Scheduled For** — when the job is set to run
- **Status** — pending, running, completed, or failed
- **Scheduled By** — the user who queued it

Use **Cancel** in the Actions column to stop a job that hasn't run yet.
