
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
  '/mock': commonProps,
}

