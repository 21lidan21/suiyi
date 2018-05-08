<template>
   <div>
     <x-header   class="header" :left-options="{backText: ''}">点点爱公益</x-header>
   <div class="dda-index-bg">
     <div class="fill"></div>
     <router-link to="/dda/join">
        <div class="btn in">参加活动</div>
     </router-link>
     <router-link to="/dda/detail">
        <div class="btn detail">了解详情 >></div>
     </router-link>
   </div>
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
</style>
<style scoped >
.header {
  background: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(225, 225, 225, 0.5);
}
.dda-index-bg {
  height: 96vh;
  background: url(../../assets/images/dda_index_bg.jpg) no-repeat;
  background-size: cover;
  text-align: center;
}
.btn {
  line-height: 0.7rem;
  color: white;
}
.fill {
  height: 65vh;
}
.in {
  background-image: linear-gradient(-180deg, #2da7e0 0%, #77baf1 100%);
  border-radius: 42px;
  width: 3.2rem;
  margin: 0 auto;
  text-align: center;
}
.detail {
  width: 2rem;
  padding-top: 0.5rem;
  text-decoration: bottom;
  border-bottom: 1px solid white;
  margin: 0 auto;
  text-align: center;
}
</style>
