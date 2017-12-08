<template>
  <div class="page_college_search">
    <mt-header title="大学库">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <mt-search v-model="value" style="position:static;">
      <div class="college-list" style="padding-top:0px;">
        <college-item :item="item" v-for="(item,i) in result" :key="i" ></college-item>
      </div>
    </mt-search>
  </div>
</template>

<script>
import CollegeItem from '../components/collegeitem.vue'
export default {
  components: {
    CollegeItem
  },
  data () {
    return {
      msg: 'hello vue',
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
