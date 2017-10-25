<template>
  <div class="hello">
	{{msg}}
	<input v-model="msg">
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: '테스트'
    }
  }
}
</script>
