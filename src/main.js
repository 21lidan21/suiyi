// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './vuex/store'
import * as filters from './util/filter'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

import { XHeader,XImg } from 'vux'
import { Loadmore,InfiniteScroll } from 'mint-ui'
import {AlertPlugin,ToastPlugin } from 'vux'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.component('x-img', XImg)
Vue.component('x-header', XHeader)
Vue.component(Loadmore.name, Loadmore);

Object.keys(filters).forEach(k => Vue.filter(k, filters[k])) //注册过滤器
Vue.use(ElementUI, { locale })
Vue.use(InfiniteScroll)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
