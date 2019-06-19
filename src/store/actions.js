import axios from 'axios'


export const actions = {
  // example
  discountPrice: function(context, payload) {
    return context.commit('discountPrice', payload);
  },

  // 1. Search
  fetchPosts: function(context, payload) {
    var uri = 'https://jsonplaceholder.typicode.com/posts';

    if (payload.searchTxt > 0) {
      uri = uri + "?userId=" + payload.searchTxt;
    }

    return axios.get(uri)
      .then((response) => {
        context.commit('fetchPosts', {
          response: response.data,
          search: payload.searchTxt
        });
      })
  },

  // 2. Delete
  sampleDelete: function(context, payload) {
    context.commit('sampleDelete', payload);
    /*    return axios.delete('http://sample.bmaster.kro.kr/contacts')
          .then((response) => {
            context.commit('fetchDelete', payload);
          })
    */
  }

}
