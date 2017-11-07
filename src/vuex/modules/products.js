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
    console.log('stats :' + state)
    console.log('products : ' + products)
    state.board = products
  }
}

export default {
  state,
  mutations
}
