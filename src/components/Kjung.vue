<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div id="app">
    
    <h3>@@Rebase 를 사용해보자. Hoy! 22</h3>

    <h5>master에서 추가한 문구 1</h5>


    <ul>
      <li v-for="(item, index) in list" v-if="item.text">
        {{index}} - {{item.text}} :: true 인것만 표시
      </li>
    </ul>
    <button v-on:click="alert" v-bind:disabled="isButtonDisabled">Alert</button>

    <br>

    <p>양방향 바인딩 : {{msg}}</p>
    <p v-once>변경하지 않음 : {{msg}}</p>
    <input v-model="msg">

    <ul>
      <li v-for="n in 10">{{n}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'kjung',
    data () {
      return {
        seen: true,
        msg: '기본 메시지',
        list: [
          {text: true},
          {text: false},
          {text: true}
        ],
        isButtonDisabled: true
      }
    },
    methods: {
      alert: function () {
        window.alert('hoy')
      }
    }
  }
</script>
