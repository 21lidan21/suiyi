<template>
   <div class="login_bg">
     <group title="">
      <x-input title="手机号码" placeholder="请输入手机号码" v-model="username" :max="13" is-type="china-mobile"></x-input>
      <x-input title="验证码" placeholder="请输入验证码" class="weui-vcode" v-model="password">
        <x-button slot="right" type="primary" @click.native="sendCode" mini>发送验证码</x-button>
      </x-input>
       <x-button :gradients="['#2da7e0', '#77baf1']"  @click.native="login" > 登录</x-button>
     
     </group>
     <a @click="$router.push('/viplogin')">会员登录</a>|<a @click="$router.push('/regist')">注册</a>
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
     background: url(../../assets/images/login_bg.jpeg) no-repeat ;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
}


</style>
