<template>

  <div class="container">    
    <div v-if="currentBlog" class="content">

      <!-- Title -->
      <h1 class="center">{{currentBlog.title}}</h1>      

      <!-- Time, Author, Tags -->
      <p class="center"> By Bibhuti Poudyal | {{currentBlog.day + " " + currentBlog.month + ", " + currentBlog.year}} </p>
      <br><br>

      <!-- Content  -->
      <span class="" v-html="currentBlog.content"></span>      
     
      <!-- Short Bio -->
      <bio/>
      
      <!-- Disqus comments  -->
      <div class="comments">
        <vue-disqus
          shortname="bibhuticoder"
          :identifier="currentBlog.id"
          url="'http://localhost:8080'"
          :title="'Blog' + currentBlog.id"
        ></vue-disqus>
      </div>  

    </div>
    <div v-else>
      <img src="static/loading.gif" class="loading" />
    </div>

    <!-- Prev -->
    <div class="nav-post left-post" v-if="prevPost" v-on:click="navigate(prevPost.id)">       
      <div class="text">
        <span>{{prevPost.title}}</span>  
      </div>
      <div class="arrow">
        <i class="fa fa-angle-right" aria-hidden="true"></i>
      </div>
    </div> 

    <!-- Next -->
    <div class="nav-post right-post" v-if="nextPost" v-on:click="navigate(nextPost.id)">  
      <div class="text">
        <span>{{nextPost.title}}</span>  
      </div>
      <div class="arrow">
        <i class="fa fa-angle-right" aria-hidden="true"></i>
      </div>
    </div>

  </div>
</template>

<script>
import VueDisqus from "vue-disqus/VueDisqus.vue";
import Bio from "@/components/Bio";
export default {
  components: { VueDisqus, Bio },
  name: "blog",
  data() {
    return {
      nextPost: null,
      prevPost: null
    };
  },
  methods: {
    fetchData(blogId){
      var self = this;
      this.$store.dispatch("getCurrentBlog", {
        id: blogId,
        callback: function() {
          //when the current blog is loaded load other blogs too.
          self.$store.dispatch("getBlogs", function() {
            //set prev and next post
            var index;
            for (var i = 0; i < self.blogs.length; i++) {
              if (self.currentBlog.id === self.blogs[i].id) index = i;
            }

            //cycle
            if (index != 0) self.prevPost = self.blogs[index - 1];
            else self.prevPost = self.blogs[self.blogs.length - 1];

            if (index != self.blogs.length - 1)self.nextPost = self.blogs[index + 1];
            else self.nextPost = self.blogs[0];

          });
        }
      });
    },

    navigate(blogId){

      //make al data null
      this.nextPost = null;
      this.prevPost = null;
      this.$store.commit('setCurrentBlog', null);

      //change route
      this.$router.push({name: 'Blog', params:{id: blogId}});
      this.$route.params.id = blogId;
      this.fetchData(blogId);      
    }
  },
  computed: {
    currentBlog() {
      return this.$store.state.currentBlog;
    },
    
    blogs() {
      return this.$store.state.blogs;
    }
  },

  created() {
    this.fetchData(this.$route.params.id);
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  width: 70%;
  margin: 0 auto;
  font-family: Segoe UI !important;
  font-weight: 400 !important;
  font-style: normal !important;
  font-size: 18px !important;
  line-height: 1.58 !important;
  letter-spacing: -0.003em !important;
}

.center {
  text-align: center;
}

.nav-post {
  position: fixed;
  top: calc(50% - 100px);
  width: 60px;
  height: 200px;
  background: transparent;
  text-align: center;
  cursor: pointer;
  font-family: Segoe UI;
  opacity: 0.5;
  transition: opacity 0.2s;
}

.nav-post:hover {
  opacity: 1;
}

.arrow {
  float: left;
  height: 200px;
  width: 20px;
  line-height: 200px;
}

.text {
  float: left;
  height: 200px;
  width: 30px;
  writing-mode: tb-rl;
  color: green;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.arrow i {
  font-weight: bold;
  font-size: 20px;
  color: green;
}

.right-post {
  right: 0px;
  margin-right: 20px;
}

.left-post {
  left: 0px;
  -ms-transform: rotate(180deg); /* IE 9 */
  -webkit-transform: rotate(180deg); /* Safari 3-8 */
  transform: rotate(180deg);
}
</style>
