<template>
  <div class="social-links">
    <button v-for="(h, i) in socialLinks" class="circleBtn" :title="h.title" v-bind:key="i">
      <a :href="h.link" target="_blank">
        <div v-html="h.tag" :style="'color:' + h.color"></div>
      </a>
    </button>
  </div>
</template>

<script>

export default {
  components: {},
  name: 'SocialHandlers',
  data(){
    return{
      socialLinks:[
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
      ]
    }
  },
  methods: {},
  computed:{},
  created(){}
}
</script>

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
    font-size: 15px;
  }

  .circleBtn:hover {
    border-color: grey;
  }

</style>
