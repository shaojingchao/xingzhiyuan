<template>
  <div>
    <mt-header title="星志愿">
      <!--<router-link to="/" slot="left">-->
      <!--<mt-button icon="back">返回</mt-button>-->
      <!--<mt-button @click="handleClose">关闭</mt-button>-->
      <!--</router-link>-->
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="J_echart" @click="changeScore">
      <img class="idx-chart" src="../assets/imgs/idx-chart_02.png" alt="">
    </div>
    <!--<indexChart />-->
    <div class="md-list">
      <router-link :to="{name:'volunteer'}">
        <div class="md-icon">
          <img src="../assets/imgs/icon/md-icon1.png" alt="">
        </div>
        <p>填报志愿</p>
      </router-link>
      <router-link :to="{name:'majorfirst'}">
        <div class="md-icon">
          <img src="../assets/imgs/icon/md-icon2.png" alt="">
        </div>
        <p>专业优先</p>
      </router-link>
      <router-link :to="{name:'collegefirst'}">
        <div class="md-icon">
          <img src="../assets/imgs/icon/md-icon3.png" alt="">
        </div>
        <p>院校优先</p>
      </router-link>
      <router-link :to="{name:'passrate'}">
        <div class="md-icon">
          <img src="../assets/imgs/icon/md-icon4.png" alt="">
        </div>
        <p>录取率</p>
      </router-link>
      <router-link :to="{name:'college'}">
        <div class="md-icon">
          <img src="../assets/imgs/icon/md-icon-college.png" alt="">
        </div>
        <p>大学库</p>
      </router-link>
      <router-link :to="{name:'major'}">
        <div class="md-icon">
          <img src="../assets/imgs/icon/md-icon-major.png" alt="">
        </div>
        <p>专业库</p>
      </router-link>
      <router-link :to="{name:'job'}">
        <div class="md-icon">
          <img src="../assets/imgs/icon/md-icon-job.png" alt="">
        </div>
        <p>职业库</p>
      </router-link>
      <router-link :to="{name:'scoreline'}">
        <div class="md-icon">
          <img src="../assets/imgs/icon/md-icon-scoreline.png" alt="">
        </div>
        <p>分数线</p>
      </router-link>
      <router-link :to="{name:'plan'}">
        <div class="md-icon">
          <img src="../assets/imgs/icon/md-icon-plan.png" alt="">
        </div>
        <p>招生计划</p>
      </router-link>
      <router-link :to="{name:'samescore'}">
        <div class="md-icon">
          <img src="../assets/imgs/icon/md-icon-samescore.png" alt="">
        </div>
        <p>同分去向</p>
      </router-link>
      <router-link :to="{name:'evaluation'}">
        <div class="md-icon">
          <img src="../assets/imgs/icon/md-icon-test.png" alt="">
        </div>
        <p>综合测试</p>
      </router-link>
      <router-link :to="{name:'more'}">
        <div class="md-icon">
          <img src="../assets/imgs/icon/md-icon-more.png" alt="">
        </div>
        <p>更多</p>
      </router-link>
    </div>
    <div class="update-tips"><span>神秘功能敬请期待</span></div>

    <dialog-set-score :isShow.sync="showScoreDialog"></dialog-set-score>

  </div>
</template>

<script>
  import indexChart from '../components/indexChart.vue'
  import dialogSetScore from '../components/dialogSetScore.vue'
  export default {
    name: 'index',
    components: {
      indexChart,
      dialogSetScore
    },
    data () {
      return {
        showScoreDialog: false
      }
    },
    mounted () {
    },
    methods: {
      changeScore () {
        this.showScoreDialog = true
      }
    }
  }
</script>

<style lang="less" scoped>
  .J_echart{
    /*height:400px;*/
  }
  .idx-chart {
    display: block;
    width: 100%;
  }
  .md-list{
    display: flex;
    flex-wrap: wrap;
    .md-icon{
      height:40px;
      position: relative;
      img{
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%) scale(0.6);
        display: block;

        /*width:28px;*/
        /*max-height: 100%;*/
        margin:0 auto;
      }
    }
    a {
      display: block;
      padding:10px 0;
      font-size:14px;
      color:#666;
      text-decoration: none;
      text-align: center;
      width:25%;
      p{
        margin:6px 0 0;
      }
    }
  }

  /*敬请期待*/
  .update-tips{
    margin:20px auto;
    height:23px;
    width:200px;
    line-height: 23px;
    font-size:12px;
    color:#999;
    text-align: center;
    span{
      &::before,&::after{
        content:'';
        float: left;
        width:25%;
        margin-top:11px;
        height:1px;
        transform: scale(0.5);
        background-color: #ccc;
      }
      &:after{
        float: right;
      }
    }

  }

</style>
