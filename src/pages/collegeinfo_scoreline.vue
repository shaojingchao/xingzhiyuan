<template>
  <div class="collegeinfo-scoreline">
    <chart-scoreline title="院校录取分数线" from="college"></chart-scoreline>
  </div>
</template>

<script>
  import ChartScoreline from '@/components/chart_scoreline'

  export default {
    name: 'college-major-scoreline',
    components: {
      ChartScoreline
    },
    data () {
      return {}
    }
  }
</script>
