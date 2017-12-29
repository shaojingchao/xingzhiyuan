<template>
  <div :style="{height:height,'overflow':'scroll'}">
    <div class="---------------------">
      <slot></slot>
    </div>
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
      }
    },
    mounted () {
      this.$nextTick(() => {
        /* globals Bscroll */
        this.iscroll = new Bscroll(this.$el, {click: true, tap: true})
      })
    }
  }
</script>

<style lang='less'>

</style>
