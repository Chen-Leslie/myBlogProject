Nginx

## 1. Nginx基本概念
  - 反向代理
  - 负载均衡
  - 动静分离
## 2. Nginx常用命令
  - 启动Nginx 
    ```linux
    ./nginx
    ```
  - 重新加载Nginx
    ```linux
    ./nginx -s reload
    ```
  - 关闭Nginx
    ```linux
    ./nginx -s stop
    ```
  - 安全退出Nginx
    ```linux
    ./nginx -s quit
    ```
## 3. Nginx配置项
  - 配置文件由全局块、events块、http块组成

  - 全局块：

    ​        **主要设置的是影响nginx服务器整体运行的配置指令**，比如worker_process, 值越大，可以支持的并发处理量也越多，但是还是和服务器的硬件相关。

  - events块：

  - http块：

    - server块：每个http块可以包括多个server块，每个server块相当于一个虚拟主机。
      - 全局server块：最常见的配置是本虚拟机主机的**监听配置和本虚拟主机的名称或 IP 配置**。
        
        ```linux
        # 监听端口80
        listen        80;
        server_name   localhost;
        ```
        
      - location块：	
      
        - 一个 server 块可以配置多个 location 块。
        - **主要作用是根据请求地址路径的匹配，匹配成功进行特定的处理**
        - 这块的主要作用是基于 Nginx 服务器接收到的请求字符串（例如 server_name/uri-string），对虚拟主机名称（也可以是 IP 别名）之外的字符串（例如 前面的 /uri-string）进行匹配，对特定的请求进行处理。地址定向、数据缓存和应答控制等功能，还有许多第三方模块的配置也在这里进行。
      
        ```linux
        # 表示如果请求路径是/就是用这个location块进行处理
        location / {
             root   html;
             index  index.html index.htm;
        }
        ```
        - location匹配规则：https://www.cnblogs.com/duhuo/p/8323812.html
## 4.Nginx反向代理



































