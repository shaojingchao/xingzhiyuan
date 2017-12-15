<template>
  <div class="page_college_search">
    <mt-header title="录取率">
      <c-router-back slot="left"></c-router-back>
    </mt-header>

    <mt-search v-model="value" show autofocus placeholder="输入专业名称">
      <div class="college-list" v-if="!value">
        <college-item :item="item" v-for="(item,i) in result" :linkTo="{name:'passrateinfo',params:{id:item}}" :key="i"></college-item>
      </div>
      <p class="text-muted tc" v-else>{{tips.COLLEGE_SEARCH_NO_DATA}}</p>
    </mt-search>
  </div>
</template>

<script>
  import CollegeItem from '../components/collegeitem.vue'
  import TIPS from '../tips'
  export default {
    name: 'passrate',
    components: {
      CollegeItem
    },
    data () {
      return {
        tips: TIPS,
        msg: 'hello vue',
        popupVisible: false,
        value: '',
        result: 6
      }
    }
  }
</script>

<style lang="less">
  .page_college_search{
  }
</style>
