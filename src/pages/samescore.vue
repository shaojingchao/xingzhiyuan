<template>
  <div class="page_samescore">
    <mt-header title="同位分去向">
      <c-router-back slot="left"></c-router-back>
    </mt-header>

    <c-page-head :title="'同位分去向'" :subtitle="'586分附近的考生录取去向'"></c-page-head>

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

    /*详细介绍*/
    .cate-intro{
    }
  }
</style>



