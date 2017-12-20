<template>
  <div class="major-cell bti">
    <div class="mj-head bbi on-active"
         @click="hasChild ? (showBody=!showBody) : $router.push({name:'majorlibinfo',params:{mid:items.id}})"
         :style="{fontSize:hasChild ? '16px' : '15px',
         color:!hasChild ? '#93999f' : '#333333',
         paddingLeft: (deepIndex * 20) + 10 + 'px'}">
      <span class="mintui mintui-back f12 trans dib rotate-180"
            v-if="hasChild"
            :class="{'rotate-180':!showBody,'rotate-270':showBody}"></span>{{items.name}}
    </div>
    <div class="mj-body" ref="itemBody" style="display: none">
      <major-cell v-if="hasChild"
                  v-for="(item,index) in items.child"
                  :items="item"
                  :deepIndex="compDeepIndex"
                  :key="item.id"></major-cell>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import MajorCell from './major_cell'

  export default {
    name: 'major-cell',
    components: {
      MajorCell
    },
    props: {
      deepIndex: {
        type: Number
      },
      items: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        showBody: false
      }
    },
    computed: {
      hasChild () {
        return this.items.child && this.items.child.length > 0
      },
      compDeepIndex () {
        return this.deepIndex + 1
      }
    },
    watch: {
      showBody () {
        console.log(this.$refs)
        let $this = $(this.$refs.itemBody)
        $this.stop().slideToggle(300, function () {
          $this.height('auto')
        })
      }
    },
    methods: {}
  }
</script>

<style lang="less">
  @import '../assets/less/_mixins-wln/_wln-variables.less';

  .major-cell {
    margin-top: -1px;
    background-color: #fff;
    .mj-head {
      font-size:16px;
      padding: 15px 10px;
      .mintui {
        margin-right: 8px;
      }
    }
    .mj-body {
    }
  }

</style>
