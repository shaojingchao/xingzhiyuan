<template>
  <div>
    <transition name="fade">
      <div class="lay-mask trans" v-if="visible">
      </div>
    </transition>
    <transition name="slide-in-down" :duration="1500">
      <div class="lay-box trans" v-if="visible">
        <div class="lay-box-content">
          <div class="l-head" v-if="title">{{title}}</div>
          <div class="l-body">
            <slot name="content"></slot>
          </div>
          <div class="l-footer">
            <span class="cancel-btn" @click="btnCancel">取消</span>
            <span class="confirm-btn" @click="btnConfirm">确定</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  const btnDef = {
    text: '',
    show: false,
    event: null
  }
  export default {
    name: 'c-dialog',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      cancelBtn: {
        ...btnDef
      }
    },
    created () {
      console.log(this)
    },
    methods: {
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
    top:0;
    right:0;
    bottom:0;
    left:0;
    background-color: rgba(0,0,0,.5);
  }

  .lay-box {
    position: fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
  }

  .lay-box-content{
    width:300px;
    height:auto;
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border-radius: 4px;
    background-color: #fff;
  }
  .l-head {
    font-size:15px;
    font-weight:700;
    padding:10px;
    text-align: center;
    border-bottom:1px solid #eee;

  }
  .l-body {
    padding:10px;
  }
  .l-footer {
    border-radius: 0 0 5px 5px;
    overflow:hidden;
    display: flex;
    text-align: center;
    flex-flow: nowrap;
    span{
      padding:15px 0;
      text-align: center;
      color: #666;
      border-top:1px solid #eee;
      background-color: #fff;
      width:50%;
      display: block;
      &:first-child{
        border-right:1px solid #eee;
      }
      &.confirm-btn{
        color: @primary;
      }
    }
  }

</style>
