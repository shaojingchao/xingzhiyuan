<template>
  <div class="vip">
    <p>开通星志愿VIP</p>
    <p>即可查看全部推荐院校</p>
    <div>
      <mt-button class="btn">
      <span slot="">立即开通</span>
      </mt-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vip'
  }
</script>

<style lang="less" scoped>
  .vip {
    padding:20px 0;
    text-align: center;
    p {
      text-align: center;
      color: #aaa;
      margin:5px 0;
    }
    .btn{
      margin-top:10px;
      border-radius:40px;
      color:#fff;
      padding:0 3.6em;
      border-color:#f4be08;
      height:2.6em;
      line-height:2.6em;
      background-color: #f4be08;
      box-shadow: 0 1px 5px rgba(244,190,8,.3);
    }
  }

</style>
