## 官网

部署到阿里云

使用PM2 来管理 


### 启动 pm2 start server/node.js

• m2 list ：查看进程
• pm2 start index.js ：启动某个node服务
• pm2 restart dev-server --name newname 带名称启动服务
• pm2 stop/reload/restart/delete all ：停止/重载/重启/删除 所有进程
• pm2 stop/reload/restart/delete 0 ：停止/重载/重启/删除 pm2进程列表中进程为0的进程
• pm2 logs [--raw] ：显示所有进程的日志
• pm2 flush ：清空所有日志文件
• pm2 reloadLogs ：重载所有日志


### 文件改动时候重启 

pm2 start xxx --watch

### 内存超过200M 重启

pm2 start xxx --max-memory-restart 200M
