<template>
  <div class="page_volunteer_table">
    <mt-header>
      <c-router-back slot="left"></c-router-back>
      <span slot="right" @click="editTable">{{!editMode ? '管理' : '完成'}}</span>
    </mt-header>

    <div class="ci-head">
      <div class="f20 tc" @click="editTableName">{{tableName}} <i class="iconfont xzy-icon-edit"></i></div>
      <div class="tc mt10"><span class="dib plan-num">河南 理科 本科第一批</span></div>
    </div>

    <div class="table-analysis on-active" v-show="tableAnalysisDone" @click="showAnalysisResult"
         ref="tableAnalysisTips">
      志愿表 <span class="f16">良好</span> ，有4项可优化项
      <i class="iconfont xzy-icon-enter fr"></i>
    </div>

    <div class="v-table-wrap">
      <div class="v-table-item bg-white mb10" v-for="(item,i) in list" :key="i">
        <div class="item-body" @click="$router.push({name:'volunteerdetail',params:{id:i}})"
             :class="{'on-active': !editMode,disabled: editMode}">

          <span slot="icon" class="order-num">{{orderNum[i]}}</span>

          <transition-group tag="div" name="slide-right">
            <span class="iconfont del xzy-icon-trash trans" v-if="editMode" :key="2"></span>
            <span class="iconfont xzy-icon-enter trans" v-else :key="1"></span>
          </transition-group>

          <div class="ib-main bbi">
            <div class="ib-title">
              <b>{{item['cname']}}</b>
              <small class="grayb ml10">服从调剂</small>
            </div>
            <div class="ib-label">
              <span class="text-muted">17年最低分数线：<span class="gray3">684</span></span>
              <span class="text-muted ml10">录取几率：<span class="gray3">57%</span></span>
            </div>
          </div>

        </div>
        <div class="ib-footer" :class="{disabled: editMode}" v-if="item.major.length">
          <span class="ib-f-item" v-for="(majorItem,index) in item.major" :key="index">{{index+1}}：{{majorItem}}</span>
          <span class="ib-f-item" v-if="item.major.length < limitMajor"
                v-for="(majorItem,index) in (limitMajor - item.major.length)" :key="index">{{majorItem + item.major.length}}：</span>
        </div>
        <div class="ib-footer-empty" @click="$router.push({name:'volunteerfavorite',query:{page:'major'}})"
             :class="{'on-active': !editMode,disabled: editMode}" v-else>
          <div class="add-icon"><i class="iconfont xzy-icon-add"></i></div>
          <div>添加收藏专业</div>
        </div>
      </div>

      <div class="v-table-item bg-white mb10" v-if="list.length < limitCollege"
           v-for="collegeItem in (limitCollege - list.length)" :key="collegeItem">
        <div class="item-body" style="padding-top:0;">
          <span slot="icon" class="order-num">{{orderNum[collegeItem - 1 + list.length]}}</span>
        </div>
        <div class="ib-footer-empty" @click="$router.push({name:'volunteerfavorite',query:{page:'college'}})"
             :class="{'on-active': !editMode,disabled: editMode}">
          <div class="add-icon"><i class="iconfont xzy-icon-add"></i></div>
          <div>添加收藏院校</div>
        </div>
      </div>
    </div>
    <div class="p30"></div>

    <c-footer-btn :text="'保存并分析合理性'" :class="{disabled: editMode}" @click.native="tableAnalysis" is-vip></c-footer-btn>
    <c-dialog
      :visible.sync="showEditTableName"
      :width="300"
      :height="300"
      :title="'修改标题'"
      name="changeTableName"
      @confirm="editTableNameConfirm">
      <div slot="content" class="form p10">
        <input class="pct100" type="text" placeholder="请输入名称" :value="tableName" ref="inputTableName"
               :autofocus="autofocus">
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
        orderNum: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
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
          $(document).scrollTop(0)
          _vm.tableAnalysisDone = true
          $(_vm.$refs.tableAnalysisTips).slideDown(300)
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

  .page_volunteer_table {
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
        padding-top: 15px;
        .order-num {
          @size: 16px;
          position: absolute;
          left: 10px;
          top: 15px;
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
            margin-top: 10px;
            padding-bottom: 12px;
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
        padding: 20px 20px 25px;
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
