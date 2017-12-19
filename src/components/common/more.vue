<template>
  <div class="tc text-primary comp_more"><router-link class="btn btn-link btn-block p15" :to="to">{{text}}</router-link></div>
</template>

<script>
  export default {
    name: 'c-more',
    props: {
      text: {
        type: String,
        required: false,
        default: '查看更多 >>'
      },
      to: {
        type: Object
      }
    }
  }
</script>

<style lang="less">
  .comp_more {
  }
</style>
