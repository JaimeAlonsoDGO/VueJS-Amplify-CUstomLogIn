import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    signedIn: false
  },
  mutations: {
    userIsAuth(state, result){
      state.signedIn = result;
    }
  },
  actions: {
  },
  modules: {
  }
})
