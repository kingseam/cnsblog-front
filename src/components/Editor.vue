<template>
   <div class="box box-info">
     <vue-editor v-model="content"></vue-editor>
     
     <div class="box-footer clearfix">
    	<router-link tag="a" class="btn btn-sm btn-info btn-flat pull-left" :to="{name: 'Board'}">목록</router-link>
     	<router-link tag="a" class="btn btn-sm btn-info btn-flat pull-right" :to="{name: 'Board'}">작성</router-link>
     </div>
   </div>
 </template>

 <script>
import { VueEditor } from 'vue2-editor'
export default {
  components: {
    VueEditor
  },
  data () {
    return {
      content: '<h1>Some initial content</h1>'
    }
  },
  created () {
    this.$bus.$on('Editor', (args) => {
      alert(args)
    })
  }
}
</script>
