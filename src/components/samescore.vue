<template>
  <section class="section-samescore">
    <c-section-title title="同分考生去向"></c-section-title>
    <div class="cate-detail item5 pl10 pr10">
      <div class="f16 tc">录取人数最多的5所高校</div>
      <div class="" ref="chartfiveCollege" style="height:200px; width:100%;">
      </div>
      <div id="J_QXMajor">
        <p class="f16 tc mt10 mb10">录取人数最多的5个专业</p>
        <div class="pb5">
          <table class="qx-table-item">
            <tbody>
            <tr>
              <td class="num">1</td>
              <td>
                <div class="mb5">临床医学 <span class="grayb small">临床医学类</span></div>
                <div class="qx-process">
                  <span class="qx-process-bar" style="width:200px;"></span>
                  <span>59人</span>
                </div>
              </td>
            </tr>
            <tr>
              <td class="num">2</td>
              <td>
                <div class="mb5">材料成型及控制工程 <span class="grayb small">机械类</span></div>
                <div class="qx-process">
                  <span class="qx-process-bar" style="width:160px;"></span>
                  <span>39人</span>
                </div>
              </td>
            </tr>
            <tr>
              <td class="num">3</td>
              <td>
                <div class="mb5">电气工程及其自动化 <span class="grayb small">电气类</span></div>
                <div class="qx-process">
                  <span class="qx-process-bar" style="width:120px;"></span>
                  <span>34人</span>
                </div>
              </td>
            </tr>
            <tr>
              <td class="num">4</td>
              <td>
                <div class="mb5">金融学 <span class="grayb small">金融学类</span></div>
                <div class="qx-process">
                  <span class="qx-process-bar" style="width:80px;"></span>
                  <span>30人</span>
                </div>
              </td>
            </tr>
            <tr>
              <td class="num">5</td>
              <td>
                <div class="mb5">机械类 <span class="grayb small"></span></div>
                <div class="qx-process">
                  <span class="qx-process-bar" style="width:40px;"></span>
                  <span>29人</span>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <c-more :to="{name:'samescoremore'}"></c-more>
  </section>
</template>

<script>
  import { substrLen } from '@/util'
  export default {
    name: 'same-score',
    data () {
      return {
      }
    },
    mounted () {
      this.createSameScoreChart()
    },
    methods: {
      /**
       * 同位分
       */
      createSameScoreChart () {
        let maxcollgedata = '[{"ccode":"10464","cname":"\u6cb3\u5357\u79d1\u6280\u5927\u5b66","count":"124"},{"ccode":"10460","cname":"\u6cb3\u5357\u7406\u5de5\u5927\u5b66","count":"88"},{"ccode":"10463","cname":"\u6cb3\u5357\u5de5\u4e1a\u5927\u5b66","count":"63"},{"ccode":"10472","cname":"\u65b0\u4e61\u533b\u5b66\u9662","count":"56"},{"ccode":"10459","cname":"\u90d1\u5dde\u5927\u5b66","count":"46"}]'
        let _self = this
        let data = {
          el: _self.$refs.chartfiveCollege,
          //            title: '录取人数最多的5所高校',
          series: [],
          legend: [],
          seriesItemColor: ['#8dd47f', '#5bc4f1', '#f37fbe', '#faaa5b', '#fdcc53']
        }
        $.parseJSON(maxcollgedata).forEach(function (item) {
          let _cname = substrLen(item['cname'], 8, '')
          data.series.push({
            name: _cname,
            value: parseInt(item['count'])
          })
          data.legend.push({
            name: _cname,
            icon: 'circle'
          })
        })
        let option = {
          // color: data.seriesItemColor,
          legend: {
            orient: 'vertical',
            align: 'left',
            x: 'right',
            y: 'center',
            data: data.legend,
            textStyle: {
              color: '#333',
              fontSize: 12
            }
          },
          series: [
            {
              name: '学校数量',
              type: 'pie',
              center: ['30%', '50%'],
              radius: ['40%', '70%'],
              hoverAnimation: false,
              avoidLabelOverlap: false,
              label: {
                normal: {
                  position: 'outside',
                  formatter: '{c}',
                  textStyle: {
                    color: '#999',
                    fontSize: 14
                  }
                }
              },
              labelLine: {
                normal: {
                  show: true,
                  smooth: true,
                  length: 10,
                  length2: 0
                }
              },
              data: data.series
            }
          ]
        }
        _self.$echarts.init(data.el).setOption(option)
      }
    }
  }
</script>

<style lang="less">
  @import '../assets/less/_mixins-wln.less';
  /*详细介绍*/
  .section-samescore{
    background-color: #fff;
    margin-bottom:10px;
    /*去向*/
    .qx-table-item {
      min-width: 300px;
      table-layout: fixed;
      margin: 0 auto;
    }
    .qx-table-item .num {
      width: 0.8em;
      line-height: 1.2em;
      font-size: 40px;
      font-style: italic;
      color: #c9d1d7;
      text-align: center;
    }
    .qx-table-item td {
      padding: 5px;
    }
    .qx-table-item .qx-process-bar {
      display: inline-block;
      height: 8px;
      border-radius: 10px;
      background-color: @primary;
    }
    .qx-table-item .qx-process-bar-orange {
      background-color: #ffb330;
    }
  }
</style>
