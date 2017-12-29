<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#to-collapse" aria-expanded="false">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div class="home" v-on:click="navigate('home')">          
            <span class="white">Bibhuti</span>
            <span class="green">Poudyal</span>
        </div>
      </div>
      <div class="collapse navbar-collapse" id="to-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li v-for="tab in tabs" v-bind:key="tab.name">
            <div :class="(tab.path===currentTab && currentTab !== null)? 'tab tab-active': 'tab'"
            v-on:click="navigate(tab.path)"
            v-html="tab.name"></div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  components: {},
  name: 'navbar',
  data(){
    return{
      tabs:[      
        {name: "Home", path: 'home'},
        {name: "Resume", path: 'resume'},
        {name: "Projects", path: 'projects'},
        {name: '<i class="fa fa-question-circle" aria-hidden="true" style="font-size: 20px; margin-top:15px"></i>', path: 'about'}
      ]
    }
  },

  methods: {
    navigate(to){
      this.$router.replace({path: '/' + to});
    }
  },

  computed:{
    currentTab(){
      return this.$store.state.currentTab;
    }
  }
}
</script>

<style scoped>
  .navbar{
    border-radius: 0px !important;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index:10;
    background-color: #24292E;
    border-style: none;
  }

  .tab{
    color: gray;
    height: 50px;
    line-height: 50px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
    transition: color 0.5s ease;
    font-weight: 600;
    font-size: 14px;
    font-family: "Segoe UI";
  }

  .tab-active{
    color: whitesmoke;
    border-bottom-style: solid;
    border-bottom-width: 5px;
    border-bottom-color: #79AB43;
  }

  /* Home at Top Left */
  .home{
    margin-top: 14px;
    margin-left: 10px;
    font-size: 1.2em;
    cursor: pointer;
  }

  .green{
    color: #79AB43;
    font-family: 'Segoe UI';
    margin-top: 5px;
  }
  .white{
    color: whitesmoke;
    font-family: 'Segoe UI';
  }

</style>
