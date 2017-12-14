import Vue from 'vue'
import Vuex from 'vuex'
import jobList from './joblist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageTransName: 'slide-left',
    jobLib: {
      jobList: jobList
    }
  },
  mutations: {
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
