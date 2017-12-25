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
import axios from "axios";

export default {
  components: {
    Navbar
  },
  name: "app",
  created() {
  },

  computed: {}
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}

#view {
  position: absolute;
  top: 50px;
  left: 0px;
  width: 100vw;
  height: calc(100vh - 50px);
  overflow: auto;
  background-image: url("./assets/back.png");
  padding: 20px;
  padding-right: 0px;
  border-style: solid;
  border: #24292e;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

pre {
  background-color: transparent !important;
  border-color: transparent !important;
}

.loading {
  position: fixed;
  left: calc(50% - 50px);
  top: calc(50% - 50px);
  z-index: 10;
  height: 100px;
  width: 100px;

}

 a{
    color: #2E7D32;
  
  }

  .center{
    text-align: center;
  }

</style>
