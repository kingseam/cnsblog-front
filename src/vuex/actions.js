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
  console.log(localStorage.getItem('token'))
  return services.products.get(`board/${id}`)
  .then((response) => {
    console.log(response)
    if (response.data.code.code === '0000') {
      commit(id === '' ? types.BOARD_PRODUCT : types.BOARD_DETAIL_PRODUCT, response.data)
    } else {
      commit(types.ERROR_PRODUCT, response.data)
    }
  })
  .catch((error) => {
    commit(types.ERROR_PRODUCT, error)
  })
}

export const registProduct = ({ commit }, user) => {
  return services.products.put('users', user)
  .then((response) => {
    commit(types.REGIST_PRODUCT, response.data)
  })
  .catch((error) => {
    commit(types.ERROR_PRODUCT, error)
  })
}

export const loginProduct = ({ commit }, user) => {
  return services.products.authPost('oauth/token', user)
  .then((response) => {
    commit(types.LOGIN_PRODUCT, response)
  })
  .catch((error) => {
    commit(types.ERROR_PRODUCT, error)
  })
}

export const logoutProduct = ({ commit }) => {
  commit(types.LOGOUT_PRODUCT)
}

export const tokenCheckProduct = ({ commit }, user) => {
  return services.products.tokenCheck('oauth/check_token')
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    commit(types.CHECK_TOKEN_PRODUCT, error)
  })
}

export const messageProduct = ({ commit }, msg) => {
  commit(types.MESSAGE_PRODUCT, msg)
}
