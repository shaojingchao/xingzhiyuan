<template>
  <div class="page_collegeinfo">
    <mt-header title="学院信息">
      <c-router-back slot="left"></c-router-back>
      <img src="../assets/imgs/icon/icon-like-no.png" v-if="!isLike" slot="right" width="16" alt="">
      <img src="../assets/imgs/icon/icon-like-yes.png" v-else slot="right" width="16" alt="">
    </mt-header>
    <div class="ci-head">
      <div class="logo mt2">
        <img src="../assets/imgs/daxue/college-logo.png" alt="">
      </div>
      <div class="desc">
        <div class="f20">北京航空航天大学</div>
        <div class="tag mt10">
          <span class="tag-item">综合</span>
          <span class="tag-item">985</span>
          <span class="tag-item">C9联盟</span>
          <span class="tag-item">卓越计划</span>
          <span class="tag-item">2011计划</span>
        </div>
      </div>
    </div>

    <div class="tab-wrap">
      <div class="tab-nav bbi">
        <router-link tag="div" :to="{name:'collegescoreline'}" replace class="nav-item"><span class="trans" :class="{on:tabActive === 'tab-1'}">分数线</span></router-link>
        <router-link tag="div" :to="{name:'collegeintro'}" replace class="nav-item"><span class="trans" :class="{on:tabActive === 'tab-2'}">介绍</span></router-link>
        <router-link tag="div" :to="{name:'collegeplan'}" replace class="nav-item"><span class="trans" :class="{on:tabActive === 'tab-3'}">招生</span></router-link>
        <router-link tag="div" :to="{name:'collegejiuye'}" replace class="nav-item"><span class="trans" :class="{on:tabActive === 'tab-4'}">就业</span></router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Photo from '@/store/photo'
import VueGallery from 'vue-gallery'

export default {
  name: 'college',
  components: {
    'gallery': VueGallery
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
      majorScoreLineList: ['人力资源管理', '生物工程类', '建筑桥梁类', '计算机类'],
      baseUrl: 'http://192.168.4.33:8081/zytb/',
      photoList: Photo,
      photoIndex: null
    }
  },
  computed: {
    isVip () {
      return this.$store.getters.isVip
    },
    photoListComp () {
      return this.photoList.map((item) => {
        return {
          href: this.baseUrl + item.href,
          title: item.title
        }
      })
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
          top: 15,
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
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../assets/less/_mixins-wln.less';
  .page_collegeinfo{
    .ci-head{
      background-color: @primary;
      color:#fff;
      padding:10px 10px 30px;
      display: flex;
      .logo{
        width:20%;
        padding-right:10px;
        text-align: center;
        img{
          max-width: 100%;
          border-radius: 50%;
          display: block;
        }
      }
      .desc{
        width:80%;
        /*padding:0 0 0 10px;*/
        .tag{
          @revise: 4px;
          margin-left:-@revise;
          span{
            font-size:12px;
            border:1px solid rgba(255,255,255,.25);
            border-radius: 30px;
            padding:2px 8px;
            line-height:1;
            display: inline-block;
            margin-left:@revise;
            margin-bottom: @revise + 3px;
          }
        }
      }
    }

    /*tab*/
    .tab-wrap{
      .tab-nav{
        width:100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: #fff;
        .nav-item{
          width:25%;
          display: inline-flex;
          justify-content: center;
          span{
            padding:15px 15px;
            border-bottom:2px solid transparent;
          }
          &.active{
            span{
              border-color: @primary;
              color:@primary;
            }
          }
        }
      }
    }

    /*介绍*/
    .ci-base-info{
      td{
        padding:0.5em 13px;
      }
    }
    .desc-content{
      line-height:1.8;
      max-height:8 * 1.8em;
      overflow: hidden;
      &.show{
        max-height:none;
        height:auto;
      }
    }
    .toggle-btn{
      overflow: visible;
      position: relative;
      z-index:100;
      /*background-color: #fff;*/
      box-shadow: 0 -10px 20px 0px rgba(255,255,255,1);
      text-align: center;
      padding:15px 0 15px;
      /*margin:-10px 0 0;*/
      .mintui{
        display: inline-block;
        transition: transform 0.3s;
        transform: rotate(-90deg);
      }
      .up{
        transform: rotate(90deg);
      }
    }

    /*校园照片*/
    .photo-content{
      display: flex;
      flex-wrap: wrap;
      padding:8px;
      .img-item-wrap{
        box-sizing: border-box;
        padding:4px;
        width:50%;
      }
      .img-item{
        background-color: @bg-body;
        height:100px;
        position: relative;
        border-radius: 3px;
        overflow:hidden;
        p{
          position: absolute;
          bottom:0;
          right:0;
          left:0;
          margin:0;
          padding:5px;
          background-color: rgba(0,0,0,0.3);
          color:#fff;
          text-align: center;
        }
        img{
          position: absolute;
          top:50%;
          transform: translateY(-50%);
          display: block;
          max-width:100%;
          &[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
          }
        }
      }
    }

  }

</style>
