const Proxy = require('http-proxy-middleware')

const apiProxy = Proxy({target: 'http://m.maoyan.com', changeOrigin: true})

module.exports = apiProxy