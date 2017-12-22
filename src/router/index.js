import Vue from 'vue'
import Router from 'vue-router'

// 首页
const Index = () => import('@/pages/index.vue')

// 填报志愿
const Volunteer = () => import('@/pages/volunteer.vue')

// 院校优先
const CollegeFirst = () => import('@/pages/collegefirst.vue')

// 专业优先
const MajorFirst = () => import('@/pages/majorfirst.vue')
const MajorFirstInfo = () => import('@/pages/majorfirstinfo.vue')

// 录取率
const PassRate = () => import('@/pages/passrate.vue')
const PassRateInfo = () => import('@/pages/passrateinfo.vue')

// 大学库
const CollegeLib = () => import('@/pages/collegelib.vue')
const CollegeInfo = () => import('@/pages/collegeinfo.vue')
const CollegeScoreline = () => import('@/pages/collegeinfo_scoreline.vue')
const CollegeMajor = () => import('@/pages/collegeinfo_major.vue')
const CollegeMajorScoreline = () => import('@/pages/collegeinfo_major_scoreline.vue')
const CollegeMajorJiuye = () => import('@/pages/collegeinfo_major_jiuye.vue')
const CollegeIntro = () => import('@/pages/collegeinfo_intro.vue')
const CollegePhoto = () => import('@/pages/collegeinfo_photo.vue')
const CollegePlan = () => import('@/pages/collegeinfo_plan.vue')
const CollegeJiuye = () => import('@/pages/collegeinfo_jiuye.vue')
const CollegeSearch = () => import('@/pages/collegesearch.vue')

// 专业库
const MajorLib = () => import('@/pages/majorlib.vue')
const MajorLibInfo = () => import('@/pages/majorlib_info.vue')
const MajorLibInfoIntro = () => import('@/pages/majorlib_info_intro.vue')
const MajorLibInfoCollege = () => import('@/pages/majorlib_info_college.vue')
const MajorLibInfoJiuye = () => import('@/pages/majorlib_info_jiuye.vue')

// 职业库
const JobLib = () => import('@/pages/joblib.vue')
const JobList = () => import('@/pages/joblist.vue')
const JobInfo = () => import('@/pages/jobinfo.vue')

// 分数线
const ScoreLine = () => import('@/pages/scoreline.vue')
const ScoreLineInfo = () => import('@/pages/scoreline_info.vue')

// 招生计划
const Plan = () => import('@/pages/plan.vue')
const PlanInfo = () => import('@/pages/plan_info.vue')

// 同位分
const SameScore = () => import('@/pages/samescore.vue')
const SameScoreMore = () => import('@/pages/samescore_more.vue')

// 综合测评
const MBTI = () => import('@/pages/mbti.vue')
const MBTIStart = () => import('@/pages/mbti_start.vue')
const MBTIReport = () => import('@/pages/mbti_report.vue')
// VIP
const Vip = () => import('@/pages/vip.vue')
const Payment = () => import('@/pages/payment.vue')

// 更多
const More = () => import('@/pages/more.vue')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
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
      path: '/majorfirst/:id', // 专业优先
      name: 'majorfirstinfo',
      component: MajorFirstInfo
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
      path: '/college/:cid',
      name: 'collegeinfo',
      redirect: {name: 'collegescoreline'},
      component: CollegeInfo,
      children: [
        {
          path: 'scoreline', // 分数线
          name: 'collegescoreline',
          component: CollegeScoreline
        },
        {
          path: 'intro', // 介绍
          name: 'collegeintro',
          component: CollegeIntro
        },
        {
          path: 'plan', // 招生
          name: 'collegeplan',
          component: CollegePlan
        },
        {
          path: 'jiuye', // 就业
          name: 'collegejiuye',
          component: CollegeJiuye
        }
      ]
    },
    {
      path: '/college/:cid/photo', // 学校相册
      name: 'collegephoto',
      component: CollegePhoto
    },
    {
      path: '/college/:cid/major/:mid', // 学校专业
      name: 'collegemajor',
      component: CollegeMajor,
      children: [
        {
          path: 'scoreline',
          name: 'collegemajorscoreline',
          component: CollegeMajorScoreline
        },
        {
          path: 'jiuye',
          name: 'collegemajorjiuye',
          component: CollegeMajorJiuye
        }
      ]
    },
    {
      path: '/csearch', // 大学库搜索
      name: 'collegesearch',
      component: CollegeSearch
    },
    {
      path: '/major', // 专业库
      name: 'major',
      component: MajorLib
    },
    {
      path: '/major/:mid', // 专业对应学校
      name: 'majorlibinfo',
      component: MajorLibInfo,
      redirect: {name: 'majorlibinfointro'},
      children: [
        {
          path: 'intro', // 简介
          name: 'majorlibinfointro',
          component: MajorLibInfoIntro
        },
        {
          path: 'college', // 开设院校
          name: 'majorlibinfocollege',
          component: MajorLibInfoCollege
        },
        {
          path: 'jiuye', // 就业
          name: 'majorlibinfojiuye',
          component: MajorLibInfoJiuye
        }
      ]
    },
    {
      path: '/job', // 职业库
      name: 'job',
      component: JobLib
    },
    {
      path: '/job/:id', // 职业库列表
      name: 'joblist',
      component: JobList
    },
    {
      path: '/jobinfo/:id', // 职业库介绍
      name: 'jobinfo',
      component: JobInfo
    },
    {
      path: '/scoreline', // 分数线
      name: 'scoreline',
      component: ScoreLine
    },
    {
      path: '/scoreline/cid', // 分数线详情
      name: 'scorelineinfo',
      component: ScoreLineInfo
    },
    {
      path: '/plan', // 招生计划
      name: 'plan',
      component: Plan
    },
    {
      path: '/plan/cid', // 招生计划
      name: 'planinfo',
      component: PlanInfo
    },
    {
      path: '/samescore', // 同分去向
      name: 'samescore',
      component: SameScore
    },
    {
      path: '/samescore/more', // 同分去向-更多
      name: 'samescoremore',
      component: SameScoreMore
    },
    {
      path: '/mbti', // 职业性格测试
      name: 'mbti',
      component: MBTI
    },
    {
      path: '/mbti/start/:part', // 职业性格测试-作答
      name: 'mbtistart',
      component: MBTIStart
    },
    {
      path: '/mbti/report', // 职业性格测试-报告
      name: 'mbtireport',
      component: MBTIReport
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
      path: '/payment', // 购买VIP
      name: 'payment',
      component: Payment
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
