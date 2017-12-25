<template>
  <div class="page_report_career">
    <!--职业推荐-->
    <div class="bd-01">
      <section class="mb10 bg-white">
        <c-section-title title="职业匹配度"></c-section-title>
        <div class="pr10 pl10 pb15">
          <div class="mb10">
            经过全面的测试，以下三类专业最适合你
          </div>
          <div class="cs-job-chart" ref="J_jobChart" style="height:120px;width:100%;display: block;">

          </div>
          <div class="cs-job-name">
            <span class="job-item">匹配度<span id="J_jobMatchValue1">86</span>%</span>
            <span class="job-item">匹配度<span id="J_jobMatchValue2">86</span>%</span>
            <span class="job-item">匹配度<span id="J_jobMatchValue3">86</span>%</span>
          </div>
        </div>
      </section>

      <section class="bg-white">
        <c-section-title title="职业推荐"></c-section-title>
        <div class="job-list">
          <major-cell class="trans"
                      v-for="(item,index) in jobList"
                      :items="item"
                      :toLink="{name:'jobinfo'}"
                      :deepIndex="0" :key="item.id">
          </major-cell>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import CountUp from 'countup'
  import MajorCell from '@/components/major_cell'

  export default {
    name: 'mbti-report-career',
    components: {
      MajorCell
    },
    data () {
      return {
        jobList: [
          {
            name: '哲学1',
            id: '01',
            child: [
              {
                name: '哲学类',
                id: '0101',
                child: [
                  {
                    name: '哲学',
                    id: '010101'
                  },
                  {
                    name: '逻辑学',
                    id: '010102'
                  },
                  {
                    name: '宗教学',
                    id: '010103'
                  },
                  {
                    name: '伦理学',
                    id: '010104'
                  }
                ]
              },
              {
                name: '人文科学试验班类',
                id: '01SY00',
                child: [
                  {
                    name: '人文科学试验班',
                    id: '01SY01'
                  }
                ]
              }
            ]
          },
          {
            name: '经济学',
            id: '02',
            child: [
              {
                name: '哲学类',
                id: '0101',
                child: [
                  {
                    name: '经济学',
                    id: '020101'
                  },
                  {
                    name: '经济统计学',
                    id: '020102'
                  },
                  {
                    name: '国民经济管理',
                    id: '020103'
                  },
                  {
                    name: '资源与环境经济学',
                    id: '020104'
                  }
                ]
              },
              {
                name: '财政学类',
                id: '01SY00',
                child: [
                  {
                    name: '人文科学试验班',
                    id: '01SY01'
                  }
                ]
              },
              {
                name: '金融学类',
                id: '01SY00',
                child: [
                  {
                    name: '人文科学试验班',
                    id: '01SY01'
                  }
                ]
              },
              {
                name: '经济与贸易类',
                id: '01SY00',
                child: [
                  {
                    name: '人文科学试验班',
                    id: '01SY01'
                  }
                ]
              }
            ]
          },
          {
            name: '哲学1',
            id: '03',
            child: [
              {
                name: '哲学类',
                id: '0101',
                child: [
                  {
                    name: '哲学',
                    id: '010101'
                  },
                  {
                    name: '逻辑学',
                    id: '010102'
                  },
                  {
                    name: '宗教学',
                    id: '010103'
                  },
                  {
                    name: '伦理学',
                    id: '010104'
                  }
                ]
              },
              {
                name: '人文科学试验班类',
                id: '01SY00',
                child: [
                  {
                    name: '人文科学试验班',
                    id: '01SY01'
                  }
                ]
              }
            ]
          },
          {
            name: '经济学',
            id: '04',
            child: [
              {
                name: '哲学类',
                id: '0101',
                child: [
                  {
                    name: '经济学',
                    id: '020101'
                  },
                  {
                    name: '经济统计学',
                    id: '020102'
                  },
                  {
                    name: '国民经济管理',
                    id: '020103'
                  },
                  {
                    name: '资源与环境经济学',
                    id: '020104'
                  }
                ]
              },
              {
                name: '财政学类',
                id: '01SY00',
                child: [
                  {
                    name: '人文科学试验班',
                    id: '01SY01'
                  }
                ]
              },
              {
                name: '金融学类',
                id: '01SY00',
                child: [
                  {
                    name: '人文科学试验班',
                    id: '01SY01'
                  }
                ]
              },
              {
                name: '经济与贸易类',
                id: '01SY00',
                child: [
                  {
                    name: '人文科学试验班',
                    id: '01SY01'
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      showPCItemDetail (i) {
        this.$set(this.PCShowIndex, i, !this.PCShowIndex[i])
      },
      init () {
        /* 测试页面 */
        let _vm = this
        let CS = {
          init: false
        }
        CS.createJobChart = () => {
          // 数值动画 CountUp
          // let countUpOptions = {
          //   useEasing: true,
          //   useGrouping: true,
          //   separator: ',',
          //   decimal: '.'
          // }

          let chartData = [
            {
              name: '企业家',
              value: 95
            },
            {
              name: '投资银\n行家',
              value: 80
            },
            {
              name: '广告创意\n总监',
              value: 50
            }
          ]

          let pieColor = ['#ff5000', '#ff9600', '#00adef']
          $('#J_jobMatchValue1').css({
            color: pieColor[0]
          })
          $('#J_jobMatchValue2').css({
            color: pieColor[1]
          })
          $('#J_jobMatchValue3').css({
            color: pieColor[2]
          })

          new CountUp('J_jobMatchValue1', 0, chartData[0]['value'], 0, 2.5).start()
          new CountUp('J_jobMatchValue2', 0, chartData[1]['value'], 0, 2.5).start()
          new CountUp('J_jobMatchValue3', 0, chartData[2]['value'], 0, 2.5).start()

          const pieRadius = [43, 48]
          const pieRadius1 = [39.5, 40]
          const pieLabel = {
            normal: {
              position: 'center',
              show: true,
              textStyle: {
                fontSize: '16'
              }
            }
          }
          let option = {
            color: pieColor,
            series: [{
              center: ['17%', '50%'],
              radius: pieRadius,
              hoverAnimation: false,
              type: 'pie',
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [{
                value: chartData[0]['value'],
                name: chartData[0]['name'],
                label: pieLabel
              }, {
                value: 100 - chartData[0]['value'],
                itemStyle: {
                  normal: {
                    color: '#f7e0e0'
                  }
                }
              }]
            }, {
              center: ['50%', '50%'],
              radius: pieRadius,
              hoverAnimation: false,
              type: 'pie',
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [{
                value: chartData[1]['value'],
                name: chartData[1]['name'],
                label: pieLabel
              }, {
                value: 100 - chartData[1]['value'],
                itemStyle: {
                  normal: {
                    color: '#f7f2de'
                  }
                }
              }]
            }, {
              center: ['83%', '50%'],
              radius: pieRadius,
              hoverAnimation: false,
              type: 'pie',
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [{
                value: chartData[2]['value'],
                name: chartData[2]['name'],
                itemStyle: {
                  normal: {
                    color: pieColor[2]
                  }
                },
                label: pieLabel
              }, {
                value: 100 - chartData[2]['value'],
                itemStyle: {
                  normal: {
                    color: '#e8faff'
                  }
                }
              }]
            }, { // 内线
              center: ['17%', '50%'],
              radius: pieRadius1,
              hoverAnimation: false,
              type: 'pie',
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [{
                value: 100,
                itemStyle: {
                  normal: {
                    color: pieColor[0]
                  }
                }
              }]
            }, {
              center: ['50%', '50%'],
              radius: pieRadius1,
              hoverAnimation: false,
              type: 'pie',
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [{
                value: 100,
                itemStyle: {
                  normal: {
                    color: pieColor[1]
                  }
                }
              }]
            }, {
              center: ['83%', '50%'],
              radius: pieRadius1,
              hoverAnimation: false,
              type: 'pie',
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [{
                value: 100,
                itemStyle: {
                  normal: {
                    color: pieColor[2]
                  }
                }
              }]
            }]
          }
          _vm.$echarts.init(this.$refs.J_jobChart).setOption(option)
        }

        CS.createJobChart()
        CS.init = true
      }
    }
  }
</script>

<style lang="less">
  .page_report_analysis {

  }
</style>

