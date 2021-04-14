# 生成项目目录
express service
根据eslint去掉异常提示，比如app.js；
更新package.json的启动的默认端口号，再外层的package再写一个调用


# 启动服务
根目录启动命令 yarn service
当前目录启动命令 yarn start

检查是否存在 mysql --version
启动mysql brew services restart mysql@5.7
连接mysql mycli  -h localhost -u root (Guoming@#004)
登陆数据库 mycli mysql://root@localhost:3306/t_express


检查是否存在 mongod --version

启动mongodb  brew services restart mongodb-community
进入命令 mongo
创建账号 db.createUser({user:"express",pwd:"12345678",roles:[{role:"userAdminAnyDatabase",db:"admin"}]})
验证账号 db.auth('express','12345678')
为了增加安全性，修改/usr/local/etc/mongod.conf，如下打开安全认证
```
security:
  authorization: enabled
```
启动命令 mongod --auth --port 27017
进入命令 mongo  -u express -p 12345678

