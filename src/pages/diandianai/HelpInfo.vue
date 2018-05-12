<template>
	<div class="content">
    <x-header   class="header" :left-options="{backText: ''}">帮扶对象信息</x-header>
		<div style=" border-bottom:solid 1px rgb(255, 208, 75);padding:10px;width:70px;margin-left:5px;" class="doing">我们在行动</div>


<flexbox>
      <flexbox-item :span="9"><div class="flex-demo">
        <group>
      
    <popup-picker :title="title1" :data="list1" v-model="value1" @on-show="onShow" @on-hide="onHide" @on-change="onChange" ></popup-picker>

  </group></div></flexbox-item>
      <flexbox-item><div class="schoool-info"  @click="gotoSchoolDetail">
      点击查看详情</div></flexbox-item>
      
    </flexbox>
  

 
    <el-row  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
      <div v-for="(item, index) in editableTabs2" @click="selectPerson(index)" :key="index+'Index'" >
  <el-col    :span="12"  >
    <el-card  class="border_pollyfill"  :class="{isActive: index == nActive }">
      <img :src="item.headUrl" class="image">
      <div style="padding: 14px;line-height:1.5;font-size:14px;">
        姓名：<span class="info_color" v-text="item.showName"></span><br>
        班级：<span class="info_color" v-text="item.showGradeName"></span>
      </div>
    </el-card>
  </el-col></div>
</el-row>


    <router-link to="/dda/joincamp">
      <div class="footer">我要捐助TA</div>
    </router-link>
    <div class="polyfill"></div>
	</div>
</template>

<script>
import { PopupPicker, Group } from "vux";
import { Flexbox, FlexboxItem } from 'vux'

import api from "../../fetch/api";

export default {
  components: {
    PopupPicker,
    Group,
    Flexbox,
    FlexboxItem
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getDefault(vm);
    });
  },

  data() {
    return {
      nActive: 0,
      editableTabs2: [],
      title1: "学校：",
      list1: [[]],
      value1: ["默认学校"],
      rawData: [],
      nowSchoolId: "",
      curPage: 1,
      pageSize :5
    };
  },
  computed: {
    activeName() {
      return this.editableTabs2[0].name;
    }
  },
  methods: {
    getDefault() {
      var param = {
        req: 1
      };
      api
        .getDefaultSchoolList(param)
        .then(res => {
          console.log(res);
          let tmp = [];
          for (let i = 0; i < res.length; i++) {
            tmp.push(res[i]["schoolName"]);
          }
          this.list1 = [tmp];
          this.rawData = res;
          this.value1 = [res[0]["schoolName"]];
          this.nowSchoolId = res[0]["schoolID"];
          console.log("this.nowSchoolId",this.nowSchoolId)
          this.getStudents();
        })
        .catch(err => {});
    },
    getStudents(needClose) {
      var param = {
        schoolID: this.nowSchoolId,
        pageSize: this.pageSize,
        curPage: this.curPage
      };
      console.log("param",param);
      api
        .getStudentsList(param)
        .then(res => {
          console.log(res);
          if (needClose) {
            this.loading = false;
          }
          this.editableTabs2 = this.editableTabs2.concat(res);
        })
        .catch(err => {
          console.log(1111, err);
          if (needClose) {
            this.loading = false;
          }
        });
    },
    gotoSchoolDetail(){
      sessionStorage["nowSchoolId"] = this.nowSchoolId;
      this.$router.push("/dda/schoolDetail");
    },
    loadMore() {
      if(!this.nowSchoolId){
        return;
      }
      this.loading = true;
      this.curPage++;
      this.getStudents(1);
    },
    // loadTop(id) {
    //   // 加载更多数据
    //   this.$broadcast("onTopLoaded", id);
    // },
    // loadBottom(id) {
    //   // 加载数据
    //   this.allLoaded = true; // 若数据已全部获取完毕
    //   this.$broadcast("onBottomLoaded", id);
    // },
    onShow() {
      console.log("on show");
    },
    onHide(type) {
      console.log("on hide", type);
    },
    onChange(val) {
      console.log("val change", val);
      if (val[0] == this.value1[0]) {
        return;
      }
      let tmp = this.rawData;

      for (let i = 0; i < tmp.length; i++) {
        if (val[0] == tmp[i]["schoolName"]) {
          this.nowSchoolId = tmp[i]["schoolID"];
          return;
        }
      }
      this.getStudents();
    },
    selectPerson(index) {
      this.nActive = index;
    },
    resetNActive() {
      this.nActive = 0;
    }
  }
};
</script>

<style scoped lang="scss">
.content{
  width: 100% !important;
  height:100% !important;

 overflow-y: auto !important;
      -webkit-overflow-scrolling:touch !important;
}
.polyfill{
  height: 7em;
}
.schoool-info{
  position: relative;
  top:.8em;
}
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
  position: fixed;
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
