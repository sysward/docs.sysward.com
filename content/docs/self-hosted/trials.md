---
title: "Trial Information"
description: "How self hosted trials work"
lead: ""
date: 2020-11-12T13:26:54+01:00
lastmod: 2020-11-12T13:26:54+01:00
draft: false
images: []
menu:
docs:
parent: "self-hosted"
weight: 610
toc: true
---

foo

## Trials

Head on over to the [license dashboard](https://appliance.sysward.com/) and click on the "Install" button next to the license you want to upgrade.

From there you will see upgrade instructions which will have a CalVer of the image to pull, similar to this (please note you'll need to login to get the latest version):

1. Login to your appliance server
2. Swap to your root user `sudo su`
3. Run the command you grabbed from your license page, it should look similar to this:

```bash
k set image deployment/sysward sysward=appliance-registry.sysward.com/appliance:2021.05.02.805125918 sysward-cve=appliance-registry.sysward.com/appliance:2021.05.02.805125918
```

4. Wait for your pods to go into a running state

```bash
k get po
```

5. Login to the dashboard to start using the new version.
