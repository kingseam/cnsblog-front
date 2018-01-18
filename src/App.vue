<template>
  <div id="app">
    <div class="wrapper">
      <va-navibar></va-navibar>
      <va-slider :slideMenuItems="slideMenuItems"></va-slider>
      <va-content-wrap></va-content-wrap>
      <Modal></Modal>
    </div>
  </div>
</template>

<script>
import VANaviBar from 'NaviBar.vue'
import VASlider from 'Slider.vue'
import VAContentWrap from 'ContentWrap.vue'
import Modal from './components/Modal.vue'
import store from './vuex/store.js'
import slideMenuItems from './lib/slideMenuItems.js'
import { mapActions } from 'vuex'
import SockJS from 'sockjs-client'
import Stomp from 'webstomp-client'

export default {
  name: 'app',
  data () {
    return {
      slideMenuItems: slideMenuItems,
      received_messages: [],
      send_message: null,
      connected: false
    }
  },
  created () {
  },
  methods: {
    ...mapActions([
      'tokenCheckProduct'
    ]),
    send () {
      console.log('Send message:' + this.send_message)
      if (this.stompClient && this.stompClient.connected) {
        this.stompClient.send('/app-receive/from-client', this.send_message, {})
      }
    },
    connect () {
      this.socket = new SockJS('http://220.230.124.242/api/ws')
      this.stompClient = Stomp.over(this.socket)
      this.stompClient.connect({}, (frame) => {
        this.connected = true
        console.log(frame)
        this.stompClient.subscribe('/global-message/tick', (tick) => {
          console.log(tick)
          this.received_messages.push(tick)
        })
      }, (error) => {
        console.log(error)
        this.connected = false
      })
    },
    disconnect () {
      if (this.stompClient) {
        this.stompClient.disconnect()
      }
      this.connected = false
    },
    tickleConnection () {
      this.connected ? this.disconnect() : this.connect()
    }
  },
  watch: {
    '$route': function (from, to) {
      if (localStorage.getItem('token') !== '') {
        this.tokenCheckProduct()
      }
    }
  },
  components: {
    'va-navibar': VANaviBar,
    'va-slider': VASlider,
    'va-content-wrap': VAContentWrap,
    Modal
  },
  mounted () {
    this.connect()
  },
  store
}
</script>

<style>

</style>
