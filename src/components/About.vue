<template>
  <div class="container center">
      <br>
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
      <SocialHandlers />
    </div>
    
    <br>
  </div>
</template>

<script>
import SocialHandlers from '@/components/SocialHandlers'
export default {
  components: {SocialHandlers},
  name: 'about',
  methods: {},  
  computed:{},  
  created(){
    //set active tab
    this.$store.commit('setCurrentTab', this.$options.name);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
