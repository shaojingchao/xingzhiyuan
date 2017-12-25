<template>
  <div class="page_majorlib">
    <mt-header title="专业库">
      <c-router-back slot="left"></c-router-back>
    </mt-header>
    <div class="tab-wrap">
      <div class="tab-nav bbi">
        <div class="nav-item" :class="{active:tabActive === 'tab-1'}" @click="tabActive = 'tab-1'"><span class="trans">本科</span>
        </div>
        <div class="nav-item" :class="{active:tabActive === 'tab-2'}" @click="tabActive = 'tab-2'"><span class="trans">专科</span>
        </div>
      </div>
      <div class="major-list">
        <transition-group name="fade">
          <major-cell class="trans"
                      v-if="tabActive === 'tab-1'"
                      v-for="(item,index) in majorList1"
                      :items="item"
                      :toLink="{name:'majorlibinfo'}"
                      :toLinkParam="'id'"
                      :deepIndex="0"
                      :key="item.id"></major-cell>
          <major-cell class="trans"
                      v-if="tabActive === 'tab-2'"
                      v-for="(item,index) in majorList2"
                      :items="item"
                      :toLink="{name:'majorlibinfo'}"
                      :toLinkParam="'id'"
                      :deepIndex="0"
                      :key="item.id"></major-cell>
        </transition-group>
      </div>
    </div>

  </div>
</template>

<script>
  import MajorCell from '@/components/major_cell'

  export default {
    name: 'major-lib',
    components: {
      MajorCell
    },
    data () {
      return {
        tabActive: 'tab-1',
        PCShowIndex: [],
        majorList: [],
        majorList1: [
          {
            name: '哲学1',
            id: '01',
            child: [
              {
                name: '哲学类',
                id: '0101',
                child: [
                  {
                    name: '哲学',
                    id: '010101'
                  },
                  {
                    name: '逻辑学',
                    id: '010102'
                  },
                  {
                    name: '宗教学',
                    id: '010103'
                  },
                  {
                    name: '伦理学',
                    id: '010104'
                  }
                ]
              },
              {
                name: '人文科学试验班类',
                id: '01SY00',
                child: [
                  {
                    name: '人文科学试验班',
                    id: '01SY01'
                  }
                ]
              }
            ]
          },
          {
            name: '经济学',
            id: '02',
            child: [
              {
                name: '哲学类',
                id: '0101',
                child: [
                  {
                    name: '经济学',
                    id: '020101'
                  },
                  {
                    name: '经济统计学',
                    id: '020102'
                  },
                  {
                    name: '国民经济管理',
                    id: '020103'
                  },
                  {
                    name: '资源与环境经济学',
                    id: '020104'
                  }
                ]
              },
              {
                name: '财政学类',
                id: '01SY00',
                child: [
                  {
                    name: '人文科学试验班',
                    id: '01SY01'
                  }
                ]
              },
              {
                name: '金融学类',
                id: '01SY00',
                child: [
                  {
                    name: '人文科学试验班',
                    id: '01SY01'
                  }
                ]
              },
              {
                name: '经济与贸易类',
                id: '01SY00',
                child: [
                  {
                    name: '人文科学试验班',
                    id: '01SY01'
                  }
                ]
              }
            ]
          },
          {
            name: '哲学1',
            id: '03',
            child: [
              {
                name: '哲学类',
                id: '0101',
                child: [
                  {
                    name: '哲学',
                    id: '010101'
                  },
                  {
                    name: '逻辑学',
                    id: '010102'
                  },
                  {
                    name: '宗教学',
                    id: '010103'
                  },
                  {
                    name: '伦理学',
                    id: '010104'
                  }
                ]
              },
              {
                name: '人文科学试验班类',
                id: '01SY00',
                child: [
                  {
                    name: '人文科学试验班',
                    id: '01SY01'
                  }
                ]
              }
            ]
          },
          {
            name: '经济学',
            id: '04',
            child: [
              {
                name: '哲学类',
                id: '0101',
                child: [
                  {
                    name: '经济学',
                    id: '020101'
                  },
                  {
                    name: '经济统计学',
                    id: '020102'
                  },
                  {
                    name: '国民经济管理',
                    id: '020103'
                  },
                  {
                    name: '资源与环境经济学',
                    id: '020104'
                  }
                ]
              },
              {
                name: '财政学类',
                id: '01SY00',
                child: [
                  {
                    name: '人文科学试验班',
                    id: '01SY01'
                  }
                ]
              },
              {
                name: '金融学类',
                id: '01SY00',
                child: [
                  {
                    name: '人文科学试验班',
                    id: '01SY01'
                  }
                ]
              },
              {
                name: '经济与贸易类',
                id: '01SY00',
                child: [
                  {
                    name: '人文科学试验班',
                    id: '01SY01'
                  }
                ]
              }
            ]
          }
        ],
        majorList2: [
          {
            name: '经济学',
            id: '04',
            child: [
              {
                name: '哲学类',
                id: '0101',
                child: [
                  {
                    name: '经济学',
                    id: '020101'
                  },
                  {
                    name: '经济统计学',
                    id: '020102'
                  },
                  {
                    name: '国民经济管理',
                    id: '020103'
                  },
                  {
                    name: '资源与环境经济学',
                    id: '020104'
                  }
                ]
              },
              {
                name: '财政学类',
                id: '01SY00',
                child: [
                  {
                    name: '人文科学试验班',
                    id: '01SY01'
                  }
                ]
              },
              {
                name: '金融学类',
                id: '01SY00',
                child: [
                  {
                    name: '人文科学试验班',
                    id: '01SY01'
                  }
                ]
              },
              {
                name: '经济与贸易类',
                id: '01SY00',
                child: [
                  {
                    name: '人文科学试验班',
                    id: '01SY01'
                  }
                ]
              }
            ]
          },
          {
            name: '哲学1',
            id: '01',
            child: [
              {
                name: '哲学类',
                id: '0101',
                child: [
                  {
                    name: '哲学',
                    id: '010101'
                  },
                  {
                    name: '逻辑学',
                    id: '010102'
                  },
                  {
                    name: '宗教学',
                    id: '010103'
                  },
                  {
                    name: '伦理学',
                    id: '010104'
                  }
                ]
              },
              {
                name: '人文科学试验班类',
                id: '01SY00',
                child: [
                  {
                    name: '人文科学试验班',
                    id: '01SY01'
                  }
                ]
              }
            ]
          },
          {
            name: '哲学1',
            id: '03',
            child: [
              {
                name: '哲学类',
                id: '0101',
                child: [
                  {
                    name: '哲学',
                    id: '010101'
                  },
                  {
                    name: '逻辑学',
                    id: '010102'
                  },
                  {
                    name: '宗教学',
                    id: '010103'
                  },
                  {
                    name: '伦理学',
                    id: '010104'
                  }
                ]
              },
              {
                name: '人文科学试验班类',
                id: '01SY00',
                child: [
                  {
                    name: '人文科学试验班',
                    id: '01SY01'
                  }
                ]
              }
            ]
          },
          {
            name: '经济学',
            id: '02',
            child: [
              {
                name: '哲学类',
                id: '0101',
                child: [
                  {
                    name: '经济学',
                    id: '020101'
                  },
                  {
                    name: '经济统计学',
                    id: '020102'
                  },
                  {
                    name: '国民经济管理',
                    id: '020103'
                  },
                  {
                    name: '资源与环境经济学',
                    id: '020104'
                  }
                ]
              },
              {
                name: '财政学类',
                id: '01SY00',
                child: [
                  {
                    name: '人文科学试验班',
                    id: '01SY01'
                  }
                ]
              },
              {
                name: '金融学类',
                id: '01SY00',
                child: [
                  {
                    name: '人文科学试验班',
                    id: '01SY01'
                  }
                ]
              },
              {
                name: '经济与贸易类',
                id: '01SY00',
                child: [
                  {
                    name: '人文科学试验班',
                    id: '01SY01'
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    watch: {
      tabActive (n, o) {
        this.majorList = []
        if (n === 'tab-1') {
          this.$set(this.$data, 'majorList', this.majorList1)
        } else {
          this.$set(this.$data, 'majorList', this.majorList2)
        }
      }
    },
    methods: {
      showPCItemDetail (i) {
        this.$set(this.PCShowIndex, i, !this.PCShowIndex[i])
      }
    }

  }
</script>

<style lang="less">
  .page_majorlib {
    .major-list {

    }
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
