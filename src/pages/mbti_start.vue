<template>
  <div class="page_mbti_start">
    <mt-header :title="pageName">
      <c-router-back slot="left"></c-router-back>
    </mt-header>

    <div class="ques-content">
      <div class="ques-num-progress">
        <div class="progress-bar-content">
          <div class="progress-bar">
            <span class="bar trans" :style="{width: (answeredNum/quesTotalNum)*100 + '%'}"></span>
          </div>
        </div>
        <div class="ques-num-tips text-primary">
          {{answeredNum}}/ {{quesTotalNum}}
        </div>
      </div>

      <div v-for="quesItem in mbtiList" v-if="answeredNum - quesItem.qid === -1">
        <div class="ques-text pt20 f16">
          <span v-if="answeredNum > 26 && answeredNum < 73">{{mbtiTitle['26']}}</span>
          <span v-else>{{quesItem.questiontitle}}</span>
        </div>

        <footer class="ques-options bti">
          <div class="btn btn-second btn-block round" @click="answerEvent('a')">{{mbtiList[answeredNum]['optiona']}}
          </div>
          <div class="btn btn-second btn-block round mt10" @click="answerEvent('b')">
            {{mbtiList[answeredNum]['optionb']}}
          </div>
        </footer>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'mbti-start',
    components: {},
    data () {
      return {
        pageName: '职业性格测试',
        answered: []
      }
    },
    computed: {
      ...mapState('mbti', {
        'mbtiTitle': 'title',
        'mbtiList': 'list'
      }),
      quesTotalNum () {
        return this.mbtiList.length
      },
      answeredNum () {
        return this.answered.length
      }
    },
    created () {
      if (this.$route.params.part === 'tab1') {
        this.pageName = '职业性格测试'
      } else {
        this.pageName = '学业压力测试'
      }
    },
    mounted () {
    },
    methods: {
      answerEvent (ans) {
        let _vm = this
        setTimeout(() => {
          _vm.$set(this.answered, _vm.answeredNum, ans)
          _vm.answered[_vm.answeredNum] = ans
          if (_vm.answeredNum === _vm.quesTotalNum) {
            _vm.$Indicator.open('正在分析测试结果，请稍候...')
            setTimeout(() => {
              _vm.$Indicator.close()
              _vm.$router.replace({name: 'mbtireport'})
            }, 1000)
          }
        }, 100)
      }
    }
  }
</script>

<style lang="less">
  @import '../assets/less/_mixins-wln.less';

  .page_mbti_start {
    background-color: #fff;
    height: 100%;
    .ques-content {
      padding: 10px;
      background-color: #fff;
      .ques-num-progress {
        width: 100%;
        display: table;
        .progress-bar-content {
          display: table-cell;
          /*padding: 0 10px 0 0;*/
          height: 20px;
          .progress-bar {
            height: 9px;
            width: 100%;
            margin-top: 5px;
            border-radius: 4.5px;
            vertical-align: middle;
            overflow: hidden;
            background-color: #f3f5f7;
            .bar {
              width: 10%;
              height: 100%;
              background-color: @primary;
              display: block;
            }
          }
        }
        .ques-num-tips {
          display: table-cell;
          vertical-align: middle;
          width: 3.5em;
          text-align: right;
        }
      }
      .ques-options {
        position: fixed;
        background-color: #fff;
        bottom: 0;
        right: 0;
        left: 0;
        padding: 10px 20px;
      }
    }
  }

</style>
