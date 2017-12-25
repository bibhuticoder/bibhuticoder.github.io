<template>
  <div class="container center">
    
      <h1>
        <i class="fa fa-cogs" aria-hidden="true"></i> &nbsp;
        How I built this site
        &nbsp; <i class="fa fa-flask" aria-hidden="true"></i>
      </h1>

    <div class="container text">
      <p class="lead center">
        
        
      </p>
      <br>
      <p class="lead">
        <b>Domain</b> : Free .np domain by  <a href = "https://register.com.np/" target="_blank>">Mercentile</a>
        <br>
        <b>Hosting</b> : <a href = "https://pages.github.com/" target="_blank>">Github Pages</a>
        <br>
        <b>Blog</b> : <a href = "https://developers.google.com/blogger/docs/3.0/getting_started" target="_blank>">Blogger REST API v3</a>
        <br>
        <b>Projects</b> : <a href="https://developer.github.com/v3/" target="_blank>">GitHub REST API v3</a>
        <br>
        <b>Frontend Framework</b> : <a href="https://developer.github.com/v3/" target="_blank>">Vue js</a> with <a href="https://vuex.vuejs.org/en/" target="_blank"> VueX </a>
        <br>
        <b>Source code</b> : <a href="https://github.com/bibhuticoder/bibhuticoder.github.io" target="_blank">https://github.com/bibhuticoder/bibhuticoder.github.io</a>.
        <br>
      </p>
      <p class="lead"><i class="fa fa-hand-o-down" aria-hidden="true"></i></p>
      <P class="lead">I have also explained it  <router-link to="/blogs/325227775290080082">here</router-link> </P>
      <p class="lead center">
        If you have any issues regarding the projects and blog feel free to contact me.
        And any kind of suggestions regarding my projects, blogs or this site are highly appreciated.
      </p>
      <br>
       <div class="social-links">
          <button v-for="(h, i) in socialLinks" class="circleBtn" :title="h.title" v-bind:key="i">
            <a :href="h.link" target="_blank">
              <div v-html="h.tag" :style="'color:' + h.color"></div>
            </a>
          </button>
        </div>  
    </div>
    
    <br>
  </div>
</template>

<script>

export default {
  components: {},
  name: 'about',
  methods: {

  },
  
  computed:{
    socialLinks(){
      return([
        {
          title: "Github",
          link: "https://github.com/bibhuticoder",
          color: "#373737",
          tag: '<i class="fa fa-github" aria-hidden="true"></i>'          
        },
        {
          title: "Google+",
          link: "https://plus.google.com/+Bibhutipd",
          color: "maroon",
          tag: '<i class="fa fa-google-plus" aria-hidden="true"></i>'   
        },
        {
          title: "Twitter",
          link: "https://twitter.com/bibhuti_coder",
          color: "deepskyblue",
          tag: '<i class="fa fa-twitter" aria-hidden="true"></i>'   
        },
        {
          title: "Quora",
          link: "https://www.quora.com/profile/Bibhuti-Poudyal",
          color: "maroon",
          tag: '<i class="fa fa-quora" aria-hidden="true"></i>'   
        },
        {
          title: "LinkedIn",
          link: "https://www.linkedin.com/in/bibhuti-poudyal-4883aa116/",
          color: "royalblue",
          tag: '<i class="fa fa-linkedin" aria-hidden="true"></i>'
        }
      ]);
    }
    
  },

  
  created(){

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 
  .circleBtn {
    margin: 0 auto;
    height: 35px;
    width: 35px;
    padding: 1px;
    border-radius: 100%;
    background-color: rgb(242, 239, 239);
    cursor: pointer;
    margin-right: 5px;
    margin-left: 5px;
    border-style: solid;
    border-color: lightgrey;
    transition: border-color 0.5s ease;
  }

  .circleBtn:hover {
    border-color: grey;
  }

</style>
