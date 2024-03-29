---
title: Docker Registry
date: {{ date }}
background: bg-gradient-to-l from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500
icon: docker
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

### Get current catalog
```shell script {.wrap}
curl http://<registry:port>/v2/_catalog
```

### Get image tags
```shell script {.wrap}
curl http://<registry:port>/v2/<IMAGE>/tags/list
```

### Get minifests for an image using autorization token
```shell script {.wrap}
curl -H "Authorization: Bearer $token" \
  "https://registry.hub.docker.com/v2/<REPOSITORY>/<IMAGE>/manifests/latest
```

### Get manifests {.col-span-2}
```shell script {.wrap}
curl -fsSL \
-H 'Accept: application/vnd.docker.distribution.manifest.v2+json' \
-H 'Accept: application/vnd.docker.distribution.manifest.list.v2+json' \
-H 'Accept: application/vnd.docker.distribution.manifest.v1+json' \
"http://<registry:port>/v2/<IMAGENAME>/manifests/<DIGEST|TAG>"
```


### Get authorization token to be used by registry
```shell script {.wrap}
curl "https://auth.docker.io/token?service=registry.docker.io&scope=repository:<REPOSITORY>/<IMAGE>:pull"
```

### Get minifests using autorization token
```shell script {.wrap}
curl -s -H "Authorization: Bearer $token" "https://registry.hub.docker.com/v2/<REPOSITORY>/<IMAGE>/manifests/latest
```