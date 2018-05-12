<template>
	<div class="container" >
    <x-header class="header" :left-options="{backText: '',preventGoBack:true} " @on-click-back="resetResize" >我要加入</x-header>
    <div style="width: 65%; margin: 1rem auto;">
      <img src="../../assets/images/wp01.jpg" width="100%;" alt="">
    </div>
    <div class="main">
    	<div style="border: none;"></div>
    	<div><input type="text" placeholder="姓名" /></div>
    	<div><input type="text" placeholder="联系电话" /></div>
    	<div><input type="text" placeholder="单位名称" /></div>
    	<div><input type="text" placeholder="单位地址" /></div>
    	<div>
    		<span style="color:#BCBCBC;">加入方式</span><span style="display: inline-block;float: right;color:#58b6e8;" dir="ltr">个人</span>
    	</div>
    	<div>
    		<span style="color:#BCBCBC;">加入性质</span><span style="display: inline-block;float: right;color:#58b6e8;" dir="ltr">理事单位</span>
    	</div>
    	<div class="bangfu" @click="goto" style="text-align:center;margin:.5rem 0;background-color: #43ACE5;border-radius: 1rem;">
	    	<div style=" color:#ffffff;font-size:.25rem;">提 交 资 料</div>
	    </div>
    </div>
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

export default {
  data() {
    return {
     isPopUp: false,
    };
  },
  methods: { 
    resetResize(){
      
      setTimeout(()=>{

     
			var docEl = document.documentElement;
			    var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if (clientWidth >= 640) {
          docEl.style.fontSize = '100px';
        } else {
          docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
          var div = document.createElement('div');
          div.style.width = '1.4rem';
          div.style.height = '0';
          document.body.appendChild(div);
          var ideal = 140 * clientWidth / 750;
          var rmd = (div.clientWidth / ideal);
          if (rmd > 1.2 || rmd < 0.8) {
            docEl.style.fontSize = 100 * (clientWidth / 750) / rmd + 'px';
          }
          document.body.removeChild(div);
        };
        
      this.$router.push("/home")
      },400)
		},
    goto(item){
         this.isPopUp = true;
         document.body.style="height：100%;overflow：hidden;";
          // console.log(item);
          // localStorage.setItem("item",JSON.stringify(item));
          // this.$router.push("./bmap");
        },
        close(type) {
          if (type) {
          }
          this.isPopUp = false;
        },
  }
};
</script>

<style scoped lang="scss">
input{
  line-height: 2em;
}
.header { 
  background:#ffffff;
  box-shadow:0 1px 2px 0 rgba(225,225,225,0.50);
}
.container{
	width:100%;
	height:100%;
	background: #EDF8FF; 
	padding-bottom: .5rem;
}
.main{
	padding:0 .3rem .2rem .3rem;
	margin:.5rem .3rem;
	background: #ffffff;
	border-radius: .15rem;
	div{
		border-bottom: 1px solid #F6F6F6;
		line-height: 1rem;
	}
	.textarea{
		border: 1px solid #F6F6F6;
		margin-top:.5rem;
		padding:.2rem .3rem;
		height:2rem;
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
  background: url(../../assets/images/wp02.png) no-repeat;
  background-size: cover;
  width: 6.2rem;
  height: 7.87rem;
  margin: 0 auto;
  text-align: center;
}
.alertDiv{
  z-index: 1000;
  position: absolute;
  bottom: 0rem;
  height: 2.3rem;
  width: 100%;
  padding: .3rem;
  background: #ffffff;
  div{
    margin-top: .1rem;
    text-align: center;
    width: 85%;
    padding: .2rem;
    border: 1px solid #dddddd;
  }
}
.footer{
  height: 1.2rem;
  background: #fff;
  position: fixed;
  bottom: 200;
  z-index: 1000;
  width: 100%;
  .title{
    padding: .2rem 0 0 .2rem;
     width: 60%;
     float: left;
     font-size: .35rem;
  }
  .address{
    padding: .2rem;
  width: 60%;
     float: left;
     font-size: .25rem;
     color: #b4b1b1
  }
  .img{
    width: .4rem;
    float: right;
    margin-right: .2rem;
    margin-top: -.2rem;
  }
  .bangfu{
  	width: 95%;
  	margin:auto;
  	background-color: #43ACE5;
  	border-radius: 50%;
  }
}
</style>
<style>
.vux-header-title-area, .vux-header .vux-header-title{
  color: #2da7e0 !important;
  font-size: .36rem;
}
.vux-header .vux-header-left .left-arrow:before{
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
