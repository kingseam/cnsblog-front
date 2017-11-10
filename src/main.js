// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './lib/css'
import './lib/script'
import './lib/global'

import Vue from 'vue'
import App from './App'
import router from './router'
import EventBus from './lib/eventBus.js'
import axios from 'axios'
import auth from './auth'

Vue.prototype.$bus = EventBus
Vue.prototype.$http = axios

Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');

//Check the user's auth status when the app starts
auth.checkAuth()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
