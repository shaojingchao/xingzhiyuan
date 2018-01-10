<template>
  <div class="page_more">
    <mt-header title="">
      <c-router-back slot="left"></c-router-back>
    </mt-header>

    <c-page-head title="特殊招生" subtitle="高考志愿百科"></c-page-head>

    <section class="bg-white">
      <mt-cell :title="item" v-for="(item,i) in list" :key="i" :to="{name: 'article', params: {id: i}}" is-link></mt-cell>
    </section>

    <div class="p30 mt10"></div>

    <c-footer-btn :text="'查询入口'"></c-footer-btn>
  </div>
</template>

<script>
  export default {
    name: 'more-jiafenzhengce',
    data () {
      return {
        list: ['普通高等学校招生体检工作指导...',
          '对考生身体状况有特殊要求的专业',
          '国防生',
          '免费师范生',
          '港澳高校招生',
          '空军招飞',
          '小语种招生',
          '体育专业招生',
          '艺术类专业招生',
          '高水平运动员',
          '艺术特长生',
          '保送生',
          '自主招生']
      }
    }
  }
</script>

<style lang="less">
  @import '../assets/less/_mixins-wln.less';

  .page_more {

  }
</style>
