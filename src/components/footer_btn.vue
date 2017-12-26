<template>
  <footer class="app-btm-btn bti bg-white">
    <slot>
      <router-link :to="toLink"
                   class="btn btn-primary btn-block round btn-lg">{{text}}<img
        v-if="isVip"
        class="ml2 v-1"
        src="../assets/imgs/icon/icon-vip-sm.png"
        width="14" alt="">
      </router-link>
    </slot>
  </footer>
</template>

<script>
  export default {
    name: 'c-footer-btn',
    props: {
      text: {
        type: String,
        default: '确定'
      },
      toLink: {
        required: false,
        default: ''
      },
      isVip: {
        type: Boolean,
        required: false,
        default: false
      }
    }
  }
</script>

<style lang="less" scoped>
  .app-btm-btn {
    display: flex;
    padding: 10px;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    justify-content: space-evenly;
    .btn {
      display: block;
      /*display: inline-block;*/
      width: 100%;
    }
  }
</style>
