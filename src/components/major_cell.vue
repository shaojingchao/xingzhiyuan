<template>
  <div class="major-cell">
    <div class="mj-head on-active" @click="items.child && items.child.length && (showBody=!showBody)"
         :class="{'gray9':!items.child}">
      <span class="mintui mintui-back f12 mr10 trans dib rotate-180"
            v-if="items.child && items.child.length"
            :class="{'rotate-180':!showBody,'rotate-270':showBody}"></span>{{items.name}}
    </div>
    <div class="mj-body" ref="itemBody" style="display: none">
      <major-cell v-if="items.child && items.child.length"
                  v-for="(item,index) in items.child"
                  :items="item"
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
    border-top: 1px solid #ddd;
    margin-top: -1px;
    background-color: #fff;
    .mj-head {
      padding: 10px;
      border-bottom: 1px solid #ddd;
    }
    .mj-body {
      padding-left: 25px;
    }
  }

</style>
