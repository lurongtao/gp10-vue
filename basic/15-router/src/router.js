import Vue from 'vue'
import VueRouter from 'vue-router'

import Movies from './views/Movies'
import Tv from './views/Tv'

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    component: Movies
  },
  {
    path: '/tv',
    component: Tv
  }
]

let router = new VueRouter({
  routes
})

export default router