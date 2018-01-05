<template>
  <div class="page_plan">
    <mt-header title="招生计划">
      <c-router-back slot="left"></c-router-back>
    </mt-header>

    <c-page-head :title="'北京航空航天大学'" :subtitle="'17年招生计划'"></c-page-head>

    <CollegeInfoPlan></CollegeInfoPlan>
    <!--<chart-scoreline title="院校录取分数线" from="college"></chart-scoreline>-->
  </div>
</template>

<script>
  import CollegeInfoPlan from '@/pages/collegeinfo_plan'

  export default {
    name: 'plan',
    components: {
      CollegeInfoPlan
    },
    data () {
      return {}
    }
  }
</script>

<style lang="less">
  @import '../assets/less/_mixins-wln.less';

  .page_plan {
  }

</style>

