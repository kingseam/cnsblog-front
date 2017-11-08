<template>
  <div class="register-box">
  <div class="register-logo">
    <a href="/index.html"><b>CNS</b>BLOG</a>
  </div>

  <div class="register-box-body">
    <p class="login-box-msg">Register a new membership</p>

    <form @submit.prevent="onSubmit">
      <div class="form-group has-feedback">
        <input v-model="user.user_name" type="email" class="form-control" placeholder="example@example.com" required pattern=".+@.+\..+" title="example@example.com">
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input v-model="user.password" type="password" class="form-control" @change="validRetypePassword" placeholder="Password" required minlength="8" v-bind="regexs.password">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input type="password" class="form-control" ref="retype_password" @keyup="validRetypePassword" placeholder="Confirm Password" required>
        <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
      </div>
      <div class="row">
        <div class="col-xs-8">
          <div class="checkbox">
            <label>
              <input type="checkbox"> I agree to the <a href="#">terms</a>
            </label>
          </div>
        </div>
        <!-- /.col -->
        <div class="col-xs-4">
          <input type="button" class="btn btn-primary btn-block btn-flat" value="Register" @click="registProduct(user)"></button>
        </div>
        <!-- /.col -->
      </div>
    </form>

    <div class="social-auth-links text-center">
      <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign up using
        Facebook</a>
      <a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i> Sign up using
        Google+</a>
    </div>

    <router-link :to="{ name: 'Login' }" class="text-center">I already have a membership</router-link>
  </div>
  <!-- /.form-box -->
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

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
    validRetypePassword: function () {
      var confirmPassword = this.$refs.retype_password
      if (this.user.password !== confirmPassword.value) {
        confirmPassword.setCustomValidity('암호가 일치하지 않습니다')
      } else {
        confirmPassword.setCustomValidity('')
      }
    },
    ...mapActions([
      'registProduct'
    ])
  },
  computed: {
    ...mapGetters([
      'regexs'
    ])
  }
}
</script>
