<template>
   <div class="dda-index-bg pad">
     <div class="fill"></div>
     <router-link to="/dda/party">
        <div class="btn in">参加活动</div>
     </router-link>
     <router-link to="/dda/detail">
        <div class="btn detail">了解详情 >></div>
     </router-link>
   </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped >
.dda-index-bg {
  height: 100vh;
  background: url(../../assets/images/dda_index_bg.jpg) no-repeat center;
  background-size: 100%;
  text-align: center;
}
.btn {
  line-height: .7rem;
  color: white;
}
.fill{
  height: 67.5vh;
}
.in {
  background-image: linear-gradient(-180deg, #2da7e0 0%, #77baf1 100%);
  border-radius: 42px;
  width:3.2rem;
  margin:0 auto;
  text-align:center;
}
.detail {
  width: 2rem;
  padding-top: .5rem;
  text-decoration: bottom;
  border-bottom: 1px solid white;
  margin:0 auto;
  text-align:center;
}
</style>
