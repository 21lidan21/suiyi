<template>
   <div class="usercenter" style="padding-bottom:2rem">
      <div class="head" >
        <div v-if="isShow">
           <div style="padding:.2rem 1.5rem;"><img src="../../assets/images/topDiv.png" alt=""></div>
           <div class='groupDiv1'> 
                <flexbox>
                  <flexbox-item :span=2 class="headimg">
                     <img :src="imgurl" alt="">
                  </flexbox-item>
                  <flexbox-item :span=3 style="text-align:center;margin-top:-.3rem;color:#ffffff">
                      {{name}}
                  </flexbox-item>
                   <flexbox-item :span=3  >
                  </flexbox-item> 
                  <flexbox-item >
                    <div  :class="[{'pthyImg':'pthyImg'==img,'tshyImg':'tshyImg'==img,'jxhyImg':'jxhyImg'==img,'mxhyImg':'mxhyImg'==img},'rightDiv']"></div>
                  </flexbox-item>
                </flexbox>
            </div>
            <div class='group2'> 
                <flexbox>
                  <flexbox-item :span=3.3 class="divgroup" >
                      <div>余额</div>
                      <div v-text="showPrice" style="border-right:1px solid #ffffff"></div>
                  </flexbox-item>
                  <flexbox-item class="divgroup">
                      <div style="margin-left:.15rem">爱心值</div>
                      <div style="margin-left:.15rem" v-text="point"></div>
                  </flexbox-item>
                  <flexbox-item :span=4 class="divgroup1">
                      <div><img src="../../assets/images/fmilk.png" alt=""/><span>x{{doNum}}</span></div>
                  </flexbox-item>
                </flexbox>
            </div>
            </div>
      </div>  
      <div class='group1'>
      <flexbox>
        <flexbox-item><div class="flex-group1" @click="goto('/my/GetOrderList')"><img src="../../assets/images/myorder.png" width="80%" alt=""><span>我的订单</span></div></flexbox-item>
        <flexbox-item><div class="flex-group1" @click="gotoBF"><img src="../../assets/images/helpman.png" alt=""><span>帮扶对象</span></div></flexbox-item>
        <flexbox-item><div class="flex-group1 last-child" @click="gotoBF"><img src="../../assets/images/promote.png" alt=""><span>推广大使</span></div></flexbox-item>
      </flexbox>
</div>
 <group>
      
      <cell-box is-link style="font-size: .28rem;line-height: .6rem;border-top:1px solid #F7F7F7;">
        <div style="width:100%" @click="gotoBF">我的地址</div>
      </cell-box>
       <cell-box is-link style="font-size: .28rem;line-height: .6rem;">
          <div style="width:100%" @click="gotoBF">爱心体验券</div>
      </cell-box>
      <cell-box is-link style="font-size: .28rem;line-height: .6rem;">
         <div style="width:100%" @click="gotoBF">我的收藏</div>
      </cell-box>
       <cell-box is-link :link="{path:'/dda/receive'}" style="font-size: .28rem;line-height: .6rem;">
        周边领取点
      </cell-box>
      <cell-box is-link style="font-size: .28rem;line-height: .6rem;">
         <div style="width:100%" @click="gotoBF">联系客服</div>
      </cell-box>
       <cell-box is-link :link="{path:'/my/userset'}" style="font-size: .28rem;">
        个人设置
      </cell-box>
    </group>
    <!--提示框-->
    <div class="pop" v-if="isPopUp" @click="close(0)">
        <div class="popup" v-if="isPopUp">
         <div class="dda_join_pop_del" ></div>
         <div class="dda_join_pop_up"></div>
       </div>
    </div>
   </div>
</template>

<script>
import { Scroller } from "vux";
import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from "vux";
import { Flexbox, FlexboxItem } from "vux";
import { CellBox } from "vux";
import { XInput, Group, Cell } from "vux";
import { Card } from "vux";

import { PopupRadio, PopupPicker, Datetime } from "vux";
import api from "../../fetch/api";
import * as _ from "../../util/tool";
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
    Datetime,
    Card
  },

  data() {
    return {
      isShow:false,
      name: "",
      option1: "",
      options1: [{ key: "1", value: "男" }, { key: "2", value: "女" }],
      value5: "",
      cardID: "",
      phone: "",
      birthDay: "",
      imgurl: "../../assets/images/defualt.png",
      levelName: "",
      point: "",
      doNum: "",
      showPrice: "",
      isPopUp: false,
      img:'',
    };
  },
  created() {
    this.isShow = true;
    this.getUserInfo();
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    gotoBF(item) {
      this.isPopUp = true;
      document.body.style = "overflow：hidden;";
    },
    close(type) {
      if (type) {
      }
      this.isPopUp = false;
    },
    setImg(levelName){
      if(levelName=="普通会员"){
          this.img = 'pthyImg';
      }else if(levelName=="天使会员"){
        this.img = 'tshyImg';
      }
      else if(levelName=="明星会员"){
         this.img = 'mxhyImg';
      }
      else if(levelName=="巨星会员"){
          this.img = 'jxhyImg';
      }else{
          this.img = 'pthyImg';
      }
    },
    getUserInfo() {
      this.name = sessionStorage["name"] || "";
      this.levelName = sessionStorage["levelName"] || "";
      this.setImg(this.levelName);//设置等级卡片
      this.point = sessionStorage["point"] || "";
      this.doNum = sessionStorage["doNum"] || "";
      this.showPrice = sessionStorage["showPrice"] || "";
      this.imgurl = sessionStorage["headImgUrl"] || "";
      if (this.name == "") {
        api
          .GetUserInfoByID()
          .then(res => {
            console.log(res);
            if (res) {
              console.log(this.name);
              this.name = res[0].name;
              this.levelName = res[0].levelName;
              this.setImg(this.levelName);//设置等级卡片
              this.point = res[0].point;
              this.doNum = res[0].doNum;
              this.showPrice = res[0].showPrice;
              this.imgurl = res[0].headImgUrl;
                sessionStorage['name'] = res[0].name;
                sessionStorage['levelName'] = res[0].levelName;
                sessionStorage['point'] = res[0].point;
                sessionStorage['doNum'] = res[0].doNum;
                sessionStorage['showPrice'] = res[0].showPrice;
                sessionStorage['headImgUrl'] = res[0].headImgUrl;
            }
          })
          .catch(error => {
            this.$router.replace("/user");
          });
      }
    },

    loginout() {
      sessionStorage.sessionId = "";
      this.$router.replace("/user");
    }
  }
};
</script>
<style scoped lang="scss">
.head {
  background: url(../../assets/images/usercenterbg1.jpg) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 4.6rem;
  line-height: 1rem;
  //margin: 1.8rem auto;
  // text-align: center;
 .groupDiv1 {
    margin:-0.2rem;
    margin-left:.2rem; 
  .headimg {
    img{
      width: 1.2rem;
      border-radius: 0.6rem;
    }
    
 }
    // margin: 1.8rem 0;
    // margin-left: -1.2rem;
  }
  span {
    color: #ffffff;
    margin-top:-1rem; 
  }
  .levelName {
    float: right;
    width: 1.5rem;
    height: 0.46rem;
    display: inline-block;
    background-color: #fff;
    text-align: center;
    line-height: 0.5rem;
    margin-top: 1.7rem;
    border-top-left-radius: 2em;
    -webkit-border-top-left-radius: 2em;
    border-bottom-left-radius: 2em;
    -webkit-border-bottom-left-radius: 2em;
    font-family: PingFangSC-Regular;
    font-size: 0.18rem;
    color: #f0a807;
    letter-spacing: 0.9px;
  }
}
.rightDiv{
        height:.6rem;
        width: 2rem;
        margin-top:-.5rem;
        text-align:center;
 }
 .pthyImg{
      background: url(../../assets/images/pthy.png) no-repeat;
      background-size: 100% 100%;
 }
  .mxhyImg{
      background: url(../../assets/images/mxhy.png) no-repeat;
      background-size: 100% 100%;
 }
  .tshyImg{
      background: url(../../assets/images/tshy.png) no-repeat;
      background-size: 100% 100%;
 }
  .jxhyImg{
      background: url(../../assets/images/jxhy.png) no-repeat;
      background-size: 100% 100%;
 }
.point,
.doNum {
  display: inline-block;
  width: 2.24rem;
  height: 0.8rem;
  float: left;
  text-align: center;
}
.point span:first-child,
.doNum span:first-child {
  font-family: PingFangSC-Regular;
  font-size: 0.3rem;
  color: #ffffff;
}
.point span:last-child,
.doNum span:last-child {
  font-family: PingFangSC-Regular;
  font-size: 0.5rem;
  color: #ffffff;
  line-height: 0.5rem;
}
.divgroup {
  height: 50px;
  div {
    padding: 0 0.4rem;
    height: 0.5rem;
    font-size: 0.28rem;
    color: #ffffff;
  }
}
.divgroup1 {
  height: 50px;
  div {
    img {
      width: 0.3rem;
      height: 0.6rem;
      margin-left: 0.3rem;
    }
    span {
      font-size: 0.28rem;
      color: #ffffff;
      text-align: center;
      padding-left: 0.5rem;
    }
    margin-top: 0.4rem;
    padding: 0 0.4rem;
    height: 0.5rem;
    text-align: left;
  }
}
.group1 {
  .flex-group1 {
    text-align: center;
    margin: 0.43rem 0 0.1rem 0;
    border-right: #ccc solid 1px;
    font-size: 0.3rem;
    img {
      height: 0.28rem;
      width: 0.28rem;
      margin-right: 0.1rem;
    }
  }
  .flex-group1.last-child {
    border-right: transparent solid 1px;
  }
}
.pop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.3) !important;
}
.popup {
  padding: 2rem 0 0;
}
.dda_join_pop_del {
  background: url(../../assets/images/dda_join_pop_del.png) no-repeat;
  background-size: cover;
  width: 0.72rem;
  height: 1.2rem;
  margin-left: 80%;
}

.dda_join_pop_up {
  background: url(../../assets/images/qidai.png) no-repeat;
  background-size: cover;
  width: 6.2rem;
  height: 7.87rem;
  margin: 0 auto;
  text-align: center;
}
</style>
