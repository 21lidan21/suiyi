<template>
	<div >
    <x-header   class="header" :left-options="{backText: ''}">帮扶对象信息</x-header>
		<div style=" border-bottom:solid 1px rgb(255, 208, 75);padding:10px;width:70px;margin-left:5px;" class="doing">我们在行动</div>

  <group>
    <popup-picker :title="title1" :data="list1" v-model="value1" @on-show="onShow" @on-hide="onHide" @on-change="onChange" ></popup-picker>
  </group>


   
<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
   <el-tabs    v-model="activeName">
  <el-tab-pane
    v-for="(item, index) in editableTabs2"
    :key="item.name"
    :name="item.name"
  >
    <el-row  >
      <div @click="selectPerson(index,index1)" v-for="(o, index1) in item.content" :key="index+'Index'+index1" >
  <el-col    :span="12"  >
    <el-card  class="border_pollyfill"  :class="{isActive: index1 == nActive }">
      <img :src="o.img" class="image">
      <div style="padding: 14px;line-height:1.5;font-size:14px;">
        姓名：<span class="info_color" v-text="o.name"></span><br>
        班级：<span class="info_color" v-text="o.banji"></span>
      </div>
    </el-card>
  </el-col></div>
</el-row>
  </el-tab-pane>
</el-tabs>
</mt-loadmore>

    <router-link to="/dda/joincamp">
      <div class="footer">我要捐助TA</div>
    </router-link>
	</div>
</template>

<script>
import { PopupPicker, Group } from "vux";
import api from '../../fetch/api'

export default {
  components: {
    PopupPicker,
    Group
  },
  beforeRouteEnter(to, from, next) {
        next((vm) => {
           
            vm.getDefault(vm);
        })
    },

  data() {
    return {
      nActive: 0,
      editableTabs2: [
        {
          title: "大新县雷平镇那岸小学",
          name: "1",
          content: [
            {
              img:
                "https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike272%2C5%2C5%2C272%2C90/sign=09fa593b700e0cf3b4fa46a96b2f997a/37d3d539b6003af3a32f2849372ac65c1038b606.jpg",
              name: "选项是否",
              banji: "5年纪"
            },
            {
              img:
                "https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike272%2C5%2C5%2C272%2C90/sign=09fa593b700e0cf3b4fa46a96b2f997a/37d3d539b6003af3a32f2849372ac65c1038b606.jpg",
              name: "选项是否",
              banji: "5年纪"
            },
            {
              img:
                "https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike272%2C5%2C5%2C272%2C90/sign=09fa593b700e0cf3b4fa46a96b2f997a/37d3d539b6003af3a32f2849372ac65c1038b606.jpg",
              name: "选项是否",
              banji: "5年纪"
            }
          ]
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content"
        },
        {
          title: "Tab 3",
          name: "3",
          content: "Tab 3 content"
        }
      ],
      title1: "学校：",
      list1: [[]],
      value1: ["默认学校"],
      allLoaded: false
    };
  },
  computed: {
    activeName() {
      return this.editableTabs2[0].name;
    }
  },
  methods: {
    getDefault(){
      var param = {
        req:1
      }
      api.getDefaultSchoolList(param)
         .then(res=>{
           console.log(res);
           for(let i =0;i<res.length;i++){
             
           }
           this.list1=[res[0]["schoolName"]];
         }).catch(err=>{

         })
    },
    loadTop(id) {
      // 加载更多数据
      // this.$broadcast("onTopLoaded", id);
    },
    loadBottom(id) {
      // 加载数据
      this.allLoaded = true; // 若数据已全部获取完毕
      // this.$broadcast("onBottomLoaded", id);
    },
    onShow() {
      console.log("on show");
    },
    onHide(type) {
      console.log("on hide", type);
    },
    onChange(val) {
      console.log("val change", val);
    },
    selectPerson(indexOut, indexIn) {
      this.nActive = indexIn;
    },
    resetNActive() {
      this.nActive = 0;
    }
  }
}
</script>

<style scoped lang="scss">
.isActive {
  border: 2px solid rgb(255, 208, 75) !important;
  border-radius: 4px;
}
.border_pollyfill {
  border: 2px solid transparent;
}
.body_padding {
  padding: 0 5px;
}
.info_color {
  color: #2da7e0;
}
.footer {
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
.doing {
  color: rgb(255, 208, 75);
}
</style>
<style>
.vux-header-title-area,
.vux-header .vux-header-title {
  color: #2da7e0 !important;
}
.el-tabs__item.is-active,
.el-tabs__item:hover {
  color: black;
}
.el-card__body {
  padding: 0;
}
.el-card {
  margin: 5px;
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
