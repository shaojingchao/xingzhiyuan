<template>
  <div class="page_passrate">
    <mt-header title="北京航空航天大学">
      <router-link :to="{name:'passrate'}" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="rate-area">
      <div class="tc rate">86.5<small class="f16"> %</small></div>
      <div class="tc text-white mt5 f16">录取概率</div>
      <div class="other-info">
        <div class="oi-item">
          <div class="f16 text-white">654</div>
          <div class="f12 grayc">我的成绩</div>
        </div>
        <div class="oi-item">
          <div class="f16 text-white">102</div>
          <div class="f12 grayc">省排名</div>
        </div>
        <div class="oi-item">
          <div class="f16 text-white">23</div>
          <div class="f12 grayc">校排名</div>
        </div>
      </div>
    </div>

    <div class="cate-intro">
      <div class="cate-item">
        <h3 class="item-title">
          工作内容
        </h3>
        <div class="cate-detail item1 pl10 pr10">
          <p>以你目前的成绩，勉强可以考上<span class="text-primary">北京外国语大学</span></p>
          <p>你的分数还可以上对外经济贸易大学等<span class="text-primary">210所</span>一本院校</p>
          <p>近三年与你成绩相近的人当中，被<span class="text-primary">中国政法大学</span>录取的考生最多(<span class="text-primary">28人</span>)</p>
        </div>
      </div>
      <div class="cate-item">
        <h3 class="item-title">
          各分数段录取排名
        </h3>
        <div class="cate-detail item1 pl10 pr10">
          <p>以你目前的成绩，勉强可以考上<span class="text-primary">北京外国语大学</span></p>
          <p>你的分数还可以上对外经济贸易大学等<span class="text-primary">210所</span>一本院校</p>
          <p>近三年与你成绩相近的人当中，被<span class="text-primary">中国政法大学</span>录取的考生最多(<span class="text-primary">28人</span>)</p>
        </div>
      </div>
      <div class="cate-item">
        <h3 class="item-title">
          本科第一批录取人数分布
        </h3>
        <div class="cate-detail item1 pl10 pr10">
          <p>以你目前的成绩，勉强可以考上<span class="text-primary">北京外国语大学</span></p>
          <p>你的分数还可以上对外经济贸易大学等<span class="text-primary">210所</span>一本院校</p>
          <p>近三年与你成绩相近的人当中，被<span class="text-primary">中国政法大学</span>录取的考生最多(<span class="text-primary">28人</span>)</p>
        </div>
      </div>
      <div class="cate-item">
        <h3 class="item-title">
          大学排序分
        </h3>
        <div class="cate-detail item1 pl10 pr10">
          <p>以你目前的成绩，勉强可以考上<span class="text-primary">北京外国语大学</span></p>
          <p>你的分数还可以上对外经济贸易大学等<span class="text-primary">210所</span>一本院校</p>
          <p>近三年与你成绩相近的人当中，被<span class="text-primary">中国政法大学</span>录取的考生最多(<span class="text-primary">28人</span>)</p>
        </div>
      </div>
      <div class="cate-item">
        <h3 class="item-title">
          该成绩能上的其他学校和专业
        </h3>
        <div class="cate-detail item1 pl10 pr10">
          <p>以你目前的成绩，勉强可以考上<span class="text-primary">北京外国语大学</span></p>
          <p>你的分数还可以上对外经济贸易大学等<span class="text-primary">210所</span>一本院校</p>
          <p>近三年与你成绩相近的人当中，被<span class="text-primary">中国政法大学</span>录取的考生最多(<span class="text-primary">28人</span>)</p>
        </div>
      </div>
      <div class="cate-item">
        <h3 class="item-title">
          同分考生去向
        </h3>
        <div class="cate-detail item1 pl10 pr10">
          <p>以你目前的成绩，勉强可以考上<span class="text-primary">北京外国语大学</span></p>
          <p>你的分数还可以上对外经济贸易大学等<span class="text-primary">210所</span>一本院校</p>
          <p>近三年与你成绩相近的人当中，被<span class="text-primary">中国政法大学</span>录取的考生最多(<span class="text-primary">28人</span>)</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import CollegeItem from '../components/collegeitem.vue'
  export default {
    name: 'passrate',
    components: {
      CollegeItem
    },
    data () {
      return {
        msg: 'hello vue',
        popupVisible: false,
        value: '',
        result: 5
      }
    }
  }
</script>

<style lang="less">
  @import '../assets/less/_mixins-wln.less';
  .page_passrate{
    background-color: #f3f5f7;

    /*头部*/
    .rate-area{
      padding-top:20px;
      background-color: @primary;
      color:#fff;
      .rate{
        font-size:48px;
      }
      .other-info{
        padding-top:40px;
        padding-bottom:12px;
        display: flex;
        text-align: center;
        align-items: center;
        .oi-item{
          position: relative;
          line-height:1.5;
          flex:1;
          .grayc{
            color:rgba(255,255,255,.5);
          }
          &:after{
            position: absolute;
            right:0;
            top:23%;
            content:'';
            display: block;
            height:60%;
            width:1px;
            background-color: rgba(255,255,255,.3);
          }
          &:last-child{
            &:after{
              display: none;
            }
          }
        }
      }

    }

    /*详细介绍*/
    .cate-intro{
      .cate-item{
        background-color: #fff;
        margin-bottom:10px;
        padding:2px 0 10px;
      }
      .item-title{
        font-size:18px;
        padding-left:15px;
        border-left:3px solid @primary;
      }
      .item1{
        p{
          padding-left:16px;
          &:before{
            content:'';
            display: inline-block;
            float: left;
            width:8px;
            height:8px;
            border-radius:100%;
            background-color: @primary;
            margin-top:3px;
            margin-left:-16px;
          }
        }
      }
    }

  }
</style>
