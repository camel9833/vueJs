export const mutations = {

  // example
  discountPrice(state, payload) {
    state.s01.fruits.map(fruit => {
      fruit.price *= (100 - payload.discountRate) / 100;
    });
  },

  // 1. Search
  fetchPosts(state, payload) {
    let a = payload.response;
    state.s02.posts = payload.response;
  },

  // 2. Delete
  fetchDelete(state, payload) {
    let a = state.s02.posts;

    const itemToFind = a.find(function(item) {
      return item.id === payload.deleteId;
    });

    const idx = a.indexOf(itemToFind);
    if (idx > -1) {
      a.splice(idx, 1);
    }
    state.s02.posts = a;
  }

}
