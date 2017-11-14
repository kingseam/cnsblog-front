<template>
<div class="login-box">
  <div class="login-box-body">  
        <div class="col-xs-4">  
          <button type="button" class="btn btn-primary btn-block btn-flat" @click="logoutProduct()">Log out</button>
        </div>
      </div>  
  </div>
</div>
<!-- /.login-box -->
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: function () {
    return {
      user: {
        user_name: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'logoutProduct'
    ])
  }
}
</script>
