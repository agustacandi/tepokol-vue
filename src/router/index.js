import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Event from '../views/Event.vue'
import DetailEvent from '../views/DetailEvent.vue'
import Gallery from '../views/Gallery.vue'
import Blog from '../views/Blog.vue'
import DetailBlog from '../views/DetailBlog.vue'
import Contact from '../views/Contact.vue'

const routes = [{
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
        component: Event
    },
    {
        path: '/event/having-a-trouble-with-an-anxiety',
        name: 'DetailEvent',
        component: DetailEvent
    },
    {
        path: '/blog/having-a-trouble-with-an-anxiety',
        name: 'DetailBlog',
        component: DetailBlog
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router