<template>
  <div class="register-box">
  <div class="register-logo">
    <a href="/index.html"><b>CNS</b>BLOG</a>
  </div>

  <div class="register-box-body">
    <p class="login-box-msg">Register a new membership</p>
    <form>
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
      <div class="form-group has-feedback" v-bind:class="{ 'form-group--error': $v.user.retype_password.$error }">
        <input v-model.trim="user.retype_password" type="password" class="form-control" placeholder="Confirm Password" @input="$v.user.retype_password.$touch()">
        <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
      </div>
      <span class="form-group_message" v-if="!$v.user.retype_password.required">필수 항목입니다.</span>
      <span class="form-group_message" v-if="!$v.user.retype_password.sameAsPassword">비밀번호는 동일해야합니다.</span>
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
          <button type="button" class="btn btn-primary btn-block btn-flat" value="Register" @click="$v.user.$invalid ? $v.user.$touch() : registProduct(user)">Log In</button>
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
import { mapActions } from 'vuex'
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  data: function () {
    return {
      user: {
        user_name: '',
        password: '',
        retype_password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'registProduct'
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
      },
      retype_password: {
        required,
        sameAsPassword: sameAs('password')
      }
    }
  }
}
</script>
