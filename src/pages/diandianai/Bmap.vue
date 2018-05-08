<template>
	<div>
    <x-header class="header" :left-options="{backText: ''}">领取地址</x-header>
    <OutMap :om="giveOutData"></OutMap>
    <div class="footer">
       <div class="title" v-text="storeName"> 云中垫</div>
       <div class="address" v-text="address"> 求问我去额外企鹅完全</div>
       <div class="img"><img src="../../assets/images/point1.png" alt=""></div>
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
      activeIndex: "1",
      activeIndex2: "1",
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
      console.log(this.$router);
      this.$router.push("./home");
    }

  }
};
</script>

<style scoped lang="scss">
.header {
  background:#ffffff;
  box-shadow:0 1px 2px 0 rgba(225,225,225,0.50);
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
