import axios from 'axios'

export default {
  getAll (request = {}) {
    return axios.get('http://localhost/api', request)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  }
}
