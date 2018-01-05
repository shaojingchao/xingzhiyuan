<template>
  <div class="page_collegeinfo">
    <mt-header title="北京航空航天大学">
      <c-router-back slot="left"></c-router-back>
      <img src="../assets/imgs/icon/icon-like-no.png" v-if="!isLike" slot="right" width="16" alt="">
      <img src="../assets/imgs/icon/icon-like-yes.png" v-else slot="right" width="16" alt="">
    </mt-header>

    <c-page-head :title="'人力资源管理专业'" :subtitle="'预计招收6人'"></c-page-head>

    <div class="tab-wrap">
      <div class="tab-nav bbi">
        <router-link tag="div" :to="{name:'collegemajorscoreline',params:{id:$route.params.id}}" replace class="nav-item"><span class="trans" :class="{on:tabActive === 'tab-1'}">分数线</span></router-link>
        <router-link tag="div" :to="{name:'collegemajorjiuye',params:{id:$route.params.id}}" replace class="nav-item"><span class="trans" :class="{on:tabActive === 'tab-2'}">就业</span></router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'collegeinfo-major',
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
  .page_collegeinfo{
  }

</style>
