import api from '../../fetch/api'
import * as types from '../types'


const state = {
  dataList: []
}

const actions = {

  /**
   * 获取活动详情
   */
  getDetail11({
    commit
  }, palyload) {
    let param = {'code':1,'token':'B254276439438EFC81C2DF56C736F6F9A752512D1333A66D3439C32BAF321A210D66D91CB2225333A4C015290D4EE111'};
     api.getStoreList(param).then(res=>{
        
        commit(types.GET_DATA_LIST, res)
     }).catch(err=>{
        console.log("err",err)
     });
  }
}

const getters = {
  dataList: state => state.dataList
}

const mutations = {
  [types.GET_DATA_LIST](state, res) {
      console.log("res=========",res)
    state.dataList = res
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
