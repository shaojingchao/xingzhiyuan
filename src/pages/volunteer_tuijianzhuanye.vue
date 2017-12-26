<template>
  <div class="page_recommend_major">
    <mt-header title="北京大学（推荐专业）">
      <c-router-back slot="left"></c-router-back>
    </mt-header>

    <div class="college-head">
      <college-item :item="item" v-for="(item,i) in 1" :key="i" :linkTo="{name:'collegeinfo',params:{id:i}}"
      ></college-item>
    </div>

    <div class="major-list mt10">
      <c-section-title title="推荐专业"></c-section-title>
      <router-link v-for="item in 2" :key="i" :to="{name:'collegeinfo', params:{id:'2'}}" tag="div" class="cl-cell bd-t">
        <div class="main-info">工科试验班类（自动化与工业工程）
          <span class="prob">
            <c-add-favor :itemId="23" :url="'/api/v1/fav_college'"></c-add-favor>
          </span>
        </div>
        <div class="more-info">
          录取人数：<span class="score">12</span>
          录取几率：<span class="score">54%</span>
        </div>
      </router-link>
    </div>
    <c-vip v-if="!isVip"></c-vip>
    <div class="p30"></div>
    <c-footer-btn :text="'模拟填报分析'" :toLink="{name:'volunteertable'}"></c-footer-btn>
  </div>
</template>

<script type="text/ecmascript-6">
  import CollegeItem from '../components/collegeitem.vue'

  export default {
    components: {
      CollegeItem
    },
    data () {
      return {
        popupVisible: false,
        value: '',
        searchResult: [
          {
            name: '会计学1',
            id: '1'
          },
          {
            name: '会计学2',
            id: '2'
          }
        ],
        filterCate: [
          {
            values: [
              {
                cname: '降序',
                id: 0
              },
              {
                cname: '升序',
                id: 1
              }
            ],
            className: 'f-prob',
            textAlign: 'center'
          },
          {
            values: [
              {
                cname: '河南',
                id: 0
              },
              {
                cname: '河北',
                id: 1
              }
            ],
            className: 'f-province',
            textAlign: 'center'
          },
          {
            values: [
              {
                cname: '工科',
                id: 0
              },
              {
                cname: '文科',
                id: 1
              }
            ],
            className: 'f-category',
            textAlign: 'center'
          }
        ],
        filterCateIndex: 0,
        slots0: [
          {
            values: [
              {
                cname: '降序',
                id: 0
              },
              {
                cname: '升序',
                id: 1
              }
            ],
            showToolbar: true,
            className: 'f-prob',
            textAlign: 'center'
          }
        ],
        slots1: [
          {
            values: [
              {
                cname: '河南',
                id: 0
              },
              {
                cname: '河北',
                id: 1
              },
              {
                cname: '湖南',
                id: 1
              },
              {
                cname: '湖北',
                id: 1
              },
              {
                cname: '山西',
                id: 1
              }
            ],
            className: 'f-province',
            textAlign: 'center'
          }
        ],
        slots2: [
          {
            values: [
              {
                cname: '工科',
                id: 0
              },
              {
                cname: '文科',
                id: 1
              }
            ],
            className: 'f-category',
            textAlign: 'center'
          }
        ],
        hotList: [
          {
            title: '临床医学',
            id: '21'
          },
          {
            title: '会计学',
            id: '21'
          },
          {
            title: '金融学',
            id: '21'
          },
          {
            title: '软件工程',
            id: '21'
          },
          {
            title: '工商管理',
            id: '21'
          },
          {
            title: '计算机科学与技术',
            id: '21'
          }
        ]
      }
    },
    computed: {
      isVip () {
        return this.$store.getters.isVip
      }
    },
    mounted () {
    },
    methods: {}
  }
</script>

<style lang="less" rel="stylesheet/less">

  .page_recommend_major {
    background-color: #f3f5f7;

    .major-list {
      .main-info {
        font-size: 16px;
        .muted {
          color: #bbb;
          margin-left: 10px;
        }
      }
      .more-info {
        margin-top: 6px;
        color: #999;
        .score {
          color: #333;
          margin-right: 10px;
        }
      }
      .cl-cell {
        background-color: #fff;
        padding: 15px 10px;
        .prob {
          float: right;
        }
        .level {
          float: right;
          &.level-s {
            color: #00adef;
          }
          &.level-m {
            color: #fd9900;
          }
          &.level-l {
            color: #e9470f;
          }
        }
      }
    }
  }

</style>
