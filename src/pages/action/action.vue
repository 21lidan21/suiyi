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
    <div height="2.04rem" class="activity" >
      <div class="swiper-slide1"><img src="../../assets/images/top1.png" alt=""><span>牛奶小镇</span><br/><span>参与人数：112人</span><br/><span>捐助累计：2800天</span><br/><span>帮扶对象：191人</span></div>
      <div class="swiper-slide2"><img src="../../assets/images/top2.png" alt=""><span>阅食小景</span><br/><span>参与人数：36人</span><br/><span>捐助累计：695天</span><br/><span>帮扶对象：统计中...</span></div>
      <div class="swiper-slide3"><img src="../../assets/images/top3.png" alt=""><span>传微远航</span><br/><span>参与人数：36人</span><br/><span>捐助累计：695天</span><br/><span>帮扶对象：统计中...</span></div>
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