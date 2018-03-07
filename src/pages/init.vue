<template>
  <div class="page_init">
    <mt-header title="" class="init-header">
      <mt-button v-if="currentStep > 1" icon="back" slot="left" @click="prevStepEvent"></mt-button>
    </mt-header>

    <!--首次使用填写表单-->
    <div class="step-list">
      <div class="step-tips">
        <div class="step-line-bar">
          <div class="step-line trans" :style="{width:(100 / (stepInfo.total - 1) * (currentStep - 1)) + '%'}"></div>
        </div>
        <div class="step-box">
            <span class="step-num trans" v-for="(item,index) in stepInfo.total"
                  :class="{'active':currentStep > index  }">{{item}}</span>
        </div>
      </div>

      <div class="f18 tc"><b>{{stepInfo.data[currentStep - 1].mainTitle}}</b></div>
      <div class="mt10 tc text-muted">{{stepInfo.data[currentStep - 1].subTitle}}</div>

      <!--考生类别-->
      <div class="select-user-cate" v-if="currentStep === 1">
        <a href="javascript:" class="opt-item normal" @click="userCate = 1">普通生<i
          class="iconfont xzy-icon-success_fill" v-if="userCate === 1"></i></a>
        <a href="javascript:" class="opt-item yishu" @click="userCate = 2">艺术生<i
          class="iconfont xzy-icon-success_fill" v-if="userCate === 2"></i></a>
        <a href="javascript:" class="opt-item tiyu" @click="userCate = 3">体育生<i class="iconfont xzy-icon-success_fill"
                                                                                v-if="userCate === 3"></i></a>
      </div>
      <!--考生基本信息-->
      <div class="user-info-form" v-if="currentStep === 2">
        <div class="form-item">
          <label for="province" class="label-name">选择生源地</label>
          <c-select
            :value.sync="province.value"
            :options="province.options"
            id="province"
            iconClass="xzy-icon-weizhi">
          </c-select>
        </div>

        <div class="form-item mt15">
          <label for="major" class="label-name">选择专业类型</label>
          <c-select
            :value.sync="major.value"
            :options="major.options"
            id="major"
            iconClass="xzy-icon-sepan">
          </c-select>
        </div>

        <div class="form-item mt15">
          <label for="major" class="label-name">选择考生科目</label>
          <c-checklist
            :value.sync="subject.value"
            type="radio"
            :options="subject.options">
          </c-checklist>
        </div>
      </div>
      <!--考生考试信息-->
      <div class="user-info-form" v-if="currentStep === 3">
        <div class="form-item">
          <label for="selectBatch" class="label-name">选择高考批次</label>
          <c-checklist
            :value.sync="batch.value"
            :options="batch.options"
            id="selectBatch"
            iconClass="xzy-icon-weizhi">
          </c-checklist>
        </div>

        <div class="form-item mt15">
          <label class="label-name">选择招生规则</label>
          <c-checklist
            id="selectRule"
            :value.sync="rule.value"
            type="radio"
            :options="rule.options">
          </c-checklist>
        </div>

        <div class="form-item mt15">
          <label class="label-name">输入考生成绩</label>
          <div class="my-score-wrap">
            <i class="my-score-icon iconfont xzy-icon-jiaoyu"></i>
            <input class="my-score-input" placeholder="高考文化分" type="number" v-model="myScore.culture"/>
          </div>

          <div class="my-score-wrap mt15">
            <i class="my-score-icon iconfont xzy-icon-sepan"></i>
            <input class="my-score-input" placeholder="省联考专业分" type="number" v-model="myScore.major"/>
          </div>
        </div>
      </div>

      <div class="next-handle">
          <span class="next-btn btn btn-primary" :class="{'disabled': nextBtnDisable}"
                @click="nextStepEvent">{{stepInfo.data[currentStep - 1].btnText}}</span>
      </div>
    </div>

    <div class="init-tips"><i
      class="iconfont xzy-icon-light mr5"></i><span>{{stepInfo.data[currentStep - 1].tips}}</span></div>

  </div>
</template>

<script>
  export default {
    name: 'Init',
    data () {
      return {
        userCate: null,
        province: {
          options: [{
            text: '河南省',
            value: 2013
          }, {
            text: '山东省',
            value: 2014
          }, {
            text: '云南省',
            value: 2015
          }, {
            text: '贵州省',
            value: 2016
          }, {
            text: '河北省',
            value: 2017
          }],
          value: ''
        },
        major: {
          options: [{
            text: '美术类',
            value: 2013
          }, {
            text: '美术类',
            value: 2014
          }, {
            text: '美术类',
            value: 2015
          }, {
            text: '美术类',
            value: 2016
          }, {
            text: '美术类',
            value: 2017
          }],
          value: ''
        },
        subject: {
          options: [{
            text: '理科',
            value: 1
          }, {
            text: '文科',
            value: 2
          }],
          value: ''
        },
        batch: {
          options: [{
            text: '本一批',
            value: 1
          }, {
            text: '本二批',
            value: 2
          }, {
            text: '高职专',
            value: 3
          }],
          value: ''
        },
        rule: {
          options: [{
            text: '专过文排',
            value: 1
          }, {
            text: '文过专排',
            value: 2
          }, {
            text: '文专综合',
            value: 3
          }],
          value: ''
        },
        myScore: {
          culture: 232,
          major: 323
        },
        stepInfo: {
          total: 3,
          currentStep: 1,
          data: [
            {
              step: 1,
              mainTitle: '你的高考类型',
              subTitle: '我们将根据你的选择为你推荐院校',
              btnText: '下一步',
              tips: '基本信息不可更改，请如实填写'
            },
            {
              step: 2,
              mainTitle: '你的基本信息',
              subTitle: '我们将根据你的选择为你推荐院校',
              btnText: '下一步',
              tips: '基本信息不可更改，请如实填写'
            },
            {
              step: 3,
              mainTitle: '你的考试信息',
              subTitle: '我们将根据你的选择为你推荐院校',
              btnText: '完成',
              tips: '*考试信息每天可以更改一次'
            }
          ]
        }
      }
    },
    computed: {
      currentStep () {
        return this.stepInfo.currentStep
      },
      nextBtnDisable () {
        // 验证表单信息
        let _self = this
        let _step = _self.currentStep
        let _isDisable = true
        switch (_step) {
          case 1 :
            if (_self.userCate != null) {
              _isDisable = false
            }
            break
          case 2 :
            if (_self.province.value &&
              _self.major.value &&
              _self.subject.value) {
              _isDisable = false
            }
            break
          case 3 :
            if (_self.batch.value &&
              _self.rule.value &&
              _self.myScore.culture &&
              _self.myScore.major) {
              _isDisable = false
            }
            break
        }
        return _isDisable
      }
    },
    methods: {
      prevStepEvent () { // 上一步
        if (this.currentStep > 1) {
          this.stepInfo.currentStep--
        }
      },
      nextStepEvent () { // 下一步
        let _self = this
        if (_self.currentStep < 3) {
          _self.stepInfo.currentStep++
        } else if (_self.currentStep === 3) {
          _self.$toast({
            message: '提交信息',
            position: 'bottom',
            duration: 1500
          })
          setTimeout(() => {
            _self.$store.commit('submitInitData', true)
          }, 2000)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/less/_mixins-wln.less';

  body {
    background-color: #fff;
  }

  .page_init {
    min-height: 100%;
    background-color: #fff;
    padding: 0 0.4rem;
    .init-header {
      background-color: #fff;
      color: #333;
    }
    /*步骤指示器*/
    .step-tips {
      position: relative;
      margin: 0 auto 0.6rem;
      height: 0.42rem;
      width: 2.46rem;
      .step-box {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
      }
      @stepSize: .44rem;
      .step-num {
        width: @stepSize;
        height: @stepSize;
        line-height: @stepSize + 0.04rem;
        border: 0.04rem solid #fff;
        border-radius: 50%;
        background-color: @bg-body;
        color: #93999f;
        text-align: center;
        &.active {
          background-color: @primary;
          color: #fff;
        }
      }
      .step-line-bar {
        padding-top: (@stepSize/2 - 0.01rem) + 0.04rem;
        height: 0;
        border-bottom: 0.02rem solid @bg-body;
      }
      .step-line {
        height: 0;
        border-bottom: 0.02rem solid @primary;
      }
    }

    /*选择分科类别*/
    .select-user-cate {
      display: flex;
      margin: 1.50rem auto;
      justify-content: space-between;
      @size: 1.3rem;
      .opt-item {
        position: relative;
        width: @size;
        padding: 0.24rem;
        text-align: center;
        padding-top: @size + 0.28rem + 0.24rem;
        background-position: 50% 0.24rem;
        background-repeat: no-repeat;
        background-size: @size;
        font-size: 0.28rem;
        i {
          position: absolute;
          right: 0.2rem;
          top: @size - 0.14rem;
          height: 0.4rem;
          width: 0.4rem;
          line-height: 1;
          padding: 0.02rem;
          font-size: 0.4rem;
          color: @success;
          background-color: #fff;
          border-radius: 50%;
          text-align: center;
        }
        &.normal {
          background-image: url('/static/imgs/user_cate_normal.png');
        }
        &.yishu {
          background-image: url('/static/imgs/user_cate_yishu.png');
        }
        &.tiyu {
          background-image: url('/static/imgs/user_cate_tiyu.png');
        }
      }
    }

    /*填写基本信息*/
    .user-info-form {
      padding: 0.60rem 0;
      font-size: 0.28rem;
      .label-name {
        display: block;
        color: #c3c6c9;
        padding: 0.2rem .32rem;
        font-size: .24rem;
      }
      .my-score-wrap {
        position: relative;
        border-radius: .44rem;
        border: 1px solid #eee;
        overflow: hidden;
        .my-score-input {
          box-sizing: border-box;
          display: block;
          width: 100%;
          border: none;
          padding: 0.28rem 0.24rem 0.24rem 0.9rem;
        }
      }
      .my-score-icon {
        position: absolute;
        left: 0.30rem;
        top: 50%;
        font-size: .40rem;
        color: #d9dde1;
        transform: translate(0, -50%);
      }
    }
    .next-handle{
      .next-btn {
        display: block;
        font-size:.32rem;
        border-radius: 1rem;
        padding:0.26rem;
      }
    }

    /*敬请期待*/
    .init-tips {
      margin: 0.3rem auto;
      font-size: 0.24rem;
      color: #bbb;
      text-align: center;
    }
  }
</style>
