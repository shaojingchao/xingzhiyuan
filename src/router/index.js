import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index.vue'
import College from '@/components/college.vue'
import CollegeLib from '@/components/collegelib.vue'
import Evaluation from '@/components/evaluation.vue'
import JobLib from '@/components/joblib.vue'
import Major from '@/components/major.vue'
import MajorLib from '@/components/majorlib.vue'
import More from '@/components/more.vue'
import PassRate from '@/components/passrate.vue'
import Plan from '@/components/plan.vue'
import SameScore from '@/components/samescore.vue'
import ScoreLine from '@/components/scoreline.vue'
import Volunteer from '@/components/volunteer.vue'

Vue.use(Router)

export default new Router({
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
      path: '/',
      name: 'collegelib',
      component: CollegeLib
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
