<template>
  <div id="app">
    <router-view v-if="isInit" class="child-view pct100"></router-view>
    <init v-if="!isInit"></init>
  </div>
</template>

<script>
  import Rem from './util/rem.js'
  import Init from './pages/init'
  export default {
    name: 'app',
    components: {
      Init
    },
    data () {
      return {
      }
    },
    computed: {
      transformName () {
        return this.$store.state.pageTransName
      },
      isInit () {
        return this.$store.state.user.isInit
      }
    },
    created () {
      if (!this.isInit) {
        this.$router.replace('/')
      }
    },
    mounted () {
      Rem(720, 720, 14)
    }
  }
</script>

<style lang="less">
  @import './assets/less/_mixins-wln.less';

  .idx-chart {
    display: inline-block;
    width: 100%;
  }

  .child-view {
    position: absolute;
    transition: all .3s cubic-bezier(.55, 0, .1, 1);
  }

</style>
