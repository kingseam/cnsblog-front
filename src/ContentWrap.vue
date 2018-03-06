<template>
  <!-- Content Wrapper. Contains page content -->
  <div id="content-wrap" class="content-wrapper">    
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Dashboard
        <small>Version 2.0</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">{{naviTitle}}</li>
      </ol>
    </section>

    <section class="content">   
      <va-resizable-box
        class="fix-right col-md-3 col-sm6 col-xs-12"
        handles="w"
        :minWidth="250"
        :resize="resizeEvent"
        >
        <va-direct-chat
            :talkList="messageList"
            title="my chat"
            :badgeCount="0"
            placeholder="웹소켓 개발중..."
          ></va-direct-chat>
      </va-resizable-box>
      <transition name="page" mode="out-in">
        <router-view></router-view>
      </transition>
    </section>
    <!-- /.content -->  
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
import VADirectChat from './widgets/VADirectChat.vue'
import VAResizableBox from './widgets/VAResizableBox.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'va-content-wrap',
  data () {
    return {
      talkList: [
        {
          name: 'angmagun',
          date: new Date(),
          profileImage: 'http://cfile9.uf.tistory.com/image/25270C4853F7057D09BFD3',
          message: `test`,
          isMine: false
        }
      ]
    }
  },
  props: {
    naviTitle: {
      type: String,
      default: 'default'
    },
    talkList: {
      type: Array
    }
  },
  computed: {
    ...mapGetters([
      'messageList'
    ])
  },
  components: {
    'va-direct-chat': VADirectChat,
    'va-resizable-box': VAResizableBox
  },
  methods: {
    resizeEvent: function (event, ui) {
      $('.resizable-box :first').css('height', 'auto')
    },
    ...mapActions([
      'messageProduct'
    ])
  }
}
</script>
