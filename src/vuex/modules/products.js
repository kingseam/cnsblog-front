import * as types from '../mutation-types'

const state = {
  main: [],
  board: [],
  user: []
}

const mutations = {
  [types.FETCH_PRODUCT] (state, products) {
    state.main = products
  },
  [types.BOARD_PRODUCT] (state, products) {
    state.board = products.data.result
  },
  [types.REGIST_PRODUCT] (state, products) {
    state.user = products.data.result
  }  
}

export default {
  state,
  mutations
}
