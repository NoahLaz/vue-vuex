const authModule = {
  state: {
    isLoggedIn: false,
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    login({ commit, state }) {
      commit('login');
      console.log(state.isLoggedIn);
    },
    logout({ commit, state }) {
      commit('logout');
      console.log(state.isLoggedIn);
    },
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
  },
};

export default authModule;
