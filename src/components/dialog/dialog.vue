<template>
  <div class="lay-dialog">
    <transition :name="animShade">
      <div class="lay-mask" v-show="visible" @click="shadeCloseEvent">
      </div>
    </transition>
    <transition :name="animContent"
                @afterEnter="afterEnter">
      <div class="lay-box" v-show="visible"
           :style="{width:width,height:height,'margin-top': -content.height/2 + 'px','margin-left': -content.width/2 + 'px'}"
           ref="layBox">
        <slot v-if="types === 1"></slot>
        <div class="lay-box-content" v-if="types === 0">
          <div class="l-close on-active" v-if="close" @click="shadeCloseEvent"><i class="iconfont xzy-icon-add"></i></div>
          <div class="l-head" v-if="title">{{title}}</div>
          <div class="l-body">
            <slot name="content"></slot>
          </div>
          <div class="l-footer">
            <span class="cancel-btn" @click="btnCancel" v-if="cancelBtn.show">{{cancelBtn.text}}</span>
            <span class="confirm-btn" @click="btnConfirm"  v-if="yesBtn.show">{{yesBtn.text}}</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'c-dialog',
    data () {
      return {
        content: {}
      }
    },
    props: {
      width: {
        default: '300px'
      },
      height: {
        default: 'auto'
      },
      close: Boolean,
      types: {
        type: Number,
        default: 0
      },
      shadeClose: {
        type: Boolean,
        default: true
      },
      animShade: {
        type: String,
        default: 'fade'
      },
      animContent: {
        type: String,
        default: 'slide-in-up'
      },
      visible: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      },
      cancelBtn: {
        default () {
          return {
            show: false,
            text: '取消'
          }
        }
      },
      yesBtn: {
        default () {
          return {
            show: true,
            text: '确定'
          }
        }
      }
    },
    created () {
    },
    mounted () {
      this.$nextTick(() => {
        // 计算宽高 修补定位到中心
        let _layBox = $(this.$refs.layBox)
        this.$set(this.$data, 'content', {
          width: _layBox.outerWidth(),
          height: _layBox.outerHeight()
        })
      })
    },
    methods: {
      shadeCloseEvent () {
        if (this.shadeClose === true) {
          this.btnCancel()
        }
      },
      afterEnter () {
        this.$emit('afterEnter')
      },
      enter () {
        $(this.$refs.layBox).css({
          transform: 'translate(-50%,-50%)'
        })
      },
      btnConfirm () {
        this.$emit('update:visible', false)
        this.$emit('confirm')
      },
      btnCancel () {
        this.$emit('update:visible', false)
        this.$emit('cancel')
      }
    }
  }
</script>

<style lang='less' scoped>
  @import '../../assets/less/_mixins-wln/_wln-variables.less';

  .lay-mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, .35);
    &.fade-enter-active {
      transition: opacity 0.25s;
    }
    &.fade-leave-active {
      transition: opacity 0.25s 0.15s;
    }
  }

  .lay-box {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1000;
    &.slide-in-up-enter-active {
      transition: transform 0.3s 0.15s, opacity 0.3s 0.15s;
    }
  }

  .lay-box-content {
    position: relative;
    border-radius: 2px 2px 0 0;
    background-color: #fff;
    box-shadow:0 2px 6px -2px rgba(0,0,0,.1);
    .l-close{
      @btnSize: 36px;
      position: absolute;
      top:0;
      right:0;
      display: block;
      width:@btnSize;
      height:@btnSize;
      text-align: center;
      line-height:@btnSize;
      i{
        display: block;
        font-size:16px;
        color:#ddd;
        font-weight:100;
        transform: rotateZ(45deg);
      }
    }
  }

  .l-head {
    font-size: 15px;
    padding-top: 15px;
    text-align: center;

  }

  .l-body {
    padding: 10px;
  }

  .l-footer {
    /*border-radius: 0 0 2px 2px;*/
    overflow: hidden;
    display: flex;
    text-align: center;
    flex-flow: nowrap;
    @border-color: #f4f4f4;
    span {
      flex:1;
      padding: 15px 0;
      text-align: center;
      color: #666;
      border-top: 1px solid @border-color;
      background-color: #fff;
      width: 50%;
      display: block;
      border-left: 1px solid @border-color;
      &:first-child {
        border-left:none;
      }
      &.confirm-btn {
        color: @primary;
      }
      &:active{
        background-color: @bg-body;
      }
    }
  }

</style>
