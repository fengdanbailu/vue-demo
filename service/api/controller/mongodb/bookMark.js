/*
 * @Author: gm.chen
 * @Date: 2021-04-15 07:24:25
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-18 13:09:35
 * @Description: file content
 * @FilePath: /vue-demo/service/api/controller/mongodb/bookMark.js
 */
'use strict'

var mongoose = require('mongoose')
var { sendJsonResponse, sendResponse } = require('../common')
var TModel = mongoose.model('BookMark')
module.exports.add = function(req, res) {
  const tmodel = {
    uuid: req.uuid,
    name: req.name,
    puuid: req.puuid,
    type: req.type,
    link: req.link,
    updateBy: req.updateBy,
    updateTime: req.updateTime
  }
  TModel.create(tmodel, function(err, data) {
    if (err) {
      sendJsonResponse(res, 500, err)
      return
    }
    sendResponse(res, 200, data)
  })
}

module.exports.update = function(req, res) {
  const tmodel = {
    uuid: req.uuid,
    name: req.name,
    puuid: req.puuid,
    type: req.type,
    link: req.link,
    updateBy: req.updateBy,
    updateTime: req.updateTime
  }
  TModel.findOneAndUpdate(tmodel, function(err, data) {
    if (err) {
      sendJsonResponse(res, 500, err)
      return
    }
    sendResponse(res, 200, data)
  })
}

module.exports.delete = function(req, res) {
  const tmodel = {
    uuid: req.uuid
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
    uuid: req.uuid
  }
  TModel.find(tmodel, function(err, data) {
    if (err) {
      sendJsonResponse(res, 500, err)
      return
    }
    sendResponse(res, 200, data)
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
