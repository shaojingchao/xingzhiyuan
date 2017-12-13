<template>
  <div id="app">
    <transition :name="transformName">
      <router-view class="child-view pct100"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        transformName: 'fade'
      }
    },
    mounted () {
      // let iscroll = new iScroll('#app')
      // console.log(iscroll)
    },
    watch: {
      '$route' (to, from) {
        console.log(to, from)
      }
    }
  }
</script>

<style>
  html,body{
    height:100%;
    background-color: #f3f5f7;
    font-size:14px;
  }
  /* let's clear some floats */
  .clearfix:before, .clearfix:after {
    content: "\0020";
    display: block;
    height: 0;
    overflow: hidden;
  }

  .clearfix:after {
    clear: both;
  }

  .clearfix {
    zoom: 1;
  }

  .idx-chart {
    display: inline-block;
    width: 100%;
  }

  .mint-header{
    font-size: 16px;
    height:44px;
  }

  .bd-b{
    background-image: -webkit-gradient(linear, left top, left bottom, from(#d9d9d9), color-stop(50%, #d9d9d9), color-stop(50%, transparent));
    background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-size: 120% 1px;
    background-repeat: no-repeat;
    background-position: bottom left;
    /*background-origin: content-box;*/
  }
  .bd-t{
    background-image: -webkit-gradient(linear, left top, left bottom, from(#d9d9d9), color-stop(50%, #d9d9d9), color-stop(50%, transparent));
    background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-size: 120% 1px;
    background-repeat: no-repeat;
    background-position: top left;
    /*background-origin: content-box;*/
  }
  .child-view {
    position: absolute;
    transition: all .3s cubic-bezier(.55,0,.1,1);
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
    /*-webkit-transform: translate(30px, 0);*/
    /*transform: translate(30px, 0);*/
  }
  .fade-leave-active, .fade-enter {
    opacity: 0;
    /*-webkit-transform: translate(-30px, 0);*/
    /*transform: translate(-30px, 0);*/
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(10%, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-10%, 0);
  }

</style>
