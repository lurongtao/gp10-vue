let state = {
  all: []
}

let mutations = {
  getAllProducts(state) {
    state.all = ['apple', 'orange']
  }
}

let actions = {}

let getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}