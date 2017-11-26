<template>
  <div class="hello">
	 로그인 여부 : {{loginYn}} 메인 페이지 입니다.
  </div>
</template>

<script>
import TestJson from '../json/test.json'
export default {
  name: 'test',
  data () {
    return {
      msg: TestJson,
      loginYn: localStorage.getItem('loginYn')
    }
  }
}
</script>
