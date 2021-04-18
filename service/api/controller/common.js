/*
 * @Author: gm.chen
 * @Date: 2021-04-15 07:23:32
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-18 14:16:10
 * @Description: file content
 * @FilePath: /vue-demo/service/api/controller/common.js
 */

'use strict'
require('../model/index.js')
var common = {
  sendJsonResponse: function(res, status, json) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
    res.status(status)
    return res.json(json)
  },
  sendResponse: function(res, status, msg) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
    res.status(status)
    return res.send(msg)
  }
}
module.exports = common
