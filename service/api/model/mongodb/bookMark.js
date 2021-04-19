/*
 * @Author: gm.chen
 * @Date: 2021-04-15 07:31:01
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-19 23:18:07
 * @Description: file content
 * @FilePath: /vue-demo/service/api/model/mongodb/bookMark.js
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const TSchema = new Schema({
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
  updateTime: {
    type: Date,
    'default': Date.now
  }
})
var NAME = 'BookMark'
module.exports = mongoose.model(NAME, TSchema, NAME.toLowerCase())
