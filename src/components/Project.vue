<template>

  <div class="project">
    <div class="title">
      <a :href="demo_url" target="_blank" title="View Demo">{{name}}</a>
      <a :href="src_url" target="_blank" class="code pull-right" title="View source at Github">
        <i class="fa fa-github" aria-hidden="true"></i>
      </a>
    </div>
    <p class="description">{{description}}</p>
    <div class="info">
      <i class="fa fa-star pull-left" style="margin-left: 0px" aria-hidden="true" title="stars"><span> {{stars}}</span></i>
      <i class="fa fa-code-fork pull-left" aria-hidden="true" title="forks"> <span>{{forks}}</span></i>
      <i class="fa fa-circle  pull-left" aria-hidden="true" :style="'color:'+ color">
        &nbsp;<label class="language">{{language}}</label>   
      </i>
    </div>
  </div>


</template>

<script>

export default {
  components: {},
  name: 'Project',
  props: ["name", "demo_url", "src_url", "description", "stars", "forks", "language", "color"],
  methods: {},
  computed:{},
  created(){}
}
</script>

<style scoped>

.project {
  position: relative;
  float: left;
  background-color: white;
  padding: 10px;
  height: 150px;
  width: 250px;
  margin: 15px;
  color: #586069 !important;
  text-align: left;
  font-family: Segoe UI;
  border-style: solid;
  border-width: 1px;
  border-color: lightgray;
}

.project .title {
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;  
}
.project .title a{
  color: rgba(73, 71, 71, 0.727) !important;
}

.project .title .code {
  color: #373737;
  background-color: whitesmoke;
}

.project .description {
  margin-top: 10px;
}

.project .info {
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 100%;
}

.code .fa {
  font-size: 20px;
  color: #212121;
}

.project .info .fa {
  margin-left: 15px;
}

.info .fa span {
  color: #373737;
}

.language{
  font-family:'Segoe UI';
  font-weight: 500;
}
</style>