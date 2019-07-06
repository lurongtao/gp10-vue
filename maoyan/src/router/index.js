import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../pages/Index'

import Movies from '../pages/movies/Movies'
import Theater from '../pages/theaters/Theater'
import Profile from '../pages/profile/Profile'

import Intheater from '../pages/movies/Intheaters'
import Comingsoon from '../pages/movies/Comingsoon'

import Detail from '../pages/detail/Detail'
import City from '../pages/city/City'

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    redirect: '/movies',
    component: Index,
    children: [
      {
        path: '/movies',
        name: 'movies',
        component: () => import('../pages/movies/Movies'),
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
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  },
  {
    path: '/city',
    name: 'city',
    component: City
  }
]

export default new VueRouter({
  routes
})