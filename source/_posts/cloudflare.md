---
title: Cloudflare
date: {{ date }}
background: bg-[#3e4548]
tags:
    - clourflare
    - api
categories:
    - API
intro: Communicate and manipulate cloudflare parameters
---


Cloudflare
----------

### Update DNS record {.col-span-2}
```shell script {.wrap}
curl -X PUT "https://api.cloudflare.com/client/v4/zones/<ZONE_IDENTIFIER>/dns_records/<RECORD_ID>" \
  -H "X-Auth-Email: user@example.com" \
  -H "X-Auth-Key: YOUR-AUTH-TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"type":"A","name":"example.com","content":"127.0.0.1","ttl":{},"proxied":false}'
```
Authenticate to Cloudflare API using `user@example.com` email and `YOUR-AUTH-TOKEN` token, to update a `ZONE_IDENTIFIER` record with `RECORD_ID`.