import axios from 'axios'


export const actions = {

  discountPrice: function(context, payload) {
    return context.commit('discountPrice', payload);
  },

  fetchPosts: function(context, payload) {
    return axios.get('http://sample.bmaster.kro.kr/contacts')
      .then((response) => {
        context.commit('fetchPosts', response.data);
      })
  }

}
