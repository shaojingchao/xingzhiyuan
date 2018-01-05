<template>
  <div class="page_majorinfo">
    <mt-header title="北京航空航天大学">
      <c-router-back slot="left"></c-router-back>
      <img src="../assets/imgs/icon/icon-like-no.png" v-if="!isLike" slot="right" width="16" alt="">
      <img src="../assets/imgs/icon/icon-like-yes.png" v-else slot="right" width="16" alt="">
    </mt-header>
    <c-page-head title="武术与民族传统体育" subtitle="专业信息详情"></c-page-head>

    <div class="tab-wrap">
      <div class="tab-nav bbi">
        <router-link tag="div" :to="{name:'majorlibinfointro', params:{id:$route.params.id}}" replace class="nav-item"><span class="trans" :class="{on:tabActive === 'tab-1'}">简介</span></router-link>
        <router-link tag="div" :to="{name:'majorlibinfocollege', params:{id:$route.params.id}}" replace class="nav-item"><span class="trans" :class="{on:tabActive === 'tab-2'}">开设院校</span></router-link>
        <router-link tag="div" :to="{name:'majorlibinfojiuye', params:{id:$route.params.id}}" replace class="nav-item"><span class="trans" :class="{on:tabActive === 'tab-3'}">就业</span></router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'majorlib-info',
  data () {
    return {
      isLike: true,
      tabActive: 'tab-1'
    }
  },
  mounted () {
    // console.log(this.$route)
  }
}
</script>

<style lang="less">
  @import '../assets/less/_mixins-wln.less';
  .page_majorinfo{
  }

</style>
