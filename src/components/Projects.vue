<template>
  <div class="container">
    <br>
    <div v-if="projects">
      <div class="filter-list">
        <input type="text" class="search" placeholder="Search projects.." v-on:input="search" v-model="searchKeyword"/>
        <div v-for="(f, i) in filters" :class="(f===filterLanguage)? 'filter filter-active': 'filter'"
            :style="'color:'+colors[f]" v-on:click="setFilter(f)" :key="i">
          {{f}}
        </div>
      </div>

      <div class="projects-list">
        <Project v-for="(p, i) in projects" :key="i"
          :name="p.name"
          :demo_url="p.demo_url"
          :src_url="p.html_url"
          :description="p.description"
          :stars="p.stargazers_count"
          :forks="p.forks"
          :language="p.language"
          :color="colors[p.language]"
        />
      </div>
    </div>
    <div v-else>
      <img src="static/loading.gif" class="loading" />
    </div>

  </div>
</template>

<script>
import Project from '@/components/Project'
export default {
  components: {Project},
  name: "projects",
  data() {
    return {
      filterLanguage: "All",
      searchKeyword: "",
      colors: {
        TypeScript: "#2b7489",
        "C++": "#f34b7d",
        "C#": "#1E88E5",
        "Jupyter Notebook": "#DA5B0B",
        Shell: "#89e051",
        Kotlin: "#F18E33",
        "Objective-C": "#438eff",
        Ruby: "#701516",
        Go: "#375eab",
        "Visual Basic": "#945db7",
        PHP: "#4F5D95",
        Java: "#b07219",
        Scala: "#DC322F",
        Makefile: "#427819",
        Perl: "#0298c3",
        Lua: "#000080",
        Vue: "#2c3e50",
        CoffeeScript: "#244776",
        HTML: "#e44b23",
        Swift: "#ffac45",
        C: "#555555",
        JavaScript: "#FFA000",
        Python: "#3572A5"
      }
    };
  },
  methods: {
    setFilter(lang) {
      this.filterLanguage = lang;
    },
    search() {
      this.setFilter("All");
    },
    initFilters(projects){
      var filters = ['All'];
      for (var i = 0; i < projects.length; i++) {
        var l = projects[i].language;
        if (filters.indexOf(l) === -1 && l !== null)
          filters.push(l);
      }
      return filters;
    }
  },
  computed: {
    projects() {
      if (this.filterLanguage === "All") {
        if (this.searchKeyword.length > 0) {
          var self = this;
          return this.$store.getters.projects.filter(function(project) {
            return project.name.search(new RegExp(self.searchKeyword, "i")) > 0;
          });
        } else return this.$store.getters.projects;
      } else {
        var self = this;
        return this.$store.getters.projects.filter(function(project) {
          return project.language === self.filterLanguage;
        });
      }
    },

    filters(){
      if(this.$store.state.projects) return this.initFilters(this.$store.state.projects);
      return null;
    }

  },

  created() {
    var self = this;
    self.setFilter("All");
    if (!self.$store.state.projects) {
      self.$store.dispatch("getProjects", function() {  
      });
    }
    //set active tab
    this.$store.commit('setCurrentTab', this.$options.name);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.projects-list {
  height: calc(100vh - (40px + 100px));
  width: 100%;
  overflow: auto;
}

.filter-list {
  width: 100vw;
  height: 50px;
  background-color: white;

  /* view has 20px padding */
  margin-top: -20px;
  margin-left: -20px;

  padding: 5px;
  border-bottom-style: solid;
  border-bottom-color: lightgrey;
  border-bottom-width: 1px;
}

.filter {
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

.filter-active {
  border-color: gray;
}

.search {
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
