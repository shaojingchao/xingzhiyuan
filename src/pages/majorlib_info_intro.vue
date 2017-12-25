<template>
  <div class="majorlib-info-intro">
    <section class="bg-white pb20">
      <c-section-title class="bbi" title="院校概况"></c-section-title>
      <table class="table pct100 mt15">
        <tbody>
        <tr>
          <td class="pct50"><span class="text-muted">层次：</span>本科</td>
          <td class="pct50"><span class="text-muted">门类：</span>哲学类</td>
        </tr>
        <tr>
          <td><span class="text-muted">学科：</span>哲学</td>
          <td><span class="text-muted">年限：</span>四年</td>
        </tr>
        <tr>
          <td><span class="text-muted">学位：</span>哲学学士</td>
        </tr>
        </tbody>
      </table>
    </section>

    <section class="bg-white mt10 ov-h">
      <c-section-title class="bbi" title="就业前景与方向"></c-section-title>
      <div class="desc-content pl10 pr10">
        <p>兼职神秘访客、兼职神秘顾客、演讲讲师、业务代表、编辑、销售总监、销售经理、图书编辑、行政人事专员、文案策划、房地产文案、董事长秘书等。</p>
      </div>
    </section>

    <section class="bg-white mt10 ov-h">
      <c-section-title class="bbi" title="实践教学"></c-section-title>
      <div class="desc-content pl10 pr10">
        <p>包括社会实习、社会调查、社会公益活动等，一般安排10周左右。</p>
      </div>
    </section>
    <c-endline></c-endline>

  </div>
</template>

<script>
  export default {
    name: 'majorlib-info-intro',
    data () {
      return {}
    },
    mounted () {
      console.log(this.$route.params)
    }
  }
</script>

<style lang="less">
  @import '../assets/less/_mixins-wln.less';

  .majorlib-info-intro {
    .desc-content {
      line-height: 1.8;
      text-indent: 2em;
      overflow: hidden;
    }
  }

</style>
