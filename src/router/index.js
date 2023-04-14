import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../components/Homepage.vue'
import Aboutus from '../components/Aboutus.vue'
import Reviewrequest from '../components/Reviewrequest.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/about',
      name: 'about',
      component: Aboutus
    },
    {
      path: '/reviewrequest',
      name: 'reviewrequest',
      component: Reviewrequest
    },
  ]
})

export default router
