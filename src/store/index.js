import Vue from 'vue'
import Vuex from 'vuex'
import industry from './industry' // 职业列表
import job from './job' // 职业列表

Vue.use(Vuex)
let store = new Vuex.Store({
  modules: {
    job
  },
  state: {
    user: {
      isVip: true,
      userID: '1247537710',
      userName: 'shaojingchao',
      email: '1247537710@qq.com',
      phone: '15515545205'
    },
    pageTransName: 'slide-left',
    industry: industry
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
      let effect = 'none'
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
