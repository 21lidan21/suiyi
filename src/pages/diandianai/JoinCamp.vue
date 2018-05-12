<template>
   <div  class="bg">
     <x-header   class="header "  :left-options="{backText: ''}">加入公益活动</x-header>
     <div class="camp_header">
       <div class="balance">余额 <br><span class="txt" v-html="balance"></span></div>
       <div class="div_line"></div>
       <div class="balance">爱心值 <br><span class="txt" v-html="heart"></span>个</div>
     </div>
     <div class="flag">
     </div>
     <div class="info">
       请到活动公益宣传点或牛奶领取点<br>
       咨询、参加
     </div>
     <div class="footer" @click="goto()">
       <div class="footer_btn" >前往公益点</div>
     </div>
     
   </div>
</template>
<script>
export default {
  data() {
    return {
      balance: sessionStorage['showPrice']||'',
      heart: sessionStorage['point']||'',
    };
  },
  methods: {
    goto() {
      this.$router.push("/dda/receive");
    },
    showPlugin (path) {
    	if(sessionStorage.sessionId == "" || sessionStorage.sessionId == "undefined" || sessionStorage.sessionId == undefined){
    		this.$vux.alert.show({
		        title: '提示',
		        content: '您还未登录，请先登录',
		        onShow () {
		        },
		        onHide () {
		        }
		      })
    	}else{
    		this.$router.push(path);
    	}
    }
  }
};
</script>
<style scoped >
.footer {
  background: #ffffff;
  line-height: 1rem;
  height: 1rem;
  border-radius: 30px;
  font-size: 18px;
  font-weight: bold;
  width: 3rem;
  text-align: center;
  position: absolute;
  bottom: 1em;
  left: 50%;
  transform: translate(-50%);
}
.footer_btn {
  text-align: center;
  margin: 0 auto;
  bottom: 3em;
}
.bg {
  height: 100vh;
  background: url(../../assets/images/camp_footer.jpg) no-repeat center bottom;
  background-size: 100% auto;
}
.info {
  text-align: center;
  font-size: 18px;
  line-height: 1.3;
}
.flag {
  margin: 6em auto 1em;
  width: 0.6rem;
  height: 0.6rem;
  background: url(../../assets/images/flag.png) no-repeat center;
  background-size: contain;
}
.txt {
  font-size: 18px;
}
.balance {
  width: 40%;
  padding-top: 2.5em;
  display: inline-block;
  color: #ffffff;
  line-height: 1.5;
}
.div_line {
  display: inline-block;
  background: #ffffff;
  width: 1px;
  height: 0.6rem;
}
.camp_header {
  font-size: 14px;
  text-align: center;
  width: 100%;
  height: 2.74rem;
  background: url(../../assets/images/camp.png) no-repeat;
  background-size: auto 100%;
}

.header {
  background: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(225, 225, 225, 0.5);
}
</style>
<style>
.weui-tab__panel {
  padding-bottom: 0;
}
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