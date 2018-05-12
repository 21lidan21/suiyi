import api from '../../fetch/api'
import * as types from '../types'


const state = {
  orderList: [{}],
  orderID:'',
  isLoad:false,
}

const actions = {

  /**
   * 获取活动详情
   */
  getorderlistinfo({
    commit
  }, palyload) {
     if(this.isLoad){
       if(palyload.indexType==sessionStorage['nowType']){
          console.log("两次点击一致");
          return;
       }else{
        console.log(palyload.indexType+"两次点击不一致"+sessionStorage['nowType']);
        sessionStorage['nowType'] = palyload.indexType;
        this.isLoad = true;
        api.getorderlist(palyload).then(res=>{
            this.isLoad = false;
            commit(types.GET_ORDERLIST_LIST, res)
        }).catch(err=>{
            this.isLoad = false;
            console.log("err",err)
        });
       }
     }else{
        sessionStorage['nowType'] = palyload.indexType;
        this.isLoad = true;
        api.getorderlist(palyload).then(res=>{
            this.isLoad = false;
            commit(types.GET_ORDERLIST_LIST, res)
        }).catch(err=>{
            this.isLoad = false;
            
            console.log("err",err)
        });
     }
  },
  orderID({
    commit
  }, palyload) {
    commit(types.GET_ORDERLIST_CODE, palyload)
  }

}

const getters = {
  orderList: state => state.orderList,
  orderID: state => state.orderID,
}

const mutations = {
  [types.GET_ORDERLIST_LIST](state, res) {
      // console.log("res=========",JSON.stringify(res))
    state.orderList = res
  },
  [types.GET_ORDERLIST_CODE](state, res) {
    // console.log("res=========",JSON.stringify(res))
    state.orderID = res.orderID;
}
}

export default {
  state,
  actions,
  getters,
  mutations
}
