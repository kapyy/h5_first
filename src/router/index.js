import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import long from '@/components/long'
import movebg from '@/components/movebg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/long',
      name: 'long',
      component: long
    },
    {
      path: '/movebg',
      name: 'movebg',
      component: movebg
    }
  ]
})
