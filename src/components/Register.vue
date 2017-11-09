<template>
  <div class="register-box">
  <div class="register-logo">
    <a href="/index.html"><b>CNS</b>BLOG</a>
  </div>

  <div class="register-box-body">
    <p class="login-box-msg">Register a new membership</p>
    <form @submit.prevent="onSubmit">
      <div class="form-group has-feedback" v-bind:class="{ 'form-group--error': $v.user.user_name.$error }">
        <input v-model.trim="user.user_name" type="email" class="form-control" placeholder="example@example.com" @input="$v.user.user_name.$touch()">
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
          <input type="button" class="btn btn-primary btn-block btn-flat" value="Register" @click="$v.user.$invalid ? $v.user.$touch() : registProduct(user)"></button>
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

<style scoped>
.form-group--error input, .form-group--error input:focus, .form-group--error input:hover, .form-group--error textarea {
  border-color: #f79483;
}

.form-group--error+.form-group_message {
  display: block;
  color: #f57f6c;
}

.form-group_message {
    font-size: .75rem;
    line-height: 1;
    display: none;
    margin-left: 14px;
    margin-top: -0.6875rem;
    margin-bottom: .9375rem;
}

.form-group--alert, .form-group--error {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>

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
