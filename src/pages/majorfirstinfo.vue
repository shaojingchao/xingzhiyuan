<template>
  <div class="page_major_info">
    <mt-header title="工商管理">
      <c-router-back slot="left"></c-router-back>
    </mt-header>

    <div class="filter">
      <span @click="filterEvent(0)">概率</span>
      <span @click="filterEvent(1)">省份</span>
      <span @click="filterEvent(2)">分类</span>
    </div>
    <mt-popup class="filter-popup"
      v-model="popupVisible"
      position="bottom">
      <mt-picker :slots="slots0" :valueKey="'cname'" @change="onValuesChange" v-if="filterCateIndex === 0"></mt-picker>
      <mt-picker :slots="slots1" :valueKey="'cname'" @change="onValuesChange" v-if="filterCateIndex === 1"></mt-picker>
      <mt-picker :slots="slots2" :valueKey="'cname'" @change="onValuesChange" v-if="filterCateIndex === 2"></mt-picker>
    </mt-popup>
    <div class="college-list">
      <router-link :to="{name:'collegeinfo', params:{cid:'2'}}" tag="div" class="cl-cell bd-t">
        <div class="main-info">中国石油大学<small class="muted">北京市</small>
          <span class="prob">98%</span>
        </div>
        <div class="more-info">
          2016专业最低分：<span class="score">584</span>
          招生计划：<span class="score">39</span>
          <span class="level level-s">风险较小</span>
        </div>
      </router-link>
      <router-link :to="{name:'collegeinfo', params:{cid:'2'}}" tag="div" class="cl-cell bd-t">
        <div class="main-info">中国石油大学<small class="muted">北京市</small>
          <span class="prob">68%</span>
        </div>
        <div class="more-info">
          2016专业最低分：<span class="score">584</span>
          招生计划：<span class="score">39</span>
          <span class="level level-m">风险适中</span>
        </div>
      </router-link>
      <router-link :to="{name:'collegeinfo', params:{cid:'2'}}" tag="div" class="cl-cell bd-t on-active">
        <div class="main-info">中国石油大学<small class="muted">北京市</small>
          <span class="prob">50%</span>
        </div>
        <div class="more-info">
          2016专业最低分：<span class="score">584</span>
          招生计划：<span class="score">39</span>
          <span class="level level-l">风险较高</span>
        </div>
      </router-link>
    </div>
    <c-vip v-if="!isVip"></c-vip>
  </div>
</template>

<style lang="less" rel="stylesheet/less">

  .page_major_info{
    background-color: #f3f5f7;
    .filter{
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-content: center;
      span{
        width:33.3%;
        text-align: center;
        padding:15px 0;
        &:after{
          content:'';
          vertical-align:2px;
          margin-left: 4px;
          display: inline-block;
          border-color:#93999f #fff  #fff #fff;
          border-width:7px 5px 0 5px;
          border-style:solid solid solid solid ;
        }
      }
    }
    .filter-popup{
      width:100%
    }

    /*大学列表*/
    .college-list{
      .main-info{
        font-size:16px;
        .muted{
          color:#bbb;
          margin-left: 10px;
        }
      }
      .more-info{
        margin-top:6px;
        color:#999;
        .score{
          color:#333;
        }
      }
      .cl-cell{
        background-color: #fff;
        padding:15px 10px;
        .prob {
          float: right;
        }
        .level {
          float: right;
          &.level-s{
            color:#00adef;
          }
          &.level-m{
            color:#fd9900;
          }
          &.level-l{
            color:#e9470f;

          }
        }

      }
    }
  }

</style>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        msg: 'hello vue',
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
    methods: {
      filterEvent (cate) {
        this.filterCateIndex = cate
        this.popupVisible = !this.popupVisible
      },
      onValuesChange (picker, values) {
        // if (values[0] > values[1]) {
        //   picker.setSlotValue(1, values[0]);
        // }
      }
    }
  }
</script>
