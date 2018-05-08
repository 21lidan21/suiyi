<template>
   <div class="login_bg">
     <group title="">
      <x-input title="手机号码格式化" mask="999 9999 9999" v-model="maskValue" :max="13" is-type="china-mobile"></x-input>
      <x-input title="请输入验证码" class="weui-vcode">
        <x-button slot="right" type="primary" mini>发送验证码</x-button>
      </x-input>
       <x-button   @click.native="login" > 登录</x-button>
     
     </group>
   </div>
</template>
<script>
import { XInput, Group, XButton, Cell } from 'vux'

export default {
  components: {
    XInput, 
    Group, 
    XButton, 
    Cell
  },
  data() {
    return {
        maskValue:'',
        iconType: ''
    };
  },
  methods: {
	login(){
        console.log(1)
    }	
	}
};
</script>
<style scoped >
.login_bg{
     background: url(../../assets/images/login_bg.jpeg) no-repeat ;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
}
x-button{
    background: red;
    
}

</style>
