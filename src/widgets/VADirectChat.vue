<template>

  <!-- DIRECT CHAT -->
  <div class="box direct-chat" :class="[boxColor, directChatColor]">
    <div class="box-header with-border">
      <h3 class="box-title">{{title}}</h3>

      <div class="box-tools pull-right">
        <span data-toggle="tooltip" title="New Messages" class="badge" :class="badgeColor">{{badgeCount}}</span>
        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
        </button>
        <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">
          <i class="fa fa-comments"></i></button>
        <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i>
        </button>
      </div>
    </div>
    <!-- /.box-header -->
    <div class="box-body">
      <!-- Conversations are loaded here -->
      <div class="direct-chat-messages" @scroll="handleScroll">

        <va-direct-chat-item
          v-for="item in talkList"
          :name="item.name"
          :date="item.date"
          :profileImage="item.profileImage"
          :message="item.message"
          :isMine="item.isMine"
        ></va-direct-chat-item>

      </div>
      <!--/.direct-chat-messages-->

      <!-- Contacts are loaded here -->
      <div class="direct-chat-contacts">
        <ul class="contacts-list">
          <va-direct-chat-contact v-for="contact in contacts"
            :name="contact.name"
            :profileImage="contact.profileImage"
            :latestDate="contact.latestDate"
            :latestMessage="contact.latestMessage"
          ></va-direct-chat-contact>
        </ul>
        <!-- /.contatcts-list -->
      </div>
      <!-- /.direct-chat-pane -->
    </div>
    <!-- /.box-body -->
    <div class="box-footer">
        <div class="input-group">
          <input type="text" name="message" :placeholder="placeholder" class="form-control" v-model="send_message" v-on:keyup.enter="send(send_message, currentUser.name)">
              <span class="input-group-btn">
                <button type="button" class="btn btn-warning btn-flat" @click="send(send_message, currentUser.name)">Send</button>
              </span>
        </div>
    </div>
    <!-- /.box-footer-->
  </div>
  <!--/.direct-chat -->
</div>

</template>

<script>
import VADirectChatItem from './VADirectChatItem.vue'
import VADirectChatContact from './VADirectChatContact.vue'
import { mapGetters, mapActions } from 'vuex'
import SockJS from 'sockjs-client'
import Stomp from 'webstomp-client'

export default {
  name: 'va-direct-chat',
  data () {
    return {
      name: '',
      received_messages: [],
      send_message: '',
      connected: false,
      receive: []
    }
  },
  props: {
    theme: {
      type: String,
      default: 'primary'
    },
    talkList: {
      type: Array
    },
    contacts: {
      type: Array
    },
    title: {
      type: String
    },
    badgeCount: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String,
      default: '채팅 가능합니다.'
    }
  },
  computed: {
    ...mapGetters([
      'unreadMessagesCount',
      'unreadNotificationsCount',
      'remainTasksCount',
      'currentUser'
    ]),
    badgeColor () {
      switch (this.theme) {
        case 'primary':
          return 'bg-light-blue'
        case 'success':
          return 'bg-green'
        case 'warning':
          return 'bg-yellow'
        case 'danger':
          return 'bg-red'
        default:
          return 'bg-light-blue'
      }
    },
    boxColor () {
      switch (this.theme) {
        case 'primary':
        case 'success':
        case 'warning':
        case 'danger':
          return `box-${this.theme}`
        default:
          return 'box-primary'
      }
    },
    directChatColor () {
      switch (this.theme) {
        case 'primary':
        case 'success':
        case 'warning':
        case 'danger':
          return `direct-chat-${this.theme}`
        default:
          return 'direct-chat-primary'
      }
    },
    ...mapGetters([
      'messageList'
    ])
  },
  watch: {
    talkList () {
      console.log('watch?')
      var container = this.$el.querySelector('.direct-chat-messages')
      container.scrollTop = container.scrollHeight
      console.log(container.scrollHeight)
    }
  },
  methods: {
    handleScroll (e) {
      var currentScrollPosition = e.srcElement.scrollTop
      if (currentScrollPosition > this.scrollPosition) {
        console.log('Scrolling down')
      }
      this.scrollPosition = currentScrollPosition
    },
    send (msg, nm) {
      console.log('Send message:' + this.send_message)
      if (this.stompClient && this.stompClient.connected) {
        this.stompClient.send('/app-receive/from-client', this.send_message, {})
        console.log('send msg : ' + msg)
        console.log('send msg : ' + nm)
        this.name = nm
        this.send_message = ''
      }
    },
    connect () {
      this.socket = new SockJS('http://220.230.124.242//api/ws')
      this.stompClient = Stomp.over(this.socket)
      this.stompClient.connect({}, (frame) => {
        this.connected = true
        this.stompClient.subscribe('/global-message/tick', (tick) => {
          console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
          console.log(this.name)
          tick.name = this.name
          this.messageProduct(tick)
          this.receive = tick
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
    },
    ...mapActions([
      'messageProduct'
    ])
  },
  mounted () {
    this.connect()
  },
  components: {
    'va-direct-chat-item': VADirectChatItem,
    'va-direct-chat-contact': VADirectChatContact
  }
}
</script>
