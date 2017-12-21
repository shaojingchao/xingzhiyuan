<template>
  <div class="page_plan">
    <mt-header title="招生计划">
      <c-router-back slot="left"></c-router-back>
    </mt-header>
    <div class="ci-head">
      <div class="f20 tc">北京航空航天大学</div>
      <div class="tc mt10"><span class="dib plan-num">17年招生计划</span></div>
    </div>
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
    .ci-head {
      background-color: @primary;
      color: #fff;
      padding: 20px 10px 30px;
      .plan-num {
        border: 1px solid rgba(255, 255, 255, .4);
        border-radius: 30px;
        padding: 3px 12px;
      }
    }
  }

</style>

