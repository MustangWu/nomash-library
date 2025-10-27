# TTFB (Time To First Byte)

TTFB 是浏览器接收到服务器返回的第一个字节所消耗的时间，涵盖 DNS 解析、TCP/TLS 建连、服务器处理与首字节返回前的等待。

- 降低方法：
  - 使用 CDN（如 Cloudflare）在边缘缓存与就近分发静态资源。
  - 启用缓存策略（Cache-Control/ETag）、压缩（Gzip/Brotli）。
  - 优化后端响应（数据库索引、减少阻塞、异步 I/O、连接池）。
  - 减少重定向、优化 DNS（预解析、减少第三方域名）。
  - 对 SSR/函数计算启用边缘渲染或预渲染，减少动态首包时间。

---

# Hotlinking（防盗链）

Hotlinking 指其他网站直接引用你站点的资源链接（如图片、视频），消耗你的带宽与流量。

- 防护策略：
  - 在 CDN 后台启用防盗链（基于 Referer 的访问控制、签名 URL、热链保护）。
  - 源站（如 Nginx/Apache）配置：
    - Apache 可使用 .htaccess 通过 `RewriteCond %{HTTP_REFERER}` 拦截外链，允许白名单域名。
    - Nginx 使用 `valid_referers` 与条件返回 403，或改写为占位图。
  - 采用带签名/一次性令牌的资源 URL，或为私有资源启用鉴权中台（如 S3 私有桶 + 预签名 URL）。
  - 为公开图片添加水印或降低清晰度，减少被盗链价值。
  - 使用唯一文件名/路径并定期轮转，降低长期外链命中。

---

# 实操建议（结合本项目）

- 静态站点（Vite 构建）前置 Cloudflare，利用其缓存与 Brotli 降 TTFB。
- 对第三方 API（Open-Meteo 地理与天气）保留超时与错误提示，避免长等待造成体验感知差。
- 若后续托管私有资源，建议放置在对象存储并开启签名 URL；静态公共资源通过 CDN 热链保护。


