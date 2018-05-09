import api from '../../fetch/api'
import * as types from '../types'


const state = {
  actiondetailList: []
}

const actions = {

  /**
   * 获取活动详情
   */
  getActionDetailList({
    commit
  }, palyload) {
    //  let param = {'code':1,'token':'B254276439438EFC81C2DF56C736F6F9A752512D1333A66D3439C32BAF321A2194D8ADEB233194CF1785158681878334'};
    //  api.getStoreList(param).then(res=>{
        var res = [
          {"img":'cwxd01.jpg',
          "title":'18年元旦，我们发起了浩坤三合小学公益送奶活',
          "message":'18年元旦，我们发起了浩坤三合小学公益送奶活',
          },
          {"img":'cwxd01.jpg',
          "title":'19年元旦，我们发起了浩坤三合小学公益送奶活',
          "message":'18年元旦，我们发起了浩坤三合小学公益送奶活',
          },
          {"img":'cwxd01.jpg',
          "title":'20年元旦，我们发起了浩坤三合小学公益送奶活',
          "message":'18年元旦，我们发起了浩坤三合小学公益送奶活',
          }
        ];
        commit(types.GET_ACTIONDETAIL_LIST, res)
    //  }).catch(err=>{
    //     console.log("err",err)
    //  });
  }
}

const getters = {
  actiondetailList: state => state.actiondetailList
}

const mutations = {
  [types.GET_ACTIONDETAIL_LIST](state, res) {
      console.log("res=========",res)
    state.actiondetailList = res
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
