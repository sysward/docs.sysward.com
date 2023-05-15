---
title: "Installation"
description: "How to install the server for self-hosted SysWard installation"
lead: ""
date: 2020-11-12T13:26:54+01:00
lastmod: 2020-11-12T13:26:54+01:00
draft: false
images: []
menu:
  docs:
    parent: "self-hosted"
weight: 601
toc: true
---

## Installation

Head on over to the [license dashboard](https://appliance.sysward.com/) and click on the "Install" button.

From there you will see an installation script similar to this:

```bash
wget https://updates.sysward.com/appliance.tar.gz; tar xzvf appliance.tar.gz
LICENSE_KEY="KEY_HERE" EMAIL="YOUR_EMAIL_HERE" ./appliance/installer.sh
```

1. Login to your appliance server
2. Swap to your root user `sudo su`
3. Run the installation script to install the appliance.
4. Login to the dashboard to start using the new version.

You can visit your appliance now at `https://<your-appliance-ip>`.

If you wish to put your own certificates in place instead of the self-signed/generated ones,
you can do so by replacing the `sysward.crt` and `sysward.key` files in `/opt/sysward/` and restarting nginx.

## Where is my password?

Towards the end of the installation script, highlighted, you should see a password created for you:

```bash
---------------------
Password:  2cd84674-4b2e-4091-a607-75345cd457ec
---------------------
Generating a RSA private key
..........++++
...................................................++++
writing new private key to 'sysward.key'
-----
--2023-05-15 13:21:04--  https://updates.sysward.com/appliance-version
Resolving updates.sysward.com (updates.sysward.com)... 18.165.32.80, 18.165.32.91, 18.165.32.69, ...
Connecting to updates.sysward.com (updates.sysward.com)|18.165.32.80|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 18 [binary/octet-stream]
Saving to: ‘appliance-version’
```
