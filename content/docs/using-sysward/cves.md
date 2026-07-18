---
title: "CVEs"
description: "Review CVEs affecting your fleet, see every host a vulnerability touches, and apply fixes."
lead: ""
date: 2020-10-13T15:21:01+02:00
lastmod: 2026-07-09T00:00:00+00:00
draft: false
images: []
menu:
  docs:
    parent: "using-sysward"
weight: 50
toc: true
---

<a href="/images/cve_alerts.png" target=_blank><img src="/images/cve_alerts.png" alt="SysWard CVE Alerts table listing vulnerabilities across the fleet" class="img-fluid rounded"/></a>

The **CVE Alerts** page lists every known vulnerability affecting the packages
installed across your infrastructure. Each row shows:

- **Agent** — the affected server
- **Package** and **Version** — the vulnerable package and its installed version
- **CVE** — the identifier, linked to its public advisory (opens in a new tab)
- **Severity** — Critical, High, Medium, or Low
- **First Seen** — when SysWard first detected it

Use the **Filter** box to narrow the list by host, package, or CVE. Select a
**CVE ID** to list every host affected by that same vulnerability, so you can
see its blast radius at a glance.

## Applying fixes

Where a fixed package version is available, the row shows an **Upgrade** action —
apply it directly from this page to queue the upgrade on the affected host. Rows
marked **No upgrade** don't have a fixed package available yet.

{{< alert icon="💡" text="Vulnerabilities are matched against installed package versions on every agent check-in, so the list reflects what's actually running on your servers." >}}
