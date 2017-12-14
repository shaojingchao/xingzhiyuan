// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Navigation from 'vue-navigation'
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

// 全局组件
import RouterBack from '@/components/common/routerback'
Vue.component('router-back', RouterBack)
Vue.use(Navigation, {router, store, keyName: 'n'})

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

// router.beforeEach((to, from, next) => {
//   store.commit('setPageTransName', 'from update')
//   next()
// })

new Vue({
  store,
  router,
  template: '<App/>',
  components: {App},
  mounted () {
    this.$navigation.on('forward', (to, from) => {
      store.commit('setPageTransName', 'forward')
    })
    this.$navigation.on('back', (to, from) => {
      store.commit('setPageTransName', 'back')
    })
    this.$navigation.on('replace', (to, from) => {
      store.commit('setPageTransName', 'replace')
    })
    this.$navigation.on('refresh', (to, from) => {
      store.commit('setPageTransName', 'refresh')
    })
    this.$navigation.on('reset', () => {
      store.commit('setPageTransName', 'reset')
    })
  }
}).$mount('#app')
