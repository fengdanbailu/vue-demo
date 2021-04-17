/*
 * @Author: gm.chen
 * @Date: 2021-04-17 16:58:51
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-17 23:15:33
 * @Description: file content
 * @FilePath: /vue-demo/service/api/routes/index.js
 */
'use strict'
var express = require('express')
const login = require('./public/login')
var router = express.Router()
const addRouterGroup = (groupURL, middleWares, configList) => {
  const subRouter = express.Router(groupURL)
  middleWares.forEach(middleWare => {
    subRouter.use(middleWare)
  })
  configList.forEach(config => {
    router.get(groupURL + config.url, config.controller)
  })
  return subRouter
}
addRouterGroup('/login', [], login)
module.exports = router

