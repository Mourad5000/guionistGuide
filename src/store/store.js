import Vue from 'vue';
import Vuex from 'vuex';

import moviesActions from './actions/moviesActions';
import moviesMutations from './mutations/moviesMutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies:'',
    moviesLoader:false,
    APIerror:APIerror
  },
  mutations: {
    moviesMutations
  },
  actions: {
    moviesActions
  },
  modules: {
  },
});
