---
app: docker
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
---
