---
title: "Dashboard"
description: "An at-a-glance view of pending patches, vulnerabilities, and agent health across your fleet."
lead: ""
date: 2020-10-13T15:21:01+02:00
lastmod: 2026-07-09T00:00:00+00:00
draft: false
images: []
menu:
  docs:
    parent: "using-sysward"
weight: 10
toc: true
---

<a href="/images/dashboard.png" target=_blank><img src="/images/dashboard.png" alt="SysWard dashboard showing summary cards, patches by group, and agents with updates" class="img-fluid rounded"/></a>

The dashboard gives you an at-a-glance view of your fleet's patch and
vulnerability status. It has three parts.

## Summary cards

The cards across the top show the totals that matter most. Each one is also a
shortcut — click the number to jump straight to the [Agents](/docs/using-sysward/agents/)
list pre-filtered to those servers:

- **Security Updates** — servers with pending security patches
- **Regular Updates** — servers with pending non-security updates
- **Dead Agents** — agents that haven't checked in within your organization's
  dead-agent timeout (configurable on the [Organization](/docs/account-billing/organization/) page)
- **Job Failures** — jobs that didn't complete successfully

## Patches By Group

This chart breaks pending **security** vs. **regular** updates down by
[group](/docs/using-sysward/groups/), so you can see which parts of your
infrastructure are furthest behind at a glance.

## Agents With Updates

A table of the servers that have work waiting, showing each agent's OS,
hostname, group, update counts (**security / regular / CVE**), and last
check-in time. Use the filter box to narrow the list, or reassign a server's
group inline from the dropdown.

<a href="/images/dashboard_quickfilter.png" target=_blank><img src="/images/dashboard_quickfilter.png" alt="Clicking a summary card filters the agents list" class="img-fluid rounded"/></a>

{{< alert icon="💡" text="Clicking any summary-card number (Security, Regular, Dead, or Job Failures) opens the Agents list with that filter already applied." >}}
