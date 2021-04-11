/*
 * @Author: gm.chen
 * @Date: 2021-04-12 06:30:21
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-12 07:03:49
 * @Description: file content
 * @FilePath: /vue-demo/service/routes/users.js
 */
var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
})

module.exports = router
