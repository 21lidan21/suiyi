<template>
	<div class="home">

<el-row :gutter="20" class='quxiang'>
  <el-col :span="20"><div class="grid-content bg-purple">公益物质去向查询中心</div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">南宁</div></el-col>
</el-row>
<el-row type="flex" class="row-bg" justify="space-between">
  <el-col :span="6"><div class="grid-content bg-purple"><span>9304名</span><br/><span>加入随益平台</span></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light">成为随益平台会员</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">已完成帮扶对象</div></el-col>
</el-row>

<el-row type="flex" justify="center" class='diandianai'>
  <el-col :span="24"><div class="grid-content bg-purple-dark"><img src="../assets/images/diandianai.jpg" alt=""></div></el-col>
</el-row>
<el-row type="flex" justify="center" class='kuaigongyi'>
  <el-col :span="24"><div class="grid-content bg-purple-dark"><img src="../assets/images/kuaigongyi.jpg" alt=""></div></el-col>
</el-row>
 <swiper  height="2.04rem" class="activity" :show-dots="false">
      <swiper-item ><div class="swiper-slide1"><img src="../assets/images/top1.png" alt=""><span>牛奶小镇</span><br/><span>参与人数：112人</span><br/><span>捐助累计：2800天</span><br/><span>帮扶对象：191人</span></div></swiper-item>
      <swiper-item ><div class="swiper-slide2"><img src="../assets/images/top2.png" alt=""><span>阅食小景</span><br/><span>参与人数：36人</span><br/><span>捐助累计：695天</span><br/><span>帮扶对象：统计中...</span></div></swiper-item>
      <swiper-item ><div class="swiper-slide3"><img src="../assets/images/top3.png" alt=""><span>传微远航</span><br/><span>参与人数：36人</span><br/><span>捐助累计：695天</span><br/><span>帮扶对象：统计中...</span></div></swiper-item>
  </swiper> 
<div class='xinjintoutiao'>
<flexbox class="xinjintoutiao-inner">
      <flexbox-item :span="2"><div class="xinjintitle"><img src="../assets/images/xinjintoutiao.png" alt=""></div></flexbox-item>
  <flexbox-item><div class="flex-demo"><swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
      <swiper-item><div class="item"><img src="../assets/images/toutiao01.png" alt=""><div>目前入驻联盟商家xxx家</div><div>青秀区xxx蛋糕店（新竹店）入驻了</div></div></swiper-item>
      <swiper-item><div class="item"><img src="../assets/images/toutiao02.png" alt=""><div>目前入驻联盟商家xxx家</div><div>青秀区xxx蛋糕店（新竹店）入驻了</div></div></swiper-item>
      <swiper-item><div class="item"><img src="../assets/images/toutiao03.png" alt=""><div>目前入驻联盟商家xxx家</div><div>青秀区xxx蛋糕店（新竹店）入驻了</div></div></swiper-item>
    </swiper></div>
   </flexbox-item>
</flexbox>
</div>
<div class='service-center'>
<p ><span>|</span>公益事业服务中心</p>
 <swiper auto  class="service-center-swipter" :show-dots="false">
      <swiper-item ><div class=""><img src="../assets/images/servicecenter1.jpg" alt=""></div></swiper-item>
      <swiper-item ><div class=""><img src="../assets/images/servicecenter2.jpg" alt=""></div></swiper-item>
      <swiper-item ><div class=""><img src="../assets/images/servicecenter3.jpg" alt=""></div></swiper-item>
  </swiper> 
  
</div>
 
	
	<router-link to="/dda/index">
		<i class="icon">&#xe733;</i>
		<span>dda</span>
	</router-link>
		
	</div>
</template>

<script>
//import { swiper, swiperSlide } from 'vue-awesome-swiper'
//import nav from '@/components/nav'
import { ViewBox } from 'vux'
import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'
import { Flexbox, FlexboxItem } from 'vux'

//import { mapGetters } from 'vuex'

export default {
	
	components: {
		// swiper, 
		// swiperSlide,
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

		 auto:false,
		 loop:false
		}
	},
	created() {
        // if (this.travelListIndex.length == 0) {
        //     this.$store.dispatch('getTravelsList')
        // }
    },
	computed: {
		// ...mapGetters([
		// 	'travelListIndex'
		// ])
	},
	mounted(){
		
    },
	methods: {
		
	}
}
</script>

<style scoped lang="scss">
.home{
	padding: 0 .3rem;
}
.quxiang{
 background: url(../assets/images/headerquxiang.png) no-repeat;
 background-size: 100% 100%;
 height:.82rem;
 width: 100%;
}
.row-bg{
	height: 1.45rem;
	width: 100%;
	background: url(../assets/images/homehead.png) no-repeat ;
    background-size: 100% 100%;
}
.diandianai{
	margin-top: .39rem;
	width: 6.9rem;
	height: 1.28rem;
	margin: 0 auto;
}
.kuaigongyi{
	margin-top: .54rem;
	width: 6.9rem;
	height: 1.8rem;
}
.xinjintoutiao{
	height: .9rem;
	width: 100%;
	padding: .26rem 0;
	border: 1px solid red;
	.xinjintoutiao-inner{
		height: 100%;
	}
}
.xinjintitle{
	width: .64rem;
	height: .64rem;
}
.item{
	img{
       width: .8rem;
	   height:.8rem;
	   float: left;
	   margin-right: .3rem
	}
}
.service-center{
	width: 100%;
	span{
		color: #2da7e0;
		width: 4px;
		margin-right: .3rem;
	}
	p{
		font-size: .28rem
	}
	.service-center-swipter{
		margin: .26rem 0 .3rem 0;
		height: 2.2rem;
		img{
			width: 6.9rem;
			height: 100%;
		}
	}
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
 .banner {
        width: 100%;
        height:.74rem;
        border-top: 0.2rem solid #f5f5f5;
        padding: .3rem 0;
		margin-top: .4rem;
		color: #fff;
 }
.activity {
         width: 100%;
        height:2.04rem;
        border-top: 0.2rem solid #f5f5f5;
        padding: .3rem 0;
		margin-top: .4rem;
		color: #fff;
		img{
		   width: .48rem;
		   height:.46rem;	
		   float: right;
		   margin-right: .17rem;
		}
		.swiper-slide1,.swiper-slide2,.swiper-slide3{
		  width: 2.95rem;
		  height: 1.94rem;
		  border-radius: 5px;
		  background: url(../assets/images/databg.png) no-repeat ;
		  background-size: 100% 100%;
		}
	  }
	// .swiper-slide {
    //     text-align: center;
    //     font-size: 18px;
    //     background: #fff;
    //     /* Center slide text vertically */
    //     display: -webkit-box;
    //     display: -ms-flexbox;
    //     display: -webkit-flex;
    //     display: flex;
    //     -webkit-box-pack: center;
    //     -ms-flex-pack: center;
    //     -webkit-justify-content: center;
    //     justify-content: center;
    //     -webkit-box-align: center;
    //     -ms-flex-align: center;
    //     -webkit-align-items: center;
    //     align-items: center;
    //   }

</style>