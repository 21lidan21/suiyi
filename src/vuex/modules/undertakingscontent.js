import api from '../../fetch/api'
import * as types from '../types'


const state = {
  openId:1,
}

const actions = {

  /**
   * 获取活动详情
   */
  getundertakingscontent({
    commit
  }, palyload) {
    //  api.getorderlist(palyload).then(res=>{
    //     commit(types.GET_UNDERTAKINGCONTENT_CODE, res)
    //  }).catch(err=>{
    //     console.log("err",err)
    //  });
  }

}

const getters = {
    openId: state => state.openId,
}

const mutations = {
  [types.GET_UNDERTAKINGCONTENT_CODE](state, res) {
      console.log("res=========",JSON.stringify(res))
    state.openId = res
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
