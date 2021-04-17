/*
 * @Author: gm.chen
 * @Date: 2021-04-15 07:30:50
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-17 17:24:12
 * @Description: file content
 * @FilePath: /vue-demo/service/api/model/common.js
 */
var mongoose = require('mongoose')
var MONGODB_URL = require('../config/mongodb').url
var readline = require('readline')

if (process.platform === 'win32') {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.on('SIGINT', function() {
    process.emit('SIGINT')
  })
}

// use mongo --version, if version >= 3.1.0, add new { useNewUrlParser: true } params with connect
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)
mongoose.connect(MONGODB_URL)

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + MONGODB_URL)
})

mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err)
})

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected.')
})

var gracefulShutdown = function(msg, callback) {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through ' + msg)
    callback()
  })
}

process.once('SIGUSR2', function() {
  gracefulShutdown('nodemon restart', function() {
    process.kill(process.pid, 'SIGUSR2')
  })
})

process.on('SIGINT', function() {
  gracefulShutdown('app termination', function() {
    process.exit(0)
  })
})

process.on('SIGTERM', function() {
  gracefulShutdown('CMS shutdown', function() {
    process.exit(0)
  })
})

