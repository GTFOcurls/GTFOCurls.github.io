---
title: Docker Registry
date: {{ date }}
icon: icon-docker
background: bg-blue-600
tags:
    - docker
    - registry
    - api
categories:
    - Docker
intro: Communicate with docker registry
---

Docker Registry
---------------

## Get current catalog
```shell script {.wrap}
curl http://<registry:port>/v2/_catalog
```

## Get image tags
```shell script {.wrap}
curl http://<registry:port>/v2/<IMAGENAME>/tags/list
```

## Get manifests
```shell script {.wrap}
curl -fsSL \
-H 'Accept: application/vnd.docker.distribution.manifest.v2+json' \
-H 'Accept: application/vnd.docker.distribution.manifest.list.v2+json' \
-H 'Accept: application/vnd.docker.distribution.manifest.v1+json' \
"http://<registry:port>/v2/<IMAGENAME>/manifests/<DIGEST|TAG>"
```

## Get minifests for an image using autorization token
```shell script {.wrap}
curl -s -H "Authorization: Bearer $token" "https://registry.hub.docker.com/v2/<REPOSITORY>/<IMAGE>/manifests/latest
```

## Get authorization token to be used by registry
```shell script {.wrap}
curl -s "https://auth.docker.io/token?service=registry.docker.io&scope=repository:<REPOSITORY>/<IMAGE>:pull"
```

## Get minifests using autorization token
```shell script {.wrap}
curl -s -H "Authorization: Bearer $token" "https://registry.hub.docker.com/v2/<REPOSITORY>/<IMAGE>/manifests/latest
```