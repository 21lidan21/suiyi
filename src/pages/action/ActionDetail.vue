<template>
  <div>
  <x-header   class="header "  :left-options="{backText: ''}">爱传递</x-header>
    <div class="headerDiv">
     <div class="top">
       <flexbox :gutter="0" >
        <flexbox-item :span="5"><div class="flex-demo" ><font>捐助成果</font></div></flexbox-item>
        <flexbox-item><div class="flex-demo" style="text-align: left;color:#6c6c6c;font-size:.2rem">05月01号更新</div></flexbox-item>
      </flexbox>
     </div>
     <flexbox :gutter="0">
        <flexbox-item>
          <div class="flex-demo top2">
            <div class="top2">112<span>名</span></div>
            <div>参与人数</div>
          </div>
        </flexbox-item>
        <div class="xian"></div>
        <flexbox-item>
          <div class="flex-demo top2">
            <div class="top2">2800<span>盒</span></div>
            <div>捐助牛奶</div>
          </div>
        </flexbox-item>
         <div class="xian"></div>
        <flexbox-item>
          <div class="flex-demo ">
            <div class="top2">357<span>人</span></div>
            <div>扶助对象</div>
          </div>
        </flexbox-item>
    </flexbox>
    </div>
    <div>
      <div style="padding:.4rem 0;border-bottom:1px solid #dddddd">
      <tab :line-width="2" height=".5rem" custom-bar-width="1rem" active-color='#2da7e0'  v-model="index">
        <tab-item class="vux-center"  :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      </div>
       <img @click="goto(1)" src="../../assets/images/love1.jpg" alt="">
      <!-- <swiper v-model="index"  :show-dots="false">
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div class="itemDiv" >
           
          </div>
        </swiper-item>
      </swiper> -->
    </div>
  </div>
</template>



<script>
import { mapGetters,mapActions } from 'vuex'
import { Flexbox, FlexboxItem, Divider ,Tab, TabItem,Swiper, SwiperItem  } from 'vux'

const list = () => ['公益行详情', '参与人', '进展情况']
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
          "actiondetailList"
        ])
      },
      components:{
        Flexbox,
        FlexboxItem,
        Divider,
        Tab,
        TabItem, 
        Swiper, 
        SwiperItem,
      },

      beforeRouteEnter(to, from, next) {
            next((vm) => {
              //vm.open();
               // vm.getData(vm)
            })
        },
      methods: {
        ...mapActions({ getDetail: 'getDetail' }),
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        getData(){
          this.$store.dispatch("getActionDetailList",34567);
        },
        goto(item){
          console.log(item);
          localStorage.setItem("item",JSON.stringify(item));
          this.$router.push("./bmap");
        },
        open(){
          console.log("111");
          
        }
      }
    };

</script>

<style lang="less" scoped>
.header {
  background: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(225, 225, 225, 0.5);
}
.headerDiv{
  background:#ffffff;
  box-shadow:0 2px 10px 0 rgba(48,168,224,0.14);
  width:90%;
  height:2.5rem;
  margin: .2rem .4rem;
}
.top{
 border-bottom:1px solid #dddddd;
}
.top2{
  font-family:PingFangSC-Regular;
  color:#2da7e0;
  letter-spacing:0.54px;
  font-size:.4rem;
  span{
     display: inline-block;
     padding-left:.2rem; 
     font-size:.3rem;
  }
}
.xian{
  height: .5rem;
  border-left:1px solid #dddddd;
}
.flex-demo {
  font-family:PingFangSC-Regular;
  color:#616161;
  letter-spacing:0.54px;
  font-size: .3rem;
  text-align: center;
  padding: .2rem 0 .1rem .2rem ;
  line-height:.57rem;
  font{
    font-size:.4rem;
    letter-spacing:4.8px;
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
.vux-swiper{
  min-height:800px;
}
</style>