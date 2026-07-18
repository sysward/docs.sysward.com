---
title: "History & Audit Trail"
description: "Every job and event across your servers — and who performed it."
lead: ""
date: 2026-07-09T00:00:00+00:00
lastmod: 2026-07-09T00:00:00+00:00
draft: false
images: []
menu:
  docs:
    parent: "using-sysward"
weight: 70
toc: true
---

<a href="/images/agent_history.png" target=_blank><img src="/images/agent_history.png" alt="SysWard history / audit trail" class="img-fluid rounded"/></a>

SysWard keeps an audit trail of what happened across your fleet — the jobs that
ran, the events detected, and who initiated each one. History is available at
three levels:

- **Per agent** — the **History** tab on an
  [agent's detail page](/docs/using-sysward/agents/).
- **Per group** — the history on a [group's overview](/docs/using-sysward/groups/).
- **Fleet-wide** — the history shown on the
  [dashboard](/docs/using-sysward/dashboard/).

Each entry shows:

- **Type** — the kind of event (for example a detected CVE, an upgrade, or a check-in)
- **Description** — what happened
- **Date** — when it happened
- **User** — who performed it

## Who performed an action

The **User** column attributes each action:

- a **user's email** — for actions a person initiated from the dashboard
- **System** — for automated actions taken by the agent or SysWard itself
- **Unknown** — when the action references a user who no longer exists
