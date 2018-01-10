<template>
  <c-dialog
    :visible="isShow"
    :types="1"
    @cancel="hideThis">
    <div class="layer-score-content">
      <div class="score-form">
        <div class="select-cate">
          <mt-radio
            v-model="selectCate"
            :align="'right'"
            :options="options">
          </mt-radio>
        </div>
        <div class="input-score">
          <mt-field placeholder="请输入分数" value="589" type="number"></mt-field>
        </div>
      </div>
      <div class="handle-area">
        <mt-button type="primary" size="large" @click="submitThis">确定</mt-button>
        <div class="muted p10">今日还有 1 次修改机会哦~~</div>
        <a href="javascript:" class="close-btn" @click="hideThis"></a>
      </div>
    </div>
  </c-dialog>
</template>

<script>
  export default {
    name: 'dialog-set-score',
    props: ['isShow'],
    data () {
      return {
        selectCate: '值A',
        childIsShow: false,
        options: [
          {
            label: '本科一批',
            value: '值F'
          },
          {
            label: '本科二批',
            value: '值A'
          },
          {
            label: '高职专科',
            value: '值B'
          }
        ]
      }
    },
    methods: {
      submitThis () {
        this.hideThis()
        this.$Toast('提交')
      },
      hideThis () {
        this.$emit('update:isShow', false)
        this.$Toast('取消')
      }
    }
  }
</script>

<style lang='less'>
  .layer-shade {
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, .4);
    transition: all 0.3s;
  }

  .layer-score-content {
    /*margin: 0 auto;*/
    /*position: fixed;*/
    /*z-index: 101;*/
    /*top: 50%;*/
    /*left: 50%;*/
    /*margin-left: -140px;*/
    /*transform: translateY(-50%);*/
    width: 280px;
    height: auto;
    padding-top: 93px;
    background: #fff url(../assets/imgs/idx_dialog_bg.png) center 0 no-repeat;
    -webkit-background-size: contain;
    background-size: contain;
    border-radius: 10px;
    /*min-height:300px;*/
    .select-cate {
      margin-top: 20px;
      .mint-radiolist {
        .mint-radiolist-title {
          display: none;
        }
        display: flex;
        flex-flow: wrap;
        .mint-cell {
          width: 50%;
          min-height: 36px;
          background-image: none;
          .mint-cell-wrapper {
            min-height: 100%;
            background-image: none;
          }
          .mint-radio-label {
            margin-left: 0;
          }
          .mint-radio-core {
            margin-top: -2px;
          }
        }
      }
    }
    .input-score {
      margin: 5px 10px 0;
      .mint-cell {
        background: #f3f5f7 url(../assets/imgs/mark_icon.png) 15px center no-repeat;
        -webkit-background-size: 14px;
        background-size: 14px;
        padding-left: 30px;
        border-radius: 25px;
        overflow: hidden;
        .mint-field-core {
          background-color: #f3f5f7;
        }
      }
      .mint-cell-wrapper {
        background-image: none;
      }
    }
    .handle-area {
      margin: 25px 20px 0;
    }
    .mint-button {
      border-radius: 30px;
    }
    .muted {
      font-size: 12px;
      text-align: center;
      color: #aaa;
    }
    .close-btn {
      display: block;
      margin: 0 auto;
      width: 30px;
      height: 30px;
      background: url(../assets/imgs/idx_dialog_close.png) center center no-repeat;
      -webkit-background-size: 30px 30px;
      background-size: 30px 30px;
      position: absolute;
      bottom: -50px;
      left: 50%;
      margin-left: -15px;
    }
  }

  /*animation*/
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }

  .fade-enter {
    opacity: 0
  }

  .fade-leave-to {
    opacity: 0;
  }

  .slideUp-enter-active, .slideUp-leave-active {
    transition: transform .3s, opacity 0.3s
  }

  .slideUp-enter {
    transform: translateY(100%);
    opacity: 0;
  }

  .slideUp-enter-to {
    transform: translateY(-50%);
    opacity: 1;
  }

  .slideUp-leave {
    opacity: 1;
    transform: translateY(-50%);
  }

  .slideUp-leave-to {
    opacity: 0;
    transform: translateY(100%);
  }

</style>
