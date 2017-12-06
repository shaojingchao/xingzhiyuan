<template>
  <div>
    <div>
      <img class="idx-chart" src="../assets/imgs/idx-chart_02.png" alt="">
    </div>
    <div class="md-list">
      <a href="/#/volunteer">
        <div class="md-icon">
          <img src="../assets/imgs/icon/md-icon1.png" alt="">
        </div>
        <p>填报志愿</p>
      </a>
      <a href="/#/major">
        <div class="md-icon">
          <img src="../assets/imgs/icon/md-icon2.png" alt="">
        </div>
        <p>专业优先</p>
      </a>
      <a href="/#/major">
        <div class="md-icon">
          <img src="../assets/imgs/icon/md-icon3.png" alt="">
        </div>
        <p>院校优先</p>
      </a>
      <a href="/#/college">
        <div class="md-icon">
          <img src="../assets/imgs/icon/md-icon4.png" alt="">
        </div>
        <p>录取率</p>
      </a>
      <a href="/#/collegelib">
        <div class="md-icon">
          <img src="../assets/imgs/icon/md-icon-college.png" alt="">
        </div>
        <p>大学库</p>
      </a>
      <a href="/#/majorlib">
        <div class="md-icon">
          <img src="../assets/imgs/icon/md-icon-major.png" alt="">
        </div>
        <p>专业库</p>
      </a>
      <a href="/#/joblib">
        <div class="md-icon">
          <img src="../assets/imgs/icon/md-icon-job.png" alt="">
        </div>
        <p>职业库</p>
      </a>
      <a href="/#/scoreline">
        <div class="md-icon">
          <img src="../assets/imgs/icon/md-icon-scoreline.png" alt="">
        </div>
        <p>分数线</p>
      </a>
      <a href="/#/plan">
        <div class="md-icon">
          <img src="../assets/imgs/icon/md-icon-plan.png" alt="">
        </div>
        <p>招生计划</p>
      </a>
      <a href="/#/samescore">
        <div class="md-icon">
          <img src="../assets/imgs/icon/md-icon-samescore.png" alt="">
        </div>
        <p>同分去向</p>
      </a>
      <a href="/#/evaluation">
        <div class="md-icon">
          <img src="../assets/imgs/icon/md-icon-test.png" alt="">
        </div>
        <p>综合测试</p>
      </a>
      <a href="/#/more">
        <div class="md-icon">
          <img src="../assets/imgs/icon/md-icon-more.png" alt="">
        </div>
        <p>更多</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index'
  }
</script>

<style lang="less" scoped>
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

</style>
