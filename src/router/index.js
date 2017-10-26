import Vue from 'vue'
import Router from 'vue-router'
import vanishingbutton from '@/components/vanishingbutton'
import crystalball from '@/components/crystalball'
import topbar from '@/components/topbar'
import hangrysami from '@/components/hangrysami'
import dogGenerator from '@/components/dogGenerator'
import halloweenPlaylist from '@/components/halloweenPlaylist'
import addblog from '@/components/addblog'

Vue.use(Router)

export default new Router({
  routes: [
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
    },
    {
      path: '/hangrysami',
      name: 'hangrysami',
      component: hangrysami
    },
    {
      path: '/dogGenerator',
      name: 'dogGenerator',
      component: dogGenerator,
    },
    {
      path: '/halloweenPlaylist',
      name: 'halloweenPlaylist',
      component: halloweenPlaylist,
    },
    {
      path: '/add-blog',
      name: 'addblog',
      component: addblog,
    },
 ]
})
