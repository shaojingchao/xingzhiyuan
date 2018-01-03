<template>
  <div :style="{height:height,width:width,'overflow':'auto'}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'bscroll',
    data () {
      return {
        iscroll: null
      }
    },
    props: {
      height: {
        type: String,
        default: '100%'
      },
      width: {
        type: String,
        default: '100%'
      }
    },
    mounted () {
      this.$nextTick(() => {
        /* globals Bscroll */
        this.iscroll = new Bscroll(this.$el, {scrollX: true,
          scrollY: false,
          momentum: false,
          click: true
        })
      })
    }
  }
</script>

<style lang='less'>

</style>
