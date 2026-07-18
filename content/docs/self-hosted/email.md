---
title: "Email Configuration"
description: "Configure SMTP so the appliance can send email notifications."
lead: ""
date: 2020-11-12T13:26:54+01:00
lastmod: 2026-07-18T00:00:00+00:00
draft: false
images: []
menu:
  docs:
    parent: "self-hosted"
weight: 40
toc: true
---

Email delivery is not configured by default. If you have an SMTP server, follow
the steps below to enable email notifications.

## Configure the SMTP server

Log in to your appliance server and open `/opt/sysward/.env`, then add:

```bash
SMTP_HOST=""
SMTP_PORT=""
SMTP_USER=""
SMTP_PASSWORD=""
```

Save the file and restart the application:

```bash
sudo systemctl restart sysward
```

Email should now be working.

## Verify the settings were loaded

You can confirm systemd passed the environment variables to the running
process:

```bash
ps ax | grep sysward
cat /proc/PID/environ | tr '\0' '\n' | grep SMTP
```

(Replace `PID` with the `sysward` process ID from the first command.)
