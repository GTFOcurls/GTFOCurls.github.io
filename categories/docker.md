---
- app: docker
  description: Communicate with docker through docker.sock or REST API
  examles:
    - { 
        description: Get running containers
        command: |
          curl  --unix-socket /var/run/docker.sock "http://localhost/containers/json"
      }
    - { 
        description: "Get containers with given status",
        command: |
          curl  --unix-socket /var/run/docker.sock "http://localhost/containers/json?filters=\{\"health\":\[\"unhealthy\"\]${labelFilter}\}"
      }

- app: registry
  description: Communicate with a docker registry
  examples:
    - {
        description: Get current catalog
        command: |
          curl http://<registry:port>/v2/_catalog
      }
    - {
        description: Get image tags
        command: |
          curl http://<registry:port>/v2/<IMAGENAME>/tags/list
      }
    - {
        description: Get manifests
        command: |
          curl -fsSL \
          -H 'Accept: application/vnd.docker.distribution.manifest.v2+json' \
          -H 'Accept: application/vnd.docker.distribution.manifest.list.v2+json' \
          -H 'Accept: application/vnd.docker.distribution.manifest.v1+json' \
          "http://<registry:port>/v2/<IMAGENAME>/manifests/<DIGEST|TAG>"
      }
---
