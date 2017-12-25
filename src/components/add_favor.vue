<template>
  <span class="favor" :class="{favored:isAdded}" v-text="isAdded === 0 ? '收藏' : '已收藏'" @click.stop="addMyFavor()"></span>
</template>

<script>
  export default {
    name: 'c-add-favor',
    data () {
      return {
        isAdded: 0
      }
    },
    props: {
      itemId: {
        required: true
      },
      url: {
        type: String,
        required: true
      }
    },
    methods: {
      /* 添加到收藏 */
      addMyFavor () {
        let msg = ''
        this.$Indicator.open()
        this.$http.get(this.url, {params: {id: this.itemId}}).then((res) => {
          console.log(res)
          this.isAdded = res.data.data
          if (res.data.data === 0) {
            msg = '已取消收藏'
          } else {
            msg = '已添加收藏'
          }
          this.$Indicator.close()
          this.$toast({
            message: msg,
            duration: 1200
          })
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/less/_mixins-wln/_wln-variables.less';
  .favor {
    font-size:14px;
    display: inline-block;
    vertical-align: -2px;
    padding-left: 1.3em;
    height: 1.1em;
    background: url("../assets/imgs/icon/favor.png") 0 center no-repeat;
    -webkit-background-size: contain;
    background-size: contain;
    margin-left: 7px;
    &.favored {
      color: @second;
      background-image: url("../assets/imgs/icon/favored.png");
    }
  }
</style>
