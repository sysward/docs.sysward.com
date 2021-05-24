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
    parent: "general"
weight: 130
toc: true
---

{{< alert icon="💡" text="Make sure you clear out your crontab" >}}

## Uninstalling SySward

Start local development server:

```bash
rm -rf /opt/sysward
```

Open up your `/etc/crontab` file and remove the SysWard line.
