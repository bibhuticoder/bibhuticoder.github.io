<template>
  <div>
    <div class="info">
      <h1 class="center">Art Works</h1>
      <br>
      <p class="lead center">Digital arts built with Adobe Photoshop & Illustrater.</p>
      <br>
    </div>

    <div class="container">
      <div id="artwork-list" class="row">
        <div class="col-xs-6 col-md-4" v-for="(a, i) in artworks" :key="i" v-on:click="currentArtwork = a">
          <div class="thumbnail pic-thumbnai">
            <img :src="a.src" class="art-pic" data-toggle="modal" data-target="#art-large" :data-name="a.title" />
            <div class="caption">
              <h5 class="artname">{{a.title}}</h5>
            </div>
          </div>
        </div>
      </div>
    
    <!-- art-large modal -->
    <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" id="art-large">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="row">
            <div class="col-md-12">
              <div class="thumbnail">
                <img v-if="currentArtwork" :src="currentArtwork.src" />
              </div>              
            </div>
          </div>          
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
  data(){
    return{
      currentArtwork: null,
      artworks: [
        {
          title: 'Landscape',
          tool: 'Photoshop',
          src: 'https://4.bp.blogspot.com/-x58zdSxeAUI/WKb2HIlvcSI/AAAAAAAAApQ/bqKlU5t3nwEGEaPI0COPSJkb2Qna_z7zgCLcB/s640/landscape.png'
        },

        {
          title: 'Cloudy Day',
          tool: 'Photoshop',
          src: 'https://4.bp.blogspot.com/-XvhEpvAa-2I/WKhI3TZeUbI/AAAAAAAAAqU/b6ZDqUaaErIA9e2qavHPMyU0ftgOh3EbwCLcB/s640/cloudSun-land.png'
        },

        {
          title: 'Evening',
          tool: 'Photoshop',
          src: 'https://2.bp.blogspot.com/-rmHSkhLZoHM/WKhH3LXU-mI/AAAAAAAAAqI/sokU2oUW0Gk_BWggiQFnmi6kgmRXQ88YwCLcB/s640/land-cloud.png'
        },

        {
          title: 'One',
          tool: 'Photoshop',
          src: 'https://4.bp.blogspot.com/-w7MOrGdbcu4/U6aI6NFd6qI/AAAAAAAAAM0/MnSMQ5JlPgI/s1600/army.jpg'
        },

        {
          title: 'Nepal',
          tool: 'Photoshop',
          src: 'https://1.bp.blogspot.com/-QG3dMjeZ6GQ/VB0F9-ppeXI/AAAAAAAAAPI/Pe9tKIuQtl4/s1600/Nepal.jpg'
        }
    ],
    }
  },  

  methods: {},
  computed:{},
  created(){
    //set active tab
    this.$store.commit('setCurrentTab', this.$options.name);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .artname{
    font-weight: bold;
  }

</style>
