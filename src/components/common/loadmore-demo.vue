<template>
  <mt-loadmore :bottom-method="loadTop" @bottom-status-change="handleTopChange">
    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>
    <div slot="bottom" class="mint-loadmore-bottom">
      <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
      <span v-show="topStatus === 'loading'">Loading...</span>
    </div>
  </mt-loadmore>
</template>
<script>
  export default {
    data () {
      return {
        topStatus: '',
        list: 10
        // ...
      }
    },
    methods: {
      handleTopChange (status) {
        this.topStatus = status
        alert('asdas')
      },
      loadTop () {
        console.log('dasdasda')
      }
      // ...
    }
    // ...
  }
</script>
