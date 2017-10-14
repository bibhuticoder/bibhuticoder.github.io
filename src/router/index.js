import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Resume from '@/components/Resume'
import ArtWorks from '@/components/ArtWorks'
import Projects from '@/components/Projects'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: Home
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
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
