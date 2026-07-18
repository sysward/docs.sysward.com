---
title: "Agent Commands"
description: "Command-line flags for the SysWard agent binary."
lead: ""
date: 2026-07-09T00:00:00+00:00
lastmod: 2026-07-09T00:00:00+00:00
draft: false
images: []
menu:
  docs:
    parent: "reference"
weight: 20
toc: true
---

The agent binary is installed at `/opt/sysward/bin/sysward`. Run it directly to
manage the agent on a host.

| Flag | Description |
| --- | --- |
| `-install` | Register the agent and check in immediately. Used by the installer; disables the random start-up backoff. |
| `-unregister` | Remove this agent from the dashboard. |
| `-version` | Print the agent version. |
| `-group <name>` | Join the named group on registration, creating it if it doesn't exist. |
| `-hostname <name>` | Override the hostname the agent reports. |
| `-custom-hostname <name>` | Set a custom display hostname for this machine. |

Set the `DEBUG=true` environment variable for verbose output — useful when
diagnosing a host that isn't checking in:

```bash
DEBUG=true /opt/sysward/bin/sysward -install
```

Agent activity is logged to `/var/log/syslog`, tagged with `SYSWARD`.
