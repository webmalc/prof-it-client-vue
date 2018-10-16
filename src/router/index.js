import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/Pages/Home'
import Services from './../components/Pages/Services'
import Team from './../components/Pages/Team'
import About from '@/components/Pages/About'
import Works from './../components/Pages/Works'
import Contacts from './../components/Pages/Contacts'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    }
  ]
})
