<template>
  <div class="page_volunteer_analysis"
       @touchstart="touchStart($event)"
       @touchmove="touchMove($event)"
       @touchend="touchEnd($event)">
    <mt-header title="模拟志愿表01合理性">
      <c-router-back slot="left"></c-router-back>
    </mt-header>

    <div class="ci-head-wrap">
      <div class="ci-head headTrans"
           :style="{'transform':'translateY('+headStyle.translateY+') scale('+headStyle.scale+')'}">
        <div class="main-title" style="font-size:36px;">{{tableStateText}}</div>
        <div class="tc mt10"><span class="sub-title">4个可优化项，请尽快调整</span></div>
      </div>
    </div>
    <div class="scrollContent" ref="scrollContent">
      <div class="text-muted p10 pb15 bg-white">
        <p>*你的成绩超出批次线较多，只分析成绩所在批次的合理性。</p>
        <div class="helpers-tips">
          <span><i class="iconfont xzy-icon-warning_fill text-danger"></i>严重错误</span>
          <span><i class="iconfont xzy-icon-warning_fill text-second"></i>建议优化</span>
          <span><i class="iconfont xzy-icon-success_fill text-success"></i>填报合理</span>
        </div>
      </div>

      <div class="v-analysis-result-wrap">
        <div class="v-analysis-item bg-white mt10" v-for="(item,index) in analysisList">
          <div class="item-body">
            <span class="item-icon" :class="['icon-' + index]"></span>
            <div class="ib-main">
              <div class="ib-title pr10">
                <b>{{item}}</b>
                <small class="fr text-second">1项建议优化</small>
              </div>
              <div class="ib-desc pr10 bti">
                <table class="pct100 pt10">
                  <tbody>
                  <tr>
                    <td class="gray9">存在可保底学校（录取概率≥98%）</td>
                    <td width="20" align="right"><i class="iconfont xzy-icon-success_fill text-success"></i></td>
                  </tr>
                  <tr>
                    <td class="gray9">本科一批没有可冲击的学校，建议填报1-2所录取概率50%-80%的学校冲一冲</td>
                    <td width="20" align="right" valign="top"><i
                      class="iconfont xzy-icon-success_fill text-success"></i></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        headEffect: {  // head 动画配置
          scrollTop: 0,
          startPointY: 0,
          relativeY: 0
        },
        tableStateText: '良好',
        analysisList: ['志愿表梯度合理性', '志愿表完整度', '专业设置合理性', '符合个人意愿'],
        orderNum: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        list: [
          {
            cname: '清华大学',
            major: ['工科调试班类（自动...', '土木类', '建筑类（五年）', '工科实验班类（能源）']
          },
          {
            cname: '河南工业大学',
            major: []
          }
        ],
        limitCollege: 7,
        limitMajor: 6,
        filterCateIndex: 0
      }
    },
    computed: {
      isVip () {
        return this.$store.getters.isVip
      },
      /* 计算过渡动画 */
      headStyle () {
        let minTranslateY = -60
        let maxTranslateY = 0
        let maxSize = 1
        let minSize = 0.5
        return {
          translateY: Math.max(maxTranslateY - this.headEffect.scrollTop * 0.4, minTranslateY) + 'px',
          scale: Math.max(maxSize - this.headEffect.scrollTop * 0.0035, minSize)
        }
      }
    },
    mounted () {
      $(document).on('scroll', () => {
        this.headEffect.scrollTop = $(document).scrollTop()
      })
    },
    methods: {
      /* 顶部滑动效果 */
      // 滑动开始记录位置
      touchStart (e) {
        console.log(e)
        this.headEffect.startPointY = e.touches[0].screenY
      },
      // 滑动过程记录位移
      touchMove (e) {
        this.headEffect.relativeY = e.touches[0].screenY - this.headEffect.startPointY
      },
      // 滑动结束执行动画
      touchEnd (e) {
        let _scrollTop = this.headEffect.scrollTop
        let _relativeY = this.headEffect.relativeY
        let _flagValue = parseInt($(this.$refs.scrollContent).css('margin-top'))
        if (_scrollTop < _flagValue) {
          if (_relativeY < -5) {
            $('body,html').animate({
              scrollTop: _flagValue
            }, 150)
          } else if (_relativeY > 5) {
            $('body,html').animate({
              scrollTop: 0
            }, 150)
          }
        }
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import '../assets/less/_mixins-wln.less';

  .page_volunteer_analysis {
    background-color: #f3f5f7;
    .mint-header {
      background-color: @second;
    }
    .headTrans {
      transition: all 0.0167s;
    }
    .ci-head-wrap {
      position: fixed;
      top: 44px;
      left: 0;
      right: 0;
      /*z-index: 0;*/
      background-color: @second;
    }
    .ci-head {
      color: #fff;
      padding: 35px 10px 45px;
      text-align: center;
      .main-title {
        font-size: 36px;
      }
      .sub-title {
        display: inline-block;
        border: 1px solid rgba(255, 255, 255, .4);
        border-radius: 30px;
        padding: 3px 12px;
      }
    }
    .scrollContent {
      position: relative;
      z-index: 90;
      margin-top: 150px;
      background-color: @bg-body;
    }
    .helpers-tips {
      display: flex;
      padding: 10px 0;
      border-radius: 5px;
      border: 1px dashed #ddd;
      background-color: @bg-body;
      span {
        color: #666;
        display: block;
        width: 33%;
        text-align: center;
        i {
          margin-right: 3px;
          vertical-align: -1px;
        }
      }
    }

    /*志愿分析结果*/
    .v-analysis-result-wrap {
    }
    .v-analysis-item {
      .item-body {
        position: relative;
        padding-left: 35px;
        padding-top: 15px;
        .item-icon {
          @size: 16px;
          position: absolute;
          left: 10px;
          top: 15px;
          height: @size;
          width: @size;
          &.icon-0 {
            background: url(../assets/imgs/icon/table-analy-icon1.png) 50% 50% no-repeat;
            background-size: contain;
          }
          &.icon-1 {
            background: url(../assets/imgs/icon/table-analy-icon2.png) 50% 50% no-repeat;
            background-size: contain;
          }
          &.icon-2 {
            background: url(../assets/imgs/icon/table-analy-icon3.png) 50% 50% no-repeat;
            background-size: contain;
          }
          &.icon-3 {
            background: url(../assets/imgs/icon/table-analy-icon4.png) 50% 50% no-repeat;
            background-size: contain;
          }
        }
        .ib-title {
          font-size: 15px;
        }
        .ib-desc {
          margin-top: 13px;
          padding-bottom: 12px;
          td {
            padding: 5px 0;
            .iconfont {
              line-height: 1;
              /*font-size:16px;*/

            }
          }
        }
      }
    }
  }

</style>
