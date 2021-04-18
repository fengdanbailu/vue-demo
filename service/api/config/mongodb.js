/*
 * @Author: gm.chen
 * @Date: 2021-04-18 10:53:59
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-18 10:54:09
 * @Description: file content
 * @FilePath: /vue-demo/service/api/config/mongodb.js
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
