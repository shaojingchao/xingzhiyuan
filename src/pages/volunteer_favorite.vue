<template>
  <div class="page_volunteer_fav" :style="{'background-color':(list.length === 0 ? '#fff' : '')}">
    <mt-header :title="pageName[page]">
      <c-router-back slot="left"></c-router-back>
    </mt-header>

    <div class="fav-list" v-if="list.length">
      <v-touch @swipeleft="onSwipeLeft" class="fav-list-item bg-white bti" v-for="item in list" :key="item">
        <div class="clearfix">
          <span class="fl title"><b>工科试验班类（自动化与工业工程）</b></span>
          <span class="fr text-primary">57%</span>
        </div>
        <div class="pt10 clearfix">
          <span class="fl"><span class="text-muted">录取人数：</span>12</span>
          <span class="fr grayb">录取几率</span>
        </div>
      </v-touch>
    </div>

    <div class="tc bg-white pt30 mt30" v-else>
      <c-empty :text="pageEmpty[page]"></c-empty>
      <div class="pt20">
        <a href="javascript:" class="btn btn-second btn-lg round btn-lg-w">去收藏</a>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'volunteer-fav',
    data () {
      return {
        pageName: {
          college: '收藏院校',
          major: '收藏专业（河南工业大学）'
        },
        pageEmpty: {
          college: '暂时没有收藏的院校~',
          major: '暂时没有收藏的专业~'
        },
        list: [],
        icon: [
          require('../assets/imgs/icon/icon_zhiyuan_chongci.png'),
          require('../assets/imgs/icon/icon_zhiyuan_wentuo.png'),
          require('../assets/imgs/icon/icon_zhiyuan_baodi.png')
        ]
      }
    },
    computed: {
      page () {
        return this.$route.query && this.$route.query.page ? this.$route.query.page : 'college' // college | major
      }
    },
    created () {
    },
    methods: {
      onSwipeLeft (e) {
        console.log(e)
      }
    }
  }
</script>

<style lang="less">
  .page_volunteer_fav {
    min-height: 100%;
    .fav-list {
      .fav-list-item {
        padding:15px 10px;
        .title{
          font-size:15px;
        }
      }
    }
  }

</style>
