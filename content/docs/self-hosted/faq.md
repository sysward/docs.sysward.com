---
title: "FAQ"
description: "Appliance frequently asked questions"
lead: ""
date: 2020-11-12T13:26:54+01:00
lastmod: 2020-11-12T13:26:54+01:00
draft: false
images: []
menu:
  docs:
    parent: "self-hosted"
weight: 615
toc: true
---

## How do I know if an upgrade is available without upgrading?


Check the remote version with the following command:

```bash
echo $(curl https://updates.sysward.com/appliance-version)
```

Check your local version:

```bash
cat /opt/sysward/appliance-version
```

If they do not match there is a newer version available.

## How do I install a custom SSL certificate?

Replace the following two files in `/opt/sysward` with your own:

* `sysward.crt`
* `sysward.key`

## How do I restart nginx?

```bash
sudo systemctl restart nginx
```

## I've lost my password

1. Swap to your root user `sudo su`
2. Run the reset password script below:

```bash
cd /opt/sysward
source .env && ./web tasks users:reset YOUR_EMAIL_HERE
 ```
