<template>
  <div class="container">
    <div class="info">
      <h1>Art Works</h1>
      <br>
      <p class="lead">List of digital arts built with photoshop, illustrater, MS Powerpoint.</p>
      <br>
    </div>
    <div id="artwork-list" class="row">
      <div class="col-sm-6 col-md-4 col-xs-6" v-for="a in artworks">
        <div class="thumbnail pic-thumbnai">
          <img :src="a.src" class="art-pic" data-toggle="modal" data-target="#art-large" :data-name="a.title" />
          <div class="caption">
            <h5>{{a.title}}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  name: 'artWorks',
  methods: {

  },
  computed:{
    artworks(){
      return this.$store.getters.artworks;
    },
  },

  created(){

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
