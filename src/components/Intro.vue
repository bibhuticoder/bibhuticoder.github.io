<template>
  <div class="container">
    <div id="intro" class="shown container content">
      <div class="profilePic"></div>

      <br>
      <div class="about-me align-center">
        <label style="color:green; font-weight: bold" class="lead">/* About a programmer */</label>
        <br>
        <br>
        <p class="text">
          Hello, I am <strong>Bibhuti Poudyal</strong>, a programmer, designer, dreamer and an artist who likes art of every form.
          I am tech enthusiastic spending a lot of time with computer, learning and experimenting stuffs. I started programming in high school
          and it's been approximately {{elapsedTime}} till then.
          I work mostly in web and mobile platform. And my other areas of interest include game development, browser Extensions,
          AI, Machine learning, Natural language processing and computer vision.
        </p>
        <br>
        <br>

        <div style="margin:0 auto; margin-top:10px; ">
          <button v-for="h in handlers" class="circleBtn" :title="h.title">
            <a :href="h.link" target="_blank"><img :src="h.img" /></a>
          </button>
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
    }
  },
  created(){
    this.initTimer();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .container{
    text-align: center;
  }

  .profilePic {
    margin: 0 auto;
    margin-top: 50px;
    height: 120px;
    width: 120px;
    border-radius: 100%;
    background-image: url('https://avatars3.githubusercontent.com/u/8759270?v=4&s=460');
    background-size: cover;
    box-shadow: 1px 1px 5px grey;
    background-position: center;
  }

  .text{
    font-size: 1.2em;
    font-weight: 100;
  }

  .circleBtn {
    margin: 0 auto;
    height: 40px;
    width: 40px;
    padding: 2px;
    border-radius: 100%;
    background-color: lightgrey;
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
    height: 30px;
    width: 30px;
    border-radius: 100%;
  }

</style>
