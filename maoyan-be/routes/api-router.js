var proxy = require('http-proxy-middleware')

var apiProxy = proxy({ target: 'http://m.maoyan.com', changeOrigin: true })

module.exports = apiProxy