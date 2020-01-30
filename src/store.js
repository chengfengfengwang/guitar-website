import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {}
const state = {
    userInfo:userInfo
};
const getters = {
    user_id: state => {
        const userInfo = state.userInfo;
        return userInfo ? userInfo.user_id : ''
    },
    username: state => {
        const userInfo = state.userInfo;
        return userInfo ? userInfo.username : ''
    }
  }
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
    getters,
    mutations,
    actions
})
