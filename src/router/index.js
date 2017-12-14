import Vue from 'vue'
import Router from 'vue-router'

// components
const Index = () => import('@/pages/index.vue')
const CollegeFirst = () => import('@/pages/collegefirst.vue')
const MajorFirst = () => import('@/pages/majorfirst.vue')
const CollegeLib = () => import('@/pages/collegelib.vue')
const CollegeInfo = () => import('@/pages/collegeinfo.vue')
const CollegeSearch = () => import('@/pages/collegesearch.vue')
const Evaluation = () => import('@/pages/evaluation.vue')
const JobLib = () => import('@/pages/joblib.vue')
const JobItem = () => import('@/pages/jobitem.vue')
const JobInfo = () => import('@/pages/jobinfo.vue')
const Major = () => import('@/pages/major.vue')
const MajorInfo = () => import('@/pages/majorinfo.vue')
const More = () => import('@/pages/more.vue')
const PassRate = () => import('@/pages/passrate.vue')
const PassRateInfo = () => import('@/pages/passrateinfo.vue')
const Plan = () => import('@/pages/plan.vue')
const SameScore = () => import('@/pages/samescore.vue')
const ScoreLine = () => import('@/pages/scoreline.vue')
const Volunteer = () => import('@/pages/volunteer.vue')
const Vip = () => import('@/pages/vip.vue')
const Payment = () => import('@/pages/payment.vue')

Vue.use(Router)

const router = new Router({
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
    },
    {
      path: '/vip', // VIP
      name: 'vip',
      component: Vip
    },
    {
      path: '(购买VIP)',
      name: 'payment',
      component: Payment
    }
  ]
})

router.beforeEach((to, from, next) => {
  // console.log('dsdaassasad', to, from, next)
  next()
})

export default router
