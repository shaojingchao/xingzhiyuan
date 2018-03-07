<template>
  <div class="c-select" :class="{ 'c-select_active': active, 'c-select_disabled': disabled }">
    <i class="iconfont c-item-icon" v-if="iconClass" :class="iconClass"></i>
    <span v-if="selectedText" class="c-select-text">{{ selectedText }}</span>
    <span v-else class="c-select-placeholder">{{ placeholder }}</span>
    <select class="c-form-select" v-model="selectedValue" @focus="active = true" @blur="active = false">
      <option :value="item.value" v-for="item in options">{{item.text}}</option>
    </select>
    <i class="iconfont xzy-icon-down c-select-icon"></i>
  </div>
</template>

<script>
  const COMPONENT_NAME = 'c-select'
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
      placeholder: {
        type: String,
        default: '请选择'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      iconClass: {
        type: String,
        default: ''
      }
    },
    watch: {
      selectedValue (n) {
        this.$emit('update:value', n)
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
      findIndex () {
        const findIndex = this.adaptOptions.findIndex((item) => {
          return item.value === this.value
        })
        return findIndex
      },
      selectedText () {
        return this.findIndex !== -1 ? this.adaptOptions[this.findIndex].text : ''
      }
    },
    created () {
      if (this.value !== null) {
        this.selectedValue = this.value
      }
    },
    mounted () {
    },
    methods: {
      selectEvent () {
      },
      hided () {
        this.active = false
      }
    }
  }
</script>
<style lang="less">
  @import '../assets/less/_mixins-wln.less';

  .c-select {
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    padding: 0.26rem;
    border-radius: 0.44rem;
    line-height: 1;
    color: #666;
    background-color: #fff;
    border: 1px solid #d9dde1;
    > span {
      display: inline-block;
    }
    &.c-select_active {
      border-color: #ccc;
      color: #333;
      .c-select-icon {
        color: #333;
      }
    }
    &.c-select_disabled {
      background-color: #eee;
      color: #ccc;
      cursor: not-allowed;
    }
    .c-select-placeholder {
      color: #666;
    }
    .c-select-icon {
      position: absolute;
      right: 0.26rem;
      top: 50%;
      font-size: 0.32rem;
      color: #93999f;
      transform: translate(0, -50%);
    }
    .c-item-icon {
      font-size: 0.36rem;
      vertical-align: -0.02rem;
      color: #d9dde1;
    }
    .c-form-select {
      position: absolute;
      opacity: 0;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
    }
  }
</style>
