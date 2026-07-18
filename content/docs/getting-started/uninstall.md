---
title: "Uninstall"
description: "How to un-install Sysward"
lead: ""
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
weight: 90
toc: true
---

{{< alert icon="💡" text="Make sure you clear out your crontab" >}}

## Uninstalling SysWard

Remove the SysWard agent directory:

```bash
rm -rf /opt/sysward
```

Then open your `/etc/crontab` file and remove the SysWard line so the agent
stops checking in.
