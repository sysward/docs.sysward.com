---
title: "Packages"
description: "A fleet-wide inventory of installed packages, their available upgrades, and which hosts run them."
lead: ""
date: 2020-10-13T15:21:01+02:00
lastmod: 2026-07-09T00:00:00+00:00
draft: false
images: []
menu:
  docs:
    parent: "using-sysward"
weight: 40
toc: true
---

<a href="/images/packages.png" target=_blank><img src="/images/packages.png" alt="SysWard fleet-wide package inventory" class="img-fluid rounded"/></a>

The **Packages** page is a fleet-wide inventory of the packages installed across
your servers — useful for verifying which hosts are running a vulnerable
package. Each row shows:

- **Name** — the package
- **Current** — the version currently installed
- **Candidate** — the version available to upgrade to, if any
- **Hosts** — how many servers have the package installed
- **Groups** — the groups those servers belong to

Select one or more packages and choose **Upgrade** to queue the upgrade across
every host that has them.

## Hosts for a package

<a href="/images/packages_hosts.png" target=_blank><img src="/images/packages_hosts.png" alt="Hosts that have a given package installed" class="img-fluid rounded"/></a>

Select a package's **Hosts** count to see exactly which servers have it
installed and the version each is running — handy for confirming a rollout or
tracking down stragglers still on an old version.
