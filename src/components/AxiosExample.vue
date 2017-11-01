<template>
  <div>
    <div v-if="hasResult">
      <h1>호출결과</h1>
      <div v-model="result">{{ result }}</div>
      <button v-on:click="result = {}">돌아가기</button>
    </div>
    <div v-else>
      <input v-model="host" placeholder="host" size="50">
      <input v-model="uri" placeholder="host 이후의 path 입력" size="50" />
      <p>실제 요청할 주소 : {{ apiUri }}</p>
      <button v-on:click="searchSamples">API 호출하기</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'axios-example',
  data: function () {
    return {
      result: {},
      host: 'http://220.230.124.242/api',
      uri: 'sample/list'
    }
  },
  computed: {
    apiUri: function () {
      return this.host + '/' + this.uri
    },
    hasResult: function () {
      return JSON.stringify(this.result) !== '{}'
    }
  },
  methods: {
    searchSamples: function () {
      // using JSONPlaceholder
      // const baseURI = 'http://220.230.124.242/api'
      axios.get(`${this.apiUri}`)
      .then((result) => {
        console.log(result)
        this.result = result
      })
    }
  }
}
</script>
