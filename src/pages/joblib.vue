<template>
  <div class="page_joblib">
    <mt-header title="职业库">
      <c-router-back slot="left"></c-router-back>
    </mt-header>
    <mt-cell class="my-job-link on-active" style="background-image:none" title="适合我的职业" label="综合性格和兴趣，找到最合适的职业" is-link :to="{name:'mbtireportcareer'}">
    </mt-cell>
    <div class="mt10 bg-white">
      <c-section-title title="职业库"></c-section-title>
      <mt-cell class="on-active" v-for="item in list" :key="item.id" :title="item.name" is-link :to="{name: 'joblist',params:{id: item.id}}"></mt-cell>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'job_lib',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      list: state => state.industry.list
    })
  }
}
</script>

<style lang="less">
  @import '../assets/less/_mixins-wln.less';
  .page_joblib{
    .my-job-link{
      .mint-cell-wrapper{
        background: #fff url(../assets/imgs/icon/icon-board.png) 13px 49% no-repeat;
        -webkit-background-size: 30px;
        background-size: 30px;
        padding:13px 0 13px 55px;
        .mint-cell-label{
          margin-top: 8px;
        }
      }
    }
  }

</style>
