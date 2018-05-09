<template>
	<div>
    <x-header class="header" :left-options="{backText: ''}">领取地址</x-header>
    <OutMap :om="giveOutData"></OutMap>
    <div class="footer">
      <div class="alertDiv" v-if="isopen">
        <div @click="goto">百度地图</div>
        <div  @click="goto1">高德地图</div>
        <div @click="cancle">取消</div>
      </div>
       <div class="title" v-text="storeName"> </div>
       <div class="address" v-text="address"> </div>
       <div @click="openWin" class="img"><img src="../../assets/images/position_green.png" alt=""></div>
    </div>
	</div>
</template>

<script>
import OutMap from '@/components/OutMap'
console.log(localStorage.getItem("item"));
var obj = JSON.parse(localStorage.getItem("item"));
export default {
  data() {
    return {
      isopen:false,
      activeIndex: "1",
      activeIndex2: "1",
      longitude:obj.longitude,
      latitude:obj.latitude,
      storeName:obj.storeName,
      address:obj.address,
	    currentDate: new Date(),
	    giveOutData:{
        height:541,
        longitude:obj.longitude,
        latitude:obj.latitude,
      }
    };
  },
   components:{
    OutMap
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    goto(){
      var mylng = localStorage.getItem("mylng");
      var mylat = localStorage.getItem("mylat");

      window.location.href="http://api.map.baidu.com/direction?origin=latlng:"+mylat+","+mylng+"|name:当前位置&destination=latlng:"+this.latitude+","+this.longitude+"|name:"+this.address+"&mode=driving&region=上海&output=html";
      // console.log(this.$router);
      // this.$router.push("./home");
    },
    goto1(){
      window.location.href="androidamap://navi?sourceApplication=appname&poiname=fangheng&lat="+this.latitude+"&lon="+this.longitude+"&dev=1&style=2";
      // console.log(this.$router);
      // this.$router.push("./home");
    },
    // <a href="androidamap://navi?sourceApplication=appname&poiname=fangheng&lat=36.547901&lon=104.258354&dev=1&style=2">安卓，高德驾车导航</a>
    openWin(){
       this.isopen=true;
    },
    cancle(){
      this.isopen=false;
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  background:#ffffff;
  box-shadow:0 1px 2px 0 rgba(225,225,225,0.50);
}
.alertDiv{
  z-index: 1000;
  position: absolute;
  bottom: 0rem;
  height: 2.3rem;
  width: 100%;
  padding: .3rem;
  background: #ffffff;
  div{
    margin-top: .1rem;
    text-align: center;
    width: 85%;
    padding: .2rem;
    border: 1px solid #dddddd;
  }
}
.footer{
  height: 1.2rem;
  background: #fff;
  position: fixed;
  bottom: 200;
  z-index: 1000;
  width: 100%;
  .title{
    padding: .2rem 0 0 .2rem;
     width: 60%;
     float: left;
     font-size: .35rem;
  }
  .address{
    padding: .2rem;
  width: 60%;
     float: left;
     font-size: .25rem;
     color: #b4b1b1
  }
  .img{
    width: .4rem;
    float: right;
    margin-right: .2rem;
    margin-top: -.2rem;
  }
}
</style>
<style>
.vux-header-title-area, .vux-header .vux-header-title{
  color: #2da7e0 !important;
  font-size: .36rem;
}
.vux-header .vux-header-left .left-arrow:before{
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
