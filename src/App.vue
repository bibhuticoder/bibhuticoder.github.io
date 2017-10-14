<template>
  <div id="app">
    <navbar></navbar>

    <transition name="fade">
      <!--<div >-->
        <router-view id="view"></router-view>
      <!--</div>-->
    </transition>

  </div>
</template>

<script>

  import Navbar from "./components/Navbar.vue";
  import axios from 'axios';

  export default {
    components: {
      Navbar
    },
    name: 'app',
    created(){
      if(this.$store.getters.projects.length === 0){
        var self = this;
        this.$store.dispatch('getProjects', function () {
        });
      }
    },

    computed: {

    }
  }
</script>

<style>

  #app{
    width: 100%;
    height: 100%;
  }

  #view{
    position: absolute;
    top: 50px;
    left: 0px;
    width: 100vw;
    height: calc(100vh - 50px);
    overflow: auto;
    background-image: url("./assets/back.png");
    text-align: center;
    padding: 20px;
    border-style: solid;
    border: #24292E;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }

</style>
