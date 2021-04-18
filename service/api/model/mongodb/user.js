/*
 * @Author: gm.chen
 * @Date: 2021-04-15 07:31:01
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-18 14:11:01
 * @Description: file content
 * @FilePath: /vue-demo/service/api/model/mongodb/user.js
 */

var mongoose = require('mongoose')
var Schema = mongoose.Schema

const userSchema = new Schema({
  _id: false,
  uuid: {
    type: String,
    require: true
  },
  name: {
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
const NAME = 'User'
module.exports = mongoose.model(NAME, userSchema, NAME.toLowerCase())
