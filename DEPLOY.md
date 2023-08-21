## 官网

部署到阿里云

使用PM2 来管理 


### 启动 pm2 start server/node.js

• pm2 list ：查看进程
• pm2 start index.js ：启动某个node服务
• pm2 restart dev-server --name newname 带名称启动服务
• pm2 stop/reload/restart/delete all ：停止/重载/重启/删除 所有进程
• pm2 stop/reload/restart/delete 0 ：停止/重载/重启/删除 pm2进程列表中进程为0的进程
• pm2 logs [--raw] ：显示所有进程的日志
• pm2 flush ：清空所有日志文件
• pm2 reloadLogs ：重载所有日志
• pm2 delete ID  ：重载所有日志

### 文件改动时候重启 

pm2 start xxx --watch

### 内存超过200M 重启

pm2 start xxx --max-memory-restart 200M


### 阿里云 的文件目录 

/data/sftp/mysftp/lan/site

#### 部署步骤

1. 运行 yarn build ，编译到默认的文件夹 /.output

2. 运行前先测试下是否正常 （进入 /.output 文件夹执行 node server/index.mjs ,本地浏览器 访问 下 localhost:3000, 查看页面是否正常显示）

3. 将/.output的三个文件夹  全选 压缩成zip (注意：打包zip文件后的文件层级 问题， 这里window下 ./output文件夹下全选压缩的话，就可以直接在阿里云服务器直接解压就可以了)

4. 将压缩的文件上传到 阿里云服务器 的/data/sftp/mysftp/lan/site

在阿里云服务服务器
5. 解压文件夹 ， 保证site目录下 有三个文件 和 上面的 /.output的文件一致

6. 停止当前运行的node 服务， 使用pm2 工具
一般都是 0 
 - pm2 stop 0 
 - pm2 delete 0 
 - pm2 start server/index.mjs

7. 查看命令运行成功后，浏览器打开官网验证是否OK
