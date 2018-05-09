<template>
   <div class="login_bg">
     <group title="">
      <x-input title="手机号码" placeholder="请输入手机号码" v-model="username" :max="13" is-type="china-mobile"></x-input>
      <x-input title="验证码" placeholder="请输入验证码" class="weui-vcode" v-model="password">
        <x-button slot="right" type="primary" @click.native="sendCode" mini>发送验证码</x-button>
      </x-input>
       
      <x-input title="请输入密码" type="password" placeholder="" v-model="userpassword" :min="6"  @on-change="change"></x-input>
     <x-input title="请确认密码" type="password" v-model="userpassword2"  placeholder="" :equal-with="userpassword"></x-input>
    <group title="以下是选填">
      <x-input title="姓名" name="name" v-model="name" placeholder="请输入姓名" is-type="china-name"></x-input>
     <popup-radio title="请选择性别" :options="options1" v-model="option1"></popup-radio>
      <datetime :value.sync="value5" placeholder="请选择日期" :min-year=2000 :max-year=2016 format="YYYY-MM-DD" @on-change="change" title="请选择生日" year-row="{value}年" month-row="{value}月" day-row="{value}日"  confirm-text="完成" cancel-text="取消"></datetime>
     <x-input title="请输入随益会员卡" name="cardID" placeholder="请输入随益会员卡" v-model="cardID"></x-input>
    </group>
    <x-button :gradients="['#2da7e0', '#77baf1']"  @click.native="regist" > 注册</x-button>
     </group>
     <a @click="$router.push('/usercenter')">会员登录</a>|<a @click="$router.push('/regist')">注册</a>
   </div>
</template>
<script>
import { XInput, Group, XButton, Cell } from 'vux'
import { PopupRadio,PopupPicker, Datetime } from 'vux'
import api from '../../fetch/api'
import * as _ from '../../util/tool'

export default {
  components: {
    XInput, 
    Group, 
    XButton, 
    Cell,
    PopupRadio,
    PopupPicker,
    Datetime
  },
  data() {
    return {
        maskValue:'',
        iconType: '',
        username: '',
        password: '',
        codeKey: '',
        userpassword:'',
        userpassword2:'',
        date:'',
        value5:'',
        options1:['男','女'],
        option1:'男',
        cardID:'',
        birthDay:'',
        name:''

    };
  },
  methods: {
       change (value) {
           this.birthDay=value
        console.log('change', value)
       },
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
	regist(){
       
        if (!this.username || !this.password  || !this.userpassword|| !this.userpassword2) {
                _.alert('请填写完整')
                return
            }
         
            let data = {
                "phone": this.username,
                "code": this.password,
                "codeKey":this.codeKey,
                "password": this.userpassword,
                "cardID": this.cardID,
                "birthDay": this.birthDay,
                "openid": "8888",
                "userName":this.name,
                "sex":this.option1
            }
            this.$store.dispatch('setLoadingState', true)
            api.Regist(data)
                .then(res => {
                    console.log(res)
                    if(res) {
                        // let userInfo = Object.assign()sessionId
                        this.$store.dispatch('setLoadingState', false)
                        //this.setUserInfo(res.data)
                         sessionStorage.sessionId =res.sessionId
                        this.$router.replace('/home')
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
