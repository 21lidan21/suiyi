import api from '../../fetch/api'
import * as types from '../types'


const state = {
  orderList: [{}],
  orderID:'',
}

const actions = {

  /**
   * 获取活动详情
   */
  getorderlistinfo({
    commit
  }, palyload) {
     api.getorderlist(palyload).then(res=>{
        commit(types.GET_ORDERLIST_LIST, res)
     }).catch(err=>{
        console.log("err",err)
     });
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
      console.log("res=========",JSON.stringify(res))
    state.orderList = res
  },
  [types.GET_ORDERLIST_CODE](state, res) {
    console.log("res=========",JSON.stringify(res))
    state.orderID = res.orderID;
}
}

export default {
  state,
  actions,
  getters,
  mutations
}
