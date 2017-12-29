<template>  
    <div class="bio">
      <div class="pic"></div>
      <p>
        <br>        
        Hello, I am Bibhuti Poudyal, a programmer, designer, dreamer and an artist who
        likes art of every form. I am tech enthusiastic spending a lot of time with computer,
        learning and experimenting stuffs.          
        <br>
        In my free time I experiment with different technologies. You can view all of my projects
        <a href="http://www.bibhutipoudyal.com.np/#/projects">here</a>. Also I write answers on
        <a href="https://www.quora.com/profile/Bibhuti-Poudyal">Quora</a>.
        Other than technical stuffs, I like books, movies, meditation, digital art and Cooking.
        I share all those experiences on my <a href="http://www.bibhutipoudyal.com.np/#/">blog</a>.
        Be sure to check it out. 
        <br>
      </p>
    </div>
</template>

<script>

export default {
  components: {},
  name: 'bio',
  methods: {

  },
  computed:{

  },

  created(){

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .pic {  
    float: left;  
    margin: 10px;
    height: 100px;
    width: 100px;
    border-radius: 100%;
    background-image: url('https://avatars0.githubusercontent.com/u/8759270?s=460&v=4');
    background-size: cover;
    background-position: center;
  }

  .bio{
    border-top-style: solid;
    border-top-color: lightgrey;
    border-top-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: lightgrey;
    border-bottom-width: 1px;

    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;

    font-family: Segoe UI !important;    
    font-weight: 400 !important;
    font-style: normal !important;
    font-size: 15px !important;
    line-height: 1.58 !important;
    letter-spacing: -.003em !important;
    text-align: justify;
  }

  a{
    color: #2E7D32;
    font-weight: bold;
  }

</style>
