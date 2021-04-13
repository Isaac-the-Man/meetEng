import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authToken: null
  },
  mutations: {
    setToken(state, token) {
      state.authToken = token;
    },
    clearToken(state) {
      state.authToken = null;
    }
  },
  actions: {
  },
  modules: {
  }
})
