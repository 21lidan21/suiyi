<template>
	<div class="home">
<!-- <el-row type="flex" class="row-bg">
  <el-col :span="9"><div class="grid-content bg-purple">公益物质去向查询中心</div></el-col>
  <el-col :span="9"><div class="grid-content bg-purple-light">南宁</div></el-col>
  
</el-row> -->
<el-row :gutter="20" class='quxiang'>
  <el-col :span="20"><div class="grid-content bg-purple">公益物质去向查询中心</div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">南宁</div></el-col>
</el-row>
<el-row type="flex" class="row-bg" justify="space-between">
  <el-col :span="6"><div class="grid-content bg-purple"><span>9304名</span><br/><span>加入随益平台</span></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light">成为随益平台会员</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">已完成帮扶对象</div></el-col>
</el-row>
		<!--<div class="banner">
			首页
			  <swiper :options="swiperOption" class="swiper-box">
					<swiper-slide class="swiper-item"><img src="../assets/images/y-banner01.jpg" alt="..."></swiper-slide>
					<swiper-slide class="swiper-item"><img src="../assets/images/y-banner03.jpg" alt="..."></swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
			</swiper> 
		</div>-->
	</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
//import nav from '@/components/nav'


import { mapGetters } from 'vuex'

export default {
	
	components: {
		swiper,
		swiperSlide,
		//'v-nav': nav,
		//travelList
	},
	data() {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				slidesPerView: 1,
				autoplay: 5000,
				paginationClickable: true,
				spaceBetween: 30,
				loop: true
			}
		}
	},
	created() {
        if (this.travelListIndex.length == 0) {
            this.$store.dispatch('getTravelsList')
        }
    },
	computed: {
		...mapGetters([
			'travelListIndex'
		])
	},
	mounted(){
		
    },
	methods: {
		
	}
}
</script>

<style scoped lang="scss">

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
/* .banner {
	.swiper-box {
		width: 100%;
		height: 100%;
		margin: 0 auto;
		.swiper-item {
			height: px2rem(380px);
			text-align: center;
			font-size: 18px ;
			background: #fff;
			display: flex;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center;
			align-items: center;
			img {
				width: 100%;
			}
		}
	}
} */


</style>