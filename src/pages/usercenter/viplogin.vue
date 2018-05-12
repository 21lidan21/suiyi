<template>
   <div class="login_bg"  >
   	<x-header class="header" :left-options="{backText: '',preventGoBack:true}" @on-click-back="resetResize">登录</x-header>
   	<div class="main">
   	<div style="width: 20%;margin:.5rem auto;">
      <img src="../../assets/images/wp04.png" style="width:1.2rem; height: 1.2rem;" alt="">
    </div>
    <div class="register">
     <group title="">
      <x-input title="" placeholder="请输入手机号码" v-model="username" :max="13" is-type="china-mobile"></x-input>
      <x-input title="" placeholder="请输入密码" type="password" class="weui-vcode" v-model="password">
      </x-input>
     </group>
       <x-button  :class="{ 'class-a': ischeck, 'class-b': !ischeck}" :disabled="disabled"  @click.native="login" style="font-size:.3rem;padding:.1rem 0;color:#ffffff;margin-top:.5rem" > 登 录</x-button>
     <div @click="$router.push('/regist')" style="margin-top:.45rem;font-size:.35rem;text-align:center">
     	注册
     </div>
     </div>
   </div>
   </div>
</template>
<script>
import { XInput, Group, XButton, Cell } from "vux";
import crypto from "crypto";
import api from "../../fetch/api";
import * as _ from "../../util/tool";

export default {
  components: {
    XInput,
    Group,
    XButton,
    Cell
  },
  data() {
    return {
      maskValue: "",
      iconType: "",
      username: "",
      password: "",
      disabled: false,
      ischeck: true
    };
  },
  created(){
   this.getUserInfo();
  },
  methods: {
    resetResize() {
      setTimeout(()=>{
      var docEl = document.documentElement;
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth >= 640) {
        docEl.style.fontSize = "100px";
      } else {
        docEl.style.fontSize = 100 * (clientWidth / 750) + "px";
        var div = document.createElement("div");
        div.style.width = "1.4rem";
        div.style.height = "0";
        document.body.appendChild(div);
        var ideal = 140 * clientWidth / 750;
        var rmd = div.clientWidth / ideal;
        if (rmd > 1.2 || rmd < 0.8) {
          docEl.style.fontSize = 100 * (clientWidth / 750) / rmd + "px";
        }
        document.body.removeChild(div);
      }
       this.$router.push("/user")
      },400)
    },
    getUserInfo(){     
            api.GetUserInfoByID()
                .then(res => {
                    console.log(res)
                    if(res) {
                       sessionStorage['name'] = res[0].name;
                      //  this.name=res[0].name;
                       sessionStorage['levelName'] = res[0].levelName;
                      //  this.levelName=res[0].levelName
                       sessionStorage['point'] = res[0].point;
                      //  this.point=res[0].point
                       sessionStorage['doNum'] = res[0].doNum;
                      //  this.doNum=res[0].doNum
                       sessionStorage['showPrice'] = res[0].showPrice;
                      //  this.showPrice=res[0].showPrice
                       sessionStorage['headImgUrl'] = res[0].headImgUrl;
                      //  this.imgurl=res[0].headImgUrl
                       this.$router.replace('/userinfo');
                    }
                })
                .catch(error => {
                   // this.$router.replace('/user')
                })
       },
    login() {
      if (!this.username || !this.password) {
        this.toats("请输入账号密码", "cancel", 3000);
        return;
      }

      this.toats("正在登录，请稍后...", "text", 10000);
      this.disabled = true;
      this.ischeck = false;
      let data = {
        phone: this.username,
        pwd:  this.getmd5(this.password),
      };
      console.log(JSON.stringify(data));
      this.$store.dispatch("setLoadingState", true);
      api.vipLogin(data)
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
          this.disabled = false;
          this.ischeck = true;
          this.toats(error.data.desc, "cancel", 3000);
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
    getmd5(val) {
      var a;
      var md5 = crypto.createHash("md5");
      md5.update(val);
      var a = md5.digest("hex");
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
}
.class-b {
  background: #928c8c;
}
.main {
  padding-top: 1.5rem;
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
