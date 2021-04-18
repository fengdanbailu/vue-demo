/*
 * @Author: gm.chen
 * @Date: 2021-04-15 07:32:20
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-18 14:41:03
 * @Description: file content
 * @FilePath: /vue-demo/service/api/routes/v1/bookMark.js
 */

'use strict'
var controller = require('../../controller/mongodb').bookMark
var router = require('express').Router()
// 最终的路由模块
router.post('/add', controller.add)
router.put('/update', controller.update)
router.delete('/delete', controller.delete)
router.get('/detail', controller.detail)
router.post('/list', controller.list)
module.exports = router
