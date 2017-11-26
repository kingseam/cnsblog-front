<template>
<div class="login-box">
  <div class="login-logo">
    <a href="/index.html"><b>Admin</b>LTE</a>
  </div>
  <!-- /.login-logo -->
  <div class="login-box-body">
    <p class="login-box-msg">Sign in to start your session</p>

    <form action="../../index2.html" method="post">
      <div class="form-group has-feedback" v-bind:class="{ 'form-group--error': $v.user.user_name.$error }">
        <input v-model.trim="user.user_name" type="email" class="form-control" placeholder="Email" @input="$v.user.user_name.$touch()">
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <span class="form-group_message" v-if="!$v.user.user_name.required">필수 항목입니다.</span>
      <span class="form-group_message" v-if="!$v.user.user_name.email">이메일 형식이 올바르지 않습니다.</span>
      <div class="form-group has-feedback" v-bind:class="{ 'form-group--error': $v.user.password.$error }">
        <input v-model.trim="user.password" type="password" class="form-control" placeholder="Password" @input="$v.user.password.$touch()">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <span class="form-group_message" v-if="!$v.user.password.required">필수 항목입니다.</span>
      <span class="form-group_message" v-if="!$v.user.password.minlength">{{ $v.user.password.$params.minLength.min }}자 이상을 입력하세요.</span>
      <div class="row">
        <div class="col-xs-8">
          <div class="checkbox">
            <label>
              <input type="checkbox"> Remember Me
            </label>
          </div>
        </div>
        <!-- /.col -->
        <div class="col-xs-4">
          <button type="button" class="btn btn-primary btn-block btn-flat" @click="$v.user.$invalid ? $v.user.$touch() : loginProduct(user)">Log In</button>
        </div>
        <!-- /.col -->
      </div>
    </form>

    <div class="social-auth-links text-center">
      <p>- OR -</p>
      <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign in using
        Facebook</a>
      <a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i> Sign in using
        Google+</a>
    </div>
    <!-- /.social-auth-links -->

    <a href="#">I forgot my password</a><br>
    <router-link :to="{ name: 'Register' }" class="text-center">Register a new membership</router-link>

  </div>
  <!-- /.login-box-body -->
</div>
<!-- /.login-box -->
</template>

<script>
import { mapActions } from 'vuex'
import { email, required, minLength } from 'vuelidate/lib/validators'

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
      'loginProduct',
      'logoutProduct'
    ])
  },
  validations: {
    user: {
      user_name: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      }
    }
  }
}
</script>
