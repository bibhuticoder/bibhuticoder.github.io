import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Intro'
import Resume from '@/components/Resume'
import ArtWorks from '@/components/ArtWorks'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Blogs from '@/components/Blogs'
import Blog from '@/components/Blog'

Vue.use(Router)

//AIzaSyC39mYo0t5fxe3QlQ5cd2xKDnzgEVUL7JU

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: Intro
    },
    {
      path: '/Blogs',
      name: 'Blogs',
      component: Blogs
    },
    {
      path: '/Blogs/:id',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/Intro',
      name: 'Intro',
      component: Intro
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
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
