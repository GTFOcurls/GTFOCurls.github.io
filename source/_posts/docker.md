---
title: Docker
date: {{ date }}
icon: icon-docker
background: bg-blue-400
tags:
    - docker
    - api
categories:
    - Docker
intro: Communicate with docker through docker.sock or REST API
---

Docker
------


## Get running containers
```shell script {.wrap}
curl  --unix-socket /var/run/docker.sock "http://localhost/containers/json"
```

## Get containers with given status
```shell script {.wrap}
curl  --unix-socket /var/run/docker.sock "http://localhost/containers/json?filters=\{\"health\":\[\"unhealthy\"\]${labelFilter}\}"
```