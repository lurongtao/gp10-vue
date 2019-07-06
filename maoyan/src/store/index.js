import Vue from 'vue'
import Vuex from 'vuex'

import http from '../utils/http'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    position: 0,
    page: 0,
    data: {},
    city: '北京'
  },

  mutations: {
    setPosition(state, position) {
      state.position = position
    },

    setPage(state) {
      state.page++
    },

    resetPage(state) {
      state.page = 0
    },

    setFirstData(state, result) {
      state.data = result
    },

    setMoreData(state, coming) {
      // 根据接口返回的是 movieList字段 或 coming 字段 来数据的追加
      if (state.data.movieList) {
        state.data.movieList = [...state.data.movieList, ...coming]
      } else {
        state.data.coming = [...state.data.coming, ...coming]
      }
    },

    setCity(state, city) {
      state.city = city
    }
  },

  actions: {
    async loadFirstData({commit}, params) {
      let result = await http.get(params.firstReq)
      commit('setFirstData', result)
    },

    async loadMoreData({commit}, params) {
      let result = await http.get(params)
      commit('setMoreData', result.coming)
    }
  }
})

export default store