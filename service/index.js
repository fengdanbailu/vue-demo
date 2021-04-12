/*
 * @Author: gm.chen
 * @Date: 2021-04-12 06:49:38
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-12 22:41:48
 * @Description: file content
 * @FilePath: /vue-demo/service/index.js
 */
var app = require('./app')
const chalk = require('chalk')
const PORT = 8090
app.listen(PORT, () => {
  console.log(chalk.green(`server listening at port ${PORT}`))
})
