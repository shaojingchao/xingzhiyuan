<template>
  <div class="page_major">
    <mt-header title="专业优先">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <mt-search v-model="value">
      <mt-cell
        v-for="(item,i) in searchResult"
        :key="i"
        :title="item.name"
        :value="item.id">
      </mt-cell>
    </mt-search>
    <div class="hot-major">
      <div class="title">热门专业</div>
      <div class="hot-major-list">
        <mt-cell
          v-for="(item,i) in hotList"
          :title="item.title"
          :key="i"
          :to="'/major/'+item.id"
          is-link>
          <span class="hm-sort-icon" slot="icon">{{i+1}}</span>
        </mt-cell>
      </div>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .page_major{
    background-color: #f3f5f7;
    .mint-search{
      height:auto;
    }
    .mint-search-list{
      position: static;
      padding-top:0;
    }
    .mint-searchbar{
      background-color: #f3f5f7;
      .mint-searchbar-inner{
        padding:5px 10px;
        border-radius:40px;
        .mintui-search{
          font-size: 20px;
          color: #93999f;
        }
      }
      &-cancel{
        color: #4d555d;
      }
    }

    /*热门专业*/
    .hot-major{
      .title{
        font-size:14px;
        color:#999;
        background-color: #fff;
        margin-top:10px;
        padding:15px 10px;
      }
    }
    .hot-major-list{
      .mint-cell{
        .hm-sort-icon{
          float: left;
          margin-right:5px;
          display: inline-block;
          width:1.2em;
          height:1.2em;
          font-size:13px;
          text-align: center;
          line-height:1.5;
          color:#00adef;
          border:1px solid #00adef;
          border-radius: 3px;
          background-color: #fff;
        }
        &:nth-child(1) .hm-sort-icon{
          color:#fff;
          border-color:#e9470f;
          background-color: #e9470f;
        }
        &:nth-child(2) .hm-sort-icon{
          color:#fff;
          border-color:#fd9900;
          background-color: #fd9900;
        }
        &:nth-child(3) .hm-sort-icon{
          color:#fff;
          border-color:#fec108;
          background-color: #fec108;
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
