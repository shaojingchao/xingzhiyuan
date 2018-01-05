<template>
  <div id="app">
    <router-view class="child-view pct100"></router-view>
    <!--<navigation>-->
      <!---->
    <!--</navigation>-->
    <!--<transition :name="transformName">-->
    <!---->
    <!--</transition>-->
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {}
    },
    computed: {
      transformName () {
        return this.$store.state.pageTransName
      }
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
