import {HTTP} from './http-common'

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
    var comm = {}
    comm.version = '1.1.1'
    comm.param = request
    console.log(comm)
    return HTTP.put(`${uri}`, request)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  }
}
