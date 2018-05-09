import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import sport from './modules/sport'
import travel from './modules/travel'
import detail from './modules/detail'
import com from './modules/com'
import recevie from './modules/receive'
import action from './modules/action'
import actiondetail from './modules/ActionDetail'
import getorderlistinfo from './modules/getorderlist'
import getorderdetails from './modules/getorderdetails'
import undertakingscontent from './modules/undertakingscontent'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        sport,
        travel,
        detail,
        com,
        recevie,
        action,
        actiondetail,
        getorderlistinfo,
        getorderdetails,
        undertakingscontent
    }
})