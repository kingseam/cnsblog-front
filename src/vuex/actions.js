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

export const boardProduct = ({ commit }) => {
  return services.products.get('board')
  .then((response) => {
    console.log(response)
    if (response.data.code.code === '0000') {
      commit(types.BOARD_PRODUCT, response.data)
    } else {
      commit(types.ERROR_PRODUCT, response.data)
    }
  })
  .catch((error) => {
    console.error(error)
  })
}

export const registProduct = ({ commit }, user) => {
  if (user.user_name === '' || user.password === '') {
    alert('벨리데이션을 어디서 처리해야되나. 흐음.')
    return false
  }
  return services.products.put('users', user)
  .then((response) => {
    console.log(response)
    commit(types.REGIST_PRODUCT, response.data)
  })
  .catch((error) => {
    commit(types.ERROR_PRODUCT, error)
  })
}
