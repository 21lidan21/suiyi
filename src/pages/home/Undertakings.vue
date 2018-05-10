<template>
	<div>
    <x-header class="header" :left-options="{backText: ''}">公益事业服务排行榜</x-header>
      <img @click="openWin(1)" style="margin-top:.5rem" src="../../assets/images/ph1.jpg" alt="">
      <img @click="openWin(2)" src="../../assets/images/ph2.jpg" alt="">
      <img @click="openWin(3)" src="../../assets/images/ph3.jpg" alt="">
      <img @click="openWin(4)" src="../../assets/images/ph4.jpg" alt="">
	</div>
</template>

<script>

export default {
  data() {
    return {
     
    };
  },
  methods: { 
    openWin(val){
      // localStorage.setItem("openwin",val);
      // console.log(localStorage.getItem("openwin"));
      if(val==1){
          this.$router.push("./undertakingsContent");
      }else if(val==2){
          this.$router.push("./undertakingsContent1");
      }else if(val==3){
          this.$router.push("./undertakingsContent2");
      }else if(val==4){
          this.$router.push("./undertakingsContent3");
      }
    },

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
