<template>
  <div class="page_major_info">
    <mt-header title="工商管理">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="filter">
      <span>概率</span>
      <span>省份</span>
      <span>分类</span>
    </div>
    <div class="hot-major">
      <div class="hot-major-list">
        <mt-cell
          v-for="(item,i) in hotList"
          :title="item.title"
          :key="i"
          to="/"
          is-link>
          <span class="hm-sort-icon" slot="icon">{{i+1}}</span>
        </mt-cell>
      </div>
    </div>
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
  }

</style>

<script type="text/ecmascript-6">
  // import HeaderComponent from './components/header.vue'

  export default {
    data () {
      return {
        msg: 'hello vue',
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
    components: {
      // HeaderComponent
    }
  }
</script>
