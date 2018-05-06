<template>
	<div>
    <x-header   class="header" :left-options="{backText: ''}">查看领取点</x-header>
		<div style=" border-bottom:solid 1px rgb(255, 208, 75);padding:10px;width:50px">门店排序</div>
		<el-menu
		:default-active="activeIndex2"
		class="el-menu-demo"
		mode="horizontal"
		@select="handleSelect"
		text-color="#000"
		active-text-color="#ffd04b"
		border:none >
		<el-menu-item index="1">智能排序</el-menu-item>
		<el-menu-item index="2">离我最近</el-menu-item>
		<el-menu-item index="3">推荐领取点</el-menu-item>
		</el-menu>
		<div style="background:#ddd;padding:5px ">
        <el-row style="margin:10px;background:#fff" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">		
			<el-col :span="6">
        <img src="../../assets/images/error.png" style="padding: 14px;" > </el-col>
			<el-col :span="10"><div style="padding: 14px;">
				<div style="padding:10px">方程二号店</div>
				<div style="padding:10px">27号</div>
			</div></el-col>
		    <el-col :span="8"> 
				<button class="btn" @click="goto" style="margin:10px 0px;border-right:none;float:right;border-radius: 20px 0px 0px 20px;">查看导航</button>
			</el-col>		
		</el-row>
		</div>
		<h3>示例二：给多个点添加信息窗口(使用了axios)</h3>
    <OutMap :om="giveOutData"></OutMap>
	</div>
</template>

<script>
import OutMap from '@/components/OutMap'

export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
	  currentDate: new Date(),
	  giveOutData:{
        height:400,
        longitude:116.417854,
        latitude:39.921988
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
@import "../../assets/css/function";
.header {
  background:#ffffff;
  box-shadow:0 1px 2px 0 rgba(225,225,225,0.50);
    }
.btn{
  background-image:linear-gradient(-180deg, #2da7e0 0%, #77baf1 100%);
  border-radius:.42rem;
  width:1.84rem;
  height:.9rem;
  
}

img{
  background:#d8d8d8;
  width:1.3rem;
  height:1.3rem;
}
</style>
<style>
.vux-header-title-area, .vux-header .vux-header-title{
  color: #2da7e0 !important;
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
