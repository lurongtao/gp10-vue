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

  publicPath: process.env.NODE_ENV === 'production'
    ? 'http://www.maoyan-gp11.com/dist'
    : '/',

  chainWebpack(config) {
    config.resolve.alias
      .set('utils', resolve('./src/utils'))
      .set('vue$', 'vue/dist/vue.common.js')
  }
}