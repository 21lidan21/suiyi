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

<el-row type="flex" justify="center" class='diandianai'>
  <el-col :span="24"><div class="grid-content bg-purple-dark"><img src="../assets/images/diandianai.jpg" alt=""></div></el-col>
</el-row>
<el-row type="flex" justify="center" class='kuaigongyi'>
  <el-col :span="24"><div class="grid-content bg-purple-dark"><img src="../assets/images/kuaigongyi.jpg" alt=""></div></el-col>
</el-row>
<div class="activity">
	<swiper :options="swiperOption11" :not-next-tick="true">
		<swiper-slide class="swiper-item"><div class="swiper-slide1"><img src="../assets/images/top1.png" alt=""><span>牛奶小镇</span><br/><span>参与人数：112人</span><br/><span>捐助累计：2800天</span><br/><span>帮扶对象：191人</span></div></swiper-slide>
		<swiper-slide class="swiper-item"><div class="swiper-slide2"><img src="../assets/images/top2.png" alt=""><span>阅食小景</span><br/><span>参与人数：36人</span><br/><span>捐助累计：695天</span><br/><span>帮扶对象：统计中...</span></div></swiper-slide>
		<swiper-slide class="swiper-item"><div class="swiper-slide3"><img src="../assets/images/top3.png" alt=""><span>传微远航</span><br/><span>参与人数：36人</span><br/><span>捐助累计：695天</span><br/><span>帮扶对象：统计中...</span></div></swiper-slide>
   </swiper>
</div>	
 <div class="banner">
	
      <swiper :options="swiperOption" :not-next-tick="true">
        <swiper-slide >
          slide1<img src="../assets/images/top1.png" alt="">
        </swiper-slide>
        <swiper-slide >
          slide2<img src="../assets/images/top1.png" alt="">
        </swiper-slide>
        <swiper-slide >
          slide3<img src="../assets/images/top1.png" alt="">
        </swiper-slide>
        
      </swiper>
	  
    </div> 
	
	</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
//import nav from '@/components/nav'


//import { mapGetters } from 'vuex'

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
		//direction : 'vertical',
         autoplay: 3000,
          direction : 'vertical',
          grabCursor : true,
          setWrapperSize :true,
		  autoHeight: true,
		  loop:true,
        onClick: swiper => {
          if (swiper.realIndex === 0) {
            this.jph()
          } else if (swiper.realIndex === 1) {
            this.luckdraw()
          } else if (swiper.realIndex === 2) {
            this.detailLink(1)
          } else if (swiper.realIndex === 3) {
            this.detailLink(2)
          } else {
            return
          }
        }
      },
	swiperOption11: {
        slidesPerView: 2.15,
        spaceBetween: 5,
        setWrapperSize: true,
        mousewheelControl: true,
        observeParents: true,
        onClick: swiper => {
          if (swiper.clickedIndex === 0 || swiper.clickedIndex === 3 || swiper.clickedIndex === 6) {
            this.$router.push('/missioncenter')
          } else if (swiper.clickedIndex === 1 || swiper.clickedIndex === 4 || swiper.clickedIndex === 7) {
            this.$router.push('/mycard')
          } else {
            this.$router.push('/signin')
          }
        }
	  },     

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
	.swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

</style>