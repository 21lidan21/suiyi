<template>
	<div class="conten-body">
    <x-header   class="header" :left-options="{backText: ''}">查看领取点</x-header>
		<div class="title"><span @click="get11">门店排序</span></div>
		<el-menu
		:default-active="activeIndex2"
		class="el-menu-demo"
		mode="horizontal"
		@select="handleSelect"
		text-color="#000"
		active-text-color="#2da7e0"
		border:none >
		<el-menu-item index="1"><span>智能排序</span></el-menu-item>
		<el-menu-item index="2"><span>离我最近</span></el-menu-item>
		<el-menu-item index="3"><span>推荐领取点</span></el-menu-item>
		</el-menu>
		<div style="overflow:scroll;height:100%">
      <el-row class="tag"  v-for="item in dataList" :key="item.storeName">		
        <el-col class="tag-item" :span="8">
          <img class="log" src="../../assets/images/error.png" style="padding: 14px;" > </el-col>
        <el-col class="tag-item" :span="15">
          <div class="tag-item">
            <div v-text="item.storeName"></div>
            <div >
              <div style="width:7%;float:left;height:.7rem;margin-top:.22rem;"><img class="point" src="../../assets/images/point1.png"></div>
              <div style="width:85%;float:left;height:.7rem;margin:.22rem 0 0 .2rem;" v-text="item.address">27号</div>
            </div>
          </div>
        </el-col>
				<button class="btn" @click="goto(item)" style="border-right:none;float:right;border-radius: 20px 0px 0px 20px;position: absolute;right:0;color:#fff">查看导航</button>
		  </el-row>
		</div>
	</div>
</template>

<script>
import api from '../../fetch/api'
 import { mapGetters,mapActions } from 'vuex'
import { setTimeout } from 'timers';

export default {
  
  data() {
    return {
      strTest:'',
      activeIndex: "1",
      activeIndex2: "1",
      //dataList:[{"storeName":"新竹店","address":"新竹小区44栋","longitude":"108.3548919668","latitude":"22.821566423099725"},{"storeName":"商城总仓","address":"新竹小区44栋","longitude":"108.3548919668","latitude":"22.821566423099725"},{"storeName":"伶珑店","address":"仙葫开泰路伶龙市场内南外铺第68号","longitude":"108.4444","latitude":"22.818404239252168"},{"storeName":"开泰店","address":"仙葫开泰路63号金地世家1栋A23号1楼","longitude":"108.44528","latitude":"22.81803159753781"},{"storeName":"越秀店","address":"越秀路1号凯越国际9号楼一层2号商铺","longitude":"","latitude":""},{"storeName":"防城富康店","address":"防城镇金狮街公安局宿舍一楼铺面","longitude":"","latitude":""},{"storeName":"防城5号店","address":"辉达山水豪庭小区内","longitude":"","latitude":""},{"storeName":"防城4号店","address":"珍珠路桂海东盟小区","longitude":"","latitude":""},{"storeName":"防城3号店","address":"丽江花园1-26商铺","longitude":"","latitude":""},{"storeName":"防城2号店","address":"防东路27号","longitude":"","latitude":""},{"storeName":"防城1号店","address":"阳光海岸3期南门2803号","longitude":"","latitude":""},{"storeName":"上思店","address":"","longitude":"","latitude":""},{"storeName":"东兴金冠店","address":"东兴市金冠路14号—5号铺面","longitude":"","latitude":""},{"storeName":"总部","address":"","longitude":"","latitude":""}]
    };
  },
  computed:{
    ...mapGetters([
"dataList"
    ])
  },
   components:{
  },

  beforeRouteEnter(to, from, next) {
        next((vm) => {
           
            vm.get11(vm)
        })
    },
  methods: {
    ...mapActions({ getDetail: 'getDetail' }),
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    get11(){
      
      this.$store.dispatch("getDetail11",34567);
    },
    goto(item){
      console.log(item);
      localStorage.setItem("item",JSON.stringify(item));
      this.$router.push("./bmap");
    }
  }
};
</script>

<style scoped lang="scss">
.conten-body{
      width:100%;
      height:100%;
      background: #daf5f8;
    .title{
       width:100%;
       background:#ffffff;
       span{
         display:inline-block;
         height: 100%;
         padding: .3rem;
         border-bottom:solid 1px rgb(255, 208, 75);
       }
    }
    span{
      font-size: .24rem;
    }
    .tag{
      margin:.3rem;
      background:#fff;
      padding: .25rem;
      box-shadow:0 2px 10px 0 #d9d9d9;
      border-radius:.08rem;
      .log{
        background:#d8d8d8;
        width:1.3rem;
        height:1.3rem;
      }
      .tag-item {
        padding-left:.1rem;
        div{
          padding: .12rem 0 ;
          font-size: .35rem;
        }
        .point{
            width:.35rem;
            height:.35rem;
          margin: 0 auto;
        }
        span{
          padding-left:.1rem; 
          display:inline-block;
          font-size: .35rem;
          vertical-align: middle;
        }
      }
    }
      
 }
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
    height: .18rem;
    border: 1px solid #2da7e0;
    border-width: 1px 0 0 1px;
    transform: rotate(315deg);
    top: 8px;
    left: 7px;
    font-weight: bold;
}
</style>
