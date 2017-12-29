<template>
  <div class="page_volunteer_table_datail">
    <mt-header>
      <c-router-back slot="left"></c-router-back>
      <span slot="right" @click="editTable">{{!editMode ? '管理' : '完成'}}</span>
    </mt-header>


    <div class="table-analysis on-active" v-show="tableAnalysisDone" @click="showAnalysisResult"
         ref="tableAnalysisTips">
      志愿表 <span class="f16">良好</span> ，有4项可优化项
      <i class="iconfont xzy-icon-enter fr"></i>
    </div>

    <div class="v-table-wrap">
      <div class="v-table-item bg-white mb10" v-for="(item,i) in list" :key="i">
        <div class="item-body">

          <span class="order-num">{{i + 1}}</span>

          <transition-group tag="div" name="slide-right">
            <span class="iconfont del xzy-icon-trash trans" v-if="editMode" :key="2"></span>
            <span class="iconfont xzy-icon-jiaohuan trans" v-else :key="1"></span>
          </transition-group>

          <div class="ib-main" :class="{disabled: editMode}">
            <div class="ib-title">
              <b>工科试验班类（自动化与工业工程）</b>
            </div>
            <div class="ib-label">
              <span class="text-muted">录取人数：<span class="gray3">6</span></span>
              <span class="text-muted ml10">录取几率：<span class="gray3">57%</span></span>
            </div>
          </div>
        </div>
      </div>

      <div class="v-table-item bg-white mb10" v-if="list.length < limitCollege"
           v-for="collegeItem in (limitCollege - list.length)" :key="collegeItem">
        <div class="item-body" style="padding-top:0;">
          <span class="order-num">{{collegeItem + list.length}}</span>
        </div>
        <div class="ib-footer-empty" :class="{'on-active': !editMode,disabled: editMode}">
          <div class="add-icon"><i class="iconfont xzy-icon-add"></i></div>
          <div>添加收藏专业</div>
        </div>
      </div>

      <div class="tc p15 bg-white" :class="{'on-active': !editMode,disabled: editMode}" @click="toggleAdjust">
        <span class="f16"><i class="iconfont xzy-icon-success_fill mr5 f20 v-2" :class="[allowAdjust ? 'text-success' : 'grayc']"></i>服从调剂</span>
      </div>
    </div>

    <c-dialog
      :visible.sync="showEditTableName"
      :width="300"
      :height="300"
      :title="'修改标题'"
      name="changeTableName"
      @confirm="editTableNameConfirm">
      <div slot="content" class="form p10">
        <input class="pct100" type="text" placeholder="请输入名称" :value="tableName" ref="inputTableName" :autofocus="autofocus">
      </div>
    </c-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import CollegeItem from '../components/collegeitem.vue'

  export default {
    components: {
      CollegeItem
    },
    data () {
      return {
        editMode: false, // 管理模式
        tableAnalysisDone: false, // 志愿分析
        tableName: '模拟志愿表01',
        autofocus: true,
        showEditTableName: false,
        allowAdjust: false,
        list: [
          {
            cname: '清华大学',
            major: ['工科调试班类（自动...', '土木类', '建筑类（五年）', '工科实验班类（能源）']
          },
          {
            cname: '河南工业大学',
            major: []
          }
        ],
        limitCollege: 7,
        limitMajor: 6,
        filterCateIndex: 0
      }
    },
    computed: {
      isVip () {
        return this.$store.getters.isVip
      }
    },
    mounted () {
      this.$nextTick(() => {
      })
    },
    methods: {
      toggleAdjust () {
        if (this.editMode) return
        this.allowAdjust = !this.allowAdjust
      },
      editTableNameConfirm () {
        this.tableName = this.$refs.inputTableName.value
        this.$toast({
          message: '已修改',
          duration: 1000
        })
      },
      editTable () {
        this.editMode = !this.editMode
      },
      editTableName () {
        let _self = this
        _self.showEditTableName = true
        _self.autofocus = true
      },
      tableAnalysis () {
        let _vm = this
        _vm.$Indicator.open('正在分析，请稍候...')
        setTimeout(() => {
          _vm.$Indicator.close()
          $(_vm.$refs.tableAnalysisTips).slideDown(300)
          _vm.tableAnalysisDone = true
        }, 1000)
      },
      showAnalysisResult () {
        if (this.isVip) {
          this.$router.push({name: 'volunteertableanalysis'})
        } else {
          this.$router.push({name: 'vip'})
        }
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import '../assets/less/_mixins-wln.less';

  .page_volunteer_table_datail {
    background-color: #f3f5f7;
    .ci-head {
      background-color: @primary;
      color: #fff;
      padding: 20px 10px 30px;
      .plan-num {
        border: 1px solid rgba(255, 255, 255, .4);
        border-radius: 30px;
        padding: 3px 12px;
      }
    }

    /*志愿分析提示*/
    .table-analysis {
      background-color: @second;
      color: #fff;
      padding: 15px 10px;
      font-size: 13px;
      margin-bottom: 10px;
    }
    /*志愿列表*/
    .v-table-item {
      .item-body {
        position: relative;
        padding-left: 35px;
        padding-top: 18px;
        .order-num {
          @size: 16px;
          position: absolute;
          left: 10px;
          top: 18px;
          background-color: @primary;
          border-radius: @size;
          height: @size;
          width: @size;
          font-size: 12px;
          line-height: @size + 1px;
          color: #fff;
          text-align: center;
        }
        .ib-main {
          position: relative;
          padding-right: 24px;
          .ib-title {
            font-size: 15px;
          }
          .ib-label {
            margin-top: 12px;
            padding-bottom: 18px;
          }
        }
        .iconfont, .del {
          position: absolute;
          top: 50%;
          right: 10px;
          font-size: 16px;
          margin-top: -9px;
        }
        .del {
          color: @danger;
          font-size: 20px;
          margin-top: -11px;
        }
      }

      .ib-footer {
        display: flex;
        color: #888;
        font-size: 13px;
        padding: 10px 8px 10px 35px;
        flex-flow: wrap;
        span {
          width: 50%;
          box-sizing: border-box;
          padding: 5px 3px;
        }
      }
      .ib-footer-empty {
        padding: 16px 20px 18px;
        color: #999;
        text-align: center;
        .add-icon {
          line-height: 1;
          .iconfont {
            font-size: 30px;
          }
        }
      }
    }
  }

</style>
