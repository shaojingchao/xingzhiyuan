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
        <div class="nav-item" @click="tabActive = 'tab-1'"><span class="trans" :class="{on:tabActive === 'tab-1'}">分数线</span></div>
        <div class="nav-item" @click="tabActive = 'tab-2'"><span class="trans" :class="{on:tabActive === 'tab-2'}">介绍</span></div>
        <div class="nav-item" @click="tabActive = 'tab-3'"><span class="trans" :class="{on:tabActive === 'tab-3'}">招生</span></div>
        <div class="nav-item" @click="tabActive = 'tab-4'"><span class="trans" :class="{on:tabActive === 'tab-4'}">就业</span></div>
      </div>
      <mt-tab-container v-model="tabActive">

        <mt-tab-container-item id="tab-1">
          <section class="bg-white mb10">
            <c-section-title title="院校录取分数线" label="（河南-理科）"></c-section-title>
            <div class="J_chartScoreLine">
              <div class="tc">
                <div class="btn-group">
              <span class="btn btn-primary"
                    ref="firstScoreRankingChart"
                    :class="[tabScoreRankingIndex === 1 ? 'btn-primary':'btn-second']"
                    @click="tabScoreRanking(1, $event)">本一批</span>
                  <span class="btn btn-second"
                        :class="[tabScoreRankingIndex === 2 ? 'btn-primary':'btn-second']"
                        @click="tabScoreRanking(2, $event)">高一批</span>
                </div>
              </div>
              <div class="p10">
                <div style="height:240px;" ref="chart_scoreRanking"
                     v-show="tabScoreRankingIndex === 1"></div>
                <div style="height:240px;" ref="chart_scoreAvg"
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

          <section class="bg-white mb10 pb15">
            <c-section-title class="mt10" title="专业录取分数线" vip></c-section-title>
            <div class="majorline-list" v-if="isVip">
              <mt-cell v-for="(item,i) in majorScoreLineList" :title="item" :to="{name:'majorline',params: {id:i}}" is-link></mt-cell>
            </div>
            <c-vip class="bti" v-if="!isVip"></c-vip>
          </section>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-2">
          <section class="bg-white">
            <c-section-title title="院校概况"></c-section-title>
            <table class="table ci-base-info">
              <tbody>
              <tr>
                <td><span class="text-muted">省份：</span>北京</td>
                <td><span class="text-muted">创建：</span>1952年</td>
              </tr>
              <tr>
                <td><span class="text-muted">层次：</span>本科</td>
                <td><span class="text-muted">类型：</span>大学</td>
              </tr>
              <tr>
                <td><span class="text-muted">隶属：</span>工业和信息化部</td>
                <td><span class="text-muted">学生：</span>29951人</td>
                <td></td>
              </tr>
              <tr>
                <td colspan="2"><span class="text-muted">地址：</span>北京市海定区学院路37号 </td>
              </tr>
              <tr>
                <td colspan="2"><span class="text-muted">电话：</span>010-8236548、2245566、36598726 </td>
              </tr>
              <tr>
                <td colspan="2"><span class="text-muted">网址：</span><a href="http://www.buaa.edu.cn/" class="text-primary">http://www.buaa.edu.cn/</a></td>
              </tr>
              <tr>
                <td colspan="2"><span class="text-muted">邮箱：</span>bdzsb@pku.edu.cn </td>
              </tr>
              </tbody>
            </table>
          </section>

          <section class="bg-white mt10 ov-h">
            <c-section-title title="院校介绍"></c-section-title>
            <div class="desc-content pl10 pr10" ref="descContent">
              <p></p>
              <p>　　北京大学创办于1898年，初名京师大学堂，是中国第一所国立综合性大学，也是当时中国最高教育行政机关。辛亥革命后，于1912年改为现名。</p>
              <p>
                　　作为新文化运动的中心和“五四”运动的策源地，作为中国最早传播马克思主义和民主科学思想的发祥地，作为中国共产党最早的活动基地，北京大学为民族的振兴和解放、国家的建设和发展、社会的文明和进步做出了不可替代的贡献，在中国走向现代化的进程中起到了重要的先锋作用。爱国、进步、民主、科学的传统精神和勤奋、严谨、求实、创新的学风在这里生生不息、代代相传。</p>
              <p>
                　　1917年，著名教育家蔡元培出任北京大学校长，他“循思想自由原则，取兼容并包主义”，对北京大学进行了卓有成效的改革，促进了思想解放和学术繁荣。陈独秀、李大钊、毛泽东以及鲁迅、胡适等一批杰出人才都曾在北京大学任职或任教。</p>
              <p>　　1937年卢沟桥事变后，北京大学与清华大学、南开大学南迁长沙，共同组成长沙临时大学。不久，临时大学又迁到昆明，改称国立西南联合大学。抗日战争胜利后，北京大学于1946年10月在北平复学。</p>
              <p>
                　　中华人民共和国成立后，全国高校于1952年进行院系调整，北京大学成为一所以文理基础教学和研究为主的综合性大学，为国家培养了大批人才。据不完全统计，北京大学的校友和教师有400多位两院院士，中国人文社科界有影响的人士相当多也出自北京大学。</p>
              <p>　　改革开放以来，北京大学进入了一个前所未有的大发展、大建设的新时期，并成为国家“211工程”重点建设的两所大学之一。</p>
              <p>
                　　1998年5月4日，北京大学百年校庆之际，国家主席江泽民在庆祝北京大学建校一百周年大会上发表讲话，发出了“为了实现现代化，我国要有若干所具有世界先进水平的一流大学”的号召。在国家的支持下，北京大学适时启动“创建世界一流大学计划”，从此，北京大学的历史翻开了新的一页。</p>
              <p>
                　　2000年4月3日，北京大学与原北京医科大学合并，组建了新的北京大学。原北京医科大学的前身是国立北京医学专门学校，创建于1912年10月26日。20世纪三、四十年代，学校一度名为北平大学医学院，并于1946年7月并入北京大学。1952年在全国高校院系调整中，北京大学医学院脱离北京大学，独立为北京医学院。1985年更名为北京医科大学，1996年成为国家首批“211工程”重点支持的医科大学。两校合并进一步拓宽了北京大学的学科结构，为促进医学与人文社会科学及理科的结合，改革医学教育奠定了基础。</p>
              <p>
                　　近年来，在“211工程”和“985工程”的支持下，北京大学进入了一个新的历史发展阶段，在学科建设、人才培养、师资队伍建设、教学科研等各方面都取得了显著成绩，为将北大建设成为世界一流大学奠定了坚实的基础。今天的北京大学已经成为国家培养高素质、创造性人才的摇篮、科学研究的前沿和知识创新的重要基地和国际交流的重要桥梁和窗口。</p>
              <p>　　现任校党委书记朱善璐教授、校长林建华教授。</p>
              <p><br></p>
              <p></p>
            </div>
            <div class="toggle-btn on-active bti" @click.capture="toggleDesc"><span class="on-active mintui mintui-back down"></span></div>
          </section>

          <section class="bg-white mt10">
            <c-section-title title="校园照片"></c-section-title>
            <div class="photo-content">
              <div class="img-item-wrap" v-for="item in photoList">
                <div class="img-item">
                  <img v-lazy="'http://192.168.4.33:8081/zytb/' + item.src">
                  <p class="elli">{{item.title}}</p>
                </div>
              </div>
            </div>
          </section>


        </mt-tab-container-item>
        <mt-tab-container-item id="tab-3">
          <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-4">
          <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import Photo from '@/store/photo.js'
console.log(Photo)

export default {
  name: 'college',
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
      photoList: Photo
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
    toggleDesc (e) {
      $(this.$refs.descContent).toggleClass('show')
      $(e.currentTarget).find('span').toggleClass('up')
    },
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

<style lang="less">
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
            &.on{
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
