/*
 * @Author: gm.chen
 * @Date: 2021-04-12 05:57:58
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-12 06:20:14
 * @Description: file content
 * @FilePath: /vue-demo/service/index.js
 */
const express = require('express')
const chalk = require('chalk')
const app = express()
const router = express.Router()

app.use(async(req, res, next) => {
  console.log('I am the first middleware')
  next()
  console.log('first middleware end calling')
})
app.use((req, res, next) => {
  console.log('I am the second middleware')
  next()
  console.log('second middleware end calling')
})

router.get('/api/test1', async(req, res, next) => {
  console.log('I am the router middleware => /api/test1')
  res.status(200).send('hello')
})

router.get('/api/testerror', (req, res, next) => {
  console.log('I am the router middleware => /api/testerror')
  throw new Error('I am error.')
})

app.use('/', router)

app.use(async(err, req, res, next) => {
  if (err) {
    console.log('last middleware catch error', err)
    res.status(500).send('server Error')
    return
  }
  console.log('I am the last middleware')
  next()
  console.log('last middleware end calling')
})

const PORT = 8089
app.listen(PORT, () => {
  console.log(chalk.green(`server listening at port ${PORT}`))
})

