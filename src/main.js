// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Navigation from 'vue-navigation'
import MintUI from 'mint-ui'
// import 'pace/themes/blue/pace-theme-loading-bar.css'

import axios from 'axios'
import $ from 'jquery'
import Bscroll from 'better-scroll'
import ECharts from 'echarts'
import Theme from './assets/js/echart-themes'
import 'normalize.css'
import 'mint-ui/lib/style.css'
import '@/assets/less/base.less'
import store from './store'
import App from './App'
import router from './router'
import VueTouch from 'vue-touch'

// 全局组件
import PageHead from '@/components/common/page_head'
import Endline from '@/components/common/endline'
import More from '@/components/common/more'
import Vip from '@/components/common/vip'
import SectionTitle from '@/components/common/sectiontitle'
import RouterBack from '@/components/common/routerback'
import Empty from '@/components/common/data_empty'
import AddFavor from '@/components/add_favor'
import FooterBtn from '@/components/footer_btn'
import Dialog from '@/components/dialog/dialog'
import Scroll from '@/components/bscroll'

// 弹框
import DialogSetScore from '@/components/dialog_setscore'

Vue.component('c-page-head', PageHead)
Vue.component('c-endline', Endline)
Vue.component('c-more', More)
Vue.component('c-vip', Vip)
Vue.component('c-section-title', SectionTitle)
Vue.component('c-router-back', RouterBack)
Vue.component('c-add-favor', AddFavor)
Vue.component('c-footer-btn', FooterBtn)
Vue.component('c-dialog', Dialog)
Vue.component('c-scroll', Scroll)
Vue.component('c-empty', Empty)

Vue.component('dialog-set-score', DialogSetScore)

// Vue.use(Navigation, {router, store, keyName: 'n'})
Vue.use(MintUI.Lazyload)
Vue.use(VueTouch, {name: 'v-touch'})

// 注册 echarts 主题
ECharts.registerTheme('macarons', Theme)
let _Echarts = {}
_Echarts.init = ECharts.init
ECharts.init = function (dom, theme, opts) {
  return _Echarts.init.call(null, dom, (theme || 'macarons'), opts)
}

// 注册过滤器
Vue.filter('formatRatio', function (v) {
  // 返回处理后的值
  return parseInt(v * 1000, 10) / 10 + '%'
})

// 请求
require('../mock/index')
require('es6-promise').polyfill()
Vue.prototype.$http = axios

window.Bscroll = Bscroll
window.$ = $
Vue.use(MintUI)
Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts
Vue.prototype.$Toast = MintUI.Toast
Vue.prototype.$MessageBox = MintUI.MessageBox
Vue.prototype.$Indicator = MintUI.Indicator

router.beforeEach((to, from, next) => {
  /* globals Pace */
  Pace.restart()
  next()
})

// Vue.prototype.$isVip = store.getters.isVip
new Vue({
  store,
  router,
  data: {
    $isVip: store.getters.isVip
  },
  template: '<App/>',
  components: {App},
  mounted () {
    // this.$navigation.on('forward', (to, from) => {
    //   store.commit('setPageTransName', 'forward')
    // })
    // this.$navigation.on('back', (to, from) => {
    //   store.commit('setPageTransName', 'back')
    // })
    // this.$navigation.on('replace', (to, from) => {
    //   store.commit('setPageTransName', 'replace')
    // })
    // this.$navigation.on('refresh', (to, from) => {
    //   store.commit('setPageTransName', 'refresh')
    // })
    // this.$navigation.on('reset', () => {
    //   store.commit('setPageTransName', 'reset')
    // })
  }
}).$mount('#app')
