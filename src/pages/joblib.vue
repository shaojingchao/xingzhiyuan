<template>
  <div class="page_joblib">
    <mt-header title="职业库">
      <router-back slot="left"></router-back>
    </mt-header>
    <mt-cell class="my-job-link" style="background-image:none" title="适合我的职业" label="综合性格和兴趣，找到最合适的职业" is-link :to="{name: 'evaluation'}">
    </mt-cell>
    <div class="joblist mt10 pt1 pb30">
      <h3 class="f16 title">职业库</h3>
      <mt-cell v-for="item in jobList" :key="item.id" :title="item.name" is-link :to="{name: 'jobitem',params:{id: item.id}}"></mt-cell>
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
      jobList: state => state.jobLib.jobList
    })
  },
  beforeRouteUpdate (to, from, next) {
    this.$store.commit('setPageTransName', 'from update')
    next()
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
    .joblist{
      background-color: #fff;
      .title{
        border-left:3px solid @primary;
        padding-left: 15px;
      }
    }
  }

</style>
