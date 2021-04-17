/*
 * @Author: gm.chen
 * @Date: 2021-04-17 15:31:24
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-17 16:08:16
 * @Description: file content
 * @FilePath: /vue-demo/service/api/config/mongodb/index.js
 */

const config = {
  host: 'localhost',
  port: 27017,
  user: 'express',
  password: '12345678', // 密码不允许简单密码，故没有与mongodb一样
  database: 't_express'
}
const url = `mongodb://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`
module.exports = { url, ...config }
