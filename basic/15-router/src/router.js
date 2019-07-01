import Vue from 'vue'
import VueRouter from 'vue-router'

import Movies from './views/Movies'
import Tv from './views/Tv'
import Detail from './views/Detail'
import Page404 from './views/Page404'
import SideBar from './views/SideBar'

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    redirect: '/movie'
  },
  {
    path: '/movie',
    name: 'moive',
    component: Movies
  },
  {
    path: '/television',
    alias: '/tv',
    name: 'tv',
    component: Tv,
    redirect: '/tv/0',
    // components: {
    //   default: Tv,
    //   sidebar: SideBar
    // },
    // props: {
    //   default: true,
    //   sidebar: false
    // },
    children: [
      {
        name: 'detail',
        path: ':id',
        components: {
          default: Detail,
          sidebar: SideBar
        },
        props: {
          default: (route) => ({
            id: route.params.id,
            abc: 'abc'
          }),
          sidebar: true
        }
      }
    ]
  },

  {
    path: '*',
    component: Page404
  }
  
]

let router = new VueRouter({
  mode: 'history',
  routes
})

export default router