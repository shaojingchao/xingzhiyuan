<template>
  <div class="page_jobinfo">
    <mt-header :title="'职业'">
      <router-back slot="left"></router-back>
    </mt-header>
    <h1>{{$route.path}}</h1>
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
  .page_jobinfo{
  }

</style>
