<template>
   <div >
     <x-header   class="header "  :left-options="{backText: ''}">自提信息</x-header>
     <div class="dda_join_success">您的爱心牛奶将随机捐向一位乡村儿童</div>
     <div class="dda_join_list">
       <div class="dda_join_list_2 arrow_right" @click="showMilk">
         查看牛奶
       </div>
       <div class="line"></div>
       <div class="dda_join_list_2">
         领取点兑换码：<span v-text="orderListDetails[0].exchangeNo" class="orderID"></span>
       </div>
       <div class="line"></div>
       <div class="dda_join_list_2 point " @click="goto('/dda/receive')">领取点</div>
        <div class="line"></div>
       <div class="ddh">
         订单号：<span v-text="orderListDetails[0].orderNo" ></span>
       </div>
        <div class="line"></div>
       <div class="time">
         <span v-text="orderListDetails[0].showTime" ></span>
       </div>
     </div>
  
     <div class="pop" v-if="isPopUp" @click="close(0)">

       <div class="milk" v-if="isPopUp && isMilk">
          <div class="milk_panel"></div>
       </div>
     </div>
     
   </div>
</template>
<script>
import { mapGetters,mapActions } from 'vuex'

export default {
  data() {
        return {
           isPopUp: true,
           isMilk: false,
         };
      },
      computed:{
        ...mapGetters([
          "orderListDetails",
          "orderID"
        ]),
      },
      components:{
       
      },

      beforeRouteEnter(to, from, next) {
            next((vm) => {
               vm.onItemClick(1);
            })
        },
      methods: {
        ...mapActions({ getDetail: 'getorderListDetails' }),
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        getData(item){
          this.$store.dispatch("orderID",{"orderID":item.orderID,"showTime":item.showTime});
          // this.$store.dispatch("showTime",item.showTime);
          this.$router.push("./getOrderDetails");
        },
        goto(path){
         this.$router.push(path);
        },
        close(type) {
          if (type) {
          }
          this.isPopUp = false;
        },
        onItemClick () {
          console.log("请求");
          let param ={
              "userID": sessionStorage.sessionId || '',
              "orderID": this.orderID
          };
          this.$store.dispatch("getorderListDetails",param);
        },
        price:function(value){
           return "X"+value;
         },
        showMilk() {
          this.isPopUp = true;
          this.isMilk = true;
        }
      }
};
</script>
<style scoped >
.milk_panel {
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  position: absolute;
  bottom: 0;
  top: 4.1rem;
  left: 0.3rem;
  right: 0.3rem;
  background: url(../../assets/images/milk.png) no-repeat center;
  background-size: auto 100%;
}
.yellow_suc {
  color: #fcdf5e;
  line-height: 2;
  font-size: 20px;
}

.header {
  background: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(225, 225, 225, 0.5);
}
.arrow_right {
  background: url(../../assets/images/arrow_right.png) no-repeat 95% 50%;
  background-size: 2% auto;
}
.footer {
  text-align: center;
  font-size: 14px;
  line-height: 1.5;
  margin-top: 11em;
}
.point {
  background: url(../../assets/images/position_green.png) no-repeat 95% 50%;
  background-size: 5% auto;
}
.join_in {
  color: #2da7e0;
  line-height: 3;
}
.code {
  color: black;
}
.line {
  opacity: 0.1;
  height: 1px;
  background: #000000;
}
.header.gray {
  background: rgba(0, 0, 0, 0.3) !important;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0) !important;
}
.dda_join_success {
  box-sizing: border-box;
  width: 100%;
  height: 5.4rem;
  background: url(../../assets/images/milk_top.jpg) no-repeat;
  background-size: 100%;
  color: white;
  font-size: 14px;
  padding: 2em 0 0 2em;
}
.dda_join_list {
  margin: 0.5rem 1em 0;
  box-shadow: 0 2px 10px 0 rgba(48, 168, 224, 0.14);
  border-radius: 12px;
  width: 6.9rem;
  height: 3.1rem;
}
.dda_join_list_2 {
  padding: 0 2em;
  font-size: 14px;
  line-height: 1rem;
  color: #5a5a5a;
}
.ddh{
  font-family:PingFangSC-Regular;
  font-size:.24rem;
  color:#989898;
  line-height: 1rem;
  padding: 0 2em;
}
.time{
  font-family:PingFangSC-Regular;
  font-size:.24rem;
  color:#989898;
  line-height: 1rem;
  padding: 0 2em;
}
</style>
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