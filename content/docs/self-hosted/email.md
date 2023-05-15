---
title: "Email Configuration"
description: "Configuring email settings for the appliance"
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

By default, the email server settings are not configured. If you have a working email server you can continue to the steps below to get email notifications.

## Configuring Email Server


To set up email delivery you'll need to login to your appliance server.

```bash
cd /opt/sysward
```

Next open up the `.env` file and add the following lines:

```bash
SMTP_HOST=""
SMTP_PORT=""
SMTP_USER=""
SMTP_PASSWORD=""
```
After doing that you can close the file and then restart the application:

```bash
sudo systemctl restart sysward
```

Email should now be working.

You can also verify that the environment variables got loaded by `systemd` by checking `proc`
and looking for the `sysward` process:

```bash
ps ax | grep syswawrd
cat /proc/PID/env
```
