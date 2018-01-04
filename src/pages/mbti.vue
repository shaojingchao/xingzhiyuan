<template>
  <div class="page_mbti_index">
    <mt-header title="综合测评">
      <c-router-back slot="left"></c-router-back>
    </mt-header>
    <div class="tab-wrap">
      <div class="tab-nav bbi">
        <div class="nav-item" :class="{active:tabActive === 'tab-1'}" @click="tabActive = 'tab-1', transName = 'flipY-left'"><span class="trans">职业性格测试</span>
        </div>
        <div class="nav-item" :class="{active:tabActive === 'tab-2'}" @click="tabActive = 'tab-2', transName = 'flipY-right'"><span class="trans">学业压力测试</span>
        </div>
      </div>

      <transition :name="transName" mode="out-in">
        <component :is="tabActive"></component>
      </transition>
    </div>

  </div>
</template>

<script>
  import Tab1 from '../components/mbti_index_tabitem1.vue'
  import Tab2 from '../components/mbti_index_tabitem2.vue'

  export default {
    name: 'mbti',
    components: {
      'tab-1': Tab1,
      'tab-2': Tab2
    },
    data () {
      return {
        transName: 'flipY-left',
        tabActive: 'tab-1',
        PCShowIndex: []
      }
    },
    methods: {
      showPCItemDetail (i) {
        this.$set(this.PCShowIndex, i, !this.PCShowIndex[i])
      }
    }

  }
</script>

<style lang="less">
  .page_mbti_index {
    .tab-content {
      margin:10px;
      padding-bottom:25px;
      border-radius: 18px;
      overflow: hidden;
      background-color: #fff;
      .t-head{
        background:#fff url(../assets/imgs/mbti_index_bg1.png) 50% -2px no-repeat;
        background-size: 100%;
        text-align: center;
        padding:26px 0;
        &.t-head2{
          background:#fff url(../assets/imgs/mbti_index_bg2.png) 50% -2px no-repeat;
        }
        .main-title{
          color:#fff;
          font-size:20px;
          font-weight:700;
        }
        .sub-title{
          color:rgba(255,255,255,.7);
          font-size:14px;
        }
      }
      .t-body{
        padding:12px 10px;
        line-height:1.8;
      }
      .t-footer{
        margin:20px 30px 0 30px;
      }

    }
  }

</style>
