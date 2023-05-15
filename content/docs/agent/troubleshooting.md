---
title: "Troubleshooting"
description: "Trouble shooting guide for the self-hosted appliance"
lead: ""
date: 2020-11-12T15:22:20+01:00
lastmod: 2020-11-12T15:22:20+01:00
draft: false
images: []
menu:
  docs:
    parent: "agent"
weight: 620
toc: true
---

## Installation

### Missing python in path

If the `python` binary is not available in the path (it might be available as `python3`) you may get an error similar to this:

```
bash: line 2: stop: command not found
+ Downloading agent
+ Downloading agent config
+ Downloading python package reader
+ Moving config into place
+ Running agent one time
python not found, installing
panic: exit status 100
goroutine 1 [running]:
main.checkPreReqs()
/home/ubuntu/sysward-agent-runner/_work/sysward-agent/sysward-agent/operating_system.go:87 +0xbfb
main.(*Agent).Startup(0x8a51a0)
/home/ubuntu/sysward-agent-runner/_work/sysward-agent/sysward-agent/sysward-agent.go:63 +0x22a
main.main()
/home/ubuntu/sysward-agent-runner/_work/sysward-agent/sysward-agent/sysward-agent.go:316 +0x3d9
+ Logfiles are located at /var/log/syslog and tagged with SYSWARD

```
