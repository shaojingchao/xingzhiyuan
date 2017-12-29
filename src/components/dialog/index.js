// import Vue from 'vue'
import dialogComponent from './dialog'

const Dialog = {
  install (Vue, opts) {
    if (this.installed) {
      return
    }
    this.installed = true
    this.event = new Vue()
    Vue.prototype.$createDialog = (options) => {
      this.event.$on('confirm', () => {
        console.log('confirm')
      })
      this.event.$on('cancel', () => {
        console.log('cancel')
      })
      console.log(options)
    }
    Vue.component('c-dialog', dialogComponent)
  }
}

export default Dialog
