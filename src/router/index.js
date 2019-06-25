import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import TodoPage from '@/components/TodoPage'
import Sample from '@/components/Sample'
import Props from '@/components/Props'
import PropsChild from '@/components/PropsChild'
import ClassBinding from '@/components/ClassBinding'
import Paging from '@/components/Paging'
import Vuex01 from '@/components/Vuex01'
import MixinTest from '@/components/MixinTest'
import SampleExtend from '@/components/SampleExtend'
import Modal from '@/components/Modal'
import Modal2 from '@/components/Modal2'


Vue.use(Router)
    /*
    const requireAuth = () => (to,from,next) => {
      next('/classBinding');
    };
    */
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
            path: '/sample',
            name: 'Sample',
            component: Sample,
            //      beforEnter: requireAuth
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
        },
        {
            path: '/paging',
            name: 'Paging',
            component: Paging
        },
        {
            path: '/vuex01',
            name: 'Vuex01',
            component: Vuex01
        },
        {
            path: '/mixintest',
            name: 'MixinTest',
            component: MixinTest
        },
        {
            path: '/sampleextend',
            name: 'SampleExtend',
            component: SampleExtend
        },
        {
            path: '/modal',
            name: 'Modal',
            component: Modal
        },
        {
            path: '/modal2',
            name: 'Modal2',
            component: Modal2
        },

    ]
})