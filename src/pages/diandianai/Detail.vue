<template>
   <div class="dda_detail_bg">
     <x-header   class="header" :left-options="{backText: ''}">点点爱详情</x-header>
    <div class="dda_detail_left">
        <div class="fill"></div>
        <div class="dda_detail_leader"></div>
        <div class="dda_detail_content">
          2018年，牛奶小镇公益项目支持并参与执行南宁电视台发起的《我是领队》—“为乡村儿童捐牛奶“活动， 共同倡议并聚集每一位热心公益的人士以力所能及的方式，长期为乡村儿童募捐爱心牛奶。通过“随益”公益平台，共同推出“点点爱”为主题的“公益+”活动模式，同时组织“送爱心牛奶下乡”等方式，活动由广西民族教育发展基金会的监督，活动爱心物资去向随时可查可跟踪,您每喝一盒牛奶，等于向乡村儿童捐出1天爱心牛奶，“点点爱.公益”，我们一起行动!
        </div>
    </div>
    <div class="dda_detail_middle">丰富的公益活动项目</div>
    <div class="dda_detail_right">
      <ul>
        <li>
          <p class="info_header">一、加入“点点爱”公益活动</p>
          <p class="info_content">您喝一盒牛奶，即等于向您指定的山区贫困儿童捐赠一天的牛奶，同时成为平台“天使会员“。参加”点点爱.公益“活动——随时随地随手做公益。</p>
        </li>
        <div class="line"></div>
        <li>
          <p class="info_header">二、加入“3+1”公益计划及“5年爱心奶”计划</p>
          <p class="info_content">“3+1公益计划”——当您连续饮用牛奶180天，为一名乡村儿童捐赠了一年的爱心牛奶。</p>
          <p class="info_content">“5爱年心奶”计划——与家人或朋友一起，共同帮助1名乡村儿童获得持续5年每天1盒的牛奶饮用。</p>
        </li>
        <div class="line"></div>
      </ul>
      <p class="info_tip">更多“公益活动”敬请您关注、期待</p>
      <router-link to="/dda/helpinfo">
        <div class="info_button">加入公益计划</div>
     </router-link>
     <p class="dda_detail_icons"></p>
    </div>
    <div class="fill"> </div>
   </div>
</template>
<script>
export default {
  data() {
    return {};
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
