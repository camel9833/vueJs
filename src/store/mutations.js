export const mutations = {

  discountPrice: function(state, payload) {
    state.fruits.forEach(fruit => {
      fruit.price *= (100 - payload.discountRate) / 100;
    });
  }

} 
