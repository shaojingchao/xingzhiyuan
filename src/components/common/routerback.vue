<template>
  <span @click="$router.back()">
    <slot>
      <mt-button icon="back"></mt-button>
    </slot>
  </span>
</template>

<script>
  export default {
    name: 'c-router-back'
  }
</script>

<style lang='less'>

</style>
