---
title: NGiNX
date: {{ date }}
icon: icon-curl
background: bg-blue-400
tags:
- nginx
- tips
categories:
- Linux Command
intro: Different tricks that can be used with NGiNX specific hosts
plugins:
- copyCode
---

nginx
-----

## Access nginx `location` that is defined as `internal`
```shell script {.wrap}
curl -H "X-Accel-Redirect: /internal_only/file" http://HOST/
```