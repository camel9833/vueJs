import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from './mutations';
import { actions }   from './actions';

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
}
}

export const store = new Vuex.Store({
  state: {},
  mutations: mutations,
  actions: actions,
  modules: {
    s01: moduleA
  }
});
