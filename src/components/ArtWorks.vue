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
  data(){
    return{
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
        title: 'Lonely House',
        tool: 'Photoshop',
        src: 'https://4.bp.blogspot.com/-bIy-zmmqor0/U6aI46YAhhI/AAAAAAAAAMs/5x1r_R_2nIg/s1600/Lonely+house.jpg'
      },

      {
        title: 'Hope',
        tool: 'Photoshop',
        src: 'https://3.bp.blogspot.com/-5JrZ89n-dyQ/U6aI_F99TpI/AAAAAAAAANM/DzGiqlBP3zY/s1600/hope.jpg'
      },

      {
        title: 'Falling Apart',
        tool: 'Photoshop',
        src: 'https://4.bp.blogspot.com/-1x9meu7tF7E/U6aI8dmD7YI/AAAAAAAAAM8/34m31eVNQN0/s1600/Falling+Apart.png'
      },

      {
        title: 'Die Hard',
        tool: 'Photoshop',
        src: 'https://2.bp.blogspot.com/-4Av88FjFwBE/U6aI9QzsFHI/AAAAAAAAANE/UIWVV81Q4i0/s1600/die+hard.jpg'
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
      },

      {
        title: 'Doodle : Beach',
        tool: 'Photoshop',
        src: 'http://4.bp.blogspot.com/-eDKZ-3AVR5E/VB0HHNSSPdI/AAAAAAAAAPo/q34Zp4nhvMc/s1600/beach.gif'
      },

      {
        title: 'Doodle : Irrigation',
        tool: 'Photoshop',
        src: 'http://2.bp.blogspot.com/-fnhSJnA37h0/VB0HDO_MrGI/AAAAAAAAAPQ/BwY-PoDV9Pw/s1600/Water%2BPump.gif'
      },


      {
        title: 'Doodle : Bath',
        tool: 'Photoshop',
        src: 'http://3.bp.blogspot.com/-rGGe_TGy0lM/VB0HECGgItI/AAAAAAAAAPg/YrHeBYHcrUE/s1600/bath.gif'
      },

      {
        title: 'Doodle : Farm',
        tool: 'Photoshop',
        src: 'http://1.bp.blogspot.com/-eXwt81lqm54/VB0HDRTBHiI/AAAAAAAAAPU/hI98lEmxq7U/s1600/Potatoes.gif'
      },
    ],
    }
  },  

  methods: {},
  computed:{},
  created(){}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
