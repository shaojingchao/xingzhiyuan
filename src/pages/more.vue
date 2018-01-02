<template>
  <div class="page_more">
    <mt-header title="更多">
      <c-router-back slot="left"></c-router-back>
    </mt-header>

    <section class="bg-white pb15">
      <c-section-title title="信息查询服务"></c-section-title>
      <div class="top-grid">
        <router-link tag="div" class="grid-item item1 on-active" :to="{name:'morechengji'}">
          <div class="tg-icon">
            <img src="../assets/imgs/more/more_icon_query.png" alt="">
          </div>
          <div class="tg-label">成绩查询</div>
        </router-link>
        <router-link tag="div" class="grid-item item2 on-active" :to="''">
          <div class="tg-icon">
            <img src="../assets/imgs/more/more_icon_clock.png" alt="">
          </div>
          <div class="tg-label">填报时间</div>
        </router-link>
        <router-link tag="div" class="grid-item item3 on-active" :to="''">
          <div class="tg-icon">
            <img src="../assets/imgs/more/more_icon_mail.png" alt="">
          </div>
          <div class="tg-label">录取查询</div>
        </router-link>
      </div>
    </section>

    <section class="bg-white mt10 pb20">
      <c-section-title title="高考志愿百科"></c-section-title>
      <div class="weui-grids">
        <router-link tag="div" class="weui-grid" v-for="(item,index) in gaokaowiki" :to="item.href" :key="index"
                     style="width:25%">
          <div class="weui-grid_icon">
            <img :src="item.icon" :alt="item.label">
          </div>
          <div class="weui-grid_label">{{item.label}}</div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'more',
    data () {
      return {
        gaokaowiki: [
          {
            label: '高考人数',
            href: {name: 'moregaokanrenshu'},
            icon: require('../assets/imgs/more/icon_bk_1.png')
          },
          {
            label: '加分政策',
            href: '',
            icon: require('../assets/imgs/more/icon_bk_2.png')
          },
          {
            label: '特殊招生',
            href: '',
            icon: require('../assets/imgs/more/icon_bk_3.png')
          },
          {
            label: '助学贷款',
            href: '',
            icon: require('../assets/imgs/more/icon_bk_4.png')
          },
          {
            label: '高招防骗',
            href: '',
            icon: require('../assets/imgs/more/icon_bk_5.png')
          },
          {
            label: '军检要求',
            href: '',
            icon: require('../assets/imgs/more/icon_bk_6.png')
          },
          {
            label: '体检要就',
            href: '',
            icon: require('../assets/imgs/more/icon_bk_7.png')
          },
          {
            label: '志愿百科',
            href: '',
            icon: require('../assets/imgs/more/icon_bk_8.png')
          },
          {
            label: '艺术院校',
            href: '',
            icon: require('../assets/imgs/more/icon_bk_9.png')
          },
          {
            label: '重点学科',
            href: '',
            icon: require('../assets/imgs/more/icon_bk_10.png')
          },
          {
            label: '高考月历',
            href: '',
            icon: require('../assets/imgs/more/icon_bk_11.png')
          },
          {
            label: '填报流程',
            href: '',
            icon: require('../assets/imgs/more/icon_bk_12.png')
          },
          {
            label: '志愿模式',
            href: '',
            icon: require('../assets/imgs/more/icon_bk_13.png')
          },
          {
            label: '高招办',
            href: '',
            icon: require('../assets/imgs/more/icon_bk_14.png')
          },
          {
            label: '手动填报',
            href: '',
            icon: require('../assets/imgs/more/icon_bk_15.png')
          },
          {
            label: '系统说明',
            href: '',
            icon: require('../assets/imgs/more/icon_bk_16.png')
          }]
      }
    }
  }
</script>

<style lang="less">
  @import '../assets/less/_mixins-wln.less';

  .page_more {
    .top-grid {
      display: flex;
      flex-flow: nowrap;
      padding: 0 5px;
      .grid-item {
        padding: 12px 0;
        width: 33.33%;
        border-radius: 5px;
        margin: 0 5px;
        .tg-icon {
          height: 32px;
          text-align: center;
          img {
            display: inline-block;
            max-width: 100%;
            max-height: 100%;
            margin-left: -12px;
          }
        }
        .tg-label {
          margin-top: 3px;
          color: #fff;
          text-align: center;
          font-weight: 700;
          text-shadow: 0 0 1px rgba(255, 255, 255, .6);
        }
        &.item1 {
          #gradient > .vertical(#94ec84, #6ed474)
        }
        &.item2 {
          #gradient > .vertical(#f4c358, #f7b562)
        }
        &.item3 {
          #gradient > .vertical(#86daff, #5fc9fe)
        }
        &:active {
          opacity: 0.7;
        }
      }
    }

    .weui-grids {
      position: relative;
      overflow: hidden;
    }

    .weui-grids:before {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 1px;
      border-top: 1px solid #D9D9D9;
      color: #D9D9D9;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }

    .weui-grids:after {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      width: 1px;
      bottom: 0;
      border-left: 1px solid #D9D9D9;
      color: #D9D9D9;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transform: scaleX(0.5);
      transform: scaleX(0.5);
    }

    .weui-grid {
      position: relative;
      float: left;
      padding: 20px 10px;
      width: 33.33333333%;
      box-sizing: border-box;
    }

    .weui-grid:before {
      content: " ";
      position: absolute;
      right: 0;
      top: 0;
      width: 1px;
      bottom: 0;
      border-right: 1px solid #D9D9D9;
      color: #D9D9D9;
      -webkit-transform-origin: 100% 0;
      transform-origin: 100% 0;
      -webkit-transform: scaleX(0.5);
      transform: scaleX(0.5);
    }

    .weui-grid:after {
      content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 1px;
      border-bottom: 1px solid #D9D9D9;
      color: #D9D9D9;
      -webkit-transform-origin: 0 100%;
      transform-origin: 0 100%;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }

    .weui-grid:active {
      background-color: #ECECEC;
    }

    .weui-grid_icon {
      width: 24px;
      height: 24px;
      margin: 0 auto;
    }

    .weui-grid_icon img {
      display: block;
      width: 100%;
      height: 100%;
    }

    .weui-grid_icon + .weui-grid_label {
      margin-top: 12px;
    }

    .weui-grid_label {
      display: block;
      text-align: center;
      color: #000000;
      font-size: 14px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

</style>
