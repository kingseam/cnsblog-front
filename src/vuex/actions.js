import * as types from './mutation-types'
import { services } from './api'

export const fetchProduct = ({ commit }) => {
  // API request
  return services.products.getAll()
  .then((response) => {
    console.log(response)
    if (response.data.code.code === '0000') {
      commit(types.FETCH_PRODUCT, response.data)
    } else {
      commit(types.ERROR_PRODUCT, response.data)
    }
  })
  .catch((error) => {
    console.error(error)
  })
}

export const boardProduct = ({ commit }, id) => {
  return services.products.get(`api/board/${id}`)
  .then((response) => {
    console.log(response)
    if (response.data.code.code === '0000') {
      commit(id === '' ? types.BOARD_PRODUCT : types.BOARD_DETAIL_PRODUCT, response.data)
    } else {
      commit(types.ERROR_PRODUCT, response.data)
    }
  })
  .catch((error) => {
    console.error(error)
  })
}

export const registProduct = ({ commit }, user) => {
  return services.products.put('api/users', user)
  .then((response) => {
    console.log(response)
    commit(types.REGIST_PRODUCT, response.data)
  })
  .catch((error) => {
    commit(types.ERROR_PRODUCT, error)
  })
}

export const loginProduct = ({ commit }, user) => {
  return services.products.post('auth/oauth/token', user)
  .then((response) => {
    console.log(response)
    commit(types.REGIST_PRODUCT, response.data)
  })
  .catch((error) => {
    commit(types.ERROR_PRODUCT, error)
  })
}
