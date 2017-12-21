<template>
  <div class="collegeinfo-plan">
    <c-section-title title="2017年招生计划"></c-section-title>
    <div class="pb20 bg-white">
      <div class="ci-plan-list bbi pb1">
        <div class="pc-item" v-for="(item,index) in majorList" :key="index">
          <mt-cell :title="item" @click.native="showPCItemDetail(index)">
            <small slot="icon" class="mintui mintui-back rotate-180 dib gray6"
                   :class="{isOpen:PCShowIndex[index]}"></small>
          </mt-cell>
          <div class="ov-h">
            <transition name="fade-in-up">
              <div class="pc-item-body pl20 bti" v-show="PCShowIndex[index]">
                <div class="plan-list-item p10 bbi">
                  <div class="i-name f14">[19]电子信息类</div>
                  <div class="text-muted pt15">
                    <div class="ov-h">
                      <span class="fl">人数：2</span>
                      <span class="fr">学费：5000</span>
                    </div>
                    <div class="pt10">
                      专业要求：重点分数线
                    </div>
                    <div class="pt10">
                      专业备注：只招英语语种考生
                    </div>
                  </div>
                </div>
                <div class="plan-list-item p10 bbi">
                  <div class="i-name f14">[19]电子信息类</div>
                  <div class="text-muted pt15">
                    <div class="ov-h">
                      <span class="fl">人数：2</span>
                      <span class="fr">学费：5000</span>
                    </div>
                    <div class="pt10">
                      专业要求：重点分数线
                    </div>
                    <div class="pt10">
                      专业备注：只招英语语种考生
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>

    <c-endline></c-endline>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        majorList: ['本科一批', '国家专项计划本科批', '提前批普通本科'],
        PCShowIndex: []
      }
    },
    computed: {},
    mounted () {
    },
    methods: {
      showPCItemDetail (i) {
        this.$set(this.PCShowIndex, i, !this.PCShowIndex[i])
      }
    }
  }
</script>

<style lang="less">
  .collegeinfo-plan {
    .ci-plan-list {
      background-color: #fff;
      .mintui {
        font-size: 14px;
        transition: transform 0.3s;
        &.isOpen {
          transform: rotateZ(270deg);
        }
      }
      .pc-item {
        &:last-child {
        }
      }
    }
    .pc-item-body {
      background-color: #fff;
      transition: transform 0.3s, opacity 0.3s;
      .plan-list-item {
        &:last-child {
          background-image: none;
        }
      }
    }
  }
</style>
