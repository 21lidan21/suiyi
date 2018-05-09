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
      component: resolve => require(['../pages/usercenter/usercenter'], resolve)
    },
    {
			path: '/mall',
			meta: {
        title: '随益',
        requireAuth: false
      },
      component: resolve => require(['../pages/tree/index'], resolve)
    },
    {
			path: '/login',
			meta: {
        title: '验证码登录',
        requireAuth: false
      },
      component: resolve => require(['../pages/usercenter/login'], resolve)
    },
    {
			path: '/viplogin',
			meta: {
        title: '会员登录',
        requireAuth: false
      },
      component: resolve => require(['../pages/usercenter/viplogin'], resolve)
    },
    {
			path: '/regist',
			meta: {
        title: '验证码登录',
        requireAuth: false
      },
      component: resolve => require(['../pages/usercenter/regist'], resolve)
    },
    {
			path: '/userset',
			meta: {
        title: '个人设置',
        requireAuth: false
      },
      component: resolve => require(['../pages/usercenter/userset'], resolve)
    },
    {
			path: '/userinfo',
			meta: {
        title: '个人设置',
        requireAuth: false
      },
      component: resolve => require(['../pages/usercenter/userinfo'], resolve)
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
			path: '/dda/receive',
			meta: {
        title: '领取点',
        requireAuth: false
      },
      component: resolve => require(['../pages/diandianai/Receive'], resolve)
    },
    {
			path: '/dda/bmap',
			meta: {
        title: '地图',
        requireAuth: false
      },
      component: resolve => require(['../pages/diandianai/Bmap'], resolve)
    },
    {
      path: '/dda/index',
      component: resolve => require(['../pages/diandianai/Index'], resolve)
    },
    {
      path: '/dda/detail',
      component: resolve => require(['../pages/diandianai/Detail'], resolve)
    },
    {
      path: '/dda/join',
      component: resolve => require(['../pages/diandianai/Join'], resolve)
    },
    {
      path: '/dda/joincamp',
      component: resolve => require(['../pages/diandianai/JoinCamp'], resolve)
    },
    {
      path: '/dda/helpinfo',
      component: resolve => require(['../pages/diandianai/HelpInfo'], resolve)
    },
    //传微行动
    {
      path: '/action/actiondetail',
      component: resolve => require(['../pages/action/ActionDetail'], resolve)
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})
