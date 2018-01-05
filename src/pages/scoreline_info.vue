<template>
  <div class="page_scorelineinfo">
    <mt-header title="北京航空航天大学">
      <c-router-back slot="left"></c-router-back>
      <img src="../assets/imgs/icon/icon-like-no.png" v-if="!isLike" slot="right" width="16" alt="">
      <img src="../assets/imgs/icon/icon-like-yes.png" v-else slot="right" width="16" alt="">
    </mt-header>

    <c-page-head :title="'北京航空航天大学'" subtitle="考生录取分数线"></c-page-head>

    <chart-scoreline title="院校录取分数线" from="college"></chart-scoreline>
  </div>
</template>

<script>
  import ChartScoreline from '@/components/chart_scoreline'

  export default {
    name: 'scoreline-info',
    components: {
      ChartScoreline
    },
    data () {
      return {
        isLike: true,
        tabActive: 'tab-1'
      }
    }
  }
</script>

<style lang="less">
  @import '../assets/less/_mixins-wln.less';

  .page_scorelineinfo {
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




