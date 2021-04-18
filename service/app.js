/*
 * @Author: gm.chen
 * @Date: 2021-04-12 06:30:21
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-18 22:01:17
 * @Description: file content
 * @FilePath: /vue-demo/service/app.js
 */

const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const serveStatic = require('serve-static')
const bodyParser = require('body-parser')
const httpError = require('http-errors')
const path = require('path')
const stylus = require('stylus')

var indexRouter = require('./routes/index')
var apiRouter = require('./api/routes')
require('./api/model')
var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
// app.set('trust proxy', 'loopback, 123.123.123.123') // specify a subnet and an address

app.use(logger('dev'))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(stylus.middleware(path.join(__dirname, 'public')))

// 静态文档服务器
app.use(serveStatic(path.join(__dirname, 'public')))
// 前端路由
app.use('/', indexRouter)
// 后端路由
app.use('/api', apiRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(httpError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
