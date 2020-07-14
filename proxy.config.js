/*
 * @Author: gm.chen
 * @Date: 2020-06-24 20:35:42
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-07-13 22:11:35
 * @Description: file content
 * @FilePath: /vue-demo/proxy.config.js
 */

const proxyTest = 'https://127.0.0.1:80'

function onProxyReq(proxyReq, req, res) {
  console.log('原路径：' + req.originalUrl, '代理路径：' + req.path)
}

const commonProps = {
  target: proxyTest,
  changeOrigin: true,
  onProxyReq
}

module.exports = {
  '/mock': commonProps
}

