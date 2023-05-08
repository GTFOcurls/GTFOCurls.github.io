---
title: Cloudflare
date: {{ date }}
icon: icon-cloudflare
background: bg-blue-400
tags:
    - clourflare
    - api
categories:
    - API
intro: Communicate and manipulate cloudflare parameters
---


Cloudflare
----------

## Update DNS record
```shell script {.wrap}
curl -X PUT "https://api.cloudflare.com/client/v4/zones/<ZONE_IDENTIFIER>/dns_records/<RECORD_ID>" \
  -H "X-Auth-Email: user@example.com" \
  -H "X-Auth-Key: YOUR-AUTH-TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"type":"A","name":"example.com","content":"127.0.0.1","ttl":{},"proxied":false}'
```