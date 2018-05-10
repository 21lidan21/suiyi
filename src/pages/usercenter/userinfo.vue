<template>
   <div class="usercenter">
      <div class="head" @click="$router.push('/login')">
          <div class="login_head">
          <div class="headimg"><img :src="imgurl" alt=""></div>
          <span>{{name}}</span><br/>
         <span>{{levelName}}</span>
    <flexbox>
      <flexbox-item ><div class="flex-demo"> <span>{{point}}</span>
         <span>{{doNum}}</span></div></flexbox-item>
      <flexbox-item :span="4"><div class="flex-demo"><span>{{showPrice}}</span></div></flexbox-item>
    </flexbox>
          
        
         
          </div>
      </div>
      <div class='group1'>
 <flexbox>
      <flexbox-item><div class="flex-group1"><img src="../../assets/images/myorder.png" alt=""><br/><span>我的订单</span></div></flexbox-item>
      <flexbox-item><div class="flex-group1"><img src="../../assets/images/helpman.png" alt=""><br/><span>帮扶对象</span></div></flexbox-item>
      <flexbox-item><div class="flex-group1 last-child"><img src="../../assets/images/promote.png" alt=""><br/><span>推广大使</span></div></flexbox-item>
</flexbox>
</div>
 <group>
      
      <cell-box is-link>
        我的地址
      </cell-box>
       <cell-box is-link>
        爱心体验券
      </cell-box>
      <cell-box is-link>
       我的收藏
      </cell-box>
       <cell-box is-link>
        周边领取点
      </cell-box>
      <cell-box is-link>
       联系客服
      </cell-box>
       <cell-box is-link :link="{path:'/userset'}">
        个人设置
      </cell-box>
    </group>
   </div>
</template>

<script>
import { Scroller } from 'vux'
import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'
import { Flexbox, FlexboxItem } from 'vux'
import { CellBox } from 'vux'
import { XInput, Group,  Cell } from 'vux'


import { PopupRadio,PopupPicker, Datetime } from 'vux'
import api from '../../fetch/api'
import * as _ from '../../util/tool'
export default {
    components: {
		// swiper, 
		// swiperSlide,
		Scroller,
		Swiper,
		SwiperItem,
		GroupTitle,
		XButton,
		Divider,
		Flexbox,
        FlexboxItem,
        Group,  
        CellBox,
        XInput,  
        Cell,
        PopupRadio,
        PopupPicker, 
        Datetime 
    },
    
  data() {
    return {
        name:'',
        option1:'',
        options1:[{key:'0',value:'男'},{key:'1',value:'女'}],
        value5:'',
        cardID:'',
        phone:'',
        birthDay:'',
        imgurl:'',
        levelName:'',
        point:'',
        doNum:'',
        showPrice:''
    };
  },
  created() {
  this.getUserInfo()
  },
   methods: {
       
      
       getUserInfo(){
           
        //    let data = {
        //        "sessionID": sessionStorage.sessionId            
        //     }
            api.GetUserInfoByID()
                .then(res => {
                    console.log(res)
                    if(res) {
                      console.log(this.name)  
                       this.name=res[0].name
                       this.levelName=res[0].levelName
                       this.point=res[0].point
                       this.doNum=res[0].doNum
                       this.showPrice=res[0].showPrice
                       this.imgurl=res[0].headImgUrl
                    }
                })
                .catch(error => {
                    console.log(error)
                })
       },
     
	loginout(){
      sessionStorage.sessionId =''
      this.$router.replace('/user')
    }	
	}
};
</script>
<style scoped lang="scss">
.head{
    background: url(../../assets/images/usercenterbg1.jpg) no-repeat ;
    background-size: 100% 100%;
    width: 100%;
    height: 4.6rem;
    line-height: 1rem;
    //margin: 1.8rem auto;
    text-align: center;
    .headimg{
        width: 1rem;
        height: 1rem;
        background: #fff;
        border-radius: 50%;
        display: inline-block;
        margin: 1.8rem 0;
        margin-left: -1.2rem;
    }
    .login_head{
        text-align: center;
        margin: 0 auto;
       // position: relative;
        width: 4rem;
    //    span{
    //        font-family:PingFangSC-Regular;
    //         font-size:.36rem;
    //         color:#ffffff;
    //         position: absolute;
    //         top: 50%;
    //         left: 50%;
    //         margin-left: .3rem;
    //         margin-top: -.44rem;
    //         width: 1.62rem;
    //         display: inline-block;
    //    }
    }
}
 .group1{
        
        .flex-group1{
            text-align: center;
            margin: .43rem 0 .41rem 0;
            border-right: #ccc solid 1px;
            img{
                height:.36rem;
                width: .36rem;  
               }
        }
        .flex-group1.last-child{
          border-right: transparent solid 1px;
        }
    }
</style>
