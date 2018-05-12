<template>
   <div >
     <x-header   class="header" :left-options="{backText: ''}">学校详情</x-header>
      <div class="school-content" v-text="info">
        </div> 
   </div>
</template>
<script>
import api from "../../fetch/api";
export default {
  data() {
    return {
      info:"加载中..."
    };
  },
  created(){
    this.getSchoolInfo();
  },
  methods:{
    getSchoolInfo(){
      var nowSchoolId = sessionStorage["nowSchoolId"];
      var param = {
        schoolId:nowSchoolId
      };
      api.getSchoolInfo(param).then(res=>{
        this.info = res[0].info;
      }).catch(err=>{
        alert(err.desc)
      })
    }
  }
};
</script>
<style>
.vux-header-title-area,
.vux-header .vux-header-title {
  color: #2da7e0 !important;
  font-size: 16px;
}
.vux-header .vux-header-left .left-arrow:before {
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
.weui-tab__panel {
  padding-bottom: 0;
}
</style>
<style scoped >
.header {
  background: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(225, 225, 225, 0.5);
}
.school-content{
  padding:3em;
  line-height:2em;
  text-indent:2em;
}
.dda_detail_left {
  margin: 1em 0 0 1em;
  width: 80%;
  height: 7rem;
  text-align: center;
  background: url(../../assets/images/dda_detail_left.png) no-repeat;
  background-size: 100%;
}
.fill {
  height: 0.5rem;
}
.dda_detail_content {
  text-indent: 2em;
  text-align: left;
  width: 5.6rem;
  font-size: 12px;
  line-height: 1.5;
  font-weight: bold;
  margin: 1em 0 0 0.98rem;
}
.dda_detail_right {
  box-sizing: border-box;
  width: 95%;
  padding: 0.5rem 0.7rem;
  background: url(../../assets/images/dda_detail_right.png) no-repeat right
    bottom;
  background-size: auto 100%;
}
.dda_detail_middle {
  height: 1.28rem;
  width: 5.55rem;
  line-height: 1.28rem;
  text-align: center;
  color: #2da7e0;
  margin: 0 auto;
  font-size: 18px;
  background: url(../../assets/images/dda_detail_middle.png) no-repeat;
  background-size: 100% 100%;
}
.line {
  border-top: 1px solid #2da7e0;
  margin: 1em 0 1.5em;
}
.info_header {
  color: #2da7e0;
  line-height: 0.42rem;
  font-size: 14px;
}
.info_content {
  text-indent: 2em;
  font-size: 12px;
  line-height: 1.5;
  font-weight: bold;
  padding: 1em 0;
}
.info_tip {
  color: #e6240f;
  font-size: 16px;
  font-weight: bold;
}
.info_button {
  background-image: linear-gradient(-180deg, #2da7e0 0%, #77baf1 100%);
  border-radius: 1rem;
  width: 3.6rem;
  height: 0.8rem;
  color: white;
  text-align: center;
  line-height: 0.8rem;
  font-size: 16px;
  margin: 3em auto;
}
.dda_detail_bg {
  background: url(../../assets/images/dda_detail_bg.jpg) no-repeat 10% 10%;
}
.dda_detail_leader {
  margin: 0 0 0 1.5rem;
  height: 2.77rem;
  width: 4.5rem;
  background: url(../../assets/images/dda_detail_leader.jpg) no-repeat center;
  background-size: 100%;
}
.dda_detail_icons {
  height: 0.8rem;
  background: url(../../assets/images/dda_detail_icons.png) no-repeat center;
  background-size: 80%;
}
</style>
