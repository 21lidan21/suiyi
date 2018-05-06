<template>
   <div >
    <div class="dda_detail_left">
        <div class="dda_detail_leader"></div>
    </div>
    
    
   </div>
</template>
<script>
export default {
  data(){
    return {

    }
  }
}
    
</script>
<style scoped >
  .dda_detail_left{
      width:5.16rem;
      height: 7.74rem;
      text-align: center;
    background: url(../../assets/images/dda_detail_left.png) no-repeat ;
  }
  .dda_detail_right{
    height: 100vh;
    background: url(../../assets/images/dda_detail_right.png) no-repeat right;
  }
  .dda_detail_middle{
    height: 100vh;
    background: url(../../assets/images/dda_detail_middle.png) no-repeat center;
  }
  .dda_detail_bg{
    height: 100vh;
    background: url(../../assets/images/dda_detail_bg.jpg) no-repeat bottom;
  }
  .dda_detail_leader{
    width: 3.62rem;
    height: 3rem;
    background: url(../../assets/images/dda_detail_leader.jpg) no-repeat center;
    background-size: 100%;
  }
</style>
