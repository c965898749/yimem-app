import Vue from 'vue'
import Router from 'vue-router'
import Details from '@/components/context/Details'
import Blogpage from '@/components/context/Blogpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/blogpage'
    },
    {
      path: '/details/:id',
      name: 'details',
      component: Details
    },
    {
      path: '/blogpage',
      name: 'blogpage',
      component: Blogpage
    }
  ]
  // ,mode:'history'
})
