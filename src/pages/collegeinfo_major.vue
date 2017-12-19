<template>
  <div class="page_collegeinfo">
    <mt-header title="北京航空航天大学">
      <c-router-back slot="left"></c-router-back>
      <img src="../assets/imgs/icon/icon-like-no.png" v-if="!isLike" slot="right" width="16" alt="">
      <img src="../assets/imgs/icon/icon-like-yes.png" v-else slot="right" width="16" alt="">
    </mt-header>
    <div class="ci-head">
      <div class="f20 tc">人力资源管理专业</div>
      <div class="tc mt10"><span class="dib plan-num">预计招收6人</span></div>
    </div>

    <div class="tab-wrap">
      <div class="tab-nav bbi">
        <router-link tag="div" :to="{name:'collegemajorscoreline'}" replace class="nav-item"><span class="trans" :class="{on:tabActive === 'tab-1'}">分数线</span></router-link>
        <router-link tag="div" :to="{name:'collegemajorjiuye'}" replace class="nav-item"><span class="trans" :class="{on:tabActive === 'tab-2'}">就业</span></router-link>
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
    .ci-head{
      background-color: @primary;
      color:#fff;
      padding:20px 10px 30px;
      .plan-num{
        border:1px solid rgba(255,255,255,.4);
        border-radius:30px;
        padding:3px 12px;
      }
    }
  }

</style>
