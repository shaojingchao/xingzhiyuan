<template>
  <div class="comp_sec_tit bg-white" :style="{'font-size':size + 'px'}">
    <span class="title"><b>{{title}}</b></span>
    <slot name="vip">
      <sup class="vip" v-if="vip"><img src="../../assets/imgs/icon/icon-vip-sm.png" alt=""></sup>
    </slot>
    <slot name="label">
      <small class="f14 grayb" v-if="label">{{label}}</small>
    </slot>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'c-section-title',
    props: {
      title: {
        type: String,
        required: true,
        default: 'section-标题'
      },
      size: {
        type: Number,
        required: false,
        default: 16
      },
      vip: {
        type: Boolean,
        required: false,
        default: false
      },
      label: {
        type: String,
        required: false
      }
    }
  }
</script>

<style lang="less">
  @import '../../assets/less/_mixins-wln/_wln-variables.less';
  .comp_sec_tit {
    padding:1em 10px 1em 0;
    .title{
      line-height:1;
      border-left:3px solid @primary;
      padding-left: 10px;
    }
    .vip{
      img{
        width:12px;
      }
    }
  }

</style>
