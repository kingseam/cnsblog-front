import axios from 'axios'

export const HTTP = axios.create({
  baseURL: `http://220.230.124.242/api/`,
  headers: {
    Authorization: localStorage.getItem('token') === null || localStorage.getItem('token') === '' ? '' : 'Bearer ' + localStorage.getItem('token'),
    'Content-Type': 'application/json; charset=utf-8'
  }
})

export const HTTPS = axios.create({
  baseURL: `http://220.230.124.242/auth/`,
  headers: {
    Authorization: 'Basic Y2xpZW50MjpjbGllbnQycHdk',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
