<template>
  <div class="page_jobitem">
    <mt-header :title="jobItemTitle">
      <router-back slot="left"></router-back>
    </mt-header>
    <div class="sort-list bbi">
      <div class="l-item current">
        <span>薪酬最高 <span class="icon">↑↓</span></span>
      </div>
      <div class="l-item">
        <span>女生最多 <span class="icon">↑↓</span></span>
      </div>
    </div>
    <div class="joblist mt10 pt1 pb30">
      <h3 class="f16 title">职业库</h3>
      <mt-cell v-for="item in jobList" :key="item.id" :title="item.name" is-link :to="{name: 'jobinfo',params:{id: item.id}}"></mt-cell>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'job_lib',
  data () {
    return {
      jobItemTitle: '职业类别'
    }
  },
  computed: {
    ...mapState({
      jobList: state => state.jobLib.jobList
    })
  },
  mounted () {
    console.log('jobList')
    console.log(this.jobList)
  }
}
</script>

<style lang="less">
  @import '../assets/less/_mixins-wln.less';
  .page_jobitem{
    .sort-list{
      display: flex;
      align-items: center;
      background-color: #fff;
      .l-item{
        text-align: center;
        flex:1;
        > span{
          display: inline-block;
          padding:15px 0;
          .icon{
            color:#999;
          }
        }
        &.current{
          > span{
            color:@primary;
            border-bottom:2px solid @primary;
            .icon{
              color:inherit;
            }
          }
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
