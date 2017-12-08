import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index.vue'
import College from '@/pages/college.vue'
import CollegeLib from '@/pages/collegelib.vue'
import CollegeSearch from '@/pages/collegesearch.vue'
import Evaluation from '@/pages/evaluation.vue'
import JobLib from '@/pages/joblib.vue'
import Major from '@/pages/major.vue'
import MajorInfo from '@/pages/majorinfo.vue'
import MajorLib from '@/pages/majorlib.vue'
import More from '@/pages/more.vue'
import PassRate from '@/pages/passrate.vue'
import Plan from '@/pages/plan.vue'
import SameScore from '@/pages/samescore.vue'
import ScoreLine from '@/pages/scoreline.vue'
import Volunteer from '@/pages/volunteer.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/college',
      name: 'college',
      component: College
    },
    {
      path: '/collegelib',
      name: 'collegelib',
      component: CollegeLib
    },
    {
      path: '/csearch',
      name: 'collegesearch',
      component: CollegeSearch
    },
    {
      path: '/evaluation',
      name: 'evaluation',
      component: Evaluation
    },
    {
      path: '/joblib',
      name: 'joblib',
      component: JobLib
    },
    {
      path: '/major',
      name: 'major',
      component: Major
    },
    {
      path: '/major/:id',
      name: 'majorinfo',
      component: MajorInfo
    },
    {
      path: '/majorlib',
      name: 'majorlib',
      component: MajorLib
    },
    {
      path: '/more',
      name: 'more',
      component: More
    },
    {
      path: '/passrate',
      name: 'passrate',
      component: PassRate
    },
    {
      path: '/plan',
      name: 'plan',
      component: Plan
    },
    {
      path: '/samescore',
      name: 'samescore',
      component: SameScore
    },
    {
      path: '/scoreline',
      name: 'scoreline',
      component: ScoreLine
    },
    {
      path: '/volunteer',
      name: 'volunteer',
      component: Volunteer
    }
  ]
})
