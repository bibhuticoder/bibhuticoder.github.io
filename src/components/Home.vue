<template>

  <div class="">
    <div class="row">        
        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12">
          <Intro />
        </div>
        <div class="col-md-9 col-lg-9 col-sm-12 col-xs-12">
          <BlogList />
        </div>
    </div>
  </div>

</template>

<script>
import BlogList from '@/components/BlogList'
import Intro from '@/components/Intro'
export default {
  components: {BlogList, Intro},
  name: 'home',
  created(){
    //set active tab
    this.$store.commit('setCurrentTab', this.$options.name);
  }
}
</script>

<style scoped>
</style>
