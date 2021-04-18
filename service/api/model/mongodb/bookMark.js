/*
 * @Author: gm.chen
 * @Date: 2021-04-15 07:31:01
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-18 13:59:46
 * @Description: file content
 * @FilePath: /vue-demo/service/api/model/mongodb/bookMark.js
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const TSchema = new Schema({
  _id: false,
  uuid: {
    type: String,
    require: true
  },
  name: {
    type: String
  },
  puuid: {
    type: String,
    require: true
  },
  type: {
    type: String
  },
  link: {
    type: String
  },
  createTime: {
    type: Date,
    'default': Date.now
  },
  updateBy: String,
  updateTime: Date
})
var NAME = 'BookMark'
module.exports = mongoose.model(NAME, TSchema, NAME.toLowerCase())
