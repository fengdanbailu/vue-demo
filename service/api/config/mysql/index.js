/*
 * @Author: gm.chen
 * @Date: 2021-04-17 15:31:51
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-17 16:08:46
 * @Description: file content
 * @FilePath: /vue-demo/service/api/config/mysql/index.js
 */
const config = {
  host: 'localhost',
  port: 3306,
  user: 'express',
  password: '1qaz@WSX', // 密码不允许简单密码，故没有与mongodb一样
  database: 't_express'
}
module.exports = { ...config }
