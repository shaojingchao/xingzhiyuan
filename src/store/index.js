import Vue from 'vue'
import Vuex from 'vuex'
import jobList from './joblist' // 职业列表

Vue.use(Vuex)
let store = new Vuex.Store({
  state: {
    user: {
      isVip: false,
      userID: '1247537710',
      userName: 'shaojingchao',
      email: '1247537710@qq.com',
      phone: '15515545205'
    },
    pageTransName: 'slide-left',
    jobLib: {
      jobList: jobList
    }
  },
  getters: {
    isVip (state) {
      return state.user.isVip
    }
  },
  mutations: {
    /**
     * 页面跳转动画
     */
    setPageTransName (state, val) {
      let effect = 'fade'
      switch (val) {
        case 'forward': effect = 'slide-left'
          break
        case 'back': effect = 'slide-right'
          break
      }
      state.pageTransName = effect
    }
  }}
)
//
// setTimeout(()=>{
//   store.state.user.isVip = true
// },2000)

export default store
