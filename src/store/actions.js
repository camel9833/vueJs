import axios from 'axios'


export const actions = {
  // example
  discountPrice: function(context, payload) {
    return context.commit('discountPrice', payload);
  },

  // 1. Search
  fetchPosts: function(context, payload) {
    return axios.get('http://jsonplaceholder.typicode.com/users')
      .then((response) => {
        context.commit('fetchPosts', response.data);
      })
  },

  // 2. Delete
  fetchDelete: function(context, payload) {
    context.commit('fetchDelete', payload);
    /*    return axios.delete('http://sample.bmaster.kro.kr/contacts')
          .then((response) => {
            context.commit('fetchDelete', payload);
          })
    */
  }

}
