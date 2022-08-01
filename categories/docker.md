---
- app: docker
  description: Communicate with docker through docker.sock or REST API
  examles:
    - description: Get running containers
      command: |
        curl  --unix-socket /var/run/docker.sock "http://localhost/containers/json"
    - description: "Get containers with given status",
      command: |
        curl  --unix-socket /var/run/docker.sock "http://localhost/containers/json?filters=\{\"health\":\[\"unhealthy\"\]${labelFilter}\}"

- app: registry
  description: Communicate with a docker registry
  examples:
    - description: Get current catalog
      command: |
        curl http://<registry:port>/v2/_catalog
    - description: Get image tags
      command: |
        curl http://<registry:port>/v2/<IMAGENAME>/tags/list
    - description: Get manifests
      command: |
       curl -fsSL \
        -H 'Accept: application/vnd.docker.distribution.manifest.v2+json' \
        -H 'Accept: application/vnd.docker.distribution.manifest.list.v2+json' \
        -H 'Accept: application/vnd.docker.distribution.manifest.v1+json' \
        "http://<registry:port>/v2/<IMAGENAME>/manifests/<DIGEST|TAG>"
    - description: Get minifests for an image using autorization token
      command: |
        curl -s -H "Authorization: Bearer $token" "https://registry.hub.docker.com/v2/<REPOSITORY>/<IMAGE>/manifests/latest
    - description: Get authorization token to be used by registry
      command: |
        curl -s "https://auth.docker.io/token?service=registry.docker.io&scope=repository:<REPOSITORY>/<IMAGE>:pull"
    - description: Get minifests using autorization token
      command: |
        curl -s -H "Authorization: Bearer $token" "https://registry.hub.docker.com/v2/<REPOSITORY>/<IMAGE>/manifests/latest
---
