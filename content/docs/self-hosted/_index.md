---
title: "Self-Hosted Appliance"
description: "Install and operate the self-hosted SysWard appliance."
lead: "Run SysWard on your own infrastructure with the self-hosted appliance."
date: 2020-10-06T08:49:15+00:00
lastmod: 2026-07-18T00:00:00+00:00
draft: false
images: []
---

The appliance is the full SysWard platform packaged for a single Ubuntu server
you control: the web application and CVE sync service behind nginx, with
PostgreSQL and NATS all installed under `/opt/sysward`. Your agents report to
your appliance instead of sysward.com, so package and vulnerability data stays
on your infrastructure.

- [Requirements](/docs/self-hosted/requirements/) — supported OS and hardware
- [Installation](/docs/self-hosted/install/) — install the appliance
- [Email Configuration](/docs/self-hosted/email/) — configure SMTP
- [How to Update](/docs/self-hosted/how-to-update/) — upgrade the appliance
- [Backup & Restore](/docs/self-hosted/backup-restore/) — protect your data
- [Custom SSL Certificates](/docs/self-hosted/custom-ssl/) — use your own certificate
- [Trial Information](/docs/self-hosted/trials/) — trials and licensing
- [FAQ](/docs/self-hosted/faq/) — common questions
