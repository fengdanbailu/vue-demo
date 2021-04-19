/*
 * @Author: gm.chen
 * @Date: 2021-04-15 07:24:25
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-19 23:04:57
 * @Description: file content
 * @FilePath: /vue-demo/service/api/controller/mongodb/user.js
 */
'use strict'

var mongoose = require('mongoose')
var { sendJsonResponse, sendResponse } = require('../common')
var TModel = mongoose.model('User')

module.exports.add = function(req, res) {
  const tmodel = {
    uuid: req.body.uuid,
    name: req.body.name,
    password: req.body.password,
    updateBy: 'init',
    updateTime: Date.now()
  }
  TModel.create(tmodel, function(err, data) {
    console.log(data)
    if (err) {
      console.log(err)
      sendJsonResponse(res, 500, err)
      return
    }
    sendResponse(res, 200, data)
  })
}

module.exports.update = function(req, res) {
  const condition = {
    uuid: req.body.uuid
  }
  const tmodel = {
    uuid: req.body.uuid,
    name: req.body.name,
    password: req.body.password,
    updateBy: 'admin',
    updateTime: Date.now()
  }
  TModel.updateOne(condition, tmodel, function(err, data) {
    if (err) {
      sendJsonResponse(res, 500, err)
      return
    }
    sendResponse(res, 200, data)
  })
}

module.exports.delete = function(req, res) {
  const tmodel = {
    uuid: req.query.uuid
  }
  TModel.remove(tmodel, function(err, data) {
    if (err) {
      sendJsonResponse(res, 500, err)
      return
    }
    sendResponse(res, 200, data)
  })
}

module.exports.detail = function(req, res) {
  const tmodel = {
    uuid: req.query.uuid
  }
  TModel.find(tmodel, function(err, data) {
    if (err) {
      sendJsonResponse(res, 500, err)
      return
    }
    sendResponse(res, 200, data.length > 0 ? data[0] : {})
  })
}

module.exports.list = function(req, res) {
  const tmodel = {}
  TModel.find(tmodel, function(err, data) {
    if (err) {
      sendJsonResponse(res, 500, err)
      return
    }
    sendResponse(res, 200, data)
  })
}
