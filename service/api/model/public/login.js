/*
 * @Author: gm.chen
 * @Date: 2021-04-15 07:31:01
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-17 17:17:09
 * @Description: file content
 * @FilePath: /vue-demo/service/api/model/public/login.js
 */

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var loginSchema = new Schema({
  userName: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  createTime: {
    type: Date,
    'default': Date.now
  },
  updateBy: String,
  updateTime: Date
})

module.exports = mongoose.model('Login', loginSchema, 'login')
