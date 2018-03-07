<template>
  <transition name="slide-in-down">
    <div class="nihao" v-if="isVisible" @click="cancel">
      <div v-html="content"></div>
      <slot name="other"></slot>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'hello',
    data () {
      return {
        isVisible: false
      }
    },
    props: {
      content: {
        type: String,
        default: 'Hello'
      }
    },
    methods: {
      cancel () {
        this.$emit('cancel')
        return this
      },
      clickHandler (e) {
        console.log('fsdfs')
        // this.$emit('click', e)
      },
      show () {
        this.isVisible = true
        return this
      },
      hide () {
        this.isVisible = false
        return this
      }
    }
  }
</script>

<style lang="less" scoped>
.nihao{
  position:fixed;
  right:0;
  top:0;
  left:0;
  bottom:0;
  background-color: rgba(0,0,0,0.5);
  z-index: 100;
}
</style>
