import {HTTP, HTTPS} from './http-common'
import qs from 'qs'

export default {
  getAll (request = {}) {
    return HTTP.get('/api', request)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  },
  get (uri, request = {}) {
    console.log(this)
    return HTTP.get(`${uri}`, request)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  },
  put (uri, request = {}) {
    return HTTP.put(`${uri}`, {param: request})
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  },
  authPost (uri, request = {}) {
    return HTTPS.post(`${uri}`, qs.stringify({
      'grant_type': 'password',
      'username': request.user_name,
      'password': request.password
    }))
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  },
  tokenCheck (uri, request = {}) {
    return HTTPS.post(`${uri}`, qs.stringify({
      'token': localStorage.getItem('token') === null || localStorage.getItem('token') === '' ? '' : localStorage.getItem('token')
    }))
         .then((response) => Promise.resolve(response))
         .catch((error) => Promise.reject(error))
  }
}
