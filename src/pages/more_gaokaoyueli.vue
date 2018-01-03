<template>
  <div class="page_more_gkyl">
    <mt-header title="">
      <c-router-back slot="left"></c-router-back>
    </mt-header>

    <c-page-head title="高考月历" subtitle="高考志愿百科"></c-page-head>

    <div>
      <div ref="navPos">
        <div ref="nav" class="nav-wrap">
          <div class="nav-content" ref="navContent">
          <span class="nav-item" :class="{active: currentMonth === index}" @click="showCurrentInfo(index, $event)"
                v-for="(item,index) in monthList">{{item.month}}</span>
          </div>
        </div>
      </div>
    </div>

    <section class="bg-white mt10" v-for="(item,index) in monthList" :data-target-index="index">
      <c-section-title :title="item.month"></c-section-title>
      <div class="pl10 pr10 pb15">
        {{item.content}}
      </div>
    </section>

    <div class="p30 mt10"></div>

    <c-footer-btn :text="'填报入口'" :toLink="{}"></c-footer-btn>
  </div>
</template>

<script>
  export default {
    name: 'more',
    data () {
      return {
        currentMonth: 0,
        Bscroll: null,
        monthList: [
          {
            month: '8月份',
            content: '本科批次录取基本在7月结束，专科(高职)批次将在8月录取。\n'
          },
          {
            month: '9月份',
            content: '高招录取工作将从本月开始。\n' +
            '7月还将公布专科录取控制分数线，7月底，考生要填报高职志愿。\n'
          },
          {
            month: '10月份',
            content: '本科批次录取基本在7月结束，专科(高职)批次将在8月录取。\n'
          },
          {
            month: '11月份',
            content: '本科批次录取基本在7月结束，专科(高职)批次将在8月录取。\n'
          },
          {
            month: '12月份',
            content: '本科批次录取基本在7月结束，专科(高职)批次将在8月录取。\n'
          },
          {
            month: '1月份',
            content: '本科批次录取基本在7月结束，专科(高职)批次将在8月录取。\n'
          },
          {
            month: '2月份',
            content: '本科批次录取基本在7月结束，专科(高职)批次将在8月录取。\n'
          },
          {
            month: '3月份',
            content: '本科批次录取基本在7月结束，专科(高职)批次将在8月录取。\n'
          },
          {
            month: '4月份',
            content: '本科批次录取基本在7月结束，专科(高职)批次将在8月录取。\n'
          },
          {
            month: '5月份',
            content: '本科批次录取基本在7月结束，专科(高职)批次将在8月录取。\n'
          },
          {
            month: '6月份',
            content: '本科批次录取基本在7月结束，专科(高职)批次将在8月录取。\n'
          },
          {
            month: '7月份',
            content: '本科批次录取基本在7月结束，专科(高职)批次将在8月录取。\n'
          }
        ]
      }
    },
    mounted () {
      this.$nextTick(() => {
        let _offsetT = $(this.$refs.navPos).offset().top
        $(document).on('scroll', () => {
          $(this.$refs.navPos).height(this.$refs.nav.offsetHeight)
          if (_offsetT < $(document).scrollTop()) {
            $(this.$refs.nav).addClass('fixed')
          } else {
            $(this.$refs.nav).removeClass('fixed')
          }
        })
        /* globals Bscroll */
        let _width = 0
        let $navContent = $(this.$refs.navContent)
        $navContent.find('span').each(function (item) {
          _width += $(this).outerWidth()
        })
        $navContent.width(_width)
        this.Bscroll = new Bscroll(this.$refs.nav, {
          scrollX: true,
          probeType: 1,
          scrollY: false,
          scrollbar: true,
          freeScroll: true,
          click: true
        })
      })
    },
    methods: {
      showCurrentInfo (index, e) {
        this.currentMonth = index
        let _Rect = $(e.currentTarget).get(0).getBoundingClientRect()
        setTimeout(() => {
          // 自动向右滚动
          if (_Rect.left < _Rect.width && this.Bscroll.x < 0) {
            this.Bscroll.scrollTo(this.Bscroll.x + (_Rect.width), 0, 300)
          }
          // 自动向左滚动
          if (this.Bscroll.wrapperWidth - _Rect.right < _Rect.width &&
            (this.Bscroll.scrollerWidth - (this.Bscroll.wrapperWidth + (-this.Bscroll.x)) > 0)) {
            this.Bscroll.scrollTo(this.Bscroll.x - _Rect.width, 0, 300)
          }
        }, 100)
        let _targetPos = $('[data-target-index=' + index + ']').offset().top
        console.log(_targetPos)
        $('body,html').animate({
          scrollTop: _targetPos - _Rect.height
        }, 300)
      }
    }
  }
</script>

<style lang="less">
  @import '../assets/less/_mixins-wln.less';

  .page_more_gkyl {
    .nav-wrap {
      background-color: #fff;
      overflow: scroll;
      &.fixed {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        box-shadow: 0 1px 3px rgba(0, 0, 0, .05);
      }
      .nav-content {
        white-space: nowrap;
        .nav-item {
          padding: 15px 10px;
          border-bottom: 2px solid transparent;
          display: inline-block;
          &.active {
            color: @primary;
            border-color: @primary;
          }
        }
      }
    }
  }
</style>
