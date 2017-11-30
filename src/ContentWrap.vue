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
            :talkList="talkList"
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

export default {
  name: 'va-content-wrap',
  data () {
    return {
      talkList: [
        {
          name: '새',
          date: new Date(),
          profileImage: 'http://cfile9.uf.tistory.com/image/25270C4853F7057D09BFD3',
          message: `9-5 퇴근한다며?`,
          isMine: false
        },
        {
          name: '암',
          date: new Date(),
          profileImage: 'http://cfile9.uf.tistory.com/image/25270C4853F7057D09BFD3',
          message: `응, 임금삭감 각`,
          isMine: true
        },
        {
          name: '새',
          date: new Date(),
          profileImage: 'http://cfile9.uf.tistory.com/image/25270C4853F7057D09BFD3',
          message: `랩스로 가야..`,
          isMine: false
        }
      ]
    }
  },
  props: {
    naviTitle: {
      type: String,
      default: 'default'
    }
  },
  components: {
    'va-direct-chat': VADirectChat,
    'va-resizable-box': VAResizableBox
  },
  methods: {
    resizeEvent: function (event, ui) {
      $('.resizable-box :first').css('height', 'auto')
    }
  }
}
</script>
