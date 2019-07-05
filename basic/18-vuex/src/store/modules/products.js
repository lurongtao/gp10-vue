import loadData from '../../api/'

let state = {
  all: []
}

let mutations = {
  setAllProducts(state, data) {
    state.all = data
  }
}

let actions = {
  async getAllProducts({commit}) {
    let result = await loadData()
    commit('setAllProducts', result.products)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}