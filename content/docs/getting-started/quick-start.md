---
title: "Quick Start"
description: "Install the SysWard agent and get a Linux server reporting in under a minute."
lead: ""
date: 2020-11-16T13:59:39+01:00
lastmod: 2026-07-09T00:00:00+00:00
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
weight: 10
toc: true
---

## Install the agent

Sign in to your [dashboard](https://sysward.com/dashboard) and open the
**Install Agent** page. You'll see a one-line installer prefilled with your
organization's API key:

```bash
curl https://sysward.com/install.sh | API_KEY=YOUR_API_KEY bash
```

Run it on any Linux server you want to manage, as `root` or with `sudo`. The
installer:

- creates `/opt/sysward/bin` and downloads the agent binary matching your
  server's architecture (`x86_64`, `aarch64`, …),
- writes the agent configuration with your API key, and
- runs the agent once so the server checks in immediately.

Within a few seconds the server shows up on your
[Agents](/docs/using-sysward/agents/) page. From then on the agent checks in on
a schedule (via cron) to report installed packages and pick up any jobs you
queue.

## Verify it's working

- The server appears on the [Agents](/docs/using-sysward/agents/) page with its
  hostname, distribution, and pending-update count.
- Agent activity is logged to `/var/log/syslog`, tagged with `SYSWARD`.

## Next steps

- [Explore the dashboard](/docs/using-sysward/dashboard/)
- [Organize servers into groups](/docs/using-sysward/groups/)
- [Review and remediate CVEs](/docs/using-sysward/cves/)

{{< alert icon="💡" text="Managing more than a handful of servers? Push the one-liner through your existing configuration management (Ansible, Chef, Puppet) or a cloud-init user-data script." >}}
