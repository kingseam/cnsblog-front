<template>
<div>
    <div class="col-md-9">
          <div class="bs-docs-section">
			  <h1 id="overview" class="page-header">{{boardDetail.subject}}<a class="anchorjs-link" href="#overview"><span class="anchorjs-icon"></span></a></h1>
			  <p class="lead">{{boardDetail.user_name}}</p>
  		  </div>
  		  
  		  <div class="highlight">
  		    <pre>{{boardDetail.contents}}</pre>
  		  </div>
  		  
  		  <router-link :to="{name: 'board'}" class="btn btn-sm btn-info btn-flat pull-left">목록</router-link>
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
