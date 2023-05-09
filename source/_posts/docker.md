---
title: Docker
date: {{ date }}
background: bg-[#488fdf]
tags:
    - docker
    - api
categories:
    - Docker
intro: Communicate with docker through docker.sock or REST API
---

Docker
------

### Query Unix Socket
```shell script {.wrap}
curl  --unix-socket /var/run/docker.sock "http://localhost/containers/json"
```

### Get containers with given status {.col-span-2}
```shell script {.wrap}
curl  --unix-socket /var/run/docker.sock "http://localhost/containers/json?filters=\{\"health\":\[\"unhealthy\"\]${labelFilter}\}"
```