import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import vanishingbutton from '@/components/vanishingbutton'
import crystalball from '@/components/crystalball'
import topbar from '@/components/topbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/vanishingbutton',
      name: 'vanishingbutton',
      component: vanishingbutton
    },
    {
      path: '/crystalball',
      name: 'crystalball',
      component: crystalball
    },
    {
      path: '/',
      name: 'topbar',
      component: topbar
    }
  ]
})
