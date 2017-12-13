// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import $ from 'jquery'
import iScroll from 'iscroll'
import ECharts from 'echarts'
import Theme from './assets/js/echart-themes'
import 'normalize.css'
import 'mint-ui/lib/style.css'
import '@/assets/less/base.less'
import store from './store'
import App from './App'
import router from './router'
// import * as util from 'util'

// 注册 echarts 主题
ECharts.registerTheme('macarons', Theme)
let _Echarts = {}
_Echarts.init = ECharts.init
ECharts.init = function (dom, theme, opts) {
  return _Echarts.init.call(null, dom, (theme || 'macarons'), opts)
}

window.iScroll = iScroll
window.$ = $
Vue.use(MintUI)
Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts
Vue.prototype.$Toast = MintUI.Toast
Vue.prototype.$Indicator = MintUI.Indicator

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  mounted: function () {
  },
  components: { App }
})
