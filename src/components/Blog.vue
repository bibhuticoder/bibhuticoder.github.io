<template>

  <div class="container">    
    <div v-if="currentBlog" class="content">
      <h1>{{currentBlog.title}}</h1>      
      <span>{{currentBlog.day + " " + currentBlog.month + ", " + currentBlog.year}}</span>
      <br><br>
      <span class="" v-html="currentBlog.content"></span>      
      <br>
      <br>
      <hr>
      <a :href="currentBlog.url" target="_blank">Click here for comments and more.</a>
      <br>
    </div>
    <div v-else>
        <p class="lead">Loading...</p>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  name: 'blog',
  data(){
    return{
      searchKeyword: ''
    }
  },
  methods: {
    
  },
  computed:{
    currentBlog(){
      return this.$store.state.currentBlog;
    },
  },

  created(){
    var blogId = this.$route.params.id; 
    console.log(blogId);
    this.$store.dispatch('getCurrentBlog', {
      id: blogId,
      callback:function () {          
        console.log("Blogs");
      }
    });
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
 .content{
    width: 75%;
    margin: 0 auto;
    font-family: Segoe UI !important;    
    font-weight: 400 !important;
    font-style: normal !important;
    font-size: 21px !important;
    line-height: 1.58 !important;
    letter-spacing: -.003em !important;
 }


</style>
