<template>
  <div id="app">
    <mt-header title="星志愿">
      <!--<router-link to="/" slot="left">-->
        <!--<mt-button icon="back">返回</mt-button>-->
        <!--<mt-button @click="handleClose">关闭</mt-button>-->
      <!--</router-link>-->
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  html,body{
    margin:0
  }
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
.idx-chart{
  display: inline-block;
  width:100%;
}
</style>
