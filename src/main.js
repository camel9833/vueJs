// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import VueAxios from 'vue-axios'
import {
  store
} from './store/store'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.config.devtools = true

import common from './mixins/common'
Vue.mixin(common);

import VModal from 'vue-js-modal'
Vue.use(VModal, { dynamic: true })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
