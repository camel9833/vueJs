import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import TodoPage from '@/components/TodoPage'
import AxiosTest from '@/components/AxiosTest'
import Props from '@/components/Props'
import PropsChild from '@/components/PropsChild'
import ClassBinding from '@/components/ClassBinding'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Main',
      component: Main
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
    },
    {
      path: '/props',
      name: 'Props',
      component: Props
    },
    {
      path: '/propsChild',
      name: 'PropsChild',
      component: PropsChild
    },
    {
      path: '/classBinding',
      name: 'ClassBinding',
      component: ClassBinding
    }
  ]
})
