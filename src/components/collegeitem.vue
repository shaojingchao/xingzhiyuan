<template>
  <router-link tag="div" to="/" class="cl-cell bd-t">
    <img :src="logo" alt="" class="cl-cell-pic">
    <div class="cl-cell-text">
      <div class="main-info">中国石油大学 <span class="favor" @click="addMyFavor($event, 1, '')"></span>
      </div>
      <div class="more-info">
        2016专业最低分：<span class="score">584</span>
      </div>
      <div class="tag-info">
        <span class="badge">综合</span>
        <span class="badge">本科</span>
        <span class="badge">公立</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'college-item',
  props: ['item'],
  data () {
    return {
      logo: require('../assets/imgs/daxue/dx_logo.png')
    }
  },
  methods: {
    /* 添加到收藏 */
    addMyFavor (event, id, curr) {
      event.stopPropagation()
      let msg = ''
      this.$Indicator.open()
      setTimeout(() => {
        if (curr === 'added') {
          $(event.target).removeClass('favored')
          msg = '已取消收藏'
        } else {
          $(event.target).addClass('favored')
          msg = '已添加收藏'
        }
        this.$Indicator.close()
        this.$toast({
          message: msg,
          duration: 2000
        })
      }, 1000)
    }
  }
}
</script>

<style lang="less">
  /*大学列表*/
  .college-list{
    .cl-cell{
      background-color: #fff;
      padding:12px 10px;
    }
    .cl-cell-pic{
      float: left;
      margin-right:-80px;
      width:70px;
      height:70px;
      border-radius:50%;
      background-color: #eee;
    }
    .cl-cell-text{
      padding-left: 80px;
      padding-right: 30px;
      background: url(../assets/imgs/icon/arrow-right.png) right center no-repeat;
      -webkit-background-size: 9px;
      background-size: 9px;
    }
    .main-info{
      font-size:16px;
      .favor{
        display: inline-block;
        vertical-align: -2px;
        width:1.1em;
        height:1.1em;
        background:url("../assets/imgs/icon/favor.png") center center no-repeat;
        -webkit-background-size: contain;
        background-size: contain;
        margin-left: 7px;
        &.favored{
          background-image:url("../assets/imgs/icon/favored.png");
        }
      }
    }
    .more-info{
      margin-top:8px;
      color:#999;
      .score{
        color:#333;
      }
    }
    .tag-info{
      margin-top:8px;
      .badge{
        font-size:12px;
        border-radius: 10px;
        padding:2px 8px;
        color:#93999f;
        background-color: #f3f5f7;
      }
    }
  }
</style>
