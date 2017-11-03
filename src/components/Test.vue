<template>
  <div class="hello">
	{{msg}}
	<input v-model="msg">
  </div>
</template>

<script>
import TestJson from '../json/test.json'
export default {
  name: 'test',
  data () {
    return {
      msg: JSON.stringify(TestJson)
    }
  }
}
</script>
