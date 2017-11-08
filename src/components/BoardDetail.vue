<template>
<div>
    <div class="col-md-9">
          <div class="bs-docs-section">
			  <h1 id="overview" class="page-header" v-if="boardDetail.subject != undefined">{{boardDetail.subject}}<a class="anchorjs-link" href="#overview"><span class="anchorjs-icon"></span></a></h1>
			  <p class="lead" v-if="boardDetail.user_name != undefined">{{boardDetail.user_name}}</p>
  		  </div>
  		  
  		  <div class="highlight">
  		    <pre v-if="boardDetail.contents != undefined">{{boardDetail.contents}}</pre>
  		  </div>
  	</div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  created () {
    this.boardProduct(this.$route.query.id)
  },
  computed: {
    ...mapGetters([
      'boardDetail'
    ])
  },
  methods: {
    ...mapActions([
      'boardProduct'
    ])
  }
}
</script>
