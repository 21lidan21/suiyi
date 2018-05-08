<template>
   <div >
     <x-header   class="header "  :left-options="{backText: ''}">参与成功</x-header>
     <div class="dda_join_success">您的爱心牛奶将随机捐向一位乡村儿童</div>
     <div class="dda_join_list">
       <div class="dda_join_list_2 arrow_right" @click="showMilk">
         查看牛奶
       </div>
       <div class="line"></div>
       <div class="dda_join_list_2">
         领取点兑换码：<span v-text="code" class="code"></span>
       </div>
       <div class="line"></div>
       <div class="dda_join_list_2 point  " >领取点</div>
     </div>
     <div class="footer" @click="goto">
       <p>捐赠信息请持续关注传微行动</p>
       <p>
         诚挚邀请您共同解决儿童们更长期的营养供应问题
         <br>
         <span class="join_in">我想参与 》</span>
       </p>
     </div>
     <div class="pop" v-if="isPopUp" @click="close(0)">

       <div class="milk" v-if="isPopUp && isMilk">
          <div class="milk_panel"></div>
       </div>
       <div class="popup" v-if="isPopUp && !isMilk">
         <div class="dda_join_pop_del" ></div>
         <div class="dda_join_pop_up">
           <div class="right"></div>
           <div class="yellow_suc">参与成功</div>
           <div class="pop_txt">“感谢您对公益事业的关注与支持<br>
您已成为我们的公益伙伴<br>
赋予您“天使会员”荣誉”</div>
  <div class="pop_btn"  @click="close(1)">我要查看</div>
         </div>

       </div>
     </div>
     
   </div>
</template>
<script>
export default {
  data() {
    return {
      isPopUp: true,
      isMilk:false,
      code: 897982379889689
    };
  },
  methods:{
    close(type){
      if(type){
      }
      this.isPopUp = false;
    },
    goto(){
      this.$router.push('/dda/detail');
    },
    showMilk(){
      this.isPopUp = true;
      this.isMilk = true;
    }
  }
};
</script>
<style scoped >
.milk_panel{
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  position: absolute;
  bottom: 0;
  top:4.1rem;
  left: .3rem;
  right:.3rem;
  background: url(../../assets/images/milk.png) no-repeat center;
  background-size: auto 100% ;
}
.yellow_suc {
  color: #fcdf5e;
  line-height: 2;
  font-size: 20px;
}
.pop_txt {
  padding-top: 4em;
  font-size: 16px;
  line-height: 2;
  color: #2da7e0;
}
.pop_btn {
  margin: 3em auto 0;
  text-align: center;
  line-height: 2;
  font-size: 16px;
  border-radius: 0.36rem;
  color: white;
  width: 3.82rem;
  height: 0.72rem;
  background: #2da7e0;
}
.pop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3) !important;
  width: 100vw;
  height: 100vh;
}
.popup {
  padding: 8em 0 0;
}
.dda_join_pop_del {
  background: url(../../assets/images/dda_join_pop_del.png) no-repeat;
  background-size: cover;
  width: 0.72rem;
  height: 1.2rem;
  margin-left: 80%;
}
.right {
  background: url(../../assets/images/right.png) no-repeat center;
  width: 0.7rem;
  height: 0.7rem;
  display: inline-block;
  margin-top: 2em;
}
.dda_join_pop_up {
  background: url(../../assets/images/dda_join_pop_up.png) no-repeat;
  background-size: cover;
  width: 6.2rem;
  height: 7.87rem;
  margin: 0 auto;
  text-align: center;
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
  height: 3.4rem;
  background: url(../../assets/images/dda_join_success.jpg) no-repeat;
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