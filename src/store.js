import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {}
const state = {
    userInfo:userInfo
};
const mutations = {
    //存储用户信息
    updateUserInfo(state,userInfo){
        state.userInfo = userInfo
    }
};
const actions = {
    //存储用户信息
    updateUserInfo({ commit },userInfo){
        commit('updateUserInfo',userInfo)
    }
};
export default new Vuex.Store({
    state,
    mutations,
    actions
})
