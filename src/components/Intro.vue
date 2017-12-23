<template>
  <div class="shown content">
    <div class="container">
    <div class="row">        
        <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
          <div>
            <div class="profilePic"></div>
            <br>
            <div class="about-me">
              <h2 class="lead headline">Hey there!</h2>              
              <p class="text">
                I am <strong>Bibhuti Poudyal</strong> and this is my blog.
                <br><br>
                View my <router-link to="/resume" class="link">resume</router-link>
                and<router-link to="/projects" class="link"> projects</router-link>
                <br>
                Read my ansers on <a href="https://www.quora.com/profile/Bibhuti-Poudyal" class="link">Quora</a>
                <br>
                Follow me on <a href="https://twitter.com/bibhuti_coder" class="link">Twitter</a>
                <br>
                Email me at <a href="mailto:bibhutipd@gmail.com" class="link">bibhutipd@gmail.com</a>              
                <br>
                <br>
                I am also on...
              </p>
              <div style="margin:0 auto; margin-top:10px; ">
                <button v-for="h in handlers" class="circleBtn" :title="h.title">
                  <a :href="h.link" target="_blank"><img :src="h.img" /></a>
                </button>
              </div>              
              <br>
              <h2 class="lead headline">Others</h2> 
               <p class="text">
                  <router-link to="/artworks" class="link">Artworks</router-link>
                  <br> Digital arts and illustrations I did on my free time.
                  <br><br>
                  <router-link to="/quotes" class="link">Quotes</router-link>                 
                  <br> I collect motivational and inspirational quotes as a part of my hobby.
                  <br><br>
                  <router-link to="/bio" class="link">Bio</router-link>                 
                  <br> Read my bio here. Not so interesting though!!.
               </p>    
            </div>
          </div>
        </div>
        <div class="col-md-8 col-lg-8 col-sm-12 col-xs-12">
          <div class="blogs">
              <h2>Blog</h2>
              <hr>
              <div class="blog-list" v-for="(blgs, year) in blogs" v-bind:key="year">
                <label class="year">{{year}}</label>
                <div class="row blog-row" v-for="(b, i) in blgs" v-bind:key="i">
                  <div class="col-md-6">
                    <span class="title pull-left" v-on:click="gotoBlog(b.id)">{{b.title}}</span>
                  </div>
                  <div class="col-md-6">
                    <span class="pull-right">{{b.month + " " + b.day}}</span>
                  </div>                  
                </div>     
              </div>




          </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  name: 'intro',
  data(){
    return{
      timer: null,
      elapsedTime: 0,

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

    gotoBlog(id){
      this.$router.push({ path: 'blogs/'+ id});
    }
  },
  computed:{
    handlers(){
      return([
        {
          title: "Github",
          link: "https://github.com/bibhuticoder",
          img: "static/git.png"
        },
        {
          title: "Google+",
          link: "https://plus.google.com/+Bibhutipd",
          img: "static/google.png"
        },
        {
          title: "Twitter",
          link: "https://twitter.com/bibhuti_coder",
          img: "static/twitter.png"
        },
        {
          title: "Quora",
          link: "https://www.quora.com/profile/Bibhuti-Poudyal",
          img: "static/quora.png"
        },
        {
          title: "LinkedIn",
          link: "https://www.linkedin.com/in/bibhuti-poudyal-4883aa116/",
          img: "http://isitranslation.com/wp-content/uploads/2015/08/linkedin_circle_color-5122.jpg"
        },
        {
          title: "FlipKarma",
          link: "http://flipkarma.com/user/BibhutiAlmighty/",
          img: "http://flipkarma.com/static/new/images/Logo.png"
        }
      ]);
    },

    blogs(){
      return this.$store.state.blogs;
    },
  },
  created(){
    this.initTimer();

    if(!this.$store.state.blogs){      
        this.$store.dispatch('getBlogs', function () {          
          console.log("Blogs");
        });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .profilePic {
  
    margin-top: 10px;
    height: 200px;
    width: 200px;
    border-radius: 100%;
    background-image: url('https://qph.ec.quoracdn.net/main-thumb-90418459-200-whsmopziphktwwyulynuhdrojnwtpzsu.jpeg');
    background-size: cover;
    /* box-shadow: 1px 1px 5px grey; */
    background-position: center;
  }

  .text{
    font-size: 1.2em;
    font-weight: 100;
  }

  .circleBtn {
    margin: 0 auto;
    height: 30px;
    width: 30px;
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

  .circleBtn img {
    height: 20px;
    width: 20px;
    border-radius: 100%;
  }

  /* blogs */
    
  .container-full-height{
    height: calc(100vh - 90px);
  }

  .blog-list{
    
    width: 100%;
    margin-top: 10px;   
    border-radius: 5px;
    /* background-color: white; */
    padding: 10px !important;
    text-align: left;
    font-size: 15px !important;
    box-shadow: 1px 1px 2px whitesmoke;
  }

  .year{
    font-weight: bold;
    color: #4CAF50;
    font-size: 20px;
  }

  .title{    
    transition: padding-left 0.2s, color 0.5s;
    color: #00695C;
    font-weight: bold;
  }

  .title:hover{
    cursor: pointer;
    padding-left: 10px;
    color: #009688;
  }

  .blog-row{
    
    margin: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .link{
    color: #2E7D32;
    font-weight: bold;
  }

  .headline{
    color: #1B5E20;
    font-weight: bold;
    border-bottom-style: solid;
    border-bottom-color: lightgray;
    border-bottom-width: 1px;
  }
</style>
