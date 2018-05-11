<template>
   <div class="usercenter">
       <x-header class="header" :left-options="{backText: ''}">个人设置</x-header>
 	<div style="margin-top:-0.4rem;">
 		<group>
     
        <!-- <x-input is-link title="姓名" name="name" v-model="name"  is-type="china-name"></x-input> -->
     
       <cell style="font-size: .28rem;" title="姓名" :value="name" is-link></cell>
       <cell style="font-size: .28rem;" title="性别" :value="option1" is-link></cell>
        <!-- <popup-radio title="性别" :options="options1" v-model="option1"></popup-radio> -->
       <cell style="font-size: .28rem;" title="生日" :value="value5" is-link></cell>
        <cell style="font-size: .28rem;" title="会员卡卡号" :value="cardID" is-link></cell>
         <cell style="font-size: .28rem;" title="手机号码" :value="phone" is-link></cell>
    <!-- <datetime :value.sync="value5" disabled :min-year=1990 :max-year=2016 format="YYYY-MM-DD" @on-change="change" title="生日" year-row="{value}年" month-row="{value}月" day-row="{value}日"  confirm-text="完成" cancel-text="取消"></datetime> -->
      <!-- <x-input title="会员卡卡号" name="cardID"  v-model="cardID"></x-input> -->
    <!-- <x-input title="手机号码"  v-model="phone" :max="13" ></x-input> -->
    </group>
 	</div>
    <div  style="padding:0 .2rem;">
    <x-button style="font-size: .28rem;padding:.1rem 0;" :gradients="['#2da7e0', '#77baf1']"  @click.native="loginout" > 注销登录</x-button>
    </div>
   </div>
</template>
<script>
import { Scroller } from "vux";
import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from "vux";
import { Flexbox, FlexboxItem } from "vux";
import { CellBox } from "vux";
import { XInput, Group, Cell } from "vux";

import { PopupRadio, PopupPicker, Datetime } from "vux";
import api from "../../fetch/api";
import * as _ from "../../util/tool";
export default {
  components: {
    // swiper,
    // swiperSlide,
    Scroller,
    Swiper,
    SwiperItem,
    GroupTitle,
    XButton,
    Divider,
    Flexbox,
    FlexboxItem,
    Group,
    CellBox,
    XInput,
    Cell,
    PopupRadio,
    PopupPicker,
    Datetime
  },

  data() {
    return {
      name: "",
      option1: "",
      options1: [{ key: "0", value: "男" }, { key: "1", value: "女" }],
      value5: "",
      cardID: "",
      phone: "",
      birthDay: ""
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    change(value) {
      this.birthDay = value;
      console.log("change", value);
    },
    getUserInfo() {
      api.GetUserInfoByID()
        .then(res => {
          console.log(res);
          if (res) {
            console.log(this.name);
            this.name = res[0].userName;
            this.option1 = res[0].sex;
            this.value5 = res[0].birthDay;
            this.cardID = res[0].cardNo;
            this.phone = res[0].phone;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    sendCode() {
      if (!this.username) {
        alert("请填写手机号");
        return;
      }
      let data = {
        phone: this.username,
        sendType: "3"
      };
      api
        .RegistVerifiCode(data)
        .then(res => {
          console.log(res);
          if (res) {
            // let userInfo = Object.assign()
            // this.$store.dispatch('setLoadingState', false)
            // this.setUserInfo(res.data)
            // this.$router.replace('/home')
            console.log(res[0].key);
            this.codeKey = res[0].key;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    loginout() {
      sessionStorage.sessionId = "";
      this.$router.replace("/user");
    }
  }
};
</script>
<style scoped lang="scss">
.header {
  background: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(225, 225, 225, 0.5);
}
.group1 {
  .flex-group1 {
    text-align: center;
    margin: 0.43rem 0 0.41rem 0;
    border-right: #ccc solid 1px;
    img {
      height: 0.36rem;
      width: 0.36rem;
    }
  }
  .flex-group1.last-child {
    border-right: transparent solid 1px;
  }
}
</style>
