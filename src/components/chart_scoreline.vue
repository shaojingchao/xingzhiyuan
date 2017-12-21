<template>
  <div class="collegeinfo-scoreline">
    <section class="bg-white mb10">
      <c-section-title :title="title" label="（河南-理科）"></c-section-title>
      <div class="J_chartScoreLine">
        <div class="tc">
          <div class="btn-group">
              <span class="btn btn-primary btn-sm"
                    ref="firstScoreRankingChart"
                    :class="[tabScoreRankingIndex === 1 ? 'btn-primary':'btn-second']"
                    @click="tabScoreRanking(1, $event)">本一批</span>
            <span class="btn btn-second btn-sm"
                  :class="[tabScoreRankingIndex === 2 ? 'btn-primary':'btn-second']"
                  @click="tabScoreRanking(2, $event)">高一批</span>
          </div>
        </div>
        <div class="p10">
          <div style="height:220px;" ref="chart_scoreRanking"
               v-show="tabScoreRankingIndex === 1"></div>
          <div style="height:220px;" ref="chart_scoreAvg"
               v-show="tabScoreRankingIndex === 2"></div>
        </div>
      </div>

      <div class="p10 pb30">
        <table class="table table-bordered pct100 tc">
          <thead>
          <tr>
            <th>年份</th>
            <th>批次</th>
            <th>最高分</th>
            <th>最底分</th>
            <th>人数</th>
          </tr>
          </thead>
          <tbody class="gray9">
          <tr>
            <td rowspan="2">2016</td>
            <td>本科一批</td>
            <td>521</td>
            <td>536</td>
            <td>12</td>
          </tr>
          <tr>
            <td>高职一批</td>
            <td>521</td>
            <td>536</td>
            <td>12</td>
          </tr>
          <tr>
            <td rowspan="2">2015</td>
            <td>本科一批</td>
            <td>521</td>
            <td>536</td>
            <td>12</td>
          </tr>
          <tr>
            <td>高职一批</td>
            <td>521</td>
            <td>536</td>
            <td>12</td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="bg-white mb10 pb15" v-if="from === 'college'">
      <c-section-title class="mt10" title="专业录取分数线" vip></c-section-title>
      <div class="majorline-list" v-if="isVip">
        <mt-cell v-for="(item,i) in majorScoreLineList" :key="i" :title="item"
                 :to="{name:'collegemajorscoreline',params: {cid:$route.params.cid,mid:i}}" is-link></mt-cell>
      </div>
      <c-vip class="bti" v-if="!isVip"></c-vip>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'chart-scoreline',
    props: {
      from: {
        type: String,
        required: false,
        default: 'college'
      },
      title: {
        type: String,
        required: false,
        default: '院校录取分数线'
      }
    },
    data () {
      return {
        isLike: true,
        tabActive: 'tab-1',
        colorThemes: [
          ['#f4be08', '#ffaf25'],
          ['#c9d1d7', '#ffaf25'],
          ['#e94c4b', '#ffaf25']
        ],
        scoreData: {
          'maxscore': [{'yid': '2012', 'score': '676'}, {'yid': '2013', 'score': '652'}, {
            'yid': '2014', 'score': '680'
          }
          ],
          'minscore': [{'yid': '2012', 'score': '641'}, {'yid': '2013', 'score': '624'}, {
            'yid': '2014', 'score': '661'
          }],
          'avgscore': [{'yid': '2012', 'score': '648'}, {'yid': '2013', 'score': '631'}, {
            'yid': '2014', 'score': '667'
          }],
          'ctrlscore': [{
            'name': '\u672c\u79d1\u7b2c\u4e00\u6279\u63a7\u5236\u7ebf',
            'data': [{'yid': '2011', 'score': '582'}, {'yid': '2012', 'score': '540'}, {
              'yid': '2013',
              'score': '505'
            }, {'yid': '2014', 'score': '547'}, {'yid': '2015', 'score': '529'}, {'yid': '2016', 'score': '523'}]
          }],
          'fullmarks': 750
        },
        newScoreData: {
          full: 750,
          minScore: [],
          avgScore: [],
          maxScore: [],
          ctrlScore: []
        },
        tabScoreRankingIndex: 1,
        myScore: 555,
        majorScoreLineList: ['人力资源管理', '生物工程类', '建筑桥梁类', '计算机类']
      }
    },
    computed: {
      isVip () {
        return this.$store.getters.isVip
      }
    },
    mounted () {
      let _self = this
      let scoreData = _self.scoreData

      /* 控制线 */
      _self.scoreData.ctrlscore.forEach(function (item) {
        let ctrlScoreItem = {
          name: '',
          data: []
        }
        ctrlScoreItem.name = item.name

        item.data.forEach(function (items) {
          ctrlScoreItem.data.push({
            name: items['yid'],
            value: items['score']
          })
        })
        _self.newScoreData.ctrlScore.push(ctrlScoreItem)
      })
      /* 最低分 */
      if (scoreData.minscore) {
        scoreData.minscore.forEach(function (item) {
          _self.newScoreData.minScore.push({
            name: item['yid'],
            value: item['score']
          })
        })
      }
      /* 最高分 */
      if (scoreData.maxscore) {
        scoreData.maxscore.forEach(function (item) {
          _self.newScoreData.maxScore.push({
            name: item['yid'],
            value: item['score']
          })
        })
      }

      /* 平均分 */
      if (scoreData.avgscore) {
        scoreData.avgscore.forEach(function (item) {
          _self.newScoreData.avgScore.push({
            name: item['yid'],
            value: item['score']
          })
        })
      }
      $(_self.$refs.firstScoreRankingChart).click()
    },
    methods: {
      tabScoreRanking (id, e) {
        let _self = this
        let newScoreData = _self.newScoreData
        let colorThemes = _self.colorThemes
        _self.tabScoreRankingIndex = id
        if (!$(e.target).data('show')) {
          switch (id) {
            case 1:
              _self.createRankingChart({
                el: _self.$refs.chart_scoreRanking,
                title: '最低分',
                full: newScoreData.full,
                data: newScoreData.minScore,
                ctrl: newScoreData.ctrlScore,
                seriesItemColor: colorThemes[0]
              })
              break
            case 2:
              _self.createRankingChart({
                el: _self.$refs.chart_scoreAvg,
                title: '最低分',
                full: newScoreData.full,
                data: newScoreData.avgScore,
                ctrl: newScoreData.ctrlScore,
                seriesItemColor: colorThemes[0]
              })
              $(e.currentTarget).data('show', true)
              break
          }
        }
      },
      /**
       * 创建排名图表
       */
      createRankingChart (data, hasMine) {
        let _self = this
        /* 图表类型 */
        let type = (data.type != null) ? data.type : 'line'
        let xAxisData = [] // 分类
        let legendData = [data.title] // 图例
        let dataData = [] // 默认data数据

        /* 填充区域颜色 */
        let areaStyle = data.zoom ? {
          normal: {
            color: '#79aff5',
            opacity: 0.2
          }
        } : null

        data.data.forEach(function (item) {
          xAxisData.push(item['name'])
          dataData.push([item['name'], item['value']])
        })

        // 默认data数据
        let seriesData = [
          {
            name: data.title,
            type: type,
            barWidth: '30%',
            data: dataData,
            label: {
              normal: {
                show: true,
                position: 'top',
                formatter (obj) {
                  return obj.value[1]
                }
              }
            },
            areaStyle: areaStyle
          }
        ]

        /* 添加 '控制线' 数据 */
        if (data.ctrl) {
          data.ctrl.forEach(function (item) {
            let newDataData = []
            legendData.push(item.name)
            item['data'].forEach(function (items) {
              let itemsName = items['name']
              if (xAxisData.indexOf(itemsName) === -1) {
                xAxisData.push(itemsName)
              }
              newDataData.push([itemsName, items['value']])
            })
            seriesData.push({
              name: item.name,
              type: type,
              barWidth: '30%',
              data: newDataData,
              itemStyle: {
                normal: {
                  color: '#c9d1d7'
                }
              },
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  formatter (obj) {
                    return obj.value[1]
                  }
                }
              },
              areaStyle: areaStyle
            })

            xAxisData.sort(function (a, b) {
              return a > b
            })
          })
        }

        /* 添加 '我的' 数据 */
        if (hasMine) {
          let myData = {
            name: '我的',
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            data: [['2017', _self.myScore]],
            markLine: {
              silent: true,
              symbol: 'diamond',
              lineStyle: {
                normal: {
                  width: 0.8,
                  type: 'dashed',
                  color: '#f4be08'
                }
              },
              data: [
                {
                  type: 'max',
                  value: _self.myScore,
                  label: {
                    normal: {
                      show: false
                    }
                  }
                }
              ]
            },
            itemStyle: {
              normal: {
                color: data.seriesItemColor[0]
              }
            },
            label: {
              normal: {
                show: true,
                position: 'top',
                formatter (obj) {
                  return obj.value[1]
                }
              }
            }
          }
          legendData.push({
            name: '我的',
            icon: 'diamond'
          })
          if (xAxisData.indexOf('2017') === -1) {
            xAxisData.push('2017')
          }
          seriesData = seriesData.concat(myData)
        }

        let option = {
          title: {
            show: false,
            text: data.title
          },
          legend: {
            type: 'scroll',
            orient: 'horizontal',
            bottom: 5,
            data: legendData,
            textStyle: {
              color: '#444'
            }
          },
          dataZoom: false,
          grid: {
            show: false,
            bottom: 55,
            right: 20,
            top: 20,
            left: 20
            // containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xAxisData
          },
          yAxis: {
            type: 'value',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            // max: data.full,
            scale: true,
            axisLabel: {
              show: false,
              formatter: data.zoom ? '{value}%' : '{value}',
              textStyle: {
                fontSize: 12
              }
            }
          },
          series: seriesData,
          tooltip: {
            show: true,
            trigger: 'axis'
          }
        }

        /* 动态添加缩放工具 */
        if (data.zoom && data.data.length > 6) {
          let startPec = 6 / data.data.length * 100
          option.dataZoom = [
            {
              show: true,
              realtime: true,
              start: 0,
              end: startPec
            }
          ]
        }
        let myChart = _self.$echarts.init(data.el)
        myChart.setOption(option)
        _self.$nextTick(() => {
          myChart.resize()
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/less/_mixins-wln.less';

  .page_collegeinfo {
  }
</style>
