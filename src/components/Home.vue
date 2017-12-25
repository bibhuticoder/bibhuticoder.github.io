<template>
  <div class="shown content">
    <div class="container-fluid">
    <div class="row">        
        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12">
          <div class="intro">
            <div class="profilePic"></div>
            <br>
            <div class="about-me">
              <h2 class="lead headline center">Hey there!</h2>              
              <p class="text">
                I am <strong>Bibhuti Poudyal.</strong> This is my portfolio and a blog.
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

              <div class="social-links">
                <button v-for="(h, i) in socialLinks" class="circleBtn" :title="h.title" v-bind:key="i">
                  <a :href="h.link" target="_blank">
                    <div v-html="h.tag" :style="'color:' + h.color"></div>
                  </a>
                </button>
              </div>              
              <hr>
               <p>
                  <router-link to="/artworks" class="link">Artworks</router-link>
                  <br> Digital arts and illustrations I did on my free time.
                  <br><br>
                  <router-link to="/quotes" class="link">Quotes</router-link>                 
                  <br> I collect motivational and inspirational quotes as a part of my hobby.
               </p>    
            </div>
          </div>
        </div>
        <div class="col-md-9 col-lg-9 col-sm-12 col-xs-12">
          <BlogList />
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import BlogList from '@/components/BlogList'
export default {
 

  components: {BlogList},
  name: 'home',
  data(){
    return{
    }
  },
  methods: {
    initTimer(){
      var elapsed = (new Date().getFullYear() - 2012) * 365 * 24 * 60 * 60;
      var final;
      var self = this;
      setInterval(function () {
        final = Date.now();
        var seconds = (parseInt((final - elapsed)/1000));

        var d = (60*60*24);
        var h = 60*60;
        var m = 60;

        var days = parseInt(seconds/d);
        var rem = seconds%d;

        var hours =  parseInt(rem/h);
        rem = rem%h;

        var mins =  parseInt(rem/m);
        rem =  parseInt(rem%m);

        self.elapsedTime = `${days} days ${hours} hrs ${mins} mins ${rem} secs`;

      }, 1000);
    },
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
    },

  },
  created(){}
}
</script>

<style scoped>
  
  .intro{
    background-color: white;
    height: 100%;
    width: 100%;
    padding: 10px;
    border-right-style: solid;
    border-right-width: 1px;
    border-right-color: lightgray;
    border-left-style: solid;
    border-left-width: 1px;
    border-left-color: lightgray;
    font-weight: 500;
    font-family: Segoe UI !important;
  }

  .profilePic {    
    margin: 0 auto;
    margin-top: 10px;
    height: 100px;
    width: 100px;
    border-radius: 100%;
    background-image: url('https://qph.ec.quoracdn.net/main-thumb-90418459-200-whsmopziphktwwyulynuhdrojnwtpzsu.jpeg');
    background-size: cover;
    background-position: center;
  }

  .text{
    font-size: 1.2em;
    font-weight: 100;
  }

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

  .headline{
    color: #212121;
    border-bottom-style: solid;
    border-bottom-color: lightgray;
    border-bottom-width: 1px;
    font-weight: 600;    
  }


</style>
