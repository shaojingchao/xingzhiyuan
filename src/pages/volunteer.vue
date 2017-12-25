<template>
  <div class="page_volunteer">
    <mt-header title="一键填报">
      <c-router-back slot="left"></c-router-back>
    </mt-header>
    <div class="my-score bg-white p10 mb10 ov-h">
      <span class="gray9 fl pt1">你的成绩：河南 理科 <span class="gray0">609分</span></span>
      <a href="javascript:" class="btn link fr">修改 <i class="iconfont xzy-icon-edit"></i></a>
    </div>

    <div class="app-suggest">
      <div class="tc text-primary p10 bg-white">
        本科第一批（368所）
      </div>
      <div class="as-list">
        <mt-cell class="as-list-item" title="冲刺推荐" label="录取几率：0% - 60%" :to="{name:'volunteerrecommend',query:{cate:'cc'}}" is-link>
          <span class="dib icon" slot="icon"><img width="18" :src="icon[0]" alt=""></span>
          <span class="text-warning">30所</span>
        </mt-cell>
        <mt-cell class="as-list-item" title="稳妥推荐" label="录取几率：60% - 80%" :to="{name:'volunteerrecommend',query:{cate:'wt'}}" is-link>
          <span class="dib icon" slot="icon"><img width="16" :src="icon[1]" alt=""></span>
          <span class="text-warning">68所</span>
        </mt-cell>
        <mt-cell class="as-list-item" title="保底推荐" label="录取几率：80% - 100%" :to="{name:'volunteerrecommend',query:{cate:'bd'}}" is-link>
          <span class="dib icon" slot="icon"><img :src="icon[2]" alt=""></span>
          <span class="text-warning">102所</span>
        </mt-cell>
      </div>
    </div>
    <footer class="app-btm-btn bti bg-white p10">
      <a href="javascript:" class="btn btn-primary btn-block round btn-lg">模拟填报分析</a>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'volunteer',
    data () {
      return {
        icon: [
          require('../assets/imgs/icon/icon_zhiyuan_chongci.png'),
          require('../assets/imgs/icon/icon_zhiyuan_wentuo.png'),
          require('../assets/imgs/icon/icon_zhiyuan_baodi.png')
        ]
      }
    }
  }
</script>

<style lang="less">
  .page_volunteer {
    .my-score {
      line-height: 1.4;
      .iconfont {
        font-size: 14px;
      }

    }
    .app-suggest {
      .as-list-item {
        .icon{
          float: left;
          width:20px;
          margin-right:8px;
          text-align: center;
          img{
            display: inline-block;
            max-width:100%;
          }
        }
        .mint-cell-wrapper {
          padding: 10px;
        }
        .mint-cell-label {
          margin-top: 10px;
          margin-left: 28px;
        }
      }
    }
    .app-btm-btn{
      position: fixed;
      bottom:0;
      right:0;
      left:0;

    }
  }

</style>
