<template>
  <div class="page_index">
    <mt-header title="星志愿">
      <router-link slot="right" :to="{name: 'volunteer'}">
        <mt-button><small>志愿表</small></mt-button>
      </router-link>
    </mt-header>
    <div class="J_echart" @click="changeScore" v-if="userInfo">
      <img class="idx-chart" src="../assets/imgs/idx-chart_02.png" alt="">
    </div>

    <div class="tc p30 add-user-info" v-else>
      <div class="f20">添加考试信息</div>
      <p class="text-muted">根据你的考试信息，为你推荐学校~</p>
      <div class="tc">
        <span class="btn shadow round btn-primary btn-lg btn-lg-w">立即添加</span>
      </div>
    </div>
    <!--<indexChart />-->
    <div class="md-list">
      <router-link :to="item.href" v-for="(item,index) in moduleList" :key="index">
        <div class="md-icon">
          <div class="md-icon-img">
            <img :src="item.icon" :alt="item.label">
            <span class="hot-tips" v-if="item.hot">热门</span>
          </div>
        </div>
        <p>{{item.label}}</p>
      </router-link>
    </div>
    <div class="update-tips"><span>神秘功能敬请期待</span></div>

    <dialog-set-score :isShow.sync="showScoreDialog"></dialog-set-score>

  </div>
</template>

<script>
  import indexChart from '../components/index_chart.vue'

  export default {
    name: 'index',
    components: {
      indexChart
    },
    data () {
      return {
        userInfo: true,
        showScoreDialog: false,
        moduleList: [
          {
            icon: require('../assets/imgs/icon/md-icon1.png'),
            href: {name: 'volunteer'},
            label: '填报志愿',
            hot: false
          },
          {
            icon: require('../assets/imgs/icon/md-icon2.png'),
            href: {name: 'majorfirst'},
            label: '专业优先',
            hot: false
          },
          {
            icon: require('../assets/imgs/icon/md-icon3.png'),
            href: {name: 'collegefirst'},
            label: '院校优先',
            hot: false
          },
          {
            icon: require('../assets/imgs/icon/md-icon4.png'),
            href: {name: 'passrate'},
            label: '录取率',
            hot: false
          },
          {
            icon: require('../assets/imgs/icon/md-icon-college.png'),
            href: {name: 'college'},
            label: '大学库',
            hot: false
          },
          {
            icon: require('../assets/imgs/icon/md-icon-major.png'),
            href: {name: 'major'},
            label: '专业库',
            hot: false
          },
          {
            icon: require('../assets/imgs/icon/md-icon-job.png'),
            href: {name: 'job'},
            label: '职业库',
            hot: false
          },
          {
            icon: require('../assets/imgs/icon/md-icon-scoreline.png'),
            href: {name: 'scoreline'},
            label: '分数线',
            hot: false
          },
          {
            icon: require('../assets/imgs/icon/md-icon-plan.png'),
            href: {name: 'plan'},
            label: '招生计划',
            hot: false
          },
          {
            icon: require('../assets/imgs/icon/md-icon-samescore.png'),
            href: {name: 'samescore'},
            label: '同分去向',
            hot: false
          },
          {
            icon: require('../assets/imgs/icon/md-icon-test.png'),
            href: {name: 'mbti'},
            label: '综合测试',
            hot: true
          },
          {
            icon: require('../assets/imgs/icon/md-icon-more.png'),
            href: {name: 'more'},
            label: '更多',
            hot: false
          }
        ]
      }
    },
    methods: {
      changeScore () {
        this.showScoreDialog = true
      }
    }
  }
</script>

<style lang="less">
  .page_index {
    .J_echart {
      /*height:400px;*/
    }
    .idx-chart {
      display: block;
      width: 100%;
    }
    .add-user-info {
      padding: 60px 0;
      background-color: #fff;
      margin-bottom: 10px;
    }
    .md-list {
      display: flex;
      flex-wrap: wrap;
      .md-icon {
        /*height:40px;*/
        position: relative;
        text-align: center;
        .md-icon-img {
          display: inline-block;
          position: relative;
          .hot-tips {
            transform: scale(0.7);
            position: absolute;
            top: 0;
            right: -15px;
            font-weight: 700;
            display: inline-block;
            background-color: #ff4537;
            color: #fff;
            font-size: 12px;
            border-radius: 13px;
            /*height:17px;*/
            /*line-height:17px;*/
            padding: 3px 6px 1px 6px;
          }
        }
        img {
          /*position: absolute;*/
          /*left:50%;*/
          /*top:50%;*/
          transform: scale(0.6);
          display: block;

          /*width:28px;*/
          /*max-height: 100%;*/
          margin: 0 auto;
        }
      }
      a {
        display: block;
        padding: 15px 0;
        font-size: 14px;
        color: #666;
        text-decoration: none;
        text-align: center;
        width: 25%;
        background-color: #fff;
        &:nth-child(1) {
          margin-bottom: 10px;
          padding-bottom: 15px;
        }
        &:nth-child(2) {
          margin-bottom: 10px;
          padding-bottom: 15px;
        }
        &:nth-child(3) {
          margin-bottom: 10px;
          padding-bottom: 15px;
        }
        &:nth-child(4) {
          margin-bottom: 10px;
          padding-bottom: 15px;
        }
        p {
          margin: 6px 0 0;
        }
      }
    }

    /*敬请期待*/
    .update-tips {
      margin: 20px auto;
      height: 23px;
      width: 200px;
      line-height: 23px;
      font-size: 12px;
      color: #999;
      text-align: center;
      span {
        &::before, &::after {
          content: '';
          float: left;
          width: 25%;
          margin-top: 11px;
          height: 1px;
          transform: scale(0.5);
          background-color: #ccc;
        }
        &:after {
          float: right;
        }
      }
    }
  }
</style>
