<template>
  <div class="page_vip">
    <mt-header title="星志愿VIP">
      <c-router-back slot="left"></c-router-back>
    </mt-header>
    <div class="p10">
      <img class="resp-img pb10 bg-white" src="../assets/imgs/vip-intro.png" alt="">
    </div>
    <router-link class="vip-btn bti p10" tag="div" :to="{name:'payment'}">
      <a class="btn btn-yellow btn-block round btn-xl">开通VIP（¥198.0）</a>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'vip'
  }
</script>

<style lang='less'>
  .page_vip{
    padding-bottom: 62px;
    .vip-btn{
      position: fixed;
      bottom: 0;
      left:0;
      right:0;
      box-shadow: 0 -1px 3px rgba(0,0,0,0.01);
      background-color: #fff;
      .btn{
        box-shadow: 0 1px 5px rgba(0,0,0,0.2);
      }
    }
  }

</style>
