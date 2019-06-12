import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const moduleA = {
//namespaced: true,
state: {
  fruits: [
      { name: 'Apple', price: 30 },
      { name: 'Banana', price: 40 },
      { name: 'Mango', price: 50 },
      { name: 'Orange', price: 60 },
      { name: 'Tomato', price: 70 },
      { name: 'Pineapple', price: 80 }
  ]
},
getters: {
    upperCaseFruits: state => {
      return state.fruits.map(fruit => {
        return {
          name: `${fruit.name.toUpperCase()}` // ES6 - Template Strings
        }
      });
    }
  },
  mutations: {
    discountPrice(state, payload) {
      state.fruits.forEach(fruit => {
        fruit.price *= (100 - payload.discountRate) / 100;
      });
    }
  },
  actions: {
    discountPrice({commit}, payload) {
      commit('discountPrice', payload);
    }
  }
}

export const store = new Vuex.Store({
  modules:{
    s01: moduleA
  }
});
