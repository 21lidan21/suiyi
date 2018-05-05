import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home'

//import User from '../pages/action/action'


//import Navbar from '../pages/Navbar'
import NotFound from '../pages/NotFound'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      meta: {
        title: '随益',
        requireAuth: false
      },
      component: resolve => require(['../pages/Home'], resolve)
    },
    {
      path: '/home',
      meta: {
        title: '随益',
        requireAuth: false
      },
      component: resolve => require(['../pages/Home'], resolve)
    },
    {
      path: '/action',
      meta: {
        title: '传微行动',
        requireAuth: false
      },
      component: resolve => require(['../pages/action/action'], resolve)
    },
  
    {
			path: '/user',
			meta: {
        title: '随益',
        requireAuth: false
      },
      component: resolve => require(['../pages/Home'], resolve)
    },
    {
			path: '/mall',
			meta: {
        title: '随益',
        requireAuth: false
      },
      component: resolve => require(['../pages/tree/index'], resolve)
    },
    // {
		// 	path: '/user/login',
		// 	component: Login
		// },
		
    // {
		// 	path: '/user/navbar',
		// 	component: Navbar
		// },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})
