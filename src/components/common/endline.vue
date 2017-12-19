<template>
  <div class="tc comp_endline">END</div>
</template>

<script>
  export default {
    name: 'c-endline'
  }
</script>

<style lang="less">
  .comp_endline {
    width:240px;
    margin:20px auto;
    color:#bbb;
    font-size:12px;
    &:after,&:before{
      content: '';
      display: block;
      width:90px;
      margin-top:5px;
      border-bottom:2px solid #dddddd;
      transform: rotateX(80deg);
    }
    &:after{
      float: left;
    }
    &:before{
      float: right;
    }
  }
</style>
