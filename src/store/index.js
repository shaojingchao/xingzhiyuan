import Vue from 'vue'
import Vuex from 'vuex'
import jobList from './joblist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobLib: {
      jobList: jobList
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }}
)
