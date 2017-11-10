import axios from 'axios'

export default {
  getAll (request = {}) {
    return axios.get('/api', request)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  },
  get (uri, request = {}) {
    console.log(this)
    return axios.get(`http://220.230.124.242/${uri}`, {
      headers: {
        'Authorization': ''
      }
    })
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  },
  put (uri, request = {}) {
    var comm = {}
    comm.version = '1.1.1'
    comm.param = request
    console.log(comm)
    return axios.put(`http://220.230.124.242/${uri}`, request, {
      headers: {
        'Authorization': 'Bearer TOKEN'
      }
    })
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  }
}
