/*
 * @Author: gm.chen
 * @Date: 2021-04-15 07:24:25
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-20 23:23:12
 * @Description: file content
 * @FilePath: /vue-demo/service/api/controller/mysql/browserMark.js
 */
'use strict'
var { sendJsonResponse, sendResponse } = require('../common')
var TModel = require('../../model/mysql/browserMark')
const date = require('silly-datetime')
module.exports.add = function(req, res) {
  const tmodel = {
    uuid: req.body.uuid,
    name: req.body.name,
    puuid: req.body.puuid,
    type: req.body.type,
    link: req.body.link,
    createTime: date.format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
    updateBy: 'init',
    updateTime: date.format(new Date(), 'YYYY-MM-DD HH:mm:ss')
  }
  TModel.insert(tmodel, function(err, data) {
    if (err) {
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
    puuid: req.body.puuid,
    type: req.body.type,
    link: req.body.link,
    updateBy: 'admin',
    updateTime: date.format(new Date(), 'YYYY-MM-DD HH:mm:ss')
  }
  TModel.update(condition, tmodel, function(err, data) {
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
  TModel.delete(tmodel, function(err, data) {
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
  TModel.select(tmodel, function(err, data) {
    if (err) {
      sendJsonResponse(res, 500, err)
      return
    }
    sendResponse(res, 200, data.length > 0 ? data[0] : {})
  })
}

module.exports.list = function(req, res) {
  const tmodel = {}
  TModel.select(tmodel, function(err, data) {
    if (err) {
      sendJsonResponse(res, 500, err)
      return
    }
    sendResponse(res, 200, data)
  })
}
