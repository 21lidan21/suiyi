<template>
	<div>
    <x-header   class="header" :left-options="{backText: ''}">帮扶对象信息</x-header>
		<div style=" border-bottom:solid 1px rgb(255, 208, 75);padding:10px;width:70px" class="doing">我们在行动</div>
      <group>
    <selector title="title" v-model="school" options="options" @on-change="changeData" ></selector>
  </group>

    <div class="footer">我要捐助TA</div>
	</div>
</template>

<script>
import { Selector,Group } from 'vux'
export default {
  components: {
    Selector,
    Group
  },
  
  data() {
    return {
      title:"学校",
      school:"xxxx",
      options:[1,2,3],
      placeholder:"placeholder"
    };
  },

  methods: {
    changeData(){
      console.log(33)
    }
  }
};
</script>

<style scoped lang="scss">
//@import "../../assets/css/function";
.footer{
  position: absolute;
  bottom: 2em;
  left: 2em;
  right: 2em;
  background: #2da7e0;
  line-height: 2;
  border-radius: 10px;

  text-align: center;

  font-size: 18px;
  color: #ffffff;
}
.header {
  background: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(225, 225, 225, 0.5);
}
.doing{
  color:rgb(255, 208, 75);
}
</style>
<style>
.vux-header-title-area,
.vux-header .vux-header-title {
  color: #2da7e0 !important;
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
