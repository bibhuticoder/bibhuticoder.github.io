<template>

  <div class="container container-full-height">    
    <h2>Programming articles, tutorials, tips and much more...</h2>
    <p class="lead">Bibhuti Poudyal | Programmer, Developer</p>
    <br>
    <div class="blog-list">

      <table class="table table-stripped" v-for="(blgs, year) in blogs" v-bind:key="year">
        <thead>
          <td class="year">{{year}}</td>
          <td></td>
        </thead>
        <tbody>
          <tr v-for="(b, i) in blgs" v-bind:key="i">
            <td class="title" v-on:click="gotoBlog(b.id)">{{b.title}}</td>
            <td>{{b.month + " " + b.day}}</td>
          </tr>
        </tbody>
      </table>
    </div> 
  </div>
</template>

<script>

export default {
  components: {},
  name: 'blogs',
  methods: {
    gotoBlog(id){
      this.$router.push({ path: 'blogs/'+ id});
    }
  },
  computed:{
    blogs(){
      return this.$store.state.blogs;
    },
  },

  created(){
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
  
  .container-full-height{
    height: calc(100vh - 90px);
  }

  .blog-list{
    
    width: 75%;
    margin: 0 auto;    
    border-radius: 5px;
    background-color: white;
    padding: 20px !important;
    text-align: left;
    font-size: 15px !important;
  }

  ul{
    padding: 0;
  }

  li{
    list-style-type: none;
  }

  .year{
    font-weight: bold;
    color: rgb(89, 165, 89);
    font-size: 20px;
  }

  .title{    
    transition: padding-left 0.2s, color 0.5s;
  }

  .title:hover{
    cursor: pointer;
    padding-left: 20px;
    color: royalblue;
  }


</style>
