<template>
  <div class="page_joblist">
    <mt-header :title="jobItemTitle">
      <c-router-back slot="left"></c-router-back>
    </mt-header>
    <div class="sort-list bbi">
      <div @click="sortListData(job,'a')" class="l-item" :class="{'current': isSortA}">
        <span>薪酬最高 <span class="icon f12 xzy-icon-sort iconfont"></span></span>
      </div>
      <div @click="sortListData(job,'b')" class="l-item" :class="{'current': !isSortA}">
        <span>女生最多 <span class="icon f12 xzy-icon-sort iconfont"></span></span>
      </div>
    </div>
    <c-section-title class="bbi" title="职业库"></c-section-title>
    <div class="job-list">
      <transition-group>
        <router-link tag="div" class="job-list-item bbi on-active"
                     v-for="item in job"
                     :to="{name: 'jobinfo',params:{id: item.id}}"
                     :key="item.id">
          <div class="i-head">{{item.title}}
            <span class="fr trans" :class="{'text-primary': isSortA,'text-second': !isSortA}">
              <span v-show="isSortA">{{'¥' + item.salary}}</span>
              <span v-show="!isSortA">{{item.female_ratio | formatRatio}}</span>
            </span>
          </div>
          <div class="i-label gray9">{{item.catename}}<span class="grayb fr">{{isSortA? '毕业五年月薪' : '人数占比率'}}</span>
          </div>
        </router-link>
      </transition-group>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'job-list',
    data () {
      return {
        jobItemTitle: '职业类别',
        sort: 'a',
        showCate: false
      }
    },
    computed: {
      ...mapState({
        job: state => state.industry.job,
        list: state => state.industry.list,
        cateList: state => state.industry.cate
      }),
      isSortA () { // 默认薪酬排序
        return this.sort === 'a'
      }
    },
    mounted () {
    },
    methods: {
      sortListData: function (list, sort) { // 列表排序
        this.sort = sort
        list.sort((a, b) => {
          if (sort === 'b') {
            return b.female_ratio - a.female_ratio
          }
          if (sort === 'a') {
            return parseFloat(b.salary) - parseFloat(a.salary)
          }
        })
      }
    }
  }
</script>

<style lang="less">
  @import '../assets/less/_mixins-wln.less';

  .page_joblist {
    .sort-list {
      display: flex;
      align-items: center;
      background-color: #fff;
      .l-item {
        text-align: center;
        flex: 1;
        > span {
          display: inline-block;
          padding: 15px 0;
          border-bottom: 2px solid transparent;
          .icon {
            color: #bbb;
            font-weight: 700;
            font-size: 13px;
          }
        }
        &.current {
          > span {
            color: @primary;
            border-bottom: 2px solid @primary;
            .icon {
              color: inherit;
            }
          }
        }
      }
    }
    .job-list {
      background-color: #fff;
      .title {
        border-left: 3px solid @primary;
        padding-left: 15px;
      }
    }
    .job-list-item {
      /*background-color: #fff;*/
      padding: 12px 10px;
      transition: transform .6s;
      .i-head{
        font-size:15px;
      }
      .i-label{
        font-size:13px;
        margin-top:8px;
      }
    }
  }

</style>
