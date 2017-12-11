<template>
  <div class="page_college_lib">
    <mt-header title="大学库">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link :to="{name:'collegesearch'}" slot="right">
        <mt-button icon="search"></mt-button>
      </router-link>
    </mt-header>

    <div class="filter">
      <span @click="filterEvent(0)">省份</span>
      <span @click="filterEvent(1)">分类</span>
      <span @click="filterEvent(2)">层次</span>
    </div>
    <mt-popup class="filter-popup"
              v-model="popupVisible"
              position="bottom">
      <mt-picker :slots="slots0" :valueKey="'cname'" @change="onValuesChange" v-if="filterCateIndex === 0"></mt-picker>
      <mt-picker :slots="slots1" :valueKey="'cname'" @change="onValuesChange" v-if="filterCateIndex === 1"></mt-picker>
      <mt-picker :slots="slots2" :valueKey="'cname'" @change="onValuesChange" v-if="filterCateIndex === 2"></mt-picker>
    </mt-popup>
    <div  ref="wrapper" :style="{overflow:'scroll', height: wrapperHeight + 'px' }">
      <mt-loadmore :bottom-method="loadBottom" :topDistance="50" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
        <div class="college-list">
          <college-item :item="item" v-for="(item,i) in list" :key="i" ></college-item>
        </div>
      </mt-loadmore>
    </div>

  </div>
</template>

<script>
import CollegeItem from '../components/collegeitem.vue'
export default {
  components: {
    CollegeItem
  },
  data () {
    return {
      list: [],
      allLoaded: false,
      bottomStatus: '',
      wrapperHeight: '',
      popupVisible: false,
      filterCate: [
        {
          values: [
            {
              cname: '降序',
              id: 0
            },
            {
              cname: '升序',
              id: 1
            }
          ],
          className: 'f-prob',
          textAlign: 'center'
        },
        {
          values: [
            {
              cname: '河南',
              id: 0
            },
            {
              cname: '河北',
              id: 1
            }
          ],
          className: 'f-province',
          textAlign: 'center'
        },
        {
          values: [
            {
              cname: '工科',
              id: 0
            },
            {
              cname: '文科',
              id: 1
            }
          ],
          className: 'f-category',
          textAlign: 'center'
        }
      ],
      filterCateIndex: 0,
      slots0: [
        {
          values: [
            {
              cname: '降序',
              id: 0
            },
            {
              cname: '升序',
              id: 1
            }
          ],
          showToolbar: true,
          className: 'f-prob',
          textAlign: 'center'
        }
      ],
      slots1: [
        {
          values: [
            {
              cname: '河南',
              id: 0
            },
            {
              cname: '河北',
              id: 1
            },
            {
              cname: '湖南',
              id: 1
            },
            {
              cname: '湖北',
              id: 1
            },
            {
              cname: '山西',
              id: 1
            }
          ],
          className: 'f-province',
          textAlign: 'center'
        }
      ],
      slots2: [
        {
          values: [
            {
              cname: '工科',
              id: 0
            },
            {
              cname: '文科',
              id: 1
            }
          ],
          className: 'f-category',
          textAlign: 'center'
        }
      ]
    }
  },
  created () {
    for (let i = 1; i <= 10; i++) {
      this.list.push(i)
    }
  },
  mounted: function () {
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top
  },
  methods: {
    filterEvent (cate) {
      this.filterCateIndex = cate
      this.popupVisible = !this.popupVisible
    },
    onValuesChange (picker, values) {
      console.log(picker, values)
      // if (values[0] > values[1]) {
      //   picker.setSlotValue(1, values[0]);
      // }
    },
    loadBottom () {
      setTimeout(() => {
        let lastValue = this.list[this.list.length - 1]
        if (lastValue < 100) {
          for (let i = 1; i <= 20; i++) {
            this.list.push(lastValue + i)
          }
        } else {
          this.allLoaded = true
        }
        this.$refs.loadmore.onBottomLoaded()
      }, 1000)
    },
    handleBottomChange (status) {
      console.log(status)
      this.bottomStatus = status
    }
  }
}
</script>

<style lang="less">
  .page_college_lib{
    background-color: #fff;
    .filter{
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-content: center;
      span{
        width:33.3%;
        text-align: center;
        padding:15px 0;
        &:after{
          content:'';
          vertical-align:2px;
          margin-left: 4px;
          display: inline-block;
          border-color:#93999f #fff  #fff #fff;
          border-width:7px 5px 0 5px;
          border-style:solid solid solid solid ;
        }
      }
    }
    .filter-popup{
      width:100%
    }

    .mint-loadmore-bottom{
      text-align: center;
      span{
        transition: transform 0.3s;
        display: inline-block;
      }
      .is-rotate{
        transform: rotateZ(180deg);
      }
    }
    .mint-spinner {
      display: inline-block;
      vertical-align: middle;
    }
  }

</style>
