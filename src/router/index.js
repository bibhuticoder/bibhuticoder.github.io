import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Resume from '@/components/Resume'
import ArtWorks from '@/components/ArtWorks'
import Projects from '@/components/Projects'
import Quotes from '@/components/Quotes'
import About from '@/components/About'
import Blog from '@/components/Blog'
import Bio from '@/components/Bio'
import Errors from '@/components/Errors'

Vue.use(Router)

//AIzaSyC39mYo0t5fxe3QlQ5cd2xKDnzgEVUL7JU

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Home
    },
    
    {
      path: '/Blogs/:id',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/artWorks',
      name: 'Art Works',
      component: ArtWorks
    },
    {
      path: '/quotes',
      name: 'Quotes',
      component: Quotes
    },
    {
      path: '/bio',
      name: 'Bio',
      component: Bio
    },    
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/errors/:type',
      name: 'Errors',
      component: Errors
    },
    {
      path: "*",
      component: Errors
    }
  ]
})
