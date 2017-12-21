<template>
  <div class="page_samescore">
    <mt-header title="同位分去向">
      <c-router-back slot="left"></c-router-back>
    </mt-header>
    <div class="college-list bg-white">
      <div class="cl-cell bd-t" v-for="(item,index) in collegeList" :key="index">
        <div class="cl-cell-inner">
          <div class="cl-logo"><img :src="logo" :alt="item.name"></div>
          <div class="mt5 f16">{{item.name}}
            <span class="fr text-primary">{{item.num}}</span>
          </div>
          <div class="mt10 text-muted">
            {{item.major}}
            <span class="fr grayb">录取人数</span>
          </div>
        </div>
      </div>
    </div>
    <c-endline></c-endline>
  </div>
</template>

<script>
  export default {
    name: 'samescore',
    data () {
      return {
        logo: require('../assets/imgs/daxue/dx_logo.png'),
        collegeList: [
          {
            name: '北京大学',
            major: '金融专业',
            num: 121
          },
          {
            name: '清华大学',
            major: '计算机与通讯工程专业',
            num: 101
          },
          {
            name: '上海交通大学',
            major: '艺术设计',
            num: 98
          },
          {
            name: '上海财经大学',
            major: '生物制药专业',
            num: 21
          },
          {
            name: '中国石油大学',
            major: '金融专业',
            num: 12
          },
          {
            name: '上海财经大学',
            major: '生物制药专业',
            num: 21
          },
          {
            name: '中国石油大学',
            major: '金融专业',
            num: 12
          }
        ]
      }
    }
  }
</script>


<style lang="less" rel="stylesheet/less">

  .page_samescore {

    /*大学列表*/
    .college-list {
      .cl-cell {
        /*background-color: #fff;*/
        padding: 10px 10px;
        .cl-cell-inner {
          @logo_size: 50px;
          padding-left: @logo_size + 10px;
          overflow: hidden;
          .cl-logo {
            float: left;
            width: @logo_size + 10px;
            margin-left: -(@logo_size + 10px);
            img {
              max-width: @logo_size;
              display: block;
            }
          }
        }
      }
    }
  }

</style>
