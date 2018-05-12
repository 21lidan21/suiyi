<template>
   <div class="usercenter" style="padding-bottom: 2rem;">
      <div class="head" @click="$router.push('/viplogin')">
          <div class="login_head">
          <div class="headimg"><img src="../../assets/images/我的有色.png" width="100%" alt=""></div>
          <span>登录/注册</span>
          </div>
      </div>
      <div class='group1'>
 <flexbox>
      <flexbox-item><div class="flex-group1"   @click="showPlugin('/my/GetOrderList')"><img src="../../assets/images/myorder.png" width="80%" alt=""><span>我的订单</span></div></flexbox-item>
      <flexbox-item><div class="flex-group1"><img src="../../assets/images/helpman.png" alt=""><span>帮扶对象</span></div></flexbox-item>
      <flexbox-item><div class="flex-group1 last-child"><img src="../../assets/images/promote.png" alt=""><span>推广大使</span></div></flexbox-item>
</flexbox>
</div>
 <group>
      
      <cell-box is-link style="font-size: .28rem;line-height: .6rem; border-top:1px solid #F7F7F7;">
        我的地址
      </cell-box>
       <cell-box is-link style="font-size: .28rem; line-height: .6rem;">
        爱心体验券
      </cell-box>
      <cell-box is-link style="font-size: .28rem;line-height: .6rem;">
       我的收藏
      </cell-box>
       <cell-box is-link style="font-size: .28rem;line-height: .6rem;">
        周边领取点
      </cell-box>
      <cell-box is-link style="font-size: .28rem;line-height: .6rem;">
       联系客服
      </cell-box>
       <cell-box is-link :link="{path:'/userset'}" style="font-size: .28rem;line-height: .6rem;">
        个人设置
      </cell-box>
    </group>
   </div>
</template>
<script>
import {  GroupTitle, Group, Cell, CellBox,SwiperItem, Flexbox, FlexboxItem, XButton, Divider} from 'vux'
export default {
    components: {
		// swiper, 
		// swiperSlide,
		GroupTitle,
		XButton,
		Divider,
		Flexbox,
    FlexboxItem,
    Group,
    Cell,
    CellBox,
	},
  data() {
    return {};
  },
  methods:{
    goto(path) {
      this.$router.push(path);
    },
    showPlugin (path) {
    	if(sessionStorage.sessionId == "" || sessionStorage.sessionId == "undefined" || sessionStorage.sessionId == undefined){
    		this.$vux.alert.show({
		        title: '提示',
		        content: '您还未登录，请先登录',
		        onShow () {
		        },
		        onHide () {
		        }
		      })
    	}else{
    		this.$router.push(path);
    	}
    }
  }
};
</script>
<style scoped lang="scss">
.head{
    background: url(../../assets/images/个人中心背景.png) no-repeat ;
    background-size: 100% 100%;
    width: 100%;
    height: 4.6rem;
    line-height: 1rem;
    text-align: center;
    .headimg{
        width: 1rem;
        height: 1rem;
        background: #fff;
        border-radius: 50%;
        display: inline-block;
        margin: 1.8rem 0;
        margin-left: -1rem;
    }
    .login_head{
        margin: 0 auto;
        padding-right: 1rem;
        position: relative;
       span{
           font-family:PingFangSC-Regular;
            font-size:.32rem;
            color:#ffffff;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-right: .5rem;
            margin-top: -.44rem;
            width: 1.62rem;
            display: inline-block;
       }
    }
}
 .group1{
        
        .flex-group1{
            text-align: center;
            margin: .43rem 0 .1rem 0;
            border-right: #ccc solid 1px;
            font-size: .3rem;
            img{
                height:.28rem;
                width: .28rem; 
                margin-right: .1rem; 
               }
        }
        .flex-group1.last-child{
          border-right: transparent solid 1px;
        }
    }
</style>
