import Vue from 'vue'
import Vuex from 'vuex'

import { INCREMENT_MUTATION, DECREMENT_MUTATION } from './mutation-types'
import { INCREMENT_ACTION, DECREMENT_ACTION } from './action-types'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },

  mutations: {
    [INCREMENT_MUTATION](state, payload) {
      state.count += payload
    },
    [DECREMENT_MUTATION](state, payload) {
      state.count -= payload
    }
  },

  actions: {
    [INCREMENT_ACTION]({ commit }) {
      // setTimeout(() => {
      //   commit('incrementM', 2)
      // }, 1000)
      commit(INCREMENT_MUTATION, 1)
    },
    [DECREMENT_ACTION](context, payload) {
      context.commit(DECREMENT_MUTATION, payload)
    }
  },

  getters: {
    count99(state) {
      let mul = 1
      for(let i = 1;  i <= state.count; i++) {
        mul *= i
      }
      return mul
    },

    count100(state, getters) {
      let sum = 0
      for(let i = 1;  i <= state.count; i++) {
        sum += i
      }
      return sum + getters.count99
    },

    sum: state => num => {
      return num + 5
    }
  }
})

export default store