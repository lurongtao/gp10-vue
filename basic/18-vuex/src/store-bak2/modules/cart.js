let state = {
  item: []
}

let mutations = {
  setItem(state) {
    state.item = ['apple', 'orange']
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