<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#to-collapse" aria-expanded="false">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">BIBHUTI</a>
      </div>
      <div class="collapse navbar-collapse" id="to-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li v-for="tab in tabs">
            <div :class="(tab.path===activeTab)? 'tab tab-active': 'tab'" v-on:click="navigate(tab.path)">{{tab.name}}</div>
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
  methods: {
    navigate(to){
      this.$router.replace({path: '/' + to});
      this.$store.commit('setActiveTab', to);
    }
  },

  computed: {
    activeTab(){
      return this.$store.state.activeTab;
    },
    tabs(){
      return this.$store.state.tabs;
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
    min-height: 30px !important;
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
  }

</style>
