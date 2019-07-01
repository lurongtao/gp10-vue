import Vue from 'vue'
import VueRouter from 'vue-router'

import Movies from '../pages/movies/Movies'
import Theater from '../pages/theaters/Theater'
import Profile from '../pages/profile/Profile'

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    redirect: '/movies'
  },
  {
    path: '/movies',
    name: 'movies',
    component: Movies
  },
  {
    path: '/theaters',
    name: 'theaters',
    component: Theater
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
]

export default new VueRouter({
  routes
})