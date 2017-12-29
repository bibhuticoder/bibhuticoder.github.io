<template>

  <div class="intro center"> 
    <div class="about-me">
      <div class="profilePic"></div>  
      <h2 class="lead center">Hey there!</h2>            
      <p class="text">
        I am Bibhuti Poudyal. This is my portfolio and a blog.
        <hr>
        View my <router-link to="/resume" class="link">resume</router-link>
        and<router-link to="/projects" class="link"> projects</router-link>
        <br>
        Read my answers on <a href="https://www.quora.com/profile/Bibhuti-Poudyal" class="link">Quora</a>
        <br>
        Follow me on <a href="https://twitter.com/bibhuti_coder" class="link">Twitter</a>
        <br>
        Email me at <a href="mailto:bibhutipd@gmail.com" class="link">bibhutipd@gmail.com</a>              
        <br><br>
      </p>
      <SocialHandlers />             
      <hr>
      <p class="left">
        <router-link to="/artworks" class="link">Artworks</router-link>
        <br>Digital arts and illustrations I did on my free time .
        <br><br>
        <router-link to="/quotes" class="link">Quotes</router-link>                 
        <br>I collect inspirational quotes as a hobby .
      </p>    
    </div>
  </div>
 
</template>

<script>
import SocialHandlers from '@/components/SocialHandlers'
export default {
  components: {SocialHandlers},
  name: 'Intro',
  data(){
    return{
    }
  },
  methods: {},
  computed:{},
  created(){}
}
</script>

<style scoped>
  
  .intro{
    height: 100vh;
    background-color: white;
    height: 100%;
    width: 100%;
    padding: 10px;
    padding-left: 20px;
    border-right-style: solid;
    border-right-width: 1px;
    border-right-color: lightgray;
    font-weight: 500;
    font-family: Segoe UI !important;
  }

  .profilePic {    
    margin: 0 auto;
    margin-top: 5px;
    margin-bottom: 10px;
    height: 100px;
    width: 100px;
    border-radius: 100%;
    background-image: url('https://qph.ec.quoracdn.net/main-thumb-90418459-200-whsmopziphktwwyulynuhdrojnwtpzsu.jpeg');
    background-size: cover;
    background-position: center;
  }

  .text{
    font-size: 1.2em;
    font-weight: 400;
  }

  .headline{
    color: #212121;
    border-bottom-style: solid;
    border-bottom-color: lightgray;
    border-bottom-width: 1px;
    font-weight: 600;    
  }


</style>
