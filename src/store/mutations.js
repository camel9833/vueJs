
export const mutations = {

  discountPrice(state, payload) {
      state.s01.fruits.map(fruit => {
      fruit.price *= (100 - payload.discountRate) / 100;
    });
  },


  fetchPosts(state, payload) {
      state.s02.posts = payload;
  }

/*
  discountPrice: function(state, payload) {
    state.fruits.forEach(fruit => {
      fruit.price *= (100 - payload.discountRate) / 100;
    });
  }
*/
}
