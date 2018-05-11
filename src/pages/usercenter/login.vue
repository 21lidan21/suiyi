<template>
   <div class="login_bg">
   	<x-header class="header" :left-options="{backText: ''}">验证码登录</x-header>
   <div class="main">
   	<div style="width: 20%;margin:.5rem auto;">
      <img src="../../assets/images/wp04.png" style="width:1.2rem; height: 1.2rem;" alt="">
    </div>
    <div class="register">
     <group title="">
      <x-input title="" placeholder="请输入手机号码" v-model="username" :max="13" is-type="china-mobile"></x-input>
      <x-input title="" placeholder="请输入验证码" class="weui-vcode" v-model="password">
        <x-button slot="right" type="primary" @click.native="sendCode" mini>发送验证码</x-button>
      </x-input>
       <x-button :gradients="['#2da7e0', '#77baf1']"  @click.native="login" style="font-size:.3rem; padding:.1rem 0;" > 登 录</x-button>
     
     </group>
     <div style="margin-top:.25rem;font-size:.25rem;">
     	<a @click="$router.push('/viplogin')">会员登录</a>&nbsp;&nbsp;|&nbsp;&nbsp;  <a @click="$router.push('/regist')">注册</a>
     </div>
     </div>
   </div>
   </div>
</template>
<script>
import { XInput, Group, XButton, Cell } from 'vux'
import api from '../../fetch/api'
import * as _ from '../../util/tool'

export default {
  components: {
    XInput, 
    Group, 
    XButton, 
    Cell
  },
  data() {
    return {
        maskValue:'',
        iconType: '',
        username: '',
        password: '',
        codeKey: ''
    };
  },
  methods: {
      sendCode(){
          if (!this.username ) {
                alert('请填写手机号')
                return
            }
       let data = {
                "phone": this.username,
                "sendType": "3"
            }
          api.RegistVerifiCode(data)
                .then(res => {
                    console.log(res)
                    if(res) {
                        // let userInfo = Object.assign()
                        // this.$store.dispatch('setLoadingState', false)
                        // this.setUserInfo(res.data)
                        // this.$router.replace('/home')
                       console.log(res[0].key) 
                       this.codeKey=res[0].key
                    }
                })
                .catch(error => {
                    console.log(error)
                })
      },
	login(){
       
        if (!this.username || !this.password) {
                _.alert('请填写完整')
                return
            }
           
            let data = {
                "phone": this.username,
                "code": this.password,
                "codeKey":this.codeKey
            }
            this.$store.dispatch('setLoadingState', true)
            api.Login(data)
                .then(res => {
                    console.log(res)
                    if(res) {
                        // let userInfo = Object.assign()sessionId
                        this.$store.dispatch('setLoadingState', false)
                        //this.setUserInfo(res.data)
                         sessionStorage.sessionId =res.sessionId
                        this.$router.replace('/userinfo')
                    }
                })
                .catch(error => {
                    console.log(error)
                })
    }	
	}
};
</script>
<style scoped >
.login_bg{
    width: 100%;
    height: 100%;
}
.main{
	padding-top:1.5rem;
	width: 100%;
	height: 100%;
	background: url(../../assets/images/login_bg.jpeg);
    background-size: 100% 100%;
}
.register{
	padding: 0 .3rem;
	border-radius: .2rem;
}
.header {
  background: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(225, 225, 225, 0.5);
  
}

</style>
<style>
::-webkit-scrollbar{
  display:none;
}
.inner-container::-webkit-scrollbar {
    display: none;
}
.vux-header-title-area,
.vux-header .vux-header-title {
  color: #2da7e0 !important;
  font-size: 16px;
}
.vux-tab .vux-tab-item {
    background: #fff !important;
}
.vux-header .vux-header-left .left-arrow:before {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  border: 1px solid #2da7e0;
  border-width: 1px 0 0 1px;
  transform: rotate(315deg);
  top: 8px;
  left: 7px;
}
</style>
