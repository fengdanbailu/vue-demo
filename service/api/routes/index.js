/*
 * @Author: gm.chen
 * @Date: 2021-04-17 16:58:51
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-20 22:17:27
 * @Description: file content
 * @FilePath: /vue-demo/service/api/routes/index.js
 */
'use strict'
const router = require('express').Router()
const user = require('./v1/user')
const bookMark = require('./v1/bookMark')
const browserMark = require('./v1/browserMark')

router.use('/user', user)
router.use('/bookMark', bookMark)
router.use('/browserMark', browserMark)
module.exports = router

