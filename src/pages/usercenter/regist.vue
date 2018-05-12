<template>
   <div class="login_bg" style="padding-bottom: 3rem;" @click="resetResize">
   	<x-header class="header" :left-options="{backText: ''}" >注册</x-header>
   	<div class="main">
   	<div style="width: 20%;margin:.5rem auto;">
      <img src="../../assets/images/wp04.png" style="width:1.2rem; height: 1.2rem;" alt="">
    </div>
    <div class="register">
     <group title="">
      <x-input title="" style="line-height: .6rem;" placeholder="请输入手机号码" v-model="username" :max="13" is-type="china-mobile"></x-input>
      <x-input title="" style="line-height: .6rem;" placeholder="请输入验证码" class="weui-vcode" v-model="password">
        <x-button slot="right" type="primary" :class="{ 'class-a': ischeck, 'class-b': !ischeck}" :disabled="disabled" @click.native="sendCode" mini ><input style="color:#ffffff;" type="text" v-model="text"></x-button>
      </x-input>
       
      <x-input title="" style="line-height: .6rem;" type="password" placeholder="请输入设置登录密码" v-model="userpassword" :min="6"></x-input>
     <x-input title=""  type="password" style="border-bottom: 1px solid #F2F2F2;line-height: .6rem;margin-bottom: .5rem;" v-model="userpassword2"  placeholder="请再次输入确认登录密码" :equal-with="userpassword"></x-input>
    <group title="以下是选填信息">
      <x-input style="line-height: .6rem;" title="" name="name" v-model="name" placeholder="请输入姓名" is-type="china-name"></x-input>
     <popup-radio style="font-size:.28rem;line-height: .6rem;color:#B1B1B1;border-bottom: 1px solid #F2F2F2;" title="请选择性别" :options="options1" v-model="option1"></popup-radio>
      <datetime :value.sync="value5" style="font-size:.28rem;line-height: .6rem;color:#B1B1B1;border-bottom: 1px solid #F2F2F2;" placeholder="" :min-year="1930" :max-year="2030" format="YYYY-MM-DD" @on-change="change" title="请选择生日" year-row="{value}年" month-row="{value}月" day-row="{value}日"  confirm-text="完成" cancel-text="取消"></datetime>
     <x-input style="line-height: .6rem;" title="" name="cardID" placeholder="请输入随益会员卡" v-model="cardID"></x-input>
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
import crypto from 'crypto'
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
      disabled: false,
      text: "发送验证码",
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
    resetResize(){
			var docEl = document.documentElement;
			    var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if (clientWidth >= 640) {
          docEl.style.fontSize = '100px';
        } else {
          docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
          var div = document.createElement('div');
          div.style.width = '1.4rem';
          div.style.height = '0';
          document.body.appendChild(div);
          var ideal = 140 * clientWidth / 750;
          var rmd = (div.clientWidth / ideal);
          if (rmd > 1.2 || rmd < 0.8) {
            docEl.style.fontSize = 100 * (clientWidth / 750) / rmd + 'px';
          }
          document.body.removeChild(div);
        };
		},
    timer: function() {
      if (this.time > 0) {
        this.time--;
        this.text = this.time + "s 再重试";
        setTimeout(this.timer, 1000);
      } else {
        this.time = 60;
        this.text = "发送验证码";
        this.disabled = false;
        this.ischeck = true;
      }
    },
    change(value) {
      this.birthDay = value;
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
          this.toats(error.data.desc, "cancel", 3000);
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
        password: this.getmd5(this.userpassword),
        cardID: this.cardID,
        birthDay: this.birthDay,
        openid:sessionStorage["suiyiOpenId"]|| "",//微信认证凭证码
        userName: this.name,
        sex: this.sexValue
      };
      api.Regist(data)
        .then(res => {
          console.log(res);
          if (res) {
              this.$vux.toast.hide();
            // let userInfo = Object.assign()sessionId
            this.$store.dispatch("setLoadingState", false);
            //this.setUserInfo(res.data)
            sessionStorage.sessionId = res.sessionId;
            this.$router.replace("/userinfo");
          }
        })
        .catch(error => {
          console.log(error);
          this.toats(error.data.desc, "cancel", 3000);
          setTimeout(() => {
            // 隐藏
            this.$vux.toast.hide();
            this.disabled = false;
            this.ischeck = true;
          }, 3000);
        });
    },
    toats(msg, text, time) {
      this.$vux.toast.show({
        text: msg,
        time: time,
        type: text,
        width: "5rem"
      });
    },
    getmd5(val){
        var a;
        var md5 = crypto.createHash("md5");
        md5.update(val);
        var a = md5.digest('hex');
        return a;
            //47bce5c74f589f4867dbd57e9ca9f808 
    }
  }
};
</script>
<style scoped >
.login_bg {
  width: 100%;
  height: 100%;
}
.class-a {
  background: #2da7e0;
  width: 50%;
}
.class-b {
  background: #f8b62c;
  width: 50%;
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
.weui-cells_radio{
	line-height: 1rem;
    background: #EEF8FF;
    color: #000;
    font-size: .3rem;
}
.weui-cell .weui-cell_radio .weui-check__label{
	padding-left: 43%;
}
</style>

