<template>
  <div class="page_jobinfo">
    <mt-header title="">
      <c-router-back slot="left"></c-router-back>
    </mt-header>
    <div class="ci-head">
      <div class="f20 tc">工作内容</div>
      <div class="tc mt10"><span class="dib plan-num">IT/互联网/通讯</span></div>
    </div>

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
      ...mapState({
        job: state => state.industry.job
      })
    },
    mounted () {
      this.salaryChart()
      console.log(this.salaryChartData)
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
      }
    }
  }
</script>

<style lang="less">
  @import '../assets/less/_mixins-wln.less';

  .page_jobinfo {
    .ci-head {
      background-color: @primary;
      color: #fff;
      padding: 20px 10px 30px;
      .plan-num {
        border: 1px solid rgba(255, 255, 255, .4);
        border-radius: 30px;
        padding: 3px 12px;
      }
    }
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
    .salary-chart-wrap{
      border-radius: 10px;
      margin: 0 10px;
      border:1px dashed #ccc;
      .chart-wrap{
        display: flex;
        justify-content: center;
        align-items: center;
        .charts{
          width:45%;
        }
        .split-line{
          width:1%;
          border-left:1px solid #ddd;
          height:60px;
        }
        .chart-data{
          width:54%;
          .big-num{
            font-size:40px;
            span{
              vertical-align: 14px;
            }
          }
        }
      }
    }
  }

</style>


