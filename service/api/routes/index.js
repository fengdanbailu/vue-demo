/*
 * @Author: gm.chen
 * @Date: 2021-04-17 16:58:51
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-17 19:14:25
 * @Description: file content
 * @FilePath: /vue-demo/service/api/routes/index.js
 */
'use strict'
var express = require('express')
const login = require('./public/login')
var router = express.Router()
const addRouterGroup = (groupURL, configList) => {
  configList.forEach(config => {
    router.get(groupURL + config.url, config.controller)
  })
}
addRouterGroup('/login', login)
module.exports = router

