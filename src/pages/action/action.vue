<template>
  <div>
    <!-- <scroller lock-x scrollbar-y use-pulldown @pulldown:loading="load" enable-horizontal-swiping>
       <div class="box2">
          <swiper :list="list" direction="horizontal" auto :min-moving-distance="20" height="180px"></swiper>
       </div>
    </scroller> -->
    <!-- <swiper auto height="100px">
      <swiper-item class="black"><h2 class="title fadeInUp animated">它无孔不入</h2></swiper-item>
      <swiper-item class="green"><h2 class="title fadeInUp animated">你无处可藏</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">不是它可恶</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">而是它不懂你</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">我们试图</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">做些改变</h2></swiper-item>
    </swiper> -->
    <div class='chuanweixingdong'>
<p ><span>|</span>传微行动</p>
 <swiper auto  class="chuanweixingdong-swipter" :show-dots="false">
      <swiper-item ><div class="cw1"><p>18年元旦，我们发起了浩坤三合小学公益送奶活动…</p></div></swiper-item>
      <swiper-item ><div class="cw2"><p>18年元旦，我们发起了浩坤三合小学公益送奶活动…</p></div></swiper-item>
      <swiper-item ><div class="cw3"><p>18年元旦，我们发起了浩坤三合小学公益送奶活动…</p></div></swiper-item>
  </swiper>   
</div>

  </div>
</template>

<script>
import { Scroller } from 'vux'
import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'
export default {
  components: {
    Scroller,
    Swiper,
    SwiperItem
  },
  methods: {
    load (uuid) {
      const _this = this
      setTimeout(function () {
        _this.$broadcast('pulldown:reset', uuid)
      }, 2000)
    }
  },
  data () {
    return {
      
    }
  }
}
</script>
<style scoped lang="scss">
.black{
    background: #000;

}
.green{
    background: green;
    
}
.chuanweixingdong-swipter{
	.cw1,.cw2,.cw3{
	height: 2.2rem;
	width: 100%;
	background-size: 100% 100%;
	position: relative;
	}
	.cw1{
	
	background: url(../../assets/images/cwxd01.jpg) no-repeat ;

	}
	.cw2{
	
	background: url(../../assets/images/cwxd02.jpg) no-repeat ;

	}
	.cw3{
	
	background: url(../../assets/images/cwxd03.jpg) no-repeat ;
	
	}
	p{
	
		position: absolute;
		bottom: 0;
        height: .68rem;
        width: 100%;
		background:rgba(0,0,0,0.40);
		font-family:PingFangSC-Regular;
		font-size:.24rem;
		color:#ffffff;
		letter-spacing:1.02px;
		text-align:left;
	}
}
.activity {
         width: 10rem;
        height:2.04rem;
        border-top: 0.2rem solid #f5f5f5;
        padding: .3rem 0;
		margin-top: .4rem;
        color: #fff;
        overflow: hidden;
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
		  background: url(../../assets/images/databg.png) no-repeat ;
          background-size: 100% 100%;
          float: left;
          margin-right: .32rem;
		}
	  }
</style>