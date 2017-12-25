<template>
  <div class="collegeinfo-plan">
    <c-section-title title="开设院校"></c-section-title>
    <div class="pb20 bg-white">
      <mt-cell v-for="(item,i) in collegeList" :title="item" :key="i" is-link :to="{name: 'collegeinfo',params: {id:i}}"></mt-cell>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        collegeList: ['中央财经大学', '哈尔滨工业大学', '华中科技大学', '吉利大学']
      }
    },
    computed: {},
    mounted () {
    }
  }
</script>

<style lang="less">

</style>
