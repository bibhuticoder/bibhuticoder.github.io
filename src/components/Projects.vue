<template>
  <div class="container">
    <div class="filter-list">
      <input type="text" class="search" placeholder="Search projects.." v-on:input="search" v-model="searchKeyword"/>
      <div v-for="f in filters" :class="(f===filterLanguage)? 'filter filter-active': 'filter'" :style="'color:'+colors[f]" v-on:click="setFilter(f)">
        {{f}}
      </div>
    </div>

    <div class="projects-list">
      <div class="project" v-for="p in projects">
        <div class="title">
          <a :href="p.demo" target="_blank">{{p.name}}</a>
          <a :href="p.code" target="_blank" class="code pull-right" title="Github">
            <i class="fa fa-github" aria-hidden="true"></i>
          </a>
        </div>
        <p class="description">{{p.description}}</p>
        <div class="info">
          <i class="fa fa-star pull-left" style="margin-left: 0px" aria-hidden="true" title="stars"><span> {{p.stargazers_count}}</span></i>
          <i class="fa fa-code-fork pull-left" aria-hidden="true" title="forks"> <span>{{p.forks}}</span></i>
          <i class="fa fa-circle  pull-left" aria-hidden="true" :style="'color:'+ colors[p.language]"> {{p.language}}</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  name: 'projects',
  data(){
    return{
      filterLanguage: 'All',
      searchKeyword: ''
    }
  },
  methods: {
    setFilter(lang){
      this.filterLanguage = lang;
    },
    search(){
      this.setFilter('All');
    }
  },
  computed:{
    colors(){
      return this.$store.getters.colors;
    },
    filters(){
      return this.$store.getters.filters;
    },
    projects(){
      if(this.filterLanguage === "All"){
        if(this.searchKeyword.length > 0){
          var self = this;
          return this.$store.getters.projects.filter(function (project) {
            return (project.name.search(new RegExp(self.searchKeyword, 'i'))> 0);
          })
        }
        else return this.$store.getters.projects;
      }
      else{
        var self = this;
        return this.$store.getters.projects.filter(function(project){
          return project.language === self.filterLanguage;
        });
      }
    }
  },

  created(){
    this.setFilter('All');
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .projects-list{
    height: calc(100vh - (50px + 100px));
    width: calc(100vw - 40px);
    overflow: auto;
    /*border-style: solid;*/
  }

  .project{
    position: relative;
    float: left;
    background-color: white;
    padding:10px;
    height: 150px;
    width: 250px;
    margin:15px;
    color: #586069 !important;
    text-align:left;
    box-shadow: -1px -1px 10px grey;


  }

  .project .title{
    font-size: 15px;
    font-weight: bold;
  }

  .project .title .code{
    color: #373737;
    background-color: whitesmoke;
  }

  .project .description{
    margin-top: 10px;
  }

  .project .info{
    position: absolute;
    bottom: 10px;
    left: 10px;
    width: 100%;
  }


  .code .fa{
    font-size: 20px;
  }

  .project .info .fa{
    margin-left: 15px;
  }

  .info .fa span{
    color: #373737;
  }

  .filter-list{
    width: 100vw;
    height: 50px;
    background-color: white;
    margin-top: -20px;
    margin-left: -20px;
    padding: 5px;
    /*border-style: solid;*/
  }

  .filter{
    float: left;
    margin-left: 10px;
    margin-right: 10px;
    padding: 5px;
    border-radius: 2px;
    cursor: pointer;
    background-color: whitesmoke;
    transition: border-color 0.2s ease;
    border-style: solid;
    border-color: lightgrey;
  }

  .filter-active{
    border-color: inherit;
  }

  .search{
    border-style: solid;
    border-radius: 2px;
    border-color: lightgrey;
    float: left;
    margin-left: 10px;
    margin-right: 10px;
    padding: 5px;
    outline: none;
    color: dimgray;
  }

</style>
