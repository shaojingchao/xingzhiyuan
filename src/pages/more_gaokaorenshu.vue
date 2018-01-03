<template>
  <div class="page_more_cjcx">
    <mt-header title="">
      <c-router-back slot="left"></c-router-back>
    </mt-header>

    <c-page-head title="高考人数" subtitle="高考志愿百科"></c-page-head>

    <section class="bg-white pb15">
      <c-section-title title="河南省历年高考人数"></c-section-title>
      <div class="pl10 pr10">
        <table class="table table-bordered pct100">
          <tr>
            <th class="bg-body">年份</th>
            <td class="text-muted">人数(万人)</td>
          </tr>
          <tr>
            <th class="bg-body">2017</th>
            <td class="text-muted">86.30</td>
          </tr>
          <tr>
            <th class="bg-body">2016</th>
            <td class="text-muted">86.30</td>
          </tr>
          <tr>
            <th class="bg-body">2015</th>
            <td class="text-muted">86.30</td>
          </tr>
          <tr>
            <th class="bg-body">2014</th>
            <td class="text-muted">86.30</td>
          </tr>
          <tr>
            <th class="bg-body">2013</th>
            <td class="text-muted">86.30</td>
          </tr>
          <tr>
            <th class="bg-body">2012</th>
            <td class="text-muted">86.30</td>
          </tr>
          <tr>
            <th class="bg-body">2011</th>
            <td class="text-muted">86.30</td>
          </tr>
          <tr>
            <th class="bg-body">2010</th>
            <td class="text-muted">86.30</td>
          </tr>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'more-gaofenrenshu',
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
