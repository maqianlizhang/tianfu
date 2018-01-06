import Vue from 'vue'
import Router from 'vue-router'
import Vertical from '@/pages/vertical/index'
import Horizontal from '@/pages/horizontal/index'
import Industry from '@/pages/industryAnalysis/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vertical',
      component: Vertical,
      alias: '/vertical'
    },
    {
      path: '/horizontal',
      name: 'horizontal',
      component: Horizontal
    },
    {
      path: '/industry',
      name: 'industry',
      component: Industry
    }
  ]
})
