<template>
  <div class="hello">
	 <li v-for="(item, key) in msg">
	    {{ item }} : {{ key }}
  	</li>
	 <li v-for="item in msg" :key="item.userId">
   		{{ item.userId }} : {{ item.nickNm }}
  	</li>
  </div>
</template>

<script>
import TestJson from '../json/test.json'
export default {
  name: 'test',
  data () {
    return {
      msg: TestJson
    }
  }
}
</script>
