import Vue from 'vue'
import App from './App.vue'

import router from './router/'

import './assets/styles/reset.styl'
import './assets/styles/movie-item.css'

import './filters/img-replace'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
