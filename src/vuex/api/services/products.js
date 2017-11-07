import axios from 'axios'

export default {
  getAll (request = {}) {
    return axios.get('/api', request)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  },
  get (uri, request = {}) {
    return axios.get(`http://220.230.124.242/api/${uri}`, request)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  },
  post (uri, request = {}) {
    return axios.post('http://220.230.124.242/api/', request)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  }
}
