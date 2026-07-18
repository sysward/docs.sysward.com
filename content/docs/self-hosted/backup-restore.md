---
title: "Backup & Restore"
description: "Back up the appliance's databases and configuration, and restore onto a fresh install."
lead: ""
date: 2026-07-18T00:00:00+00:00
lastmod: 2026-07-18T00:00:00+00:00
draft: false
images: []
menu:
  docs:
    parent: "self-hosted"
weight: 60
toc: true
---

The appliance keeps all of its state in two PostgreSQL databases and a handful
of files under `/opt/sysward`, so standard PostgreSQL tooling is all you need.

## What to back up

- **`sysward` database** — your organizations, users, agents, groups, jobs, and
  history. This is the data that matters.
- **`cve` database** — synced vulnerability data. Backing it up is optional; the
  `sysward-cve` service re-syncs it over time.
- **`/opt/sysward/.env`** — your license key and configuration (including any
  [SMTP settings](/docs/self-hosted/email/)).
- **Your SSL certificate** — `/opt/sysward/sysward.cert` and
  `/opt/sysward/sysward.key`, if you installed a
  [custom certificate](/docs/self-hosted/custom-ssl/).

## Taking a backup

As root on the appliance:

```bash
cd /opt/sysward
source .env
pg_dump "$DATABASE_URL" > sysward-backup.sql
pg_dump "$CVE_DB_URL" > cve-backup.sql        # optional
cp .env env-backup
```

Copy the resulting files off the appliance (for example with `scp`) and store
them somewhere safe. Schedule this with cron for regular backups.

## Restoring

Restore onto a **fresh appliance install** — run the normal
[installation](/docs/self-hosted/install/) on the new server first, then:

1. Stop the application services:

   ```bash
   systemctl stop sysward sysward-cve
   ```

2. Load your backup into the new `sysward` database:

   ```bash
   cd /opt/sysward
   source .env
   psql "$DATABASE_URL" < sysward-backup.sql
   ```

   (Restore `cve-backup.sql` into `$CVE_DB_URL` the same way if you backed it
   up; otherwise the CVE service repopulates it automatically.)

3. Re-apply any custom settings from your old `.env` (SMTP settings, for
   example) to the new `/opt/sysward/.env` — don't overwrite the new file
   wholesale, since it contains the database credentials generated for this
   install.

4. Restore your custom SSL certificate if you had one, then start everything
   back up:

   ```bash
   systemctl start sysward sysward-cve
   systemctl restart nginx
   ```

Your agents will resume checking in against the restored data — if the
appliance's IP or hostname changed, update your agents' configuration to point
at the new address.
