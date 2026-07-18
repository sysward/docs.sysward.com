---
title: "Installing the Agent"
description: "How the SysWard agent installer works, what it installs, and how to verify it."
lead: ""
date: 2020-10-13T15:21:01+02:00
lastmod: 2026-07-09T00:00:00+00:00
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
    identifier: "install-agent"
weight: 20
toc: true
---

The **Install Agent** page in your dashboard shows a one-line installer with
your organization's API key already filled in. Run it on each Linux server you
want to manage.

<a href="/images/installation.png" target=_blank><img src="/images/installation.png" alt="SysWard Install Agent page showing the one-line installer" class="img-fluid rounded"/></a>

## The one-line installer

```bash
curl https://sysward.com/install.sh | API_KEY=YOUR_API_KEY bash
```

Run it as `root` or with `sudo` — the installer writes to `/opt/sysward`.

## What the installer does

1. Creates `/opt/sysward/bin`.
2. Downloads the agent binary for your server's architecture
   (`sysward_$(uname -m)`, e.g. `x86_64` or `aarch64`).
3. Downloads the default agent configuration and writes your API key into it.
4. Runs the agent once (`sysward -install`) so the server checks in right away.

After the first run the agent is scheduled with cron and continues to check in
on its own, reporting installed packages and executing any jobs you queue from
the dashboard.

## Requirements

- A [supported Linux distribution](/docs/reference/supported-operating-systems/)
  with its standard package manager (`apt`, `dnf`/`yum`, `zypper`, or `pacman`).
- Outbound HTTPS to `sysward.com` and access to `updates.sysward.com` to
  download the agent binary and configuration.
- Permission to write to `/opt/sysward` (run as `root` or via `sudo`).

## Verify the installation

- The server appears on the [Agents](/docs/using-sysward/agents/) page.
- Agent activity is logged to `/var/log/syslog`, tagged with `SYSWARD`.

If a server doesn't check in, see
[Troubleshooting](/docs/getting-started/troubleshooting/). To remove the agent,
see [Uninstall](/docs/getting-started/uninstall/).
