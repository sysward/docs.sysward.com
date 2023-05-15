---
title: "How to Update"
description: "How to update the server for a self hosted SysWard installation"
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

## Grab the latest version

Head on over to the [license dashboard](https://appliance.sysward.com/) and click on the "Install" button next to the license you want to upgrade.

From there you will see upgrade instructions which will have a CalVer of the image to pull, similar to this (please note you'll need to login to get the latest version):

1. Login to your appliance server
2. Swap to your root user `sudo su`
3. Run the upgrade script to check for new updates and upgrade

```bash
cd /opt/sysward
./upgrade.sh
```

4. Login to the dashboard to start using the new version.
