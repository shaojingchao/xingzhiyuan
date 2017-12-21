<template>
  <div class="page_planinfo">
    <mt-header title="招生计划">
      <c-router-back slot="left"></c-router-back>
    </mt-header>

    <mt-search v-model="value" show autofocus placeholder="输入院校名称">
      <div class="college-list" v-if="!value">
        <div class="pl10 pr10 pt15 pb15 text-muted bg-white">你可能感兴趣的学校</div>
        <college-item :item="item" v-for="(item,i) in result" :linkTo="{name:'planinfo',params:{cid:item}}"
                      :key="i"></college-item>
      </div>
      <p class="text-muted tc" v-else>{{tips.COLLEGE_SEARCH_NO_DATA}}</p>
    </mt-search>
  </div>
</template>

<script>
  import CollegeItem from '../components/collegeitem.vue'
  import TIPS from '../tips'

  export default {
    name: 'scoreline',
    components: {
      CollegeItem
    },
    data () {
      return {
        tips: TIPS,
        value: '',
        result: 6
      }
    }
  }
</script>

<style lang="less">
  .page_planinfo {
  }
</style>
