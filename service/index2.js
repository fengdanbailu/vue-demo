/*
 * @Author: gm.chen
 * @Date: 2021-04-12 06:49:38
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-12 06:52:16
 * @Description: file content
 * @FilePath: /vue-demo/service/index2.js
 */
var app = require('./app')
const PORT = 9090
app.listen(PORT, () => {
  console.log(`runing at port ${PORT}`)
})
