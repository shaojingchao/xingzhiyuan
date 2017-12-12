<template>
  <div class="page_passrate">
    <mt-header title="北京航空航天大学">
      <router-link :to="{name:'passrate'}" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="rate-area">
      <div class="tc rate">86.5<small class="f16"> %</small></div>
      <div class="tc text-white mt5 f16">录取概率</div>
      <div class="other-info">
        <div class="oi-item">
          <div class="f16 text-white">654</div>
          <div class="f12 grayc">我的成绩</div>
        </div>
        <div class="oi-item">
          <div class="f16 text-white">102</div>
          <div class="f12 grayc">省排名</div>
        </div>
        <div class="oi-item">
          <div class="f16 text-white">23</div>
          <div class="f12 grayc">校排名</div>
        </div>
      </div>
    </div>

    <div class="cate-intro">

      <!--工作内容-->
      <div class="cate-item">
        <h3 class="item-title">
          工作内容
        </h3>
        <div class="cate-detail item1 pl10 pr10">
          <p>以你目前的成绩，勉强可以考上<span class="text-primary">北京外国语大学</span></p>
          <p>你的分数还可以上对外经济贸易大学等<span class="text-primary">210所</span>一本院校</p>
          <p>近三年与你成绩相近的人当中，被<span class="text-primary">中国政法大学</span>录取的考生最多(<span class="text-primary">28人</span>)</p>
        </div>
      </div>

      <!--各分数段录取排名-->
      <div class="cate-item">
        <h3 class="item-title">
          各分数段录取排名
        </h3>
        <div class="cate-detail item1 pl10 pr10">
          <div class="tc">
            <div class="btn-group">
              <span class="btn btn-primary"
                    ref="firstScoreRankingChart"
                    :class="[tabScoreRankingIndex === 1 ? 'btn-primary':'btn-second']"
                    @click="tabScoreRanking(1, $event)">最低分</span>
              <span class="btn btn-second"
                    :class="[tabScoreRankingIndex === 2 ? 'btn-primary':'btn-second']"
                    @click="tabScoreRanking(2, $event)">平均分</span>
              <span class="btn btn-second"
                    :class="[tabScoreRankingIndex === 3 ? 'btn-primary':'btn-second']"
                    @click="tabScoreRanking(3, $event)">最高分</span>
            </div>
          </div>
          <div class="p10">
            <div class="J_rankingChartItem"
                 ref="chart_scoreRanking"
                 v-show="tabScoreRankingIndex === 1"></div>
            <div class="J_rankingChartItem"
                 ref="chart_scoreAvg"
                 v-show="tabScoreRankingIndex === 2"></div>
            <div class="J_rankingChartItem"
                 ref="chart_scoreHighest"
                 v-show="tabScoreRankingIndex === 3"></div>
          </div>
        </div>
      </div>
      <div class="cate-item">
        <h3 class="item-title">
          本科第一批录取人数分布
        </h3>
        <div class="cate-detail item3 pl10 pr10">
          <p>该校所有录取人的分数与控制线的差值，总体分布情况(%)。</p>
          <div ref="chartFsfb" style="height:300px;"></div>
        </div>
      </div>
      <div class="cate-item">
        <h3 class="item-title">
          大学排序分
        </h3>
        <div class="cate-detail item1 pl10 pr10">
          <p>排序分是指当最低录取分数线上,同分考生多于招生人数时,以语文、数学、英语单科分数决定录取考生。</p>
          <div class="mt30" ref="chartSortScore" style="height:200px;"></div>
        </div>
      </div>
      <div class="cate-item">
        <h3 class="item-title">
          该成绩能上的其他学校和专业
        </h3>
        <div class="cate-detail item1 pl10 pr10">
          <p>以你目前的成绩，勉强可以考上<span class="text-primary">北京外国语大学</span></p>
          <p>你的分数还可以上对外经济贸易大学等<span class="text-primary">210所</span>一本院校</p>
          <p>近三年与你成绩相近的人当中，被<span class="text-primary">中国政法大学</span>录取的考生最多(<span class="text-primary">28人</span>)</p>
        </div>
      </div>
      <div class="cate-item">
        <h3 class="item-title">
          同分考生去向
        </h3>
        <div class="cate-detail item1 pl10 pr10">
          <p>以你目前的成绩，勉强可以考上<span class="text-primary">北京外国语大学</span></p>
          <p>你的分数还可以上对外经济贸易大学等<span class="text-primary">210所</span>一本院校</p>
          <p>近三年与你成绩相近的人当中，被<span class="text-primary">中国政法大学</span>录取的考生最多(<span class="text-primary">28人</span>)</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CollegeItem from '../components/collegeitem.vue'
  export default {
    name: 'passrate',
    components: {
      CollegeItem
    },
    data () {
      return {
        msg: 'hello vue',
        colorThemes: [
          ['#f4be08', '#ffaf25'],
          ['#c9d1d7', '#ffaf25'],
          ['#e94c4b', '#ffaf25']
        ],
        scoreData: {
          'maxscore': [{'yid': '2012', 'score': '676'}, {'yid': '2013', 'score': '652'}, {
            'yid': '2014', 'score': '680'}
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
        scoreBlock: [{
          'fc': '101-105', 'percent': '2.17', 'nums': '1'
        }, {
          'fc': '114-118', 'percent': '2.17', 'nums': '1'
        }, {
          'fc': '122-126', 'percent': '2.17', 'nums': '1'
        }, {
          'fc': '135-139', 'percent': '21.74', 'nums': '10'
        }, {
          'fc': '140-144', 'percent': '43.48', 'nums': '20'
        }, {
          'fc': '145-149', 'percent': '15.22', 'nums': '7'
        }, {
          'fc': '148-152', 'percent': '13.04', 'nums': '6'
        }],
        scoreSortData: [{
          'name': '\u8bed\u6587',
          'data': [{'yid': '2016', 'score': '123'}]
        }, {
          'name': '\u6570\u5b66',
          'data': [{'yid': '2016', 'score': '131'}]
        }, {
          'name': '\u82f1\u8bed\u542c\u529b',
          'data': [{'yid': '2016', 'score': '26'}]
        }],
        popupVisible: false,
        value: '',
        result: 5
      }
    },
    computed: {
      tabScoreRankingId () {
        return 'tab-container' + this.tabScoreRankingIndex
      }
    },
    mounted () {
      console.log(this.tabScoreRankingId)
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
      _self.createFsfbChart(_self.scoreBlock)
      _self.createScoreSortChart(_self.scoreSortData)
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
              }, true)
              break
            case 2:
              _self.createRankingChart({
                el: _self.$refs.chart_scoreAvg,
                title: '平均分',
                full: newScoreData.full,
                data: newScoreData.avgScore,
                ctrl: newScoreData.ctrlScore,
                seriesItemColor: colorThemes[0]
              }, true)
              $(e.currentTarget).data('show', true)
              break
            case 3:
              _self.createRankingChart({
                el: _self.$refs.chart_scoreHighest,
                title: '最高分',
                full: newScoreData.full,
                data: newScoreData.maxScore,
                ctrl: newScoreData.ctrlScore,
                seriesItemColor: colorThemes[0]
              }, true)
              $(e.currentTarget).data('show', true)
              break
          }
        }
      },
      // 各分数段录取排名
      scoreRanking () {
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
                formatter: function (obj) {
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
            // console.log('newDataData', newDataData)
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
                  formatter: function (obj) {
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

        console.log(seriesData)

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
                formatter: function (obj) {
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
            bottom: 40,
            right: 10,
            top: 10,
            left: 10,
            containLabel: true
          },
          xAxis: {
            data: xAxisData
          },
          yAxis: {
            // max: data.full,
            scale: true,
            axisLabel: {
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
      },
      /**
       * 分数分布-饼图
       */
      createFsfbChart (data) {
        let _self = this
        let data1 = {
          el: _self.$refs.chartFsfb,
          seriesData: [],
          legendData: [],
          seriesItemColor: ['#8dd47f', '#5bc4f1', '#f37fbe', '#faaa5b', '#fdcc53']
        }
        data.forEach(function (item) {
          data1.seriesData.push({
            name: item['fc'],
            value: parseInt(item['nums'])
          })
          data1.legendData.push({
            name: item['fc'],
            icon: 'circle'
          })
        })
        let option = {
          tooltip: {
            trigger: 'item',
            formatter: '{b}分<br/> 共{c}人 占{d}%',
            textStyle: {
              fontSize: 12
            }
          },
          legend: {
            orient: 'horizontal',
            bottom: 5,
            data: data1.legendData
          },
          series: [
            {
              name: '分数分布',
              type: 'pie',
              center: ['50%', '45%'],
              radius: ['0%', '36%'],
              roseType: 'radius',
              minAngle: 4,
              label: {
                normal: {
                  position: 'outside',
                  formatter: '{b} {d}%',
                  textStyle: {
                    fontSize: 12
                  }
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '14'
                  }
                }
              },
              data: data1.seriesData
            }
          ]
        }
        _self.$echarts.init(data1.el).setOption(option)
      },
      /**
       * 排序分-柱状图
       */
      createScoreSortChart (data) {
        let _self = this
        let optData = {
          legend: [],
          xAxisData: [],
          series: []
        }
        $.each(data, function (i, item) {
          let itemName = item['name']
          optData.xAxisData.push(itemName)
          $.each(item['data'], function (j, items) {
            let itemYid = items['yid']
            if (optData.legend.indexOf(itemYid) === -1) {
              optData.legend.push(itemYid)
            }
            optData.series.push({
              yid: itemYid,
              data: [itemName, items['score']]
            })
          })
        })

        optData.legend.sort(function (a, b) {
          return a > b
        })

        let series = []
        $.each(optData.legend, function (i, item) {
          let seriesData = []
          $.each(optData.series, function (j, items) {
            if (items['yid'] === item) {
              seriesData.push(items['data'])
            }
          })
          series.push({
            name: item,
            type: 'bar',
            barWidth: '14%',
            data: seriesData,
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  fontSize: 10
                },
                formatter: function (value) {
                  return value.value[1]
                }
              }
            }
          })
        })

        optData.series = series
        let option = {
          color: ['#a957bb', '#fd6b53', '#fdcc53', '#5bc4f1', '#13a753'].reverse(),
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            bottom: 5,
            data: optData.legend,
            icon: 'circle',
            right: 'center'
          },
          grid: {
            left: '3%',
            right: '4%',
            top: '3%',
            bottom: 40,
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: optData.xAxisData
          }],
          yAxis: [{
            scale: true,
            type: 'value'
          }],
          series: optData.series
        }
        _self.$echarts.init(_self.$refs.chartSortScore).setOption(option)
      }
    }
  }
</script>

<style lang="less">
  @import '../assets/less/_mixins-wln.less';
  .page_passrate{
    background-color: #f3f5f7;

    /*头部*/
    .rate-area{
      padding-top:20px;
      background-color: @primary;
      color:#fff;
      .rate{
        font-size:48px;
      }
      .other-info{
        padding-top:40px;
        padding-bottom:12px;
        display: flex;
        text-align: center;
        align-items: center;
        .oi-item{
          position: relative;
          line-height:1.5;
          flex:1;
          .grayc{
            color:rgba(255,255,255,.5);
          }
          &:after{
            position: absolute;
            right:0;
            top:23%;
            content:'';
            display: block;
            height:60%;
            width:1px;
            background-color: rgba(255,255,255,.3);
          }
          &:last-child{
            &:after{
              display: none;
            }
          }
        }
      }

    }

    /*详细介绍*/
    .cate-intro{
      .cate-item{
        background-color: #fff;
        margin-bottom:10px;
        padding:2px 0 10px;
      }
      .item-title{
        font-size:18px;
        padding-left:15px;
        border-left:3px solid @primary;
      }
      .item1{
        p{
          padding-left:16px;
          &:before{
            content:'';
            display: inline-block;
            float: left;
            width:8px;
            height:8px;
            border-radius:100%;
            background-color: @primary;
            margin-top:3px;
            margin-left:-16px;
          }
        }
      }
    }

    /* 录取排名 */
    .J_rankingChartItem{
      height:260px;
    }
  }
</style>
