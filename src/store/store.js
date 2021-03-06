import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import actions from './actions';
import mutations from './mutations';
import state from './state';
import getters from './getters';

export const store = new Vuex.Store({
  // strict: true,
  state,
  mutations,
  actions,
  getters
});
