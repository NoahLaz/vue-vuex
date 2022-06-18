import { createStore } from 'vuex';
import authModule from './authModule';
import counterModule from './counterModule';

const store = createStore({
  modules: {
    counter: counterModule,
    auth: authModule,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
});

export default store;
