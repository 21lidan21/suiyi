<template>
  <div  class="headerDiv">
  <x-header   class="header "  :left-options="{backText: ''}">爱心精选</x-header>
    <div style="margin-bottom:2rem" @click="goto">
      <flexbox :gutter="0" >
       <flexbox-item><div class="flex-demo" ><img class="commodity" src="../../assets/images/01.jpg" alt=""></div></flexbox-item>
       <flexbox-item><div class="flex-demo" ><img class="commodity" src="../../assets/images/02.jpg" alt=""></div></flexbox-item>
      </flexbox>
      <flexbox :gutter="0" >
       <flexbox-item><div class="flex-demo" ><img class="commodity" src="../../assets/images/03.jpg" alt=""></div></flexbox-item>
       <flexbox-item><div class="flex-demo" ><img class="commodity" src="../../assets/images/04.jpg" alt=""></div></flexbox-item>
      </flexbox>
      <flexbox :gutter="0" >
       <flexbox-item><div class="flex-demo" ><img class="commodity" src="../../assets/images/05.jpg" alt=""></div></flexbox-item>
       <flexbox-item><div class="flex-demo" ><img class="commodity" src="../../assets/images/06.jpg" alt=""></div></flexbox-item>
      </flexbox>
    </div>
    <!-- <div @click="goto" class="Group3"><img src="../../assets/images/Group3.png" alt=""></div> -->
    <!--提示框-->
    <div class="pop" v-if="isPopUp" @click="close(0)">
        <div class="popup" v-if="isPopUp">
         <div class="dda_join_pop_del" ></div>
         <div class="dda_join_pop_up"></div>
       </div>
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
           isPopUp: false,
         };
      },
      computed:{
        // ...mapGetters([
        //   "actiondetailList"
        // ])
      },
      components:{
        Flexbox,
        FlexboxItem,
        Divider,
        Tab,
        TabItem, 
        Swiper, 
        SwiperItem 
      },

      beforeRouteEnter(to, from, next) {
            next((vm) => {
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
         this.isPopUp = true;
         document.body.style="height：100%;overflow：hidden;";
          // console.log(item);
          // localStorage.setItem("item",JSON.stringify(item));
          // this.$router.push("./bmap");
        },
        close(type) {
          if (type) {
          }
          this.isPopUp = false;
        },
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
  width:100%;
  height:2.5rem;
  margin: .2rem 0;
  position: absolute;
}
.tabsp{
  border:1px solid #dddddd;
}
.container{
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    height: 1.7rem;
    padding: .35rem 0;
    background:#edf8ff;
    .item{
        display:inline-block;
        box-sizing: border-box;
        width:40%;
        margin-left:.41rem; 
        margin-top: .18rem;
    }
}
.banner01 {
  background-image: url(../../assets/images/banner01.jpg);
}
.banner02 {
  background-image: url(../../assets/images/banner02.jpg);
}
.banner03 {
  background-image: url(../../assets/images/banner03.jpg);
}
.top{
 border-bottom:1px solid #dddddd;
}
.flex-demo{
  .point{
    margin:.1rem .3rem; 
  }
  .point1{
    margin:.1rem .8rem; 
    width: 80%;
  }
  .commodity{
    padding-top: .2rem; 
    width: 3.3rem;
    height: 4.03rem;
    padding-left: .2rem;
  }
}
.Group3{
  position: fixed;
  bottom: 3rem;
  right: 0;
  z-index: 100;
  border-radius:42px;
  width:2.27prem;
  height:.6rem;
}


.pop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
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

.dda_join_pop_up {
  background: url(../../assets/images/qidai.png) no-repeat;
  background-size: cover;
  width: 6.2rem;
  height: 7.87rem;
  margin: 0 auto;
  text-align: center;
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
<style>
::-webkit-scrollbar{
  display:none;
}
.inner-container::-webkit-scrollbar {
    display: none;
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
.vux-tab .vux-tab-item {
    background: #fff !important;
}
.vux-swiper{
  max-height:180px!important;
}
</style>