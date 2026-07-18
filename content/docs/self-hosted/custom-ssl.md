---
title: "Custom SSL Certificates"
description: "Replace the appliance's self-signed certificate with your own."
lead: ""
date: 2026-07-18T00:00:00+00:00
lastmod: 2026-07-18T00:00:00+00:00
draft: false
images: []
menu:
  docs:
    parent: "self-hosted"
weight: 70
toc: true
---

The installer generates a self-signed certificate, so browsers show a security
warning when you visit the appliance. To use your own certificate instead,
replace the two files nginx serves:

- `/opt/sysward/sysward.cert` — the certificate (include the full chain if your
  CA provides intermediates)
- `/opt/sysward/sysward.key` — the private key

Then restart nginx:

```bash
sudo systemctl restart nginx
```

The appliance now serves HTTPS with your certificate — no more browser warning,
provided the certificate matches the hostname your users (and agents) use to
reach the appliance.

{{< alert icon="💡" text="Renewing? Overwrite the same two files and restart nginx again. If you automate renewal (for example with certbot), add the copy + restart as a post-renewal hook." >}}
