<template>
  <div  class="headerDiv">
  <x-header   class="header "  :left-options="{backText: ''}">我的订单</x-header>
    <tab class="tabsp" ac :line-width="1" v-model="index"  active-color="#2da7e0" >
        <tab-item selected @on-item-click="onItemClick">全部</tab-item>
        <tab-item @on-item-click="onItemClick">待付款</tab-item>
        <tab-item @on-item-click="onItemClick">待收取</tab-item>
        <tab-item @on-item-click="onItemClick">已完成</tab-item>
        <tab-item @on-item-click="onItemClick">申请退换</tab-item>
    </tab>
    <div class="par-div" v-for="(item,index) in orderList[0].dataList" :key="item.orderID+index">
      <div @click="getData(item)">
        <div class="top-div">
          <flexbox :gutter="0" >
            <flexbox-item><div class="flex-demo left" v-text="item.showTime"></div></flexbox-item>
            <flexbox-item><div class="flex-demo right" v-text="item.statusName">待付款</div></flexbox-item>
          </flexbox>
        </div>
        <div class="content-div">
          <flexbox :gutter="0" >
            <flexbox-item><div class="flex-demo left" ><img src="../../assets/images/milk1.png" alt=""></div></flexbox-item>
            <flexbox-item>
              <div class="flex-demo center" >
                 <div class="title" v-text="item.itemName">250g伊利畅饮利乐</div>
                 <div class="price" v-text="item.showPrice">￥3.00</div>
              </div>
            </flexbox-item>
            <flexbox-item><div class="flex-demo right" v-text="price(item.num)">1</div></flexbox-item>
          </flexbox>
        </div>
        <div class="bottom-div" v-if="type==1110||type==1111">
          <flexbox :gutter="0" >
            <flexbox-item :span="9"><div class="flex-demo left" ></div></flexbox-item>
            <flexbox-item ><div class="flex-demo" ><button>去付款</button></div></flexbox-item>
          </flexbox>
        </div>
       </div> 
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

export default {
    data() {
        return {
           index : 0,
           isPopUp: false,
           type:0,
         };
      },
      computed:{
        ...mapGetters([
          "orderList"
        ]),
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
               vm.index = parseInt(sessionStorage['nowType'])||0;
               vm.onItemClick(vm.index);
            })
        },
      methods: {
        ...mapActions({ getDetail: 'getorderlistinfo' }),
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        getData(item){
          this.$store.dispatch("orderID",{"orderID":item.orderID,"showTime":item.showTime});
          // this.$store.dispatch("showTime",item.showTime);
          this.$router.push("./getOrderDetails");
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
        onItemClick (index) {
          this.type=index;
          var nowType = index;
          switch(index){
            case 0:
            nowType='a';
            break;
            case 1:
            nowType='b';
            break;
            case 2:
            nowType='c';
            break;
             case 3:
            nowType='d';
            break;
            case 4:
            nowType='e';
            break;
            default:
            nowType='a';
            break;
          }
          let param ={
            "userID": sessionStorage.sessionId || '',
            "curStatus":nowType,
            "pageSize": 10,
            "curPage": 1,
            "indexType":index,
          };
          this.$store.dispatch("getorderlistinfo",param);
          // console.log('on item click:', index)
        },
        price:function(value){
           return "X"+value;
         }
      }
    };

</script>

<style lang="less" scoped>
body{
  font-family:PingFangSC-Regular;
}
.header {
  background: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(225, 225, 225, 0.5);
}
.headerDiv{
  background:#ffffff;
  width:100%;
  height:2.5rem;
  position: absolute;
}
.tabsp{
  overflow-x: hidden !important;
  -webkit-overflow-scrolling:touch !important;
  width:100% !important;
  border-top:1px solid #dddddd;
  box-shadow:0 6px 6px 0 rgba(226,226,226,0.50);
}
.par-div{
  background:#ffffff;
  box-shadow:0 6px 6px 0 rgba(226,226,226,0.50);
  margin-top:.1rem; 
  .top-div{
    height: .59rem;
    border-bottom: 1px solid #dddddd;
    padding: 0 .2rem;
    .left{
      text-align:left;
      line-height:.59rem;
      font-size:.22rem;
      color:#989898;
    }
    .right{
      text-align:right;
      line-height:.59rem;
      font-size:.28rem;
      color:#787878;
    }
  }
  .content-div{
    height: 2.1rem;
    border-bottom: 1px solid #dddddd;
    padding: 0 .2rem;
    .left{
      text-align:left;
      line-height:2.1rem;
      height: 1.24rem;
      width: 1.25rem;
    }
    .center{
      text-align:right;
      .title{
        font-size:.26rem;
        color:#111111;
        letter-spacing:0;
        line-height:.2rem;
        text-align:left;
        margin-bottom: .19rem;
      }
      .price{
        font-size:.2rem;
        color:#ff473d;
        letter-spacing:0;
        line-height:.18rem;
        text-align:left;
        margin-top: .19rem;
      }
    }
    .right{
      font-size:.24rem;
      color:#18171b;
      line-height:  2.1rem;
      letter-spacing:1.45px;
      text-align:right;    
    }
  }
  .bottom-div{
    height: 1.5rem;
    border: 1px solid #dddddd;
    line-height:  1.5rem;
    button{
      background:#f8b62c;
      border-radius:6px;
      width:1.46rem;
      height:.6rem;
      color:#ffffff;
      letter-spacing:1.45px;
      text-align:center;
    }
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