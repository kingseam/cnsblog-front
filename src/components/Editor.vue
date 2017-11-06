<template>
   <div id="app">
     <vue-editor v-model="content"></vue-editor>
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
  }
}
</script>
