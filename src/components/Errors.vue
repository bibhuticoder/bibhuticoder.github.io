<template>
  <div class="container center">
    <br><br><br>
    <div class="info">
      <h1>
          <i class="fa fa-exclamation-triangle sad" aria-hidden="true"></i>
        </h1>
      <br><br>
    </div>
    <div class="lead error-msg">
      <div v-html="errorMsg"></div>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  name: 'errors',
  data(){
    return{
      errorMsg: "The page you are looking for doesn't exist.",
      
    }
  },
  methods: {
  },
  computed:{
  },

  created(){
    var error = this.$route.params.type;

    //demo_not_found
    if(error === 'demo_not_found'){
      this.errorMsg = `Sorry! Demo for the project is not available. Instead you can download the source and run it locally.
        <br><br> <a href="https://github.com/bibhuticoder/${this.$route.query.name}">View Source Code</a>`;
    }
      
    
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .sad{
    font-size: 100px;
    color: #373737;
    font-weight: 100;
  }

</style>
