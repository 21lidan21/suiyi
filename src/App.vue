<template>
    <div id="app">
        <!-- <v-toast v-show="showToast"></v-toast>
        <v-alert v-show="showAlert"></v-alert>
        <v-loading v-show="loading"></v-loading> -->
<div class="content">
    <router-view></router-view>
</div>
 <v-tabar></v-tabar>
        <!-- <div class="content" :class="{tabar: tabar}">
            <transition name="slide-left">
                <router-view></router-view>
            </transition>  
        </div>
        <v-tabar></v-tabar> -->
        
  </div>
</template>

<script>
import tabar from '@/components/tabar'
//import header from '@/components/header'
//import sidebar from '@/components/sidebar'
import toast from '@/components/toast'
import alert from '@/components/alert'
import loading from '@/components/loading'
import { ViewBox } from 'vux'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
		'v-tabar': tabar,
    //'v-header': header,
    //'v-sidebar': sidebar,
		// 'v-toast': toast,
		// 'v-alert': alert,
    // 'v-loading': loading,
    ViewBox
	},
  data () {
    return {
      
    }
  },
  watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'hideMenuSlide'
  },
  methods: {
      ...mapActions({ setNavState: 'setNavState' }),
      // 隐藏MenuSlide
      hideMenuSlide() {
        this.setNavState(false)
      }
  },
  computed: {
      // ...mapGetters([
      //     'loading',
      //     'showToast',
      //     'showAlert'
      // ]),
      title () {
        switch (this.$route.path.split('/')[1]) {
            case '':
              return "随益"
            case 'home':
              return "随益"
            case 'action':
              return "传微行动"
            case 'mall':
              return "爱心商城"
            case 'user':
              return "我的"
        }
      },
      tabar () {
        return this.$route.path.split('/').length > 2 ? false : true
      },
      menuDisplay () {
        if (this.$route.path.split('/')[1] == 'home') {
          return false
        }
        return this.$route.path.split('/').length > 2 ? false : true
      },
      backDisplay () {
        return this.$route.path.split('/').length > 2 ? true : false
      },
      mapDisplay () {
        if (this.$route.path.split('/')[1] == 'home') {
          return true
        }
        return false
      }
  }
}
</script>

<style lang="scss">
//@import './assets/css/function';

@import './style/app';



@font-face {
  font-family: 'icon';  /* project id 172436 */
  src: url('//at.alicdn.com/t/font_w71lovnj7adobt9.eot');
  src: url('//at.alicdn.com/t/font_w71lovnj7adobt9.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_w71lovnj7adobt9.woff') format('woff'),
  url('//at.alicdn.com/t/font_w71lovnj7adobt9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_w71lovnj7adobt9.svg#iconfont') format('svg');
}
.icon {
    font-family:"icon" !important;
    font-size:18px;
    font-style:normal;
    color: #ffffff;
}
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto !important;
}


a.active {
  text-decoration: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-y: auto !important;
  -webkit-overflow-scrolling:touch !important;
  height:100% !important;
  //background: #F5F5F5;
  .content{
     overflow-y: auto !important;
    -webkit-overflow-scrolling:touch !important;
    height:100% !important;
  }
  .tabar {
    margin-bottom: px2rem(120px);
  }
  //渐变动效
  .slide-left-enter-active,
  .slide-left-leave-active {
    transition: all .1s ease-in;
    opacity: 1;
  }
  .slide-left-enter,
  .slide-left-leave-active {
    opacity: 0;
  }

  //左滑动效
  // .slide-left-enter-active {
  //   animation: slideLeft .3s;
  // }
}
input,input:focus,input:active{user-select: text;} 
@keyframes slideLeft {
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}
</style>
