---
title: NGiNX
date: {{ date }}
background: bg-gradient-to-r from-green-900 via-green-600 to-green-400 hover:from-green-900 hover:via-green-700 hover:to-green-500
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

### Access `internal` location {.col-span-2}
```shell script {.wrap}
curl -H "X-Accel-Redirect: /internal_only/file" http://HOST/
```