/*
 * @Author: gm.chen
 * @Date: 2021-04-11 23:38:53
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-12 06:06:14
 * @Description: file content
 * @FilePath: /vue-demo/build/proxy.js
 */
const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const config = {
  port: 8081,
  proxy: {
    // '/api/user':{
    //     target:"127.0.0.1:8091",
    //     changeOrigin:true,
    // },
    // '/api/demo':{
    //     target:"127.0.0.1:8090",
    //     changeOrigin:true,
    // },
    '/': {
      target: '127.0.0.1:8089',
      changeOrigin: true
    }

  }
}

const app = express()
for (const key in config.proxy) {
  app.use(key, createProxyMiddleware(config.proxy[key]))
}
app.listen(config.port)

