## nginx 的相关配置 

```shell

server {
        listen 80;
        listen 443;
        charset utf-8;
        server_name oortcloudsmart.com www.oortcloudsmart.com; 
        #root /data/sftp/mysftp/company/;

        ssl_certificate     ssl/oortcloudsmart.com.pem;
        ssl_certificate_key ssl/oortcloudsmart.com.key;
        if ($scheme = http) {
            rewrite ^(.*)$ https://$host$1 permanent;
        }
        ssl_session_timeout 5m;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2; #按照这个协议配置
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;#按照这个套件配置
        ssl_prefer_server_ciphers on;

        location / {
                proxy_pass http://127.0.0.1:3000;
                proxy_buffer_size 64k;
                proxy_buffers   32 32k;
                proxy_busy_buffers_size 128k;
                # 手机端重定向
                if ($http_user_agent ~* '(Android|webOS|iPhone|iPod|BlackBerry)') {
                        rewrite ^/ /mobile/ permanent;
                }
        }

        location /oort-news {
        proxy_pass http://183.62.103.20:32610/oort/oortcloud-cetcnewsservice;
        proxy_buffer_size 64k;
            proxy_buffers   32 32k;
            proxy_busy_buffers_size 128k;
        }
        location /oort/oortcloud-cetcnewsservice/ {
             proxy_pass http://183.62.103.20:32610/oort/oortcloud-cetcnewsservice/;
             proxy_buffer_size 64k;
             proxy_buffers   32 32k;
             proxy_busy_buffers_size 128k;
        }
        location ~ /oort/(oort-site)/ {
                    proxy_set_header X-OORT-Host $host;
                    rewrite /oort/oort-site/(.*) /oort/oort-site/oort/oort-site/$1 break;
                    proxy_pass http://183.62.103.20:31610;
                    proxy_buffer_size 64k;
                    proxy_buffers   32 32k;
                    proxy_busy_buffers_size 128k;
        }
        location ~ /(assets|news|oort/oortwj1)/ {
                    proxy_set_header X-OORT-Host $host;
                    rewrite /news/(\d+) /oort/oortcloud-cetcnewsservice/oortnews/listindex/$1 break;
                    rewrite /assets/(.*) /oort/oortcloud-cetcnewsservice/oortnews/assets/$1 break;
                    proxy_pass http://183.62.103.20:32610;
                    proxy_buffer_size 64k;
                    proxy_buffers   32 32k;
                    proxy_busy_buffers_size 128k;
        }
        ## 用户协议和服务政策的静态页面
        location ~ ^/(privacypolicy|servceAgreement).*\.html$ {
                root /data/sftp/mysftp/company/;
        }
        # 官网手机端
        location /mobile/ {
                alias /data/sftp/mysftp/company/mobile/;
        }
    }

```

