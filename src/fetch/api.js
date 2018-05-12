import axios from 'axios'
import qs from 'qs'

import * as _ from '../util/tool'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.defaults.baseURL = 'http://api.syccpt.com';

// if(sessionStorage.sessionId){
//    axios.defaults.headers.post['access-key'] = sessionStorage.sessionId || 'B254276439438EFC81C2DF56C736F6F9A752512D1333A66D3439C32BAF321A21C9F2913ED28DD69AD059D0887DE1CE58';
// }


//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
     _.toast("错误的传参", 'fail');
    return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) =>{
    if(res.data.status!=0){
        _.toast(res.data.desc);
        return Promise.reject(res);
    }
    return res.data ;
}, (error) => {
    console.log("222222222222222222");
    _.toast("网络异常", 'fail');
    return Promise.reject(error);
});

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data || response);
            }, err => {
                reject(err);
            })
            .catch((error) => {
               reject(error)
            })
    })
}

export default {
    /**
     * 用户登录
     */
    Login(params) {
        return fetch('/VipLoginByCode', params)
    },
    vipLogin(params) {
        return fetch('/VipLogin', params)
    },
    /**
     * 用户注册
     */
    Regist(params) {
        return fetch('/VipRegister', params)
    },
    GetUserInfoByID(params) {
       // return fetch('/GetUserInfoByID', params)
       

        let httpUrl =  "/GetUserInfoByID?sessionID="+sessionStorage.sessionId;
        axios.defaults.headers.post['access-key'] = sessionStorage.sessionId;
        return fetch(httpUrl)
    },
    /**
     * 发送注册验证码
     */
     RegistVerifiCode(params) {
         return fetch('/SendCode', params)
     },

    /**
     * 获取约跑步列表
     */
    SportsList() {
        return fetch('/api/sportList')
    },

    /**
     * 获取约出行列表
     */
    TravelsList() {
        return fetch('/api/travelList')
    },

    /**
     * 获取约跑步详情
     */
    SportsDetail(id) {
        return fetch('/api/sportDetail', {sportId: id})
    },

    /**
     * 获取约出行详情
     */
    TravelsDetail(id) {
        return fetch('/api/travelDetail', {travelId: id})
    },

    /**
     * 获取出行活动点击次数
     */
    travelClicks(id) {
        return fetch('/api/travelClickNum', {travelId: id})
    },

    /**
     * 获取用户信息
     */
    UserInfo(id) {
        return fetch('/users/api/userInfo', {userId: id})
    },

    /**
     * 获取用户发布约行个数
     */
     getPubTotravelNum(id) {
         return fetch('/users/api/getPubTotravelNum', {userId: id})
     },

     /**
      * 获取用户自己发布的约行
      */
      getMyTravel(id) {
          return fetch('/users/api/myTravel', {userId: id})
      },

    /**
     * 发布约行活动
     */
    PostTravel(params) {
        return fetch()
    },

    /**
     * 获取全国JSON数据
     */
     getAddressJson() {
         return fetch('/api/address')
     },
     /**
      * 获取商家列表信息
      * @param {*} data 
      */
     getStoreList(data){
        let httpUrl =  "/GetStoreList?code="+data.code;
        // axios.defaults.headers.post['access-key'] = data.token;
        return fetch(httpUrl, {'code': data.code})
     },
     getDefaultSchoolList(param){
        let httpUrl =  "/GetSchoolList?req="+param.req;
        return fetch(httpUrl)
     },
     getStudentsList(data){
        return fetch("/GetStudentsBySchool", data)
     },
     getorderlist(data){
        axios.defaults.headers.post['access-key'] = sessionStorage.sessionId || '';
        return fetch("/GetOrderList", data)
     },
     getOrderDetails(data){
         console.log(JSON.stringify(data));
        axios.defaults.headers.post['access-key'] = sessionStorage.sessionId || '';
        return fetch("/GetOrderDetails", data)
     },
     ThreeeLoveOrderPub(param){
        return fetch("/ThreeeLoveOrderPub", param)
     },
     getSchoolInfo(param){
        return fetch("/GetSchoolInfo?schoolId="+param.schoolId)
     }
}
