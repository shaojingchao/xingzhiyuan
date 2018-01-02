<template>
  <div class="page_more_cjcx">
    <mt-header title="">
      <c-router-back slot="left"></c-router-back>
    </mt-header>

    <c-page-head title="成绩查询" subtitle="信息查询服务"></c-page-head>

    <section class="bg-white pb15">
      <c-section-title title="河南省2017高考成绩查询"></c-section-title>
      <div class="pl10 pr10">
        <table class="table table-bordered pct100">
          <tr>
            <th class="bg-body">查询时间</th>
            <td class="text-muted">6月25日零时</td>
          </tr>
          <tr>
            <th class="bg-body">查询方式</th>
            <td class="text-muted">
              <div>
                河南省教育厅网站
                <br>
                <a href="http://www.haedu.gov.cn" class="text-muted">http://www.haedu.gov.cn</a>
              </div>
              <div class="mt10">
                河南省招生办公室网站
                <br>
                <a href="http://www.heao.gov.cn" class="text-muted">http://www.heao.gov.cn</a>
              </div>
              <div class="mt10">
                河南省招生考试信息网站
                <br>
                <a href="http://www.heao.com.cn" class="text-muted">http://www.heao.com.cn</a>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </section>

    <c-footer-btn :text="'查询入口'" :toLink="{}"></c-footer-btn>
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
