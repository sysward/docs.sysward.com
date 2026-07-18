---
title: "Webhooks & Notifications"
description: "Get notified in Slack or Discord — or by email — when new security updates are found on your servers."
lead: ""
date: 2026-07-09T00:00:00+00:00
lastmod: 2026-07-09T00:00:00+00:00
draft: false
images: []
menu:
  docs:
    parent: "integrations"
weight: 10
toc: true
---

SysWard alerts you when **new security updates** are detected on your servers —
through a chat webhook and by email.

## Slack & Discord webhooks

Set a **Webhook URL** on the
[Organization Settings](/docs/account-billing/organization/) page. SysWard picks
the destination automatically from the URL:

- a **Slack** incoming-webhook URL (one containing `slack`) posts a Slack message
- a **Discord** webhook URL (one containing `discord`) posts a Discord message

When an agent checks in and SysWard finds new security updates on it, it posts a
message with the hostname, the pending security and regular update counts, and a
link straight to that agent:

> **web-01** has pending updates. Security: 3, Regular: 12

To set it up:

1. Create an incoming webhook in Slack or Discord and copy its URL.
2. Paste it into **Webhook URL** on Organization Settings and click **Save**.

## Email notifications

Users who enable **Receive email alerts** on their
[Profile](/docs/account-billing/profile/) page are emailed when new security
updates are found on your servers.

{{< alert icon="💡" text="Notifications fire when an agent's pending security-update count increases — so you hear about new risk as it appears, not the same backlog on every check-in." >}}
