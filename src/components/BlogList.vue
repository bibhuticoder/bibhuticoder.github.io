<template>

  <div class="blogs">
      <h2 class="headline lead">
        All blog posts
        <label class="post-count" v-if="blogs">{{blogsCount}} posts</label>
      </h2>

      <div class="blog-list" v-if="blogs" v-for="(year, i) in years" v-bind:key="i">
        <label class="year"> <i class="fa fa-calendar-o" aria-hidden="true"></i>&nbsp;&nbsp;{{year}}</label>
        <div class="row blog-row" v-for="(b, i) in blogs[year]" v-bind:key="i">
          <div class="col-md-6">
            <span class="title pull-left" v-on:click="gotoBlog(b.id)">{{b.title}}</span>
          </div>
          <div class="col-md-6">
            <span class="pull-right">{{b.month + " " + b.day}}</span>
          </div>                  
        </div>     
      </div>

      <div v-else>
        <p class="lead">Loading</p>
        <img src="static/loading.gif" class="loading" />
      </div>
  </div>
        
</template>

<script>
export default {
  components: {},
  name: "BlogList",
  data() {
    return {
      blogsCount: 0,
      years: []
    };
  },
  methods: {
    gotoBlog(id) {
      this.$router.push({ path: "blogs/" + id });
    }
  },
  computed: {
    blogs() {
      // Seperate years and blogs, render according to sorted years
      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      var blgs = this.$store.state.blogs;
      if (!blgs) return;

      var blogs = {};
      for (var i = 0; i < blgs.length; i++) {
        var b = blgs[i];
        //format date
        var date = new Date(b.published);
        var year = date.getFullYear();
        var month = months[date.getMonth()];
        var day = date.getDate();

        //push year only one time
        if (this.years.indexOf(year) == -1) this.years.push(year);

        b["year"] = year;
        b["month"] = month;
        b["day"] = day;

        if (!blogs[year]) blogs[year] = [];
        blogs[year].push(b);
      }

      //sort in descending order
      this.years.sort(function(a, b) {
        return b - a;
      });
      this.blogsCount = blgs.length;
      return blogs;
    }
  },
  created() {
    if (!this.$store.state.blogs) {
      this.$store.dispatch("getBlogs", function() {
        console.log("Blogs");
      });
    }
  }
};
</script>


<style scoped>

.blogs{
  padding: 20px;
}

.blog-list {
  width: 100%;
  margin-top: 5px;
  padding: 10px !important;
  text-align: left;
  font-size: 15px !important;
  box-shadow: 1px 1px 2px whitesmoke;
}

.year {
  font-weight: bold;
  color: rgb(62, 143, 65);
  font-size: 20px;
}

.title {
  transition: padding-left 0.2s, color 0.5s;
  color: black;
  font-weight: 100;
}

.title:hover {
  cursor: pointer;
  padding-left: 10px;
  color: green;
}

.blog-row {
  margin: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.link {
  color: #2e7d32;
  font-weight: bold;
}

.post-count {
  float: right;
  font-family: Segoe UI;
  color: green;
  font-weight: 600;
  font-size: 15px;

  /* padding: 5px;
  border-style: solid;
  border-color: green;
  border-width: 1px;
  border-radius: 5px; */
}
</style>
