import Vue from 'vue'

let camelCase = function (name) {
  return name.replace(/-(\w)/g, (a, b) => b.toUpperCase())
}
let parserData = (data, events) => {
  let props
  let on = {}
  const _matchOn = /^(on)[A-Z]/
  // 获取事件参数
  let availableEvents = events.map(item => camelCase(`on-${item}`))
  let _events = Object.keys(data).filter((item) => (_matchOn.test(item) && availableEvents.indexOf(item)))
  _events.forEach((item) => {
    let optionsEventName = item.substr(2, 1).toLowerCase() + item.substr(3)
    on[optionsEventName] = data[item]
    delete data[item]
  })
  // 属性过滤
  props = data
  console.log({
    props,
    on
  })
  return {
    props,
    on
  }
}
let _useApi = (Component, data, events) => {
  let instance = new Vue({
    data: {
      hello: 'hello'
    },
    render (createEl) {
      return createEl(Component, parserData(data, events))
    },
    mounted () {
      document.body.appendChild(this.$el)
    },
    beforeDestroy () {
      document.body.removeChild(this.$el)
    }
  })
  instance.$mount()
  return instance.$children[0]
}

let createApi = (Component, events) => {
  let instanceComponent
  let _name = camelCase('create-' + Component.name)
  Vue.prototype[`$${_name}`] = function (data) {
    instanceComponent = _useApi(Component, data, events)
    instanceComponent.__my_parent__ = this
    return instanceComponent
  }
}

export default createApi
