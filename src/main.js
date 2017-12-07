// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import $ from 'jquery'
import ECharts from 'echarts'
import App from './App'
import router from './router'
import 'normalize.css'
import 'mint-ui/lib/style.css'

window.$ = $
Vue.use(MintUI)
Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  mounted: function () {
  },
  components: { App }
})
