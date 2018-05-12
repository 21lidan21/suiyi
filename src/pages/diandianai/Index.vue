<template>
   <div>
     <x-header   class="header" :left-options="{backText: ''}">点点爱公益</x-header>
   <div class="dda-index-bg">
     <div class="fill"></div>
     
        <div class="btn in" @click="joinIn">参加活动</div>
   
     <router-link to="/dda/detail">
        <div class="btn detail">了解详情 >></div>
     </router-link>
   </div>
   </div>
</template>
<script>
import api from "../../fetch/api";

export default {
  data() {
    return {
      isPaying:0
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // vm.checkPay(vm);
     // vm.getOpenId(vm);
    });
  },
  methods: {
    checkPay() {
      var redirectPay = sessionStorage["redirectOpenId"];
      // sessionStorage["redirectOpenId"] = "";
      // if (redirectPay) {
        this.joinIn(redirectPay);
      // }
    },
    
    joinIn() {
      var self = this;
      var openId =sessionStorage["suiyiOpenId"]|| "";
      // if (gotId) {
      //   openId = gotId;
      // }
      // alert("url"+window.location.href+"--"+gotId+"openId"+openId);
      var wxJsApiParam = "";

      if (openId == "") {
        alert("openId为空");
        return;
      }
      if(self.isPaying){
        return;
      }
      this.isPaying = 1;

      //获取url地址的字符串参数
      function GetQueryString(key) {
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return "";
      }
      //立即支付
      function callpay(obj) {
        if (typeof WeixinJSBridge == "undefined") {
          if (document.addEventListener) {
            document.addEventListener("WeixinJSBridgeReady", jsApiCall, false);
          } else if (document.attachEvent) {
            document.attachEvent("WeixinJSBridgeReady", jsApiCall);
            document.attachEvent("onWeixinJSBridgeReady", jsApiCall);
          }
        } else {
          jsApiCall(obj);
        }
      }

      //调用微信JS api 支付
      function jsApiCall(obj) {
        if (obj.length <= 0) {
          self.isPaying = 0;
          console.log("wxJsApiParam length is 0");
          //$$.showMsg("缺少支付参数，请返回重试");
          return;
        }
        // alert(wxJsApiParam);
        var wx = JSON.parse(obj);
        WeixinJSBridge.invoke(
          "getBrandWCPayRequest",
          {
            appId: wx.appId,
            nonceStr: wx.nonceStr,
            package: wx.package,
            paySign: wx.paySign,
            signType: wx.signType,
            timeStamp: wx.timeStamp
          },
          function(res) {
            self.isPaying = 0;
            console.log(res.err_code + "-" + res.err_desc + "-" + res.err_msg);
            switch (res.err_msg) {
              case "get_brand_wcpay_request:ok":
              case "ok":
                //跳转到上一页
                //$('.return').trigger("click");
                sessionStorage["suiyiNeedFlag"] = 1;
                self.$router.push("/dda/join");

                break;
              case "get_brand_wcpay_request:fail":
              case "fail":
                WeixinJSBridge.log(
                  res.err_code + "-" + res.err_desc + "-" + res.err_msg
                );
                break;
              case "get_brand_wcpay_request:cancel":
              case "cancel":
                break;
            }
          }
        );
      }

      var params = { openID: openId };

      api.ThreeeLoveOrderPub(params).then(res => {
        console.log(res);
          let wxJsApiParam = res[0].parameters;
          console.log(wxJsApiParam);
          if ( wxJsApiParam.length > 0) {
            callpay(wxJsApiParam);
          }else{
            self.isPaying = 0;
            console.log("支付parameters");;
          }
        })
        .catch(error => {
          self.isPaying = 0;
          alert(error.data.desc);
        });
    }
  }
};
</script>
<style>
.vux-header-title-area,
.vux-header .vux-header-title {
  color: #2da7e0 !important;
  font-size: 16px;
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
<style scoped >
.header {
  background: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(225, 225, 225, 0.5);
}
.dda-index-bg {
  position: absolute;
  top: 1rem;
  bottom: 0;
  left: 0;
  right: 0;
  background: url(../../assets/images/dda_index_bg.jpg) no-repeat;
  background-size: 100% 100%;
  text-align: center;
}
.btn {
  line-height: 0.7rem;
  color: white;
}
.fill {
  height: 65%;
}
.in {
  background-image: linear-gradient(-180deg, #2da7e0 0%, #77baf1 100%);
  border-radius: 42px;
  width: 3.2rem;
  margin: 0 auto;
  text-align: center;
}
.detail {
  width: 2rem;
  padding-top: 0.5rem;
  text-decoration: bottom;
  border-bottom: 1px solid white;
  margin: 0 auto;
  text-align: center;
}
</style>
