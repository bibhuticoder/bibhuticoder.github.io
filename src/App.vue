<template>
  <div>
    <navbar></navbar>
    <transition name="fade">
        <router-view id="view"></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {Navbar},
  name: "app"
};
</script>

<style>

#view {
  position: absolute;
  top: 50px;
  left: 0px;
  width: 100vw;
  height: calc(100vh - 50px);
  overflow-y: auto;
  overflow-x: hidden;
  background-image: url("./assets/back.png");
  /* padding: 20px;
  padding-right: 0px; */
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
  text-decoration: none;
}

.center{
  text-align: center;
}

.left{
  text-align: left;
}

</style>
