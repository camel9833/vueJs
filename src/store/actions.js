import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const actions = {

  discountPrice: function(context, payload) {
    return context.commit('discountPrice', payload);
  }

}
