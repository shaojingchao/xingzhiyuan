<template>
  <div id="app">
    <navigation>
      <router-view class="child-view pct100"></router-view>
    </navigation>
    <!--<transition :name="transformName">-->
      <!---->
    <!--</transition>-->
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
      }
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
  html, body {
    height: 100%;
    background-color: #f3f5f7;
    font-size: 14px;
    overflow-x: hidden;
    font-family: @font-family;
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

  .mint-header {
    font-size: 16px;
    height: 44px;
  }

  .bd-b {
    background-image: -webkit-gradient(linear, left top, left bottom, from(#d9d9d9), color-stop(50%, #d9d9d9), color-stop(50%, transparent));
    background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-size: 120% 1px;
    background-repeat: no-repeat;
    background-position: bottom left;
    /*background-origin: content-box;*/
  }

  .bd-t {
    background-image: -webkit-gradient(linear, left top, left bottom, from(#d9d9d9), color-stop(50%, #d9d9d9), color-stop(50%, transparent));
    background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-size: 120% 1px;
    background-repeat: no-repeat;
    background-position: top left;
    /*background-origin: content-box;*/
  }

  .child-view {
    position: absolute;
    transition: all .3s cubic-bezier(.55, 0, .1, 1);
  }
  .none-enter, .none-leave-active {
    transition: none;
    /*opacity: 0;*/
    /*-webkit-transform: translate(30px, 0);*/
    /*transform: translate(30px, 0);*/
  }

  .none-leave-active, .none-enter {
    transition: none;
    /*opacity: 0;*/
    /*-webkit-transform: translate(-30px, 0);*/
    /*transform: translate(-30px, 0);*/
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
    transform: translate(10px, 0);
  }

  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    transform: translate(-10px, 0);
  }
  .slide-down-enter, .slide-up-leave-active {
    opacity: 0;
    transform: translateY(-30%);
  }

  .fade-in-down-leave-active, .fade-in-up-enter {
    opacity: 0;
    transform: translateY(-30%);
  }

  .fade-in-down-enter, .fade-in-up-leave-active {
    opacity: 0;
    transform: translateY(-20px);
  }

  .fade-in-down-leave-active, .fade-in-up-enter {
    opacity: 0;
    transform: translateY(-20px);
  }


  .rotateY-enter, .rotateY-leave-active {
    /*opacity: 0;*/
    /*transform: rotate3d();*/
    transform: perspective(500px) rotate3d(0, 1, 0,  -90deg);
  }

  .rotateY-leave-active, .rotateY-enter {
    /*opacity: 0;*/
    transform: perspective(-500px) rotate3d(0, 1, 0,  90deg);
  }


  @duration: 0.3s;
  .flipY-right-enter-active {
    animation: flipInY @duration;
  }
  .flipY-right-leave-active {
    animation: flipOutY @duration reverse;
  }

  .flipY-left-enter-active {
    animation: flipOutY @duration;
  }
  .flipY-left-leave-active {
    animation: flipInY @duration reverse;
  }


@perspective: 300vw;
  @keyframes flipInY {
    from {
      transform: perspective(@perspective) rotate3d(0, 1, 0, 90deg);
      animation-timing-function: ease;
    }
    to {
      transform: perspective(@perspective);
    }
  }
  @keyframes flipOutY {
    from {
      transform: perspective(@perspective) rotate3d(0, 1, 0, -90deg);
      animation-timing-function: ease;
    }
    to {
      transform: perspective(@perspective);
    }
  }

  /*.flipInY {*/
    /*-webkit-backface-visibility: visible !important;*/
    /*backface-visibility: visible !important;*/
    /*animation-name: flipInY;*/
  /*}*/


</style>
