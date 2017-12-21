<template>
  <div class="page_samescore">
    <mt-header title="同位分去向">
      <c-router-back slot="left"></c-router-back>
    </mt-header>
    <div class="ci-head">
      <div class="f20 tc">同位分去向</div>
      <div class="tc mt10"><span class="dib plan-num">586分附近的考生录取去向</span></div>
    </div>
    <div class="cate-intro">
      <same-score></same-score>
    </div>
  </div>
</template>

<script>
  import SameScore from '../components/samescore.vue'
  export default {
    name: 'samescore',
    components: {
      SameScore
    },
    data () {
      return {
      }
    },
    mounted () {
    },
    methods: {
    }
  }
</script>

<style lang="less">
  @import '../assets/less/_mixins-wln.less';
  .page_samescore {
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

    /*详细介绍*/
    .cate-intro{
    }
  }
</style>



