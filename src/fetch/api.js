import axios from 'axios'
import qs from 'qs'

import * as _ from '../util/tool'

// axios 配置
axios.defaults.timeout = 15000;
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
    _.toast("网络异常", 'fail');
    return Promise.reject(error);
});

export function fetch(url, params,headers) {
    return new Promise((resolve, reject) => {
        axios.post(url, params,headers)
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
        let httpUrl =  "/GetUserInfoByID?sessionID="+sessionStorage.sessionId;
        return fetch(httpUrl,null,{headers:{"access-key":sessionStorage.sessionId}})
    },
    /**
     * 发送注册验证码
     */
     RegistVerifiCode(params) {
         return fetch('/VipRegisterSMSCode', params)
     },

     /**
      * 获取商家列表信息
      * @param {*} data 
      */
     getStoreList(data){
        let httpUrl =  "/GetStoreList?code="+data.code;
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
         return fetch("/GetOrderList", data,{headers:{"access-key":sessionStorage.sessionId}})
     },
     getOrderDetails(data){
        return fetch("/GetOrderDetails", data,{headers:{"access-key":sessionStorage.sessionId}})
     },
     ThreeeLoveOrderPub(param){
        return fetch("/ThreeeLoveOrderPub", param)
     },
     getSchoolInfo(param){
        return fetch("/GetSchoolInfo?schoolId="+param.schoolId)
     }
}
