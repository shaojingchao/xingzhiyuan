import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index.vue'
import CollegeFirst from '@/pages/collegefirst.vue'
import MajorFirst from '@/pages/majorfirst.vue'
import CollegeLib from '@/pages/collegelib.vue'
import CollegeInfo from '@/pages/collegeinfo.vue'
import CollegeSearch from '@/pages/collegesearch.vue'
import Evaluation from '@/pages/evaluation.vue'
import JobLib from '@/pages/joblib.vue'
import JobItem from '@/pages/jobitem.vue'
import JobInfo from '@/pages/jobinfo.vue'
import Major from '@/pages/major.vue'
import MajorInfo from '@/pages/majorinfo.vue'
import More from '@/pages/more.vue'
import PassRate from '@/pages/passrate.vue'
import PassRateInfo from '@/pages/passrateinfo.vue'
import Plan from '@/pages/plan.vue'
import SameScore from '@/pages/samescore.vue'
import ScoreLine from '@/pages/scoreline.vue'
import Volunteer from '@/pages/volunteer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/volunteer', // 填报志愿
      name: 'volunteer',
      component: Volunteer
    },
    {
      path: '/majorfirst', // 专业优先
      name: 'majorfirst',
      component: MajorFirst
    },
    {
      path: '/collegefirst', // 院校优先
      name: 'collegefirst',
      component: CollegeFirst
    },
    {
      path: '/passrate', // 录取率
      name: 'passrate',
      component: PassRate
    },
    {
      path: '/passrateinfo/:id', // 录取率
      name: 'passrateinfo',
      component: PassRateInfo
    },
    {
      path: '/college', // 大学库
      name: 'college',
      component: CollegeLib
    },
    {
      path: '/college/:id', // 大学库
      name: 'collegeinfo',
      component: CollegeInfo
    },
    {
      path: '/csearch', // 大学库搜索
      name: 'collegesearch',
      component: CollegeSearch
    },
    {
      path: '/major', // 专业库
      name: 'major',
      component: Major
    },
    {
      path: '/major/:id', // 专业对应学校
      name: 'majorinfo',
      component: MajorInfo
    },
    {
      path: '/job', // 职业库
      name: 'job',
      component: JobLib
    },
    {
      path: '/job/:id', // 职业库
      name: 'jobitem',
      component: JobItem
    },
    {
      path: '/jobinfo/:id', // 职业库
      name: 'jobinfo',
      component: JobInfo
    },
    {
      path: '/scoreline', // 分数线
      name: 'scoreline',
      component: ScoreLine
    },
    {
      path: '/plan', // 招生计划
      name: 'plan',
      component: Plan
    },
    {
      path: '/samescore', // 同分去向
      name: 'samescore',
      component: SameScore
    },
    {
      path: '/evaluation', // 综合测试
      name: 'evaluation',
      component: Evaluation
    },
    {
      path: '/more', // 更多
      name: 'more',
      component: More
    }
  ]
})
