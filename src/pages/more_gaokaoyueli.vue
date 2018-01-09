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
          <span class="nav-item" :class="{active: currentMonth === index}" @click="showCurrentInfo(index)"
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
      this.scrollAutoSetNav()
      this.$nextTick(() => {
        // 初始化月份滚动事件
        let _offsetT = $(this.$refs.navPos).offset().top
        let _headerHeight = $('.mint-header').outerHeight()
        $(document).on('scroll', () => {
          $(this.$refs.navPos).height(this.$refs.nav.offsetHeight)
          if (_offsetT - _headerHeight < $(document).scrollTop()) {
            $(this.$refs.nav).addClass('fixed').css({'top': _headerHeight})
          } else {
            $(this.$refs.nav).removeClass('fixed')
          }
        })
        /* globals Bscroll */
        // 计算导航容器宽度
        let _width = 0
        let $navContent = $(this.$refs.navContent)
        $navContent.find('span').each(function (item) {
          _width += $(this).outerWidth()
        })
        $navContent.width(_width)

        // 实例化 batter-scroll
        this.Bscroll = new Bscroll(this.$refs.nav, {
          scrollX: true,
          probeType: 1,
          scrollY: false,
          freeScroll: true,
          click: true
        })
      })
    },
    methods: {
      // 导航到当前月份
      showCurrentInfo (index, scroll) {
        this.currentMonth = index
        let _Rect = $(this.$refs.navContent).find('span').eq(index).get(0).getBoundingClientRect()
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

        if (scroll) return
        let _targetPos = $('[data-target-index=' + index + ']').offset().top
        $('body,html').animate({
          scrollTop: _targetPos - 44 - _Rect.height
        }, 300)
      },
      // 月份滚动跟随
      scrollAutoSetNav () {
        const _monthContent = [] // 记录每个div月份距离顶部位置
        $('[data-target-index]').each(function () {
          _monthContent.push($(this).offset().top)
        })

        let _dateTime = new Date() // 记录创建时间
        $(document).on('scroll', () => {
          // 用户点击导航触发滚动 不执行跟随当前月操作
          if ($('body,html').is(':animated')) {
            _dateTime = new Date()
            return false
          } else {
            // 滚动动画执行结束一刻，不执行次操作
            if (new Date() - _dateTime > 300) {
              let filterArray = []
              filterArray = _monthContent.filter((item) => {
                // 滚动获取当前显示的月份div
                return item > $(document).scrollTop()
              })
              let _filterItem = filterArray[0]  // 获取最近月份位置记录
              if (_filterItem) {
                let _index = _monthContent.indexOf(_filterItem) // 找到索引值 模拟用户点击对应导航
                let _thatNavItem = $(this.$refs.navContent).find('span').eq(_index)
                if (!_thatNavItem.hasClass('active')) {
                  this.showCurrentInfo(_index, true)
                }
              }
            }
          }
        })
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
          padding: 13px 10px 11px;
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
