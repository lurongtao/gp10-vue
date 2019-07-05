import Vue from 'vue'
import Vuex from 'vuex'

import products from './modules/products'
import cart from './modules/cart'

Vue.use(Vuex)

let state = {
  count: 0
}

let getters = {

}

let mutations = {
  increment(state, payload) {
    state.count += payload
  },
  getAllProducts() {
    console.log(0)
  }
}

let actions = {
  increment({commit, state}, payload) {
    commit('increment', payload)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    products,
    cart
  }
})