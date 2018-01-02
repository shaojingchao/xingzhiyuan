<template>
  <div class="page_volunteer_table_detail">
    <mt-header title="志愿详情">
      <c-router-back slot="left"></c-router-back>
      <span slot="right" @click="editTable">{{!editMode ? '管理' : '完成'}}</span>
    </mt-header>

    <div class="college-wrap pt5 pb5 bg-white">
      <div class="cl-cell">
        <div class="cl-cell-inner">
          <div class="cl-logo"><img :src="logo" :alt="''"></div>
          <div class="mt5 f16"><b>北京大学</b>
          </div>
          <div class="cl-label">
            <span class="text-muted">17年最低分数线：<span class="gray3">684</span></span>
            <span class="text-muted ml10">录取几率：<span class="gray3">57%</span></span>
          </div>

          <transition name="slide-right">
            <i class="iconfont xzy-icon-jiaohuan trans fr" v-if="!editMode" @click="$router.push({name:'volunteerfavorite',query:{page:'college', for: 'replace'}})"></i>
          </transition>

        </div>
      </div>
    </div>

    <div class="v-table-wrap mt10">
      <div class="v-table-item bg-white mb10" v-for="(item,i) in list" :key="i">
        <div class="item-body">

          <span class="order-num">{{i + 1}}</span>

          <transition-group tag="div" name="slide-right">
            <span class="iconfont del xzy-icon-trash trans" v-if="editMode" :key="2" @click="removeThisMajor(i)"></span>
            <span class="iconfont xzy-icon-jiaohuan trans" v-else :key="1" @click="$router.push({name:'volunteerfavorite',query:{page:'major', for: 'replace'}})"></span>
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

      <div class="v-table-item bg-white mb10" v-if="list.length < limitMajor"
           v-for="majorItem in (limitMajor - list.length)" :key="majorItem">
        <div class="item-body" style="padding-top:0;">
          <span class="order-num">{{majorItem + list.length}}</span>
        </div>
        <div class="ib-footer-empty" @click="$router.push({name:'volunteerfavorite',query:{page:'major'}})"
             :class="{'on-active': !editMode,disabled: editMode}">
          <div class="add-icon"><i class="iconfont xzy-icon-add"></i></div>
          <div>添加收藏专业</div>
        </div>
      </div>

      <div class="tc p15 bg-white" :class="{'on-active': !editMode,disabled: editMode}" @click="toggleAdjust">
        <span class="f16"><i class="iconfont xzy-icon-success_fill mr5 f20 v-2"
                             :class="[allowAdjust ? 'text-success' : 'grayc']"></i>服从调剂</span>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        logo: require('../assets/imgs/daxue/dx_logo.png'),
        editMode: false, // 管理模式
        allowAdjust: false, // 服从调剂
        list: [
          {
            cname: '清华大学',
            major: ['工科调试班类（自动...', '土木类', '建筑类（五年）', '工科实验班类（能源）']
          }
        ],
        limitMajor: 6
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
      editTable () {
        this.editMode = !this.editMode
      },
      removeThisMajor (index) {
        let _self = this
        this.$messagebox.confirm('确定要删除该专业？').then((type) => {
          if (type === 'confirm') {
            _self.list.splice(index, 1)
          }
        }).catch(() => {})
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import '../assets/less/_mixins-wln.less';

  .page_volunteer_table_detail {
    .college-wrap {
      .cl-cell {
        padding: 10px 10px;
        .cl-cell-inner {
          position: relative;
          @logo_size: 55px;
          padding-left: @logo_size + 10px;
          padding-right: 30px;
          overflow: hidden;
          .cl-logo {
            float: left;
            width: @logo_size + 10px;
            margin-left: -(@logo_size + 10px);
            img {
              max-width: @logo_size;
              display: block;
            }
          }
          .cl-label {
            margin-top: 13px;
          }

          .iconfont {
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -8px;
          }
        }
      }
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
          margin-right: 34px;
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
