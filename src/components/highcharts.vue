<template>
  <div class="highcharts-container"></div>
</template>

<script>
  import Highcharts from 'highcharts/highstock'
  import HighchartsMore from 'highcharts/highcharts-more'
  import HighchartsSolidgauge from 'highcharts/modules/solid-gauge'
  import HighchartsDrilldown from 'highcharts/modules/drilldown'
  import Highcharts3D from 'highcharts/highcharts-3d'
  import Highmaps from 'highcharts/modules/map'

  HighchartsMore(Highcharts)
  HighchartsSolidgauge(Highcharts)
  HighchartsDrilldown(Highcharts)
  Highcharts3D(Highcharts)
  Highmaps(Highcharts)
  Highcharts.setOptions({
    colors: [
      '#2497f4',
      '#00adef',
      '#01bcd6',
      '#02968b',
      '#8cc44a',
      '#cbdd38',
      '#feea3d',
      '#fec108',
      '#fe9823',
      '#e5694a',
      '#f76186',
      '#e4002c',
      '#e13fab',
      '#c581dc',
      '#7d85e8',
      '#79aff5',
      '#59678c'
    ]
  })

  export default {
    props: ['options'],
    name: 'high-charts',
    data () {
      return {
        chart: null
      }
    },
    watch: {
      'options' () {
        this.initChart()
      }
    },
    methods: {
      initChart () {
        this.chart = new Highcharts.Chart(this.$el, this.options)
      }
    }
  }
</script>

<style lang="less">
  .highcharts-container {
    width: auto;
    height: 300px;
  }
</style>
