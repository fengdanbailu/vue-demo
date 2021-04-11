/*
 * @Author: gm.chen
 * @Date: 2021-04-12 06:30:21
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-12 06:34:11
 * @Description: file content
 * @FilePath: /vue-demo/service/routes/index.js
 */
var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

module.exports = router
