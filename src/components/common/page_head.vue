<template>
  <div class="comp_page_head">
    <div class="main-title">{{title}}</div>
    <div class="sub-title"><span>{{subtitle}}</span></div>
  </div>
</template>

<script>
  export default {
    name: 'c-page-head',
    props: {
      title: {
        type: String,
        default: '页面标题'
      },
      subtitle: {
        type: String,
        default: '页面副标题'
      }
    }
  }
</script>

<style lang="less">
  @import '../../assets/less/_mixins-wln.less';

  .comp_page_head {
    background-color: @primary;
    color: #fff;
    padding: 20px 10px 30px;
    .main-title {
      font-size: 20px;
      text-align: center;
    }
    .sub-title {
      margin-top: 10px;
      text-align: center;
      span {
        display: inline-block;
        border: 1px solid rgba(255, 255, 255, .4);
        border-radius: 30px;
        padding: 3px 12px;
      }
    }
  }
</style>
