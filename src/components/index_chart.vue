<template>
  <div>
    <div class="J_svg">
      <div class="ld-chart" style="width:100%;">
        <div style="width:100%; text-align:center">
          <div class="svg">
            <!--<svg width="108px" height="60px">-->
            <!--<path d="M 5 55 A 50 50 0 0 1 105 55"-->
            <!--fill="#fff" stroke="#E6E6E6" stroke-width="4" stroke-linecap="round"/>-->
            <!--<path d="M 15 55 A 50 50 0 0 1 15 35"-->
            <!--fill="#fff" stroke="#02CFD7" stroke-width="4" stroke-linecap="round"/>-->
            <!--<path d="M 5 55 A 50 50 0 0 1 15 25"-->
            <!--fill="#fff" stroke="#02CFD7" stroke-width="4" stroke-linecap="round"/>-->
            <!--</svg>-->
          </div>
          <svg style="display: none" width="300" height="190" xmlns="http://www.w3.org/2000/svg">
            <text fill="white" x="80" y="20" text-anchor="middle" style="font-size:14px;">
              <tspan id="J_infoProvince">-</tspan>
              <tspan></tspan>
              <tspan id="J_infoCategory">-</tspan>
            </text>

            <g transform="translate(0 30) rotate(-90 80 80)">
              <circle id="J_rateSvgProcess" r="70" cx="80" cy="80" fill="none" stroke-width="7.6"
                      stroke="#00adef"
                      stroke-dasharray="0 2000"></circle>
            </g>

            <!--百分比-->
            <g transform="translate(0 30)">
              <circle r="70" cx="80" cy="80" fill="none" stroke-width="7.6" stroke="rgba(255,255,255,0.3)"></circle>
              <!--percent-->

              <g style="transform-origin:80px 80px; color:#00adef;">
                <text text-anchor="middle" id="J_rateSvgPercent" x="80" y="90" fill="white" style="font-size:36px;">
                  <tspan id="J_infoRate">-/-</tspan>
                  <tspan>%</tspan>
                </text>
                <text text-anchor="middle" x="80" y="115" fill="white" style="font-size:14px;">录取率</text>
              </g>
            </g>

            <!--右侧文本-->
            <!--<g transform="translate(60 32)">-->
            <!--<g transform="translate(160 0)">-->
            <!--<text x="0" y="20" fill="white" id="J_infoMyScore">-</text>-->
            <!--<text x="0" y="40" fill="rgba(255,255,255,0.6)">我的成绩</text>-->
            <!--<text x="0" y="70" fill="white" id="J_infoProvinceRanking">-</text>-->
            <!--<text x="0" y="90" fill="rgba(255,255,255,0.6)">省排名</text>-->
            <!--<text x="0" y="120" fill="white" id="J_infoSchoolRanking">-</text>-->
            <!--<text x="0" y="140" fill="rgba(255,255,255,0.6)">校排名</text>-->
            <!--</g>-->
            <!--<g transform="translate(160 0)">-->
            <!--<circle cx="-6" cy="20" fill="white" r="4" transform="translate(-4 -4)"></circle>-->
            <!--<circle cx="-6" cy="70" fill="white" r="4" transform="translate(-4 -4)"></circle>-->
            <!--<circle cx="-6" cy="120" fill="white" r="4" transform="translate(-4 -4)"></circle>-->
            <!--</g>-->
            <!--</g>-->
          </svg>
        </div>
      </div>
    </div>
    <h4>图表</h4>
    <div style="height:300px;" ref="mychart"></div>
  </div>
</template>

<style>
  .echarts {
    height: 300px;
  }

  #J_rateSvgProcess {
    stroke-linecap: round;
    -webkit-transition: stroke-dasharray 1.8s;
    transition: stroke-dasharray 1.8s;
  }

  .ld-chart {
    background-color: #555;
  }
</style>

<script type="text/javascript">
  import $ from 'jquery'

  export default {
    data: function () {
      let data = []

      for (let i = 0; i <= 360; i++) {
        let t = i / 180 * Math.PI
        let r = Math.sin(2 * t) * Math.cos(2 * t)
        data.push([r, i])
      }

      return {
        polar: {
          title: {
            text: '极坐标双数值轴'
          },
          legend: {
            data: ['line']
          },
          polar: {
            center: ['50%', '54%']
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          angleAxis: {
            type: 'value',
            startAngle: 0
          },
          radiusAxis: {
            min: 0
          },
          series: [
            {
              coordinateSystem: 'polar',
              name: 'line',
              type: 'line',
              showSymbol: false,
              data: data
            }
          ],
          animationDuration: 2000
        }
      }
    },
    mounted: function () {
      /**
       * 录取率进度条
       */
      let radius = 70
      let percent = 60
      // 周长
      let circumference = Math.PI * (2 * radius)
      let strokePercentage = circumference - ((percent / 100) * circumference)
      setTimeout(function () {
        $('#J_rateSvgProcess').attr('stroke-dasharray', (circumference - strokePercentage) / 2 + ' ' + strokePercentage / 2)
      }, 1000)
      console.log(this.$refs)
      let myChart = this.$echarts.init(this.$refs.mychart)
      console.log(myChart)
      myChart.setOption(this.polar)
    }
  }
</script>
