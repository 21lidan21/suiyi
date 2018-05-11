<template>
   <div class="login_bg">
   	<x-header class="header" :left-options="{backText: ''}">注册</x-header>
   	<div class="main">
   	<div style="width: 20%;margin:.5rem auto;">
      <img src="../../assets/images/wp04.png" style="width:1.2rem; height: 1.2rem;" alt="">
    </div>
    <div class="register">
     <group title="">
      <x-input title="" placeholder="请输入手机号码" v-model="username" :max="13" is-type="china-mobile"></x-input>
      <x-input title="" placeholder="请输入验证码" class="weui-vcode" v-model="password">
        <x-button slot="right" type="primary" :class="{ 'class-a': ischeck, 'class-b': !ischeck}" :disabled="disabled" @click.native="sendCode" mini ><input style="" type="text" v-model="text"></x-button>
      </x-input>
       
      <x-input title="" type="password" placeholder="请输入设置登录密码" v-model="userpassword" :min="6"  @on-change="change"></x-input>
     <x-input title="" type="password" style="border-bottom: 1px solid #F2F2F2;margin-bottom: .5rem;" v-model="userpassword2"  placeholder="请再次输入确认登录密码" :equal-with="userpassword"></x-input>
    <group title="以下是选填信息">
      <x-input title="" name="name" v-model="name" placeholder="请输入姓名" is-type="china-name"></x-input>
     <popup-radio style="font-size:.28rem;color:#B1B1B1;border-bottom: 1px solid #F2F2F2;" title="请选择性别" :options="options1" v-model="option1"></popup-radio>
      <datetime :value.sync="value5" style="font-size:.28rem;color:#B1B1B1;border-bottom: 1px solid #F2F2F2;" placeholder="" :min-year=2000 :max-year=2016 format="YYYY-MM-DD" @on-change="change" title="请选择生日" year-row="{value}年" month-row="{value}月" day-row="{value}日"  confirm-text="完成" cancel-text="取消"></datetime>
     <x-input title="" name="cardID" placeholder="请输入随益会员卡" v-model="cardID"></x-input>
    </group>
    <x-button :gradients="['#2da7e0', '#77baf1']"  @click.native="regist" style="font-size: .3rem;padding:.1rem 0;"> 注册</x-button>
     </group>
     
    </div>
   </div>
   </div>
</template>
<script>
import { XInput, Group, XButton, Cell } from "vux";
import { PopupRadio, PopupPicker, Datetime } from "vux";
import api from "../../fetch/api";
import * as _ from "../../util/tool";

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
      time: 60,
     ischeck: true,
      disabled:false,
      text:'发送验证码',
      maskValue: "",
      iconType: "",
      username: "",
      password: "",
      codeKey: "",
      userpassword: "",
      userpassword2: "",
      date: "",
      value5: "",
      options1: ["男", "女"],
      option1: "男",
      sexValue: "",
      cardID: "",
      birthDay: "",
      name: ""
    };
  },
  methods: {
     timer: function () {
         console.log(this.time);
            if (this.time > 0) {
                this.time--;
                this.text = this.time + 's 后重获取重新获取验证码';
                setTimeout(this.timer, 1000);
            }else{
             this.disabled = false;
            }
        },  
    change(value) {
      this.birthDay = value;
      console.log("change", value);
    },
    sendCode() {
      if (!this.username) {
        this.toats("请填写手机号", "cancel", 3000);
        return;
      }
      this.timer();
      this.disabled = true;
      this.ischeck = false;
      let data = {
        phone: this.username,
        sendType: "3"
      };
      api.RegistVerifiCode(data)
        .then(res => {
          console.log(res);
          if (res) {
            console.log(res[0].key);
            this.codeKey = res[0].key;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    regist() {
      if (
        !this.username ||
        !this.password ||
        !this.userpassword ||
        !this.userpassword2
      ) {
        this.toats("请填写完整信息", "cancel", 3000);
        return;
      }
      if (this.option1 == "男") {
        this.sexValue = "0";
      } else {
        this.sexValue = "1";
      }
      let data = {
        phone: this.username,
        code: this.password,
        codeKey: this.codeKey,
        password: this.userpassword,
        cardID: this.cardID,
        birthDay: this.birthDay,
        openid: "8888",
        userName: this.name,
        sex: this.sexValue
      };
      api.Regist(data)
        .then(res => {
          console.log(res);
          if (res) {
            // let userInfo = Object.assign()sessionId
            this.$store.dispatch("setLoadingState", false);
            //this.setUserInfo(res.data)
            sessionStorage.sessionId = res.sessionId;
            this.$router.replace("/home");
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    toats(msg, text, time) {
      this.$vux.toast.show({
        text: msg,
        time: time,
        type: text,
        width: "5rem"
      });
    }
  }
};
</script>
<style scoped >
.login_bg {
  width: 100%;
  height: 100%;
  padding-bottom: 2rem;
}
.class-a {
  background: #F8B62C;
  color:#ffffff;
}
.class-b {
  background: #928c8c;
}
.main {
  padding-top: 0.5rem;
  width: 100%;
  height: 100%;
  background: url(../../assets/images/login_bg.jpeg);
  background-size: 100% 100%;
}
.register {
  padding: 0 0.3rem;
  border-radius: 0.2rem;
}
.header {
  background: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(225, 225, 225, 0.5);
}
</style>
<style>
::-webkit-scrollbar {
  display: none;
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

