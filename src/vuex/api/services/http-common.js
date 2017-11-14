import axios from 'axios'

export const HTTP = axios.create({
  baseURL: `http://220.230.124.242/`,
  headers: {
    Authorization: localStorage.getItem('token') === null ? '' : 'Bearer ' + localStorage.getItem('token')
  }
})
