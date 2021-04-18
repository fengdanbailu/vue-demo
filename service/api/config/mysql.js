/*
 * @Author: gm.chen
 * @Date: 2021-04-18 10:54:18
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-18 10:54:28
 * @Description: file content
 * @FilePath: /vue-demo/service/api/config/mysql.js
 */
const config = {
  host: 'localhost',
  port: 3306,
  user: 'express',
  password: '1qaz@WSX', // 密码不允许简单密码，故没有与mongodb一样
  database: 't_express'
}
module.exports = { ...config }
