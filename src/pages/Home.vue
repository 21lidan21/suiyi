<template>
<div class="home"> 
  <x-header class="header" style="padding:0;" :left-options="{showBack: false}">随益</x-header>
<el-row :gutter="20" class='quxiang'>
  <el-col :span="19"><div class="grid-content bg-purple chaxun" @click="goto"><img src="../assets/images/chaxun.png" alt="">公益物质去向查询中心</div></el-col>
  <el-col :span="5"><div class="grid-content bg-purple city"><img src="../assets/images/local.png" alt="">南宁</div></el-col>
</el-row>
<div class="group2 row-bg">
<flexbox>
      <flexbox-item><div class="flex-group2"><span style="color: #2da7e0;font-size: .25rem;">4464 盒</span><br><span style="color: rgb(163, 163, 163); font-size: 0.15rem;">总捐牛奶</span></div></flexbox-item>
      <flexbox-item><div class="flex-group2"><span style="color: #2da7e0;font-size: .25rem;">80 人</span><br><span style="color: rgb(163, 163, 163); font-size: 0.15rem;">公益行参与人数</span></div></flexbox-item>
      <flexbox-item><div class="flex-group2 last-child"><span style="color: #2da7e0;font-size: .25rem;">191 人</span><br><span style="color: rgb(163, 163, 163); font-size: 0.15rem;">已完成帮扶对象</span></div></flexbox-item>
</flexbox>
</div>
<div style="padding: 0 0.3rem;">
<router-link to="/dda/index">
<el-row type="flex" justify="center" class='diandianai'>
  <el-col :span="24"><div class="grid-content bg-purple-dark"><img src="../assets/images/diandianai.jpg" width="100%" alt=""></div></el-col>
</el-row>
</router-link>
<el-row type="flex" justify="center" class='kuaigongyi'>
  <el-col :span="24"><div class="grid-content bg-purple-dark" @click="goto"><img onclick="return false" src="../assets/images/kuaigongyi.jpg" width="100%" alt=""></div></el-col>
</el-row>
 <div class="activity">
   <router-link to="/home/undertakingsContent"><div class="swiper-slide1"><img onclick="return false"  src="../assets/images/top1.png" alt=""><div style="padding-top:.2rem;line-height: .35rem;color: #fff;"><span style="font-size: .28rem;">牛奶小镇</span><br/><span style="font-size: .22rem;">参与人数：统计中...</span><br/><span style="font-size: .22rem;">捐助累计：统计中...</span><br/><span style="font-size: .22rem;">帮扶对象：统计中...</span></div></div></router-link>
   <router-link to="/home/undertakingsContent1"><div class="swiper-slide2"><img onclick="return false"  src="../assets/images/top2.png" alt=""><div style="padding-top:.2rem;line-height: .35rem;color: #fff;"><span style="font-size: .28rem;">阅食小景</span><br/><span style="font-size: .22rem;">参与人数：统计中...</span><br/><span style="font-size: .22rem;">捐助累计：统计中...</span><br/><span style="font-size: .22rem;">帮扶人数：统计中...</span></div></div></router-link>
   <router-link to="/home/undertakingsContent2"><div class="swiper-slide3"><img onclick="return false"  src="../assets/images/top3.png" alt=""><div style="padding-top:.2rem;line-height: .35rem;color: #fff;"><span style="font-size: .28rem;">传微远航</span><br/><span style="font-size: .22rem;">参与人数：统计中...</span><br/><span style="font-size: .22rem;">捐助累计：统计中...</span><br/><span style="font-size: .22rem;">帮扶人数：统计中...</span></div></div></router-link>
   <router-link to="/home/undertakingsContent3"><div class="swiper-slide3"><img onclick="return false"  src="../assets/images/top4.png" alt=""><div style="padding-top:.2rem;line-height: .35rem;color: #fff;"><span style="font-size: .28rem;">南宁市公安...</span><br/><span style="font-size: .22rem;">参与人数：24人</span><br/><span style="font-size: .22rem;">捐助累计：1600天</span><br/><span style="font-size: .22rem;">帮扶人数：8人</span></div></div></router-link>
 </div>
<div class='xinjintoutiao'>
<flexbox class="xinjintoutiao-inner">
   <flexbox-item :span="2"><div class="xinjintitle"><img src="../assets/images/xinjintoutiao.png" width="100%;" alt=""></div></flexbox-item>
  <flexbox-item><div class=""><swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
      <swiper-item><div class="item item-it"><img style="width:.6rem;" src="../assets/images/toutiao01.png" alt=""><div >爱心点燃希望，奉献成就未来</div><div >感谢 <span style="color: #2da7e0;">牛奶小镇</span> 成功入驻随益公益平台</div></div></swiper-item>
      <swiper-item><div class="item item-it"><img style="width:.6rem;" src="../assets/images/toutiao02.png" alt=""><div >爱心点燃希望，奉献成就未来</div><div >感谢 <span style="color: #2da7e0;">阅食小景</span> 成功入驻随益公益平台</div></div></swiper-item>
      <swiper-item><div class="item item-it"><img style="width:.6rem;" src="../assets/images/toutiao03.png" alt=""><div >爱心点燃希望，奉献成就未来</div><div >感谢 <span style="color: #2da7e0;">传微远航</span> 成功入驻随益公益平台</div></div></swiper-item>
      <swiper-item><div class="item item-it"><img style="width:.6rem;" src="../assets/images/toutiao03.png" alt=""><div >爱心点燃希望，奉献成就未来</div><div >感谢 <span style="color: #2da7e0;">交警支队九大队</span> 成功入驻随益...</div></div></swiper-item>
    </swiper></div>
   </flexbox-item>
</flexbox>
</div>
<router-link to="/home/undertakings">
<div class='service-center'>
<p><span>|</span>公益事业服务中心</p>
 <swiper auto  class="service-center-swipter" :show-dots="false">
      <swiper-item ><div class=""><img src="../assets/images/servicecenter1.jpg" alt=""></div></swiper-item>
      <swiper-item ><div class=""><img src="../assets/images/servicecenter2.jpg" alt=""></div></swiper-item>
      <swiper-item ><div class=""><img src="../assets/images/servicecenter3.jpg" alt=""></div></swiper-item>
  </swiper> 
  <div class='group1'>
	 <flexbox>
	      <flexbox-item><div class="flex-group1"><img src="../assets/images/icon01.png" alt=""><br/><span style="margin-left: .25rem;">理事单位/会员</span></div></flexbox-item>
	      <flexbox-item><div class="flex-group1"><img src="../assets/images/icon02.png" alt=""><br/><span style="margin-left: .25rem;">联盟商家</span></div></flexbox-item>
	      <flexbox-item><div class="flex-group1"><img src="../assets/images/icon03.png" alt=""><br/><span style="margin-left: .25rem;">加入事业中心</span></div></flexbox-item>
	</flexbox>
</div>	
</div>
</router-link>
<div style="box-shadow: 0 0 5px 2.5px rgba(225, 225, 225, 0.5);margin-bottom: .3rem;">
<div class='chuanweixingdong'>
<p ><span>|</span>传微行动</p>
 <swiper auto  class="chuanweixingdong-swipter" :show-dots="false">
      <swiper-item ><router-link to="/home/loveTransmission"><div class="cw1"><p>18年元旦，我们发起了浩坤三合小学公益送奶活动…</p></div></router-link></swiper-item>
      <swiper-item ><router-link to="/home/loveTransmission"><div class="cw2"><p>18年元旦，我们发起了浩坤三合小学公益送奶活动…</p></div></router-link></swiper-item>
      <swiper-item ><router-link to="/home/loveTransmission"><div class="cw3"><p>18年元旦，我们发起了浩坤三合小学公益送奶活动…</p></div></router-link></swiper-item>
  </swiper>   
</div>
<router-link to="/home/iGoJoin">
<div style="padding-top:.3rem;padding-left:.4rem;">
 <scroller lock-y :scrollbar-x=false>
      <div  class="activity2" >
      <div class="swiper-slide1"><span>个人志愿者招募</span><br/><a>我要报名 》</a></div>
      <div class="swiper-slide2"><span>阅食小景</span><br/><a>我要报名 》</a></div>
      <div class="swiper-slide3"><span>捐赠行程招募</span><br/><a>参与人数：36人</a></div>
    </div>
 </scroller>
 </div>
 </router-link>
 </div>
 <router-link to="/home/helpService">
 <div class="daai"></div>
 </router-link>
 <div class='service-center' style="margin-bottom: 1.8rem;">
<p ><span>|</span>爱心商城</p>
<router-link to="/mall">
 <swiper auto  class="service-center-swipter" :show-dots="false">
      <swiper-item ><div class=""><img style="width:100%" src="../assets/images/banner01.jpg" alt=""></div></swiper-item>
      <swiper-item ><div class=""><img style="width:100%" src="../assets/images/banner02.jpg" alt=""></div></swiper-item>
      <swiper-item ><div class=""><img style="width:100%" src="../assets/images/banner03.jpg" alt=""></div></swiper-item>
  </swiper> 
</router-link>
  <div class='group1'>
	 <flexbox>
	      <flexbox-item><router-link to="/home/iGoJoin"><div class="flex-group1"><img src="../assets/images/qiye.png" alt=""><br/><span style="color:#8E8E8E !important; margin-left: .25rem;">入驻企业</span></div></router-link></flexbox-item>
	      <flexbox-item><router-link to="/home/lovechiose"><div class="flex-group1"><img src="../assets/images/jingxuan.png" alt=""><br/><span style="color:#8E8E8E !important; margin-left: .25rem;">爱心精选</span></div></router-link></flexbox-item>
	      <flexbox-item><router-link to="/home/iGoJoin"><div class="flex-group1"><img src="../assets/images/jiaoru.png" alt=""><br/><span style="color:#8E8E8E !important; margin-left: .25rem;">爱心加入</span></div></router-link></flexbox-item>
	</flexbox>
	</div>
</div>	
</div>
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
//import { swiper, swiperSlide } from 'vue-awesome-swiper'
//import nav from '@/components/nav'
import { ViewBox } from "vux";
import { Scroller } from "vux";
import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from "vux";
import { Flexbox, FlexboxItem } from "vux";

//import { mapGetters } from 'vuex'

export default {
  components: {
    // swiper,
    // swiperSlide,
    Scroller,
    ViewBox,
    Swiper,
    SwiperItem,
    GroupTitle,
    XButton,
    Divider,
    Flexbox,
    FlexboxItem
  },
  data() {
    return {
      auto: false,
      loop: false,
      isPopUp: false
    };
  },
  created() {
    // if (this.travelListIndex.length == 0) {
    //     this.$store.dispatch('getTravelsList')
    // }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
    
     vm.getOpenId(vm)
    });
  },
  computed: {
    // ...mapGetters([
    // 	'travelListIndex'
    // ])
  },
  mounted() {},
  methods: {
    getOpenId(){

       
       var openid = GetQueryString("openid");
      if (!openid) {
        location.href =
          "http://www.lcaui.com/oauth/authorize.aspx?redirect_uri=" +
          window.location.href;
        return;
      }else{
         sessionStorage["suiyiOpenId"] = openid;
      }

      //获取url地址的字符串参数
      function GetQueryString(key) {
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return "";
      }
    },
    redirect() {
      var openId = GetQueryString("openid");

      if (openId) {
        sessionStorage["redirectOpenId"] = openId;
        let reStr = window.location.search + window.location.hash;
        window.location.href = window.location.href.replace(
          reStr,
          "#/dda/index"
        );
      } else {
      }

      //获取url地址的字符串参数
      function GetQueryString(key) {
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return "";
      }
    },
    goto(item) {
      this.isPopUp = true;
      document.body.style = "overflow：hidden;";
      // console.log(item);
      // localStorage.setItem("item",JSON.stringify(item));
      // this.$router.push("./bmap");
    },
    close(type) {
      if (type) {
      }
      this.isPopUp = false;
    }
  }
};
</script>

<style scoped lang="scss">
.item-it{
  
}
.header {
  background: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(225, 225, 225, 0.5);
}
.home {
  width: 100% !important;
  height:100% !important;
 font-size:100%;
 overflow-y: auto !important;
      -webkit-overflow-scrolling:touch !important;
      
  /*background-color:#2DA7E0;*/
}

.quxiang {
  background: url(../assets/images/headerquxiang.png) no-repeat;
  background-size: 100% 100%;
  height: 0.82rem;
  width: 100%;
  line-height: 0.82rem;
  color: linear-gradient(-180deg, #2da7e0 0%, #77baf1 100%);
  .chaxun {
    line-height: 0.8rem;
    color: #2da7e0;
    font-size: 0.28rem;
    img {
      height: 0.26rem;
      width: 0.3rem;
      margin-right: 0.18rem;
      margin-left: 0.38rem;
    }
  }
  .city {
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #5b5b5b;
    img {
      height: 0.3rem;
      width: 0.3rem;
      margin-right: 0.18rem;
    }
  }
}
.row-bg {
  height: 1.45rem;
  width: 100%;
  background: url(../assets/images/homehead.png) no-repeat;
  background-size: 100% 100%;
}
.diandianai {
  margin-top: 0.39rem;
  width: 100%;
  height: 1.28rem;
  margin: 0 auto;
}
.kuaigongyi {
  margin-top: 0.54rem;
  width: 100%;
  height: 1.8rem;
}
.xinjintoutiao {
  padding: 0.5rem 0.26rem 0.5rem 0.26rem;
  margin-bottom: .3rem;
  box-shadow: 0 0 5px 2.5px rgba(225, 225, 225, 0.5);
  .xinjintoutiao-inner {
    height: 100%;
  }
}
.xinjintitle {
  width: 0.64rem;
  height: 0.64rem;
}
.item {
  
  
  div{
    overflow: hidden;
    padding-top:1px ;
    box-sizing: border-box;
  }

  img {
    width: 0.8rem;
    height: 0.8rem;
    float: left;
    margin-right: 0.3rem;
  }
}

.service-center {
  width: 100%;
  box-shadow: 0 0 5px 2.5px rgba(225, 225, 225, 0.5);
  margin-bottom: .3rem;
  span {
    color: #2da7e0;
    width: 4px;
    margin-right: 0.3rem;
  }
  p {
    font-size: 0.28rem;
    padding-top:.2rem;
    padding-left: .25rem;
  }
  .service-center-swipter {
    margin: 0.26rem 0 0.3rem 0;
    height: 2.2rem;
    img {
      width:100%;
      height: 100%;
    }
  }
}
.group1 {
  height: 1.7rem;
  width: 100%;
}
.flex-group1 {
  margin: 0 auto;
  text-align: center;
  img {
    width: 0.86rem;
    height: 0.86rem;
    margin-bottom: 0.24rem;
  }
}
.chuanweixingdong {
  height: 2.2rem;
  width: 100%;
  span {
    color: #2da7e0;
    width: 4px;
    margin-right: 0.3rem;
  }
  p {
    font-size: 0.28rem;
    padding:.2rem 0 .3rem .25rem;
    
  }
}
.chuanweixingdong-swipter {
  .cw1,
  .cw2,
  .cw3 {
    height: 2.2rem;
    width: 100%;
    background-size: contain;
    position: relative;
  }
  .cw1 {
    background: url(../assets/images/cwxd01.jpg) no-repeat;
    background-size: 100% 100%;
  }
  .cw2 {
    background: url(../assets/images/cwxd02.jpg) no-repeat;
    background-size: 100% 100%;
  }
  .cw3 {
    background: url(../assets/images/cwxd03.jpg) no-repeat;
    background-size: 100% 100%;
  }
  p {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: block;
    background: rgba(0, 0, 0, 0.4);
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #ffffff;
    letter-spacing: 1.02px;
    text-align: left;
  }
}
// .flex-demo {
//   text-align: center;
//   color: #fff;
//   background-color: #20b907;
//   border-radius: 4px;
//   background-clip: padding-box;
// }
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
//  .banner {
//         width: 100%;
//         height:.74rem;
//         border-top: 0.2rem solid #f5f5f5;
//         padding: .3rem 0;
// 		margin-top: .4rem;
// 		color: #fff;
//  }
.activityContainer {
  width: 100%;
  overflow: hidden;
}

.activity {
  width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
  height: 2.04rem;

  padding: 0.3rem 0;

  color: #fff;
  img {
    width: 0.48rem;
    height: 0.46rem;
    float: right;
    margin-right: 0.17rem;
  }
  .swiper-slide1,
  .swiper-slide2,
  .swiper-slide3 {
  	display:inline-block;
        box-sizing: border-box;
        width:42%;
    border-radius: 5px;
    background: url(../assets/images/databg.png) no-repeat;
    background-size: 100% 100%;
    
    margin-right: 0.32rem;
    padding-left:.3rem;
    padding-bottom: .3rem;
  }
}
.activity2 {
  width: 10rem;
  height: 1.4rem;
  padding-top: 0.3rem;
  margin-top: 0.4rem;
  color: #000;
  overflow: hidden;
  margin-right: 0.17rem;
  font-size: 0.26rem;
  line-height: 0.5rem;
  .swiper-slide1,
  .swiper-slide2,
  .swiper-slide3 {
    width: 2.65rem;
    height: 1.94rem;
    border-radius: 5px;
    background: #fff no-repeat;
    background-size: 100% 100%;
    float: left;
    margin-right: 0.32rem;

    a {
      font-size: 0.2rem;
      color: #2da7e0;
      letter-spacing: 2.95px;
      line-height: 0.23rem;
    }
  }
}
.daai {
  background: url(../assets/images/daaiwujiang.jpg) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 2rem;
  margin-bottom: .3rem;
}
.pop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.3) !important;
  
}
.popup {
  padding: 2rem 0 0;
}
.dda_join_pop_del {
  background: url(../assets/images/dda_join_pop_del.png) no-repeat;
  background-size: cover;
  width: 0.72rem;
  height: 1.2rem;
  margin-left: 80%;
}

.dda_join_pop_up {
  background: url(../assets/images/qidai.png) no-repeat;
  background-size: cover;
  width: 6.2rem;
  height: 7.87rem;
  margin: 0 auto;
  text-align: center;
}
.group2{  
    .flex-group2{
        text-align: center;
        margin: .43rem 0 .1rem 0;
        border-right: #F6F6F6 solid 1px;
        line-height: .35rem;
    }
    .flex-group2.last-child{
      border-right: transparent solid 1px;
    }
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
.vux-slider .service-center-swipter .vux-swiper{width:100%;}
.vux-swiper-item{
	width:100%;
}
/* .vux-swiper{
  min-height:800px!important;
} */
</style>