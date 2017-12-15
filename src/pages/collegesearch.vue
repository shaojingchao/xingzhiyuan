<template>
  <div class="page_college_search">
    <mt-header title="大学库">
      <c-router-back slot="left"></c-router-back>
    </mt-header>

    <mt-search v-model="value" show autofocus placeholder="输入学校名称" style="position:static;">
      <div class="college-list" v-if="!value">
        <college-item :item="item" v-for="(item,i) in result" :linkTo="{name:'collegeinfo',params:{id:i}}" :key="i" ></college-item>
      </div>
      <p class="text-muted tc" v-else>{{tips.COLLEGE_SEARCH_NO_DATA}}</p>
    </mt-search>
  </div>
</template>

<script>
import CollegeItem from '../components/collegeitem.vue'
import TIPS from '../tips'
export default {
  components: {
    CollegeItem
  },
  data () {
    return {
      tips: TIPS,
      popupVisible: false,
      value: '',
      result: '4'
    }
  }
}
</script>

<style lang="less">
  .page_college_search{
    background-color: #f3f5f7;
    .mint-search-list{
      position: static;
      padding-top: 0;
    }
  }
</style>
