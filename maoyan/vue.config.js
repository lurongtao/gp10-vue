const path = require('path')

function resolve(url) {
  return path.resolve(__dirname, url)
}

module.exports = {
  devServer: {
    proxy: {
      '/ajax': {
        target: 'http://m.maoyan.com',
        changeOrigin: true
      }
    }
  },

  chainWebpack(config) {
    config.resolve.alias
      .set('utils', resolve('./src/utils'))
  }
}