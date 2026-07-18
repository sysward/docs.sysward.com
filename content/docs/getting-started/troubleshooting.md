---
title: "Troubleshooting"
description: "Fixing common problems with the SysWard agent."
lead: ""
date: 2020-11-12T15:22:20+01:00
lastmod: 2026-07-09T00:00:00+00:00
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
weight: 80
toc: true
---

## An agent isn't checking in

If a server isn't showing up on the [Agents](/docs/using-sysward/agents/) page,
or is marked **dead**, work through the following on that host.

### Run the agent manually with debug output

```bash
DEBUG=true /opt/sysward/bin/sysward
```

This prints what the agent is doing and surfaces most problems — connectivity,
configuration, or package-manager errors — directly.

### Check the logs

The agent logs to syslog, tagged `SYSWARD`:

```bash
grep SYSWARD /var/log/syslog | tail
```

### Confirm the agent is scheduled

The agent checks in on a schedule via cron. Confirm the SysWard entry is still
present:

```bash
grep -r sysward /etc/crontab /etc/cron.d/ 2>/dev/null
```

### Check connectivity

The agent needs outbound HTTPS to reach SysWard and to download updates. From
the host:

```bash
curl -sSI https://sysward.com | head -1
curl -sSI https://updates.sysward.com | head -1
```

If these fail, check the server's firewall, proxy, or DNS.

### Verify the API key

The agent's API key lives in `/opt/sysward/bin/config.json`. If you rotated your
organization's key, re-run the installer from the **Install Agent** page to
refresh it.

## Reinstalling the agent

Re-running the one-line installer is safe — it replaces the agent binary and
configuration in place:

```bash
curl https://sysward.com/install.sh | API_KEY=YOUR_API_KEY bash
```

## Checking the agent version

```bash
/opt/sysward/bin/sysward -version
```

## Removing an agent

To unregister and remove the agent entirely, see
[Uninstall](/docs/getting-started/uninstall/).
