/*
 * @Author: gm.chen
 * @Date: 2021-04-15 07:30:50
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-20 07:14:44
 * @Description: file content
 * @FilePath: /vue-demo/service/api/model/mysql.js
 */
const mysql = require('mysql')
const MYSQL_CONFIG = require('../config/mysql')
const pool = mysql.createPool(MYSQL_CONFIG)

function query(sql, callback) {
  pool.getConnection(function(_err, connection) {
    connection.query(sql, function(err, rows) {
      callback(err, rows)
      // 释放链接
      connection.release()
    })
  })
}

function queryArgs(sql, args, callback) {
  pool.getConnection(function(_err, connection) {
    connection.query(sql, args, function(err, rows) {
      callback(err, rows)
      // 释放链接
      connection.release()
    })
  })
}

module.exports = { query, queryArgs }
