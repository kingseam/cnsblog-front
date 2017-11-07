import * as types from '../mutation-types'

const state = {
  main: [],
  board: []
}

const mutations = {
  [types.FETCH_PRODUCT] (state, products) {
    state.main = products
  },
  [types.BOARD_PRODUCT] (state, products) {
    state.board = products.data.list
  }
}

export default {
  state,
  mutations
}
