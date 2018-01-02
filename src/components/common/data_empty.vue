<template>
  <div class="comp_empty">
    <img src="../../assets/imgs/data_empty.png" alt="没有相关数据">
    <p class="text-muted mt30">{{text}}</p>
  </div>
</template>

<script>
  export default {
    name: 'c-endline',
    props: {
      text: {
        type: String,
        default: '没有相关数据~'
      }
    }
  }
</script>

<style lang="less">
  .comp_empty {
    img{
      max-width:160px;
      display: block;
      margin:0 auto;
    }
  }
</style>
