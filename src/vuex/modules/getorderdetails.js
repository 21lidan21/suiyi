import api from '../../fetch/api'
import * as types from '../types'


const state = {
  orderListDetails: [{}],
}

const actions = {

  /**
   * 获取活动详情
   */
  getorderListDetails({
    commit
  }, palyload) {
     api.getOrderDetails(palyload).then(res=>{
        commit(types.GET_ORDERDETAILS_CODE, res)
     }).catch(err=>{
        console.log("err",err)
     });
  },
}

const getters = {
  orderListDetails: state => state.orderListDetails,
}

const mutations = {
  [types.GET_ORDERDETAILS_CODE](state, res) {
      console.log("res=========",JSON.stringify(res))
    state.orderListDetails = res
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
