<template>

  <div class="container container-full-height">    
    <h2>Programming articles, tutorials, tips and much more...</h2>
    <p class="lead">Bibhuti Poudyal | Programmer, Developer</p>
    <br>

    <!-- <div class="blog-list" v-for="(blgs, year) in blogs" v-bind:key="year">
      <label class="year">{{year}}</label>
      <table class="table table-stripped">
        <tbody>
          <tr v-for="(b, i) in blgs" v-bind:key="i">
            <td class="title" v-on:click="gotoBlog(b.id)">{{b.title}}</td>
            <td>{{b.month + " " + b.day}}</td>
          </tr>
        </tbody>
      </table>
      <br>
    </div>  -->

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
    width: 100%;
    margin: 0 auto; 
    margin-top: 10px;   
    border-radius: 5px;
    background-color: white;
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
    color: #373737;
  }

  .title:hover{
    cursor: pointer;
    padding-left: 20px;
    color: #009688;
  }

  .blog-row{
    border-bottom-style: solid;
    border-bottom-color: lightgray;
    border-bottom-width: 1px;
    margin: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
  }


</style>
