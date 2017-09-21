import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import crystalball from '@/components/crystalball'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/crystalball',
      name: 'crystalBall',
      component: crystalball
    }
  ]
})
