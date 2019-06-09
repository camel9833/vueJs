import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodoPage from '@/components/TodoPage'
import AxiosTest from '@/components/AxiosTest'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'TodoPage',
      component: TodoPage
    },
    {
      path: '/todos',
      name: 'TodoPage',
      component: TodoPage
    },
    {
      path: '/axiosTest',
      name: 'AxiosTest',
      component: AxiosTest
    }
  ]
})
