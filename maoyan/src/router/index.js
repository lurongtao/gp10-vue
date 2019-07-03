import Vue from 'vue'
import VueRouter from 'vue-router'

import Movies from '../pages/movies/Movies'
import Theater from '../pages/theaters/Theater'
import Profile from '../pages/profile/Profile'

import Intheater from '../pages/movies/Intheaters'
import Comingsoon from '../pages/movies/Comingsoon'

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    redirect: '/movies'
  },
  {
    path: '/movies',
    name: 'movies',
    component: Movies,
    redirect: '/movies/intheater',
    children: [
      {
        path: 'intheater',
        name: 'intheater',
        component: Intheater,
        meta: 1,
      },
      {
        path: 'comingsoon',
        name: 'comingsoon',
        component: Comingsoon,
        meta: 2
      }
    ]
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