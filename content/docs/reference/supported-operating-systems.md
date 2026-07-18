---
title: "Supported Operating Systems"
description: "The Linux distributions the SysWard agent manages, grouped by package manager."
lead: ""
date: 2026-07-09T00:00:00+00:00
lastmod: 2026-07-09T00:00:00+00:00
draft: false
images: []
menu:
  docs:
    parent: "reference"
weight: 10
toc: true
---

The SysWard agent runs on Linux and identifies your distribution from
`/etc/os-release`. It manages packages using each distribution's native package
manager:

| Family | Distributions | Package manager |
| --- | --- | --- |
| Debian | Debian, Ubuntu | `apt` |
| RHEL | Red Hat Enterprise Linux, CentOS, Rocky Linux, AlmaLinux, Oracle Linux, Amazon Linux, Fedora | `yum` / `dnf` |
| SUSE | SUSE Linux Enterprise, openSUSE | `zypper` |
| Arch | Arch Linux, Manjaro | `pacman` |

Package holds are honored per package manager (`apt-mark hold`, `yum`/`dnf`
versionlock, and the equivalents), so the packages you
[hold](/docs/using-sysward/agents/) stay pinned during upgrades.

{{< alert icon="💡" text="The agent is Linux-only. Make sure your servers run a supported distribution with its standard package manager available." >}}
