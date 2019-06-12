import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const mutations = {

  discountPrice(state, payload) {
      state.s01.fruits.map(fruit => {
      fruit.price *= (100 - payload.discountRate) / 100;
    });
  }

/*
  discountPrice: function(state, payload) {
    state.fruits.forEach(fruit => {
      fruit.price *= (100 - payload.discountRate) / 100;
    });
  }
*/
}
