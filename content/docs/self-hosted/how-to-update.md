---
title: "How to Update"
description: "Upgrade the self-hosted appliance to the latest version."
lead: ""
date: 2020-11-12T13:26:54+01:00
lastmod: 2026-07-18T00:00:00+00:00
draft: false
images: []
menu:
  docs:
    parent: "self-hosted"
weight: 50
toc: true
---

## Run the upgrade script

1. Log in to your appliance server.
2. Switch to the root user: `sudo su`.
3. Run the upgrade script:

   ```bash
   cd /opt/sysward
   ./upgrade.sh
   ```

4. Log in to the dashboard to start using the new version.

The script compares your installed version against the latest release; if a
newer version is available it downloads it, runs database migrations, and
restarts the `sysward` and `sysward-cve` services. If you're already up to
date it prints `No upgrade available` and changes nothing.

{{< alert icon="💡" text="Want to check whether an upgrade is available without applying it? See the FAQ for the version-check commands." >}}

Before a major upgrade, consider taking a backup — see
[Backup & Restore](/docs/self-hosted/backup-restore/).
