/*
 * @Author: gm.chen
 * @Date: 2021-04-15 07:32:20
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-17 17:06:26
 * @Description: file content
 * @FilePath: /vue-demo/service/api/routes/public/login.js
 */

'use strict'
var controller = require('../../controller/public/login')
module.exports = [
    {"url":"/login","controller":controller.login}
]
