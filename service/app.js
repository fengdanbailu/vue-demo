/*
 * @Author: gm.chen
 * @Date: 2021-04-12 06:30:21
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-17 19:23:16
 * @Description: file content
 * @FilePath: /vue-demo/service/app.js
 */

const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const createError = require('http-errors')
const path = require('path')
const stylus = require('stylus')

var indexRouter = require('./routes/index')
var apiRouter = require('./api/routes')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(stylus.middleware(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')))
// 前端路由
app.use('/', indexRouter)
// 后端路由
app.use('/api', apiRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
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
