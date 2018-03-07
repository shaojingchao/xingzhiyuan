<template>
  <div class="c-checklist" :class="{'c-checklist-dis': disabled}">
    <span class="c-check-item" :class="{'checked': values.includes(item.value)}" v-for="item in options" @click="checkEvent(item.value)">
      {{item.text}}<i class="iconfont c-checklist-icon" :class="[checkedClass]" v-if="values.includes(item.value)"></i>
    </span>
  </div>
</template>

<script>
  /**
   * 可选选项列表组件
   * type = radio:单选列表， 属性 value {String}
   * type = checkbox : 复选列表  属性 value {Array}
   * options {value, text}
   * */
  const COMPONENT_NAME = 'c-checklist'
  // const EVENT_CHANGE = 'change'
  // const EVENT_INPUT = 'input' // only used for v-modal

  export default {
    name: COMPONENT_NAME,
    data () {
      return {
        active: false,
        selectedValue: ''
      }
    },
    props: {
      options: {
        type: Array,
        default () {
          return []
        }
      },
      value: null,
      type: {
        type: String,
        default: 'radio' // radio || checkbox
      },
      disabled: {
        type: Boolean,
        default: false
      },
      checkedClass: {
        type: String,
        default: 'xzy-icon-duigou'
      }
    },
    computed: {
      adaptOptions () {
        return this.options.map(item => {
          if (typeof item !== 'object') {
            item = {
              value: item,
              text: item
            }
          }
          return item
        })
      },
      values () {
        if (Array.isArray(this.value)) {
          return this.value
        } else {
          return [this.value]
        }
      }
    },
    created () {
    },
    mounted () {
    },
    methods: {
      checkEvent (value) {
        let _value = this.values.slice(0)
        let _type = this.type
        if (this.disabled) {
          return false
        }
        if (_type === 'radio') {
          this.$emit('update:value', value)
        } else if (_type === 'checkbox') {
          if (_value.includes(value)) {
            _value.splice(_value.indexOf(value), 1)
            this.$emit('update:value', _value)
          } else {
            this.$emit('update:value', _value.concat(value))
          }
        }
      }
    }
  }
</script>
<style lang="less">
  @import '../../assets/less/_mixins-wln.less';

  .c-checklist {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    font-size:0.28rem;
    &.c-checklist-dis{
      color:#888;
    }
    .c-check-item{
      box-sizing: border-box;
      border:1px solid #d9dde1;
      height:0.88rem;
      line-height: 0.88rem;
      width:50%;
      display: inline-block;
      border-radius: 0.44rem;
      text-align: center;
      margin-right:0.1rem;
      &:last-child{
        margin-right:0;
      }
      &.checked{
        color:@primary;
        border-color:@primary;
      }
    }
    .c-checklist-icon {
      margin-left:0.1rem;
      vertical-align: -0.01rem;
    }
  }
</style>
