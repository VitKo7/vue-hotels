import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { mutations } from './mutations';
import { actions } from './actions';

Vue.use(Vuex);
Vue.config.devtools = true;

export default new Vuex.Store({
  state: {
    favoriteHotels: [],
    navItem: 'city',
    isMapOpen: true,
  },
  mutations,
  actions,
  modules: {},
  plugins: [createPersistedState()],
});
