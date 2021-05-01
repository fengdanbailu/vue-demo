/*
 * @Author: gm.chen
 * @Date: 2021-05-01 21:55:20
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-05-01 22:16:09
 * @Description: file content
 * @FilePath: /vue-demo/service_test/server.js
 */

/*
 * @Author: gm.chen
 * @Date: 2021-05-01 21:55:20
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-05-01 22:08:35
 * @Description: file content
 * @FilePath: /vue-demo/service_test/server.js
 */

/*
 * @Author: gm.chen
 * @Date: 2021-05-01 21:55:20
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-05-01 22:08:35
 * @Description: file content
 * @FilePath: /vue-demo/service_test/server.js
 */

const express = require('express')
const Schema = require('./schema')
const { graphqlHTTP } = require('express-graphql')

const app = express()
const port = 3000

app.use('/', graphqlHTTP({
  schema: Schema,
  graphiql: true
}))

const server = app.listen(port, function() {
  var addr = server.address()
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  console.log('Listening on ' + bind)
})
