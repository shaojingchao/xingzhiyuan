<template>
  <div class="collegeinfo-jiuye">

    <!--就业薪酬统计-->
    <section class="mb10">
      <c-section-title title="就业薪酬统计"></c-section-title>
      <div class="p10 chart-info bg-white">
        <div class="chart-item">
          <p class="grayb">毕业5年月薪</p>
          <high-charts class="auto pb10 pl10" :options="chartData.chart1" style="width:120px;height:120px;"
                       ref="container1"></high-charts>
          <div class="f16">￥10132</div>
          <div class="text-muted mt10">薪酬超过99%高校</div>
        </div>
        <div class="chart-item">
          <p class="grayb">行业分布</p>
          <high-charts class="auto" :options="chartData.chart2" style="width:130px;height:130px;"
                       ref="container2"></high-charts>
          <div class="f16">宽泛</div>
          <div class="text-muted mt10">行业分布较均衡</div>
        </div>
        <div class="chart-item">
          <p class="grayb">工作地点</p>
          <div class="auto bg-white pt20 pl5" id="container3" style="width:125px;height:110px;"></div>

          <div class="f16">北京市</div>
          <div class="text-muted mt10">71%在北京市工作</div>
        </div>
        <div class="chart-item">
          <p class="grayb">男女比例（近三年）</p>
          <high-charts class="auto" :options="chartData.chart4" style="width:130px;height:130px;"
                       ref="container4"></high-charts>
          <div class="f16">女生较多</div>
          <div class="text-muted mt10">男生41%-女生59%</div>
        </div>
      </div>
    </section>

    <!--专业薪酬排名-->
    <section class="mb10" v-if="from === 'college'">
      <c-section-title title="专业薪酬排名" label="（毕业5年内）"></c-section-title>
      <div class="table-wrap bg-white pt1 bti">
        <table class="table table-fixed pct100">
          <thead>
          <tr class="bg-white bbi">
            <th width="40" class="tc fw4 grayb">排名</th>
            <th class="tl fw4 grayb">专业名称</th>
            <th width="80" class="tc fw4 grayb">薪酬（元）</th>
          </tr>
          </thead>
          <tbody class="table-striped">
          <tr v-for="(item,index) in salaryList">
            <td class="tc">{{index + 1}}</td>
            <td>{{item}}</td>
            <td class="text-primary tc" v-text="26430 - index * (737 + parseInt(Math.random() * 100))"></td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!--毕业生平均月薪-->
    <section class="mb10 bg-white" v-if="from === 'college'">
      <c-section-title title="毕业生平均月薪"></c-section-title>
      <div class="p10">
        <high-charts :options="chartData.chart5" style="width:100%;"
                     ref="container5"></high-charts>
      </div>
    </section>

    <!--毕业生行业分布-->
    <section class="mb10 bg-white" v-if="from === 'college'">
      <c-section-title title="毕业生行业分布"></c-section-title>
      <div class="p10">
        <high-charts class="auto pb10" :options="chartData.chart6" style="width:100%;"
                     ref="container6"></high-charts>
      </div>
    </section>

    <!--毕业生地区分布-->
    <section class="mb10 bg-white" v-if="from === 'college'">
      <c-section-title title="毕业生地区分布"></c-section-title>
      <div class="p10">
        <high-charts :options="chartData.chart7" style="width:100%;"
                     ref="container7"></high-charts>
      </div>
    </section>
  </div>
</template>

<script>
  import HighCharts from '@/components/highcharts'
  import CHINAMAP from '@/components/chart/chinamap'
  import Raphael from '../../bower_components/raphael/raphael'

  export default {
    props: {
      from: {
        type: String,
        required: false,
        default: 'college'
      }
    },
    components: {
      HighCharts
    },
    data () {
      return {
        chartData: {
          chart1: {},
          chart2: {},
          chart3: {},
          chart4: {},
          chart5: {},
          chart6: {},
          chart7: {}
        },
        salaryList: [
          '朝鲜语',
          '法语',
          '西班牙语',
          '社会学',
          '物理学',
          '法学',
          '计算机科学与技术',
          '俄语',
          '信息管理与信息系统',
          '城乡规划'
        ]
      }
    },
    computed: {},
    mounted () {
      this.initChart()
    },
    methods: {
      initChart () {
        let jsondata = '{"loc":[{"locName":"北京市","_ratio":71.07,"locY":39.904987,"ratio":100,"locX":116.405289}],"gender":{"_f":59,"_m":41,"f":"59%","m":"41%"},"ind":[{"indName":"金融/投资","ratio":13.76},{"indName":"咨询等专业服务","ratio":9.01},{"indName":"影视/传媒/出版","ratio":8.57},{"indName":"房地产/建筑","ratio":6.25},{"indName":"互联网/电子商务","ratio":6.23},{"indName":"教育/培训/科研","ratio":6.09},{"indName":"广告/会展/公关","ratio":3.81},{"indName":"通信/电信运营","ratio":3.01},{"indName":"计算机软件","ratio":2.92},{"indName":"IT服务/系统集成","ratio":2.56},{"indName":"计算机硬件","ratio":2.3},{"indName":"快速消费品","ratio":2.27},{"indName":"贸易/进出口","ratio":2.2},{"indName":"保险","ratio":1.59},{"indName":"服装/纺织/皮革","ratio":1.57},{"indName":"汽车/摩托车","ratio":1.47},{"indName":"零售/批发","ratio":1.47},{"indName":"餐饮娱乐","ratio":1.31},{"indName":"交通/运输/物流","ratio":1.25},{"indName":"电子技术","ratio":1.25},{"indName":"机械/设备/重工","ratio":1.15},{"indName":"石油/石化/化工","ratio":1.15},{"indName":"医药/生物工程","ratio":1.13},{"indName":"原材料和加工","ratio":0.87},{"indName":"会计/审计","ratio":0.79},{"indName":"中介服务","ratio":0.76},{"indName":"通信/电信设备","ratio":0.74},{"indName":"采掘业/冶炼","ratio":0.67},{"indName":"电气/仪器/自动化","ratio":0.59},{"indName":"休闲度假","ratio":0.55},{"indName":"商业/物业管理","ratio":0.54},{"indName":"环保","ratio":0.51},{"indName":"娱乐/体育/休闲","ratio":0.5},{"indName":"医疗/保健/美容","ratio":0.47},{"indName":"医疗设备/器械","ratio":0.43},{"indName":"电力/水利","ratio":0.42},{"indName":"航天航空","ratio":0.36},{"indName":"室内设计/装潢","ratio":0.35},{"indName":"家具/家电/工艺品","ratio":0.3},{"indName":"农/林/牧/渔","ratio":0.29},{"indName":"玩具/礼品/工艺品","ratio":0.29},{"indName":"网络游戏","ratio":0.29},{"indName":"印刷/包装/造纸","ratio":0.24},{"indName":"办公用品及设备","ratio":0.19},{"indName":"新能源","ratio":0.08},{"indName":"生活服务","ratio":0.07},{"indName":"检验/检测/认证","ratio":0.03}],"countrySal":[{"after_graduation_year":1,"sample_count":2676598,"salary":2793},{"after_graduation_year":2,"sample_count":1741228,"salary":3432},{"after_graduation_year":3,"sample_count":1366067,"salary":3845},{"after_graduation_year":4,"sample_count":1012695,"salary":4358},{"after_graduation_year":5,"sample_count":748519,"salary":4948},{"after_graduation_year":6,"sample_count":570631,"salary":5525},{"after_graduation_year":7,"sample_count":429444,"salary":6140},{"after_graduation_year":8,"sample_count":320127,"salary":7108},{"after_graduation_year":9,"sample_count":231831,"salary":7520},{"after_graduation_year":10,"sample_count":165422,"salary":8227}],"salary":[{"after_graduation_year":1,"virtual_flag":"0","salary":3483},{"after_graduation_year":2,"virtual_flag":"0","salary":4624},{"after_graduation_year":3,"virtual_flag":"0","salary":5976},{"after_graduation_year":4,"virtual_flag":"0","salary":7406},{"after_graduation_year":5,"virtual_flag":"0","salary":8736},{"after_graduation_year":6,"virtual_flag":"0","salary":10132},{"after_graduation_year":7,"virtual_flag":"0","salary":11567.8},{"after_graduation_year":8,"virtual_flag":"0","salary":13064.5},{"after_graduation_year":9,"virtual_flag":"0","salary":14300.5},{"after_graduation_year":10,"virtual_flag":"0","salary":16268}],"ind2":[{"indName":"金融/投资","ratio":13.76},{"indName":"咨询等专业服务","ratio":9.01},{"indName":"影视/传媒/出版","ratio":8.57},{"indName":"房地产/建筑","ratio":6.25},{"indName":"互联网/电子商务","ratio":6.23},{"indName":"教育/培训/科研","ratio":6.09},{"indName":"广告/会展/公关","ratio":3.81},{"indName":"通信/电信运营","ratio":3.01},{"indName":"计算机软件","ratio":2.92},{"indName":"其他","ratio":40.35}],"loc2":[{"locName":"北京市","_ratio":71.07,"locY":39.905,"ratio":100,"locX":116.405},{"locName":"上海市","_ratio":5.44,"locY":31.2317,"ratio":8,"locX":121.473},{"locName":"深圳市","_ratio":3.79,"locY":22.547,"ratio":5,"locX":114.086},{"locName":"广州市","_ratio":2.73,"locY":23.1252,"ratio":4,"locX":113.281},{"locName":"天津市","_ratio":1.07,"locY":39.1256,"ratio":2,"locX":117.19},{"locName":"杭州市","_ratio":1.08,"locY":30.2875,"ratio":2,"locX":120.154},{"locName":"成都市","_ratio":1.2,"locY":30.6595,"ratio":2,"locX":104.066},{"locName":"沧州市","_ratio":0.37,"locY":38.3106,"ratio":1,"locX":116.857},{"locName":"沈阳市","_ratio":0.39,"locY":41.7968,"ratio":1,"locX":123.429},{"locName":"长沙市","_ratio":0.39,"locY":28.1941,"ratio":1,"locX":112.982}]}'
        let json = $.parseJSON(jsondata)
        let countrySalData = json.countrySal
        let salaryData = json.salary
        let indData = json.ind2
        let locData = json.loc2
        let countrySal = []
        let salary = []
        let countryx = []
        let salaryx = []
        let ind2name = []
        let ind2value = []
        let locname = []
        let locvalue = []
        let newloc = []
        let key = 'after_graduation_year'

        countrySalData && countrySalData[0] != null && countrySalData[0].graduate_year != null && (key = 'graduate_year')
        countrySalData.sort(function (a, b) {
          return a[key] - b[key]
        })
        key = 'graduate_year'
        salaryData && salaryData[0] != null && salaryData[0].after_graduation_year != null && (key = 'after_graduation_year')
        salaryData.sort(function (a, b) {
          return a[key] - b[key]
        })
        for (let i = 0, len = countrySalData.length; i < len; i++) {
          countrySal.push(countrySalData[i].salary)
          countryx.push(salaryData[i].after_graduation_year)
        }
        for (let i = 0, len = salaryData.length; i < len; i++) {
          salary.push(salaryData[i].salary)
          salaryx.push(salaryData[i].after_graduation_year)
        }

        let linesalaryx = salaryx.length > countryx.length ? salaryx : countryx
        for (let i = 0, len = indData.length; i < len; i++) {
          ind2name.push(indData[i].indName)
          ind2value.push(indData[i].ratio)
        }
        for (let i = 0, len = locData.length; i < len; i++) {
          locname.push(locData[i].locName)
          locvalue.push(locData[i]._ratio)
          newloc.push([locData[i].locName, locData[i]._ratio])
        }

        this.$set(this.chartData, 'chart1', {
          chart: {
            type: 'line',
            width: 110,
            height: 110
          },
          title: {
            text: '',
            floating: true
          },
          xAxis: {
            lineWidth: 0,
            showFirstLabel: false,
            showEmpty: false,
            tickPosition: 'inside',
            tickWidth: 0,
            gridLineWidth: 0,
            labels: {enabled: false}
          },
          yAxis: {
            title: {
              text: null
            },
            lineWidth: 0,
            gridLineWidth: 0,
            labels: {enabled: false}
          },
          legend: {
            enabled: false
          },
          tooltip: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          credits: {
            enabled: false
          },
          plotOptions: {
            line: {
              animation: true,
              lineColor: '#00adef',
              enableMouseTracking: false,
              zIndex: 4,
              marker: {enabled: false}
            }
          },
          series: [{
            type: 'line',
            data: salary,
            zIndex: 10
          }, {
            type: 'line',
            data: countrySal,
            lineColor: '#f3f5f7',
            zIndex: 3
          }]
        })

        let color = ['#00adef', '#41C2EF', '#69CAEF', '#A8D9EF', '#eef0f2']
        let ind = json.ind

        let data = []
        for (let i = 0, len = ind.length; i < len; i++) {
          data.push({
            name: ind[i].indName,
            y: ind[i].ratio,
            color: color[i] || '#edeef0'
          })
        }

        this.$set(this.chartData, 'chart2', {
          chart: {
            type: 'pie',
            width: 130,
            height: 130
          },
          credits: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          title: {
            text: ''
          },
          exporting: {
            enabled: false
          },
          plotOptions: {
            pie: {
              size: 100,
              animation: true,
              enableMouseTracking: true,
              innerSize: 50,
              dataLabels: {
                enabled: false
              },
              borderWidth: 2
            }
          },
          tooltip: {
            enabled: true
          },
          series: [{
            name: '比例',
            data: data
          }]
        })

        let loc = json.loc[0] || {}
        let _rootY = 6
        let _x = -477
        let _y = -199 + _rootY
        let mapScale = 0.6991377301328385
        let mapHeight = 88.13330226054555
        let map = {
          height: 130,
          width: 130,
          init: function () {
            this.R = new Raphael('container3', this.width, this.height)
            this.mapObj = this.R.path(this.path)
            this.mapObj.attr({
              fill: '#f3f5f7',
              'stroke-width': '0.2',
              stroke: '#f2f3f5'
            })
            this.mapObj.transform('m' + mapScale + ',0,0,' + mapScale + ',' + _x + ',' + _y)
            this.Circle = this.R.circle(this.longitudeToCoordinate(loc.locX), this.latitudeToCoordinate(loc.locY), 1)
            this.Circle.attr({
              'fill': '#00adef',
              'fill-opacity': 0.2,
              'stroke-width': 0,
              stroke: '#00adef'
            })
            this.Circle.animate({
              r: 3,
              'fill-opacity': 1,
              'stroke-width': 2
            }, 500, 'backIn')
          },
          latitudeToCoordinate: function (a) {
            let c = this.dataProvider
            let b = c.topLatitude
            let d = c.bottomLatitude
            a = this.mercatorLatitudeToCoordinate(a)
            b = this.mercatorLatitudeToCoordinate(b)
            d = this.mercatorLatitudeToCoordinate(d)
            b = (a - b) / (d - b) * mapHeight
            return b + _rootY
          },
          longitudeToCoordinate: function (a) {
            let c = this.dataProvider
            let b = c.leftLongitude
            b = (a - b) / (c.rightLongitude - b) * this.width
            return b
          },
          mercatorLatitudeToCoordinate: function (a) {
            a > 89.5 && ((a = 89.5) - 89.5) > a && (a = -89.5)
            a = a / 180 * Math.PI
            a = 0.5 * Math.log((1 + Math.sin(a)) / (1 - Math.sin(a)))
            return 180 * (a / 2 / Math.PI)
          }
        }
        $.extend(map, CHINAMAP)
        map.init()
        this.$set(this.chartData, 'chart4', {
          chart: {
            type: 'pie',
            width: 130,
            height: 130
          },
          credits: {
            enabled: false
          },
          legend: {
            enabled: false,
            borderWidth: 0
          },
          title: {
            text: '',
            floating: true
          },
          plotOptions: {
            pie: {
              size: 100,
              animation: true,
              enableMouseTracking: true,
              innerSize: 50,
              dataLabels: {
                enabled: false
              },
              borderWidth: 2
            }
          },
          tooltip: {
            enabled: true
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: '比例',
            data: [
              {name: '女', y: json.gender._f, color: '#f3f5f7'},
              {name: '男', y: json.gender._m, color: '#00adef'}
            ]
          }]
        })

        // 学校需要显示下列图表
        if (this.from !== 'college') return false
        this.$set(this.chartData, 'chart5', {
          chart: {
            type: 'spline'
          },
          title: {
            text: ''
          },
          credits: {
            enabled: false
          },
          legend: {
            itemStyle: {
              fontWeight: '400'
            }
          },
          xAxis: {
            title: {
              text: '毕业年数'
            },
            categories: linesalaryx
          },
          yAxis: {
            title: {
              text: '薪酬 (元)'
            }
          },
          tooltip: {
            crosshairs: true,
            shared: true
          },
          exporting: {
            enabled: false
          },
          series: [{
            type: 'spline',
            marker: {
              enabled: true,
              symbol: 'circle',
              lineColor: '#fff',
              lineWidth: 2,
              fillColor: '#00adef',
              states: {
                hover: {
                  radiusPlus: 0.6,
                  lineColor: '#fff',
                  lineWidth: 0.2,
                  lineWidthPlus: 0.2
                }
              }
            },
            name: '该校毕业生',
            color: '#00adef',
            data: salary
          }, {
            type: 'spline',
            marker: {
              enabled: true,
              symbol: 'circle',
              lineColor: '#fff',
              lineWidth: 2,
              fillColor: '#c9d1d7',
              states: {
                hover: {
                  radiusPlus: 0.6,
                  lineColor: '#fff',
                  lineWidth: 0,
                  lineWidthPlus: 0
                }
              }
            },
            name: '全国毕业生',
            color: '#c9d1d7',
            data: countrySal
          }]
        })

        this.$set(this.chartData, 'chart6', {
          chart: {
            type: 'bar'
          },
          title: {
            text: ''
          },
          subtitle: {
            text: ''
          },
          xAxis: {
            categories: ind2name,
            title: {
              text: null
            }
          },
          yAxis: {
            min: 0,
            title: {
              text: '行业比例(%)'
            },
            labels: {
              overflow: 'justify'
            }
          },
          tooltip: {
            valueSuffix: '%'
          },
          exporting: {
            enabled: false
          },
          plotOptions: {
            bar: {
              dataLabels: {
                enabled: true
              }
            }
          },
          legend: {
            enabled: false
          },
          credits: {
            enabled: false
          },
          series: [{
            enabled: false,
            name: '行业分布',
            color: '#00adef',
            data: ind2value
          }]
        })

        this.$set(this.chartData, 'chart7', {
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
          },
          title: {
            text: ''
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: true,
                color: '#666666',
                format: '{point.name}: {point.percentage:.1f} %',
                style: {
                  fontWeight: '400'
                }
              }
            }
          },
          exporting: {
            enabled: false
          },
          credits: {
            enabled: false
          },
          series: [{
            type: 'pie',
            name: '地区分布',
            data: newloc
          }]
        })
      }
    }
  }
</script>

<style lang="less">
  @import '../assets/less/_mixins-wln.less';

  .collegeinfo-jiuye {
    .chart-info {
      display: flex;
      flex-flow: wrap;
      .chart-item {
        display: inline-block;
        width: 50%;
        text-align: center;
        padding-bottom: 15px;
      }
    }
  }

</style>
