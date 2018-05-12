<template>
	<div style="padding-bottom: 1rem;overflow-y: auto !important;-webkit-overflow-scrolling:touch !important;">
    <x-header class="header" :left-options="{backText: ''}">帮扶对象服务中心</x-header>
      <div style="margin-bottom: 0.3rem;">
      	<img src="../../assets/images/扶贫.jpg" alt="">
      </div>
      <router-link to="/home/hopeHelpService">
      	<div class="bangfu" style="width: 95%;margin:0 auto;text-align:center;background-color: #43ACE5;border-radius: 1rem;line-height: .8rem;">
	    	<div style=" color:#ffffff;font-size:.25rem;">我 需 要 帮 扶</div>
	    </div>
    </router-link>
	</div>
</template>

<script>

export default {
  data() {
    return {
     
    };
  },
  methods: { 
    
  }
};
</script>

<style scoped lang="scss">
.header { 
  background:#ffffff;
  /*box-shadow:0 1px 2px 0 rgba(225,225,225,0.50);*/
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
