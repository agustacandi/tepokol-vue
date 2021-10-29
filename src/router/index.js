import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
   component: About
  },
  {
    path: '/event',
    name: 'Event',
   component: About
  },
  {
    path: '/gallery',
    name: 'Gallery',
   component: About
  },
  {
    path: '/blog',
    name: 'Blog',
   component: About
  },
  {
    path: '/contact',
    name: 'Contact',
   component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
