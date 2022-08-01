---
- service: cloudflare
  description: Communicate and manipulate cloudflare parameters
  examles:
    - description: Update DNS through API
      command: |
        curl -X PUT "https://api.cloudflare.com/client/v4/zones/<ZONE_IDENTIFIER>/dns_records/<RECORD_ID>" \
         -H "X-Auth-Email: user@example.com" \
         -H "X-Auth-Key: YOUR-AUTH-TOKEN" \
         -H "Content-Type: application/json" \
         --data '{"type":"A","name":"example.com","content":"127.0.0.1","ttl":{},"proxied":false}'
---
