---
title: "FAQ"
description: "Appliance frequently asked questions"
lead: ""
date: 2020-11-12T13:26:54+01:00
lastmod: 2026-07-18T00:00:00+00:00
draft: false
images: []
menu:
  docs:
    parent: "self-hosted"
weight: 90
toc: true
---

## How do I know if an upgrade is available without upgrading?

Check the remote version:

```bash
curl https://updates.sysward.com/appliance-version
```

Check your local version:

```bash
cat /opt/sysward/appliance-version
```

If they don't match, a newer version is available — see
[How to Update](/docs/self-hosted/how-to-update/).

## How do I install a custom SSL certificate?

Replace `/opt/sysward/sysward.cert` and `/opt/sysward/sysward.key` with your
own and restart nginx. Full details:
[Custom SSL Certificates](/docs/self-hosted/custom-ssl/).

## How do I restart nginx?

```bash
sudo systemctl restart nginx
```

## How do I back up the appliance?

Dump the PostgreSQL databases and save your `.env` — see
[Backup & Restore](/docs/self-hosted/backup-restore/).

## I've lost my password

1. Switch to the root user: `sudo su`
2. Run the password reset command:

```bash
cd /opt/sysward
source .env && ./web users:reset YOUR_EMAIL_HERE
```

## Does the appliance work air-gapped?

An internet connection to the license server is required by default. If you
need a fully air-gapped installation,
[reach out to us](https://sysward.com/contact).
