---
- app: nginx
  description: Different tricks that can be used with NGiNX specific hosts
  examles:
  - description: Access nginx `location` that is defined as `internal`
    command: |
      curl -H "X-Accel-Redirect: /internal_only/file" http://HOST/
 ---
