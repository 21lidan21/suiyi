<template>
   <div class="login_bg">
     <group title="">
      <x-input title="手机号码" placeholder="请输入手机号码" v-model="username" :max="13" is-type="china-mobile"></x-input>
      <x-input title="密码" type="password" placeholder="请输入密码" class="weui-vcode" v-model="password">
       
      </x-input>
       <x-button :gradients="['#2da7e0', '#77baf1']"  @click.native="login" > 登录</x-button>
     
     </group>
     <a @click="$router.push('/usercenter')">会员登录</a>|<a @click="$router.push('/regist')">注册</a>
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
        password: ''
        
    };
  },
  methods: {
     
	login(){
       
        if (!this.username || !this.password) {
                _.alert('请填写完整')
                return
            }
        
  
            let data = {
                "phone": this.username,
                "pwd": this.password,
                "openID":' '
            }
            this.$store.dispatch('setLoadingState', true)
            api.vipLogin(data)
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
     background: url(../../assets/images/login_bg.jpeg) no-repeat ;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
}


</style>
