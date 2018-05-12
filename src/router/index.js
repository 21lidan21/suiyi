import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home'

import {AlertPlugin,ToastPlugin } from 'vux'
//import User from '../pages/action/action'


//import Navbar from '../pages/Navbar'
import NotFound from '../pages/NotFound'

Vue.use(Router)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect:"/home"
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
      component: resolve => require(['../pages/lovecity/index'], resolve)
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
			path: '/my/getOrderList',
			meta: {
        title: '我的订单',
        requireAuth: false
      },
      component: resolve => require(['../pages/usercenter/GetOrderLis'], resolve)
    },
    {
      path: '/my/getOrderDetails',
      meta: {
        title: '订单详情',
        requireAuth: false
      },
    component: resolve => require(['../pages/usercenter/GetOrderDetails'], resolve)
    },
		{	path: '/userset',
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
			path: '/dda/schoolDetail',
			meta: {
        title: '领取点',
        requireAuth: false
      },
      component: resolve => require(['../pages/diandianai/SchoolDetail'], resolve)
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
      //公益事业
      {
        path: '/home/undertakings',
        component: resolve => require(['../pages/home/Undertakings'], resolve)
      },
        //公益事业详情
    {
      path: '/home/undertakingsContent',
      component: resolve => require(['../pages/home/UndertakingsContent'], resolve)
    },
    {
      path: '/home/undertakingsContent1',
      component: resolve => require(['../pages/home/UndertakingsContent1'], resolve)
    },
    {
      path: '/home/undertakingsContent2',
      component: resolve => require(['../pages/home/UndertakingsContent2'], resolve)
    },
    {
      path: '/home/undertakingsContent3',
      component: resolve => require(['../pages/home/UndertakingsContent3'], resolve)
    },
    {
      path: '/home/helpService',
      component: resolve => require(['../pages/home/helpService'], resolve)
    },
    {
      path: '/home/hopeHelpService',
      component: resolve => require(['../pages/home/hopeHelpService'], resolve)
    },
    {
      path: '/home/iGoJoin',
      component: resolve => require(['../pages/home/iGoJoin'], resolve)
    },
    {
      path: '/home/lovechiose',
      component: resolve => require(['../pages/home/lovechiose'], resolve)
    },
    {
      path: '/home/loveTransmission',
      component: resolve => require(['../pages/home/loveTransmission'], resolve)
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})
