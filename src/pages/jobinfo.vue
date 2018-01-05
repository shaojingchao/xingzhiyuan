<template>
  <div class="page_jobinfo">
    <mt-header title="">
      <c-router-back slot="left"></c-router-back>
    </mt-header>

    <c-page-head :title="'IT管理/项目协调'" :subtitle="'IT/互联网/通讯'"></c-page-head>

    <!--工作内容-->
    <section class="bg-white mb10">
      <c-section-title title="工作内容"></c-section-title>
      <div class="desc-content">
        <p>产品需求调研撰写产品需求文档，产品介绍、操作手册等产品售后技术支持配合其他部门制定产品运行计划，持续改善网赚产品产品前期和客户沟通，确定客户需求。</p>
      </div>
    </section>

    <!--对口专业-->
    <section class="mb10">
      <c-section-title title="对口专业"></c-section-title>
      <div class="table-wrap bg-white">
        <table class="table table-fixed pct100">
          <thead>
          <tr class="bg-white bti">
            <th class="tl fw4 gray9">专业对口</th>
            <th width="60" class="tr fw4 gray9">对口程度</th>
            <th width="14" class="tr fw4 gray9"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item,index) in majorList" class="bti on-active"
              @click="$router.push({name:'majorlibinfo', params: {mid:item.id}})">
            <td>{{item.name}}</td>
            <td class="tr gray9">{{item.ratio}}</td>
            <td class="tr"><span class="mintui mintui-back f12 dib rotate-180"></span></td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!--前景分析-->
    <section class="mb10 bg-white">
      <c-section-title title="前景分析"></c-section-title>
      <div class="salary-chart-wrap bg-body">
        <div class="tc pt20 f16">薪酬排名：第1名</div>
        <div class="chart-wrap">
          <div class="charts">
            <high-charts :options="salaryChartData.options" style="width:150px; height:150px; margin:0 auto;"
                         ref="container"></high-charts>
          </div>
          <div class="split-line"></div>
          <div class="chart-data">
            <div class="big-num tc text-primary">
              <span class="f20">¥</span>11425
            </div>
            <p class="text-muted tc">毕业5年内平均薪酬</p>
          </div>
        </div>
      </div>

      <div class="f16 tc p20">薪酬趋势示意图</div>
      <div ref="salaryStatChart" class="p10" style="height:200px;">
      </div>
    </section>

    <!--男女比例-->
    <section class="mb10 bg-white">
      <c-section-title title="男女比例"></c-section-title>
      <div class="man-woman-wrap">
        <div class="man-icon">
          <img src="../assets/imgs/man-photo.png" alt="男神">
        </div>
        <div class="man-ratio">
          <div class="ratio"><span style="color:#00adef;">90</span><span
            style="vertical-align: 2px;letter-spacing: -4px"> : </span><span style="color:#ff8787;">10</span></div>
          <div class="ratio-bar-wrap mt5">
            <div class="ratio-bar trans" style="width:80%;"></div>
          </div>
        </div>
        <div class="man-icon">
          <img src="../assets/imgs/woman-photo.png" alt="女神">
        </div>
      </div>
    </section>

    <!--学历构成-->
    <section class="mb10 bg-white">
      <c-section-title title="学历构成"></c-section-title>
      <div class="education-wrap">
        <div class="tc f16">平均学历较高</div>
        <div class="tc text-primary pt20">69%学历在本科以上</div>
        <div class="edu-ratio-wrap">
          <div class="edu-ratio">
            <div class="ratio-bar-wrap">
              <div class="ratio-bar trans" style="width:31%;">
                <span class="dash-line"></span>
              </div>
            </div>
          </div>
          <div class="edu-label">
            <span class="pct50 text-muted">本科以下</span>
            <span class="pct50 text-primary">本科及以上</span>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import HighCharts from '@/components/highcharts'

  export default {
    name: 'job-info',
    components: {
      HighCharts
    },
    data () {
      return {
        salaryChartData: {
          options: {}
        },
        majorList: [
          {
            name: '计算机应用技术 ',
            ratio: '100.00%',
            id: 100
          },
          {
            name: '计算机科学与技术 ',
            ratio: '98.30%',
            id: 100
          },
          {
            name: '软件工程 ',
            ratio: '97.60%',
            id: 100
          },
          {
            name: '电子信息工程 ',
            ratio: '92.50%',
            id: 100
          },
          {
            name: '广告学 ',
            ratio: '91.87%',
            id: 100
          }
        ]
      }
    },
    computed: {
      ...mapState('job', ['salaryTrends'])
    },
    mounted () {
      this.salaryChart()
      this.salaryStatChart()
    },
    methods: {
      salaryChart () {
        this.$set(this.salaryChartData, 'options', {
          chart: {
            backgroundColor: '#f3f5f7',
            type: 'solidgauge',
            marginTop: 10
          },
          credits: {
            enabled: false
          },
          subtitle: {
            text: '职业超越率',
            align: 'center',
            verticalAlign: 'middle',
            style: {
              fontSize: '10px',
              align: 'center'
            },
            y: -13
          },
          exporting: {
            enabled: false
          },
          tooltip: {
            enabled: false
          },
          title: {
            text: '<span style="line-height:1;">60<span style="font-size:12px">%</span></span>',
            useHTML: true,
            align: 'center',
            verticalAlign: 'middle',
            style: {
              color: '#4d555d',
              fontSize: '40px',
              align: 'center'
            },
            y: 25,
            x: 2
          },
          pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for Move
              outerRadius: '100%',
              innerRadius: '100%',
              backgroundColor: '#d9dde1',
              borderWidth: 6
            }]
          },
          yAxis: {
            lineWidth: 0,
            tickPositions: []
          },
          plotOptions: {
            solidgauge: {
              borderWidth: 6,
              dataLabels: {
                enabled: false
              },
              linecap: 'round',
              stickyTracking: false
            }
          },
          series: [{
            name: '职业超越率',
            borderColor: '#00adef',
            data: [{
              color: '#00adef',
              radius: '100%',
              innerRadius: '100%',
              y: 60
            }]
          }]
        })
      },
      salaryStatChart () {
        let data = {
          xAxisData: ['应届生', '2年', '3-5年', '5-7年', '7-9年', '10年'],
          seriesData1: [],
          seriesData2: []
        }
        // ['应届毕业生', '0-2年', '3-5年', '6-7年', '8-10年']
        this.salaryTrends.salary_general.forEach((item) => {
          // data.xAxisData.push(item.years)
          data.seriesData1.push(item.salary)
        })
        this.salaryTrends.salary_years.forEach((item) => {
          data.seriesData2.push(item.salary)
        })
        // 薪酬趋势
        let option = {
          grid: {
            left: 20,
            top: 10,
            right: 20,
            bottom: 30
            // containLabel: true
          },
          color: ['#00adef', '#dde5ec'],
          tooltip: {},
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: data.xAxisData
            }
          ],
          yAxis: [
            {
              type: 'value',
              scale: true,
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: [
                    '#f3f5f7'
                  ]
                }
              }
            }
          ],
          series: [
            {
              name: '本职位',
              type: 'line',
              // areaStyle: {normal: {}},
              data: data.seriesData1,
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  formatter (obj) {
                    return '¥' + obj.value
                  }
                }
              }
            },
            {
              name: '一般岗位',
              type: 'line',
              data: data.seriesData2
            }
          ]
        }

        this.$echarts.init(this.$refs.salaryStatChart).setOption(option)
      }
    }
  }
</script>

<style lang="less">
  @import '../assets/less/_mixins-wln.less';

  .page_jobinfo {
    .desc-content {
      padding: 0 10px 5px 10px;
      line-height: 1.8;
      p {
        margin-top: 0;
      }
    }
    .table-wrap {
      td {
        padding: 15px 10px;
      }
    }

    /*前景分析*/
    .salary-chart-wrap {
      border-radius: 10px;
      margin: 0 10px;
      border: 1px dashed #ccc;
      .chart-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        .charts {
          width: 45%;
        }
        .split-line {
          width: 1%;
          border-left: 1px solid #ddd;
          height: 60px;
        }
        .chart-data {
          width: 54%;
          .big-num {
            font-size: 40px;
            span {
              vertical-align: 14px;
            }
          }
        }
      }
    }

    /*男女比例*/
    .man-woman-wrap {
      padding: 20px 20px 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      @man-color: #00adef;
      @woman-color: #ff8787;
      .clr-man {
        color: #00adef;
      }
      .clr-woman {
        color: #ff8787;
      }
      .man-icon {
        width: 25%;
        text-align: center;
        img {
          max-width: 100%;
          display: block;
          margin: 0 auto;
        }
      }
      .man-ratio {
        box-sizing: border-box;
        width: 50%;
        .ratio {
          font-size: 36px;
          text-align: center;
          color: #d9dde1;
          .ratio-colon {
          }
        }
        .ratio-bar-wrap {
          height: 9px;
          box-sizing: content-box;
          background-color: @woman-color;
          border-radius: 4.5px;
          display: flex;
          overflow: hidden;
          transform: scale(0.75);
          .ratio-bar {
            width: 0;
            /*border-radius: 4.5px;*/
            background-color: @man-color;
          }
        }
      }
    }

    /*学历构成*/
    .education-wrap {
      padding:5px 0 30px;
      .edu-ratio-wrap{
        .edu-ratio {
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          padding:15px 6%;
          .ratio-bar-wrap {
            height: 40px;
            width: 50%;
            background-color: @primary;
            display: inline-flex;
            .ratio-bar {
              position: relative;
              width: 0;
              height: 100%;
              background-color: #d9dde1;
              .dash-line{
                position: absolute;
                right:-3px;
                padding:0 3px;
                top:-5px;
                bottom:-5px;
                display: flex;
                background-color: rgba(255,255,255,.7);
                &:after{
                  width: 0;
                  border-right:1px dashed @primary;
                  content: '';
                  display: block;
                  margin:0 auto;
                }
              }
            }
          }
        }
        .edu-label{
          text-align: center;
          font-size:12px;
          padding:0 6%;
          display: flex;
        }
      }
    }
  }

</style>


