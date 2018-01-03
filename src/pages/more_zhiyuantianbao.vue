<template>
  <div class="page_more_cjcx">
    <mt-header title="">
      <c-router-back slot="left"></c-router-back>
    </mt-header>

    <c-page-head title="志愿填报查询" subtitle="信息查询服务"></c-page-head>

    <section class="bg-white pb15">
      <c-section-title title="河南省2017高考志愿填报"></c-section-title>
      <div class="pl10 pr10">
        <table class="table table-bordered pct100">
          <tr>
            <th class="bg-body">填报查询</th>
            <td class="text-muted">知分填报</td>
          </tr>
          <tr>
            <th class="bg-body">志愿设置</th>
            <td class="text-muted">
              部分平行
            </td>
          </tr>
          <tr>
            <th class="bg-body">填报时间</th>
            <td class="text-muted">
              第一次在6月25日—28日，填报提前批(含艺术、体育类专科)、国家专项计划本科批、专升本志愿和对口招生志愿;
              <br>
              第二次在7月2日—7日，填报本科一批、地方专项计划本科批、本科二批;
              <br>
              第三次在7月9日—13日，填报专科提前批和高职高专批志愿。
            </td>
          </tr>
        </table>
      </div>
    </section>

    <c-footer-btn :text="'填报入口'" :toLink="{}"></c-footer-btn>
  </div>
</template>

<script>
  export default {
    name: 'more',
    data () {
      return {}
    }
  }
</script>

<style lang="less">
  @import '../assets/less/_mixins-wln.less';

  .page_more_cjcx {

  }
</style>
