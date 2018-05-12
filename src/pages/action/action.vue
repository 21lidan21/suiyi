<template>
  <div class="content">
   <x-header class="header" style="padding:0;" :left-options="{showBack: false}">传微行动</x-header>
    <div>
      <div style="padding:.1rem 0;">
      <!-- <tab :line-width="2" height=".6rem" custom-bar-width="1rem" active-color='#2da7e0'  v-model="index">
        <tab-item class="vux-center" @on-item-click="onItemClick" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab> -->
       <tab class="tabsp"  :line-width="2" active-color="red" >
        <tab-item selected>商品分类</tab-item>
        <tab-item>常温类</tab-item>
        <tab-item>低温酸奶</tab-item>
        <tab-item>奶酪</tab-item>
       </tab>
      </div>

      <div style="margin-bottom:2rem">

        <img @click="goto(1)" src="../../assets/images/love1.jpg" alt="">
        <img @click="goto(2)" style="margin: .3rem 0;" src="../../assets/images/love2.jpg" alt="">
        <img @click="goto(3)" src="../../assets/images/love3.jpg" alt="">
      </div>
    
      <!-- <swiper v-model="index"  :show-dots="false">
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div class="itemDiv" v-for="(item, index) in actionList" :key="index">
            <div @click="goto(item)">
             <img src="../../assets/images/cwxd01.jpg" alt="">
             <div class="title" v-text="item.title"></div>
             <div class="message" v-text="item.message"></div>
            </div>
          </div>
        </swiper-item>
      </swiper> -->
    </div>
  </div>
</template>



<script>
import { mapGetters,mapActions } from 'vuex'
import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
const list = () => ['全部', '传微教育', '传微献爱心', '传微扶贫', '更新中...']

export default {
    data() {
        return {
          index01: 0,
          list2: list(),
          demo2: '全部',
          index: 0,   
           };
      },
      computed:{
        ...mapGetters([
          "actionList"
        ])
      },
      components:{
        Tab,
        TabItem,
        Sticky,
        Divider,
        XButton,
        Swiper,
        SwiperItem
      },

      beforeRouteEnter(to, from, next) {
            next((vm) => {
                vm.getData(vm)
            })
        },
      methods: {
        ...mapActions({ getDetail: 'getDetail' }),
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        getData(){
          this.$store.dispatch("getActionList",34567);
        },
        goto(item){
          console.log(item);
            if(item==1){
              window.location.href="https://mp.weixin.qq.com/s/pHbaVAQq_EUPKyGcn5s_MA";
            }else if(item==2){
              window.location.href="https://mp.weixin.qq.com/s/7udfqyahMavHrB1x4pL-Uw";
            }else{
              window.location.href="https://mp.weixin.qq.com/s/4f76Hp7GyzsGuUs6Q5sLBA";
            }
          // localStorage.setItem("item",item);
          // this.$router.push("./action/actiondetail");
        },
        onItemClick (index) { 
            console.log(index);
        },
      }
    };

</script>

<style lang="less" scoped>
  .content{
      overflow-y: auto !important;
      -webkit-overflow-scrolling:touch !important;
      height:100% !important;
  }
.header {
  background: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(225, 225, 225, 0.5);
}
.box {
  padding: 15px;
}

.itemDiv {
  margin-top: .5rem; 
  padding: 0 .26rem;
  div{
    padding:.1rem .4rem;
    font-size:.28rem;
    line-height: .4rem;
    font-family:PingFangSC-Regular;
  }
  .message{
    font-size:.24rem;
    color:#737373;
  }
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
.vux-tab .vux-tab-item {
    background: #fff !important;
}
/* .vux-swiper{
  min-height:800px!important;
} */
</style>