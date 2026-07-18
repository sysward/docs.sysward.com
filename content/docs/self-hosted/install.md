---
title: "Installation"
description: "Install the self-hosted SysWard appliance on an Ubuntu server."
lead: ""
date: 2020-11-12T13:26:54+01:00
lastmod: 2026-07-18T00:00:00+00:00
draft: false
images: []
menu:
  docs:
    parent: "self-hosted"
    identifier: "appliance-install"
weight: 30
toc: true
---

Check the [requirements](/docs/self-hosted/requirements/) first, then head to the
[license dashboard](https://appliance.sysward.com/) and click **Install** to get
an installation script prefilled with your license key, similar to:

```bash
wget https://updates.sysward.com/appliance.tar.gz; tar xzvf appliance.tar.gz
LICENSE_KEY="KEY_HERE" EMAIL="YOUR_EMAIL_HERE" ./appliance/installer.sh
```

To install:

1. Log in to your appliance server.
2. Switch to the root user: `sudo su`.
3. Run the installation script.
4. When it finishes, visit `https://<your-appliance-ip>` and sign in.

## What the installer sets up

Everything runs on the one server, under `/opt/sysward`:

- the SysWard web application (systemd service `sysward`) behind **nginx** on
  port 443, with a self-signed certificate generated during install
- the CVE sync service (systemd service `sysward-cve`)
- **PostgreSQL** with two databases (`sysward` and `cve`)
- **NATS** for background job processing (systemd service `nats`)
- your license key and database settings in `/opt/sysward/.env`

Because the certificate is self-signed, your browser will show a security
warning the first time — accept it to proceed, or install your own certificate
(see [Custom SSL Certificates](/docs/self-hosted/custom-ssl/)).

## Where is my password?

Near the end of the installer output, a password is generated and printed for
you:

```text
---------------------
Password:  2cd84674-4b2e-4091-a607-75345cd457ec
---------------------
```

Use it with your email address to sign in. Lost it? See the
[FAQ](/docs/self-hosted/faq/) for the reset command.
