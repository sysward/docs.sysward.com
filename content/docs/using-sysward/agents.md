---
title: "Agents"
description: "Browse every server reporting to SysWard and drill into a host's updates, CVEs, package holds, jobs, and history."
lead: ""
date: 2020-10-13T15:21:01+02:00
lastmod: 2026-07-09T00:00:00+00:00
draft: false
images: []
menu:
  docs:
    parent: "using-sysward"
weight: 20
toc: true
---

## The agents list

<a href="/images/agents.png" target=_blank><img src="/images/agents.png" alt="SysWard Agents list" class="img-fluid rounded"/></a>

The **Agents** page lists every server reporting to SysWard. Filter to find a
specific host, and see each one's OS, hostname, group, update counts
(security / regular / CVE), IP address, whether a reboot is required, CPU count,
memory, agent version, and last check-in. Reassign a server's group inline, or
remove a host with the **Delete** action.

## Agent details

Select a hostname to open its detail view, organized into tabs.

### Details

<a href="/images/agent_overview.png" target=_blank><img src="/images/agent_overview.png" alt="Agent details overview" class="img-fluid rounded"/></a>

The **Details** tab summarizes the server: **Patch Status**, **System
Information**, **System Events**, and **Network Information** (including its IP
addresses).

### Pending

<a href="/images/agent_packages.png" target=_blank><img src="/images/agent_packages.png" alt="Pending package updates for an agent" class="img-fluid rounded"/></a>

The **Pending** tab lists the package updates waiting on the server. From here
you can:

* filter for a specific package,
* view candidate versions,
* apply a subset of patch types (Security, Regular, or All), and
* schedule specific packages to be upgraded.

<a href="/images/agent_scheduled_jobs.png" target=_blank><img src="/images/agent_scheduled_jobs.png" alt="Scheduling a package upgrade for a date and time" class="img-fluid rounded"/></a>

Pick a date and time to schedule the upgrade instead of running it immediately.

### CVE

<a href="/images/agent_cves.png" target=_blank><img src="/images/agent_cves.png" alt="CVEs affecting a single agent" class="img-fluid rounded"/></a>

The **CVE** tab shows every vulnerability affecting this server. Where an upgrade
is available for the affected package, you can apply it here. The
[CVEs](/docs/using-sysward/cves/) page shows the same view across every server.

### Held and unheld packages

<a href="/images/agent_hold.png" target=_blank><img src="/images/agent_hold.png" alt="Unheld packages that can be held" class="img-fluid rounded"/></a>

The **Unheld Packages** tab lists packages you can pin. Hold a package to prevent
it from being upgraded.

<a href="/images/agent_unhold.png" target=_blank><img src="/images/agent_unhold.png" alt="Held packages that can be released" class="img-fluid rounded"/></a>

The **Held Packages** tab lists packages currently held. Release one to allow
upgrades again.

### Jobs

<a href="/images/agent_jobs.png" target=_blank><img src="/images/agent_jobs.png" alt="Jobs queued for an agent" class="img-fluid rounded"/></a>

The **Jobs** tab shows jobs queued for this server. Scheduled an upgrade by
mistake? Cancel it here before the agent runs it.

### History

<a href="/images/agent_history.png" target=_blank><img src="/images/agent_history.png" alt="History of jobs run on an agent" class="img-fluid rounded"/></a>

The **History** tab records the jobs that have run on the server, including which
user performed each upgrade.

## Change a server's group

<a href="/images/agent_groups.png" target=_blank><img src="/images/agent_groups.png" alt="Reassigning an agent to a different group" class="img-fluid rounded"/></a>

Click a server's group name — on the Agents list or the
[dashboard](/docs/using-sysward/dashboard/) — and pick a new group to reassign
it.
