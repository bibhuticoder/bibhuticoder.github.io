import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{    
    projects: null,
    blogs: null,
    currentBlog: null,
  },

  getters: {
    projects(state){
      return state.projects;
    },
    blogs(state){
      return state.blogs;
    },    
    currentBlog(state){
      return state.currentBlog;
    }
  },

  mutations:{
    setProjects(state, projects){
      
      //remove forked projects
      var filtered = projects.filter(function(p){
        return p.fork === false;
      });

      //generate demo links
      var final = filtered.map(function(p){
        if(p.has_pages) p['demo_url'] = "https://bibhuticoder.github.io/" + p.name;
        else p['demo_url'] = "/#/errors/demo_not_found?name=" + p.name;
        return p;
      });

      state.projects = final;
    },

    setBlogs(state, blogs){
      state.blogs = blogs;
    },

    setCurrentBlog(state, currentBlog){
      if(currentBlog === null){state.currentBlog = null; return};
      var months= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var date = new Date(currentBlog.published);
      var year = date.getFullYear() + "";
      var month = months[date.getMonth()];
      var day = date.getDate();
            
      currentBlog["year"] = year;
      currentBlog["month"] = month;
      currentBlog["day"] = day;

      state.currentBlog = currentBlog;
    }
  },

  actions:{
    getProjects(context, callback){
      axios.get('https://api.github.com/users/bibhuticoder/repos?sort=updated&per_page=100&page=1')
        .then(response => {
          context.commit('setProjects', response.data);
          callback();
        })
        .catch(e => {
          console.log(e);
        })
    },
    getBlogs(context, callback){
      // if(context.blogs !== null){callback();return;}
      axios.get(`https://www.googleapis.com/blogger/v3/blogs/6929645571399469422/posts?key=AIzaSyC39mYo0t5fxe3QlQ5cd2xKDnzgEVUL7JU&orderBy=published&fetchBodies=false`)
        .then(response => {
          context.commit('setBlogs', response.data.items);
          callback();
        })
        .catch(e => {
          console.log(e);
        })
    },
    getCurrentBlog(context, payload){
      context.commit('setCurrentBlog', null);
      axios.get(`https://www.googleapis.com/blogger/v3/blogs/6929645571399469422/posts/${payload.id}?key=AIzaSyC39mYo0t5fxe3QlQ5cd2xKDnzgEVUL7JU`)
      .then(response => {
        context.commit('setCurrentBlog', response.data);
        payload.callback();
      })
      .catch(e => {
        console.log(e);
      })
    }
  }
});
