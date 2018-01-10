<template>
  <div class="page_more">
    <mt-header title="">
      <c-router-back slot="left"></c-router-back>
    </mt-header>

    <c-page-head title="填报查询" subtitle="信息查询服务"></c-page-head>

    <section class="bg-white pb15">
      <c-section-title title="河南省2017高考录取时间安排"></c-section-title>
      <div class="pl10 pr10">
        <table class="table table-bordered pct100">
          <tr>
            <th class="bg-body">批次</th>
            <td class="text-muted">录取时间</td>
            <td class="text-muted">征集志愿</td>
          </tr>
          <tr>
            <th class="bg-body">提前批</th>
            <td class="text-muted">7月9日-7月14日</td>
            <td class="text-muted" rowspan="2">7月13日<br>8:00-18:00</td>
          </tr>
          <tr>
            <th class="bg-body">国家专项<br>计划本科批</th>
            <td class="text-muted">7月12日-7月14日</td>
          </tr>
        </table>
      </div>
    </section>

    <c-footer-btn :text="'查询入口'"></c-footer-btn>
  </div>
</template>

<script>
  export default {
    name: 'more-jiafenzhengce',
    data () {
      return {}
    }
  }
</script>

<style lang="less">
  @import '../assets/less/_mixins-wln.less';

  .page_more {

  }
</style>
