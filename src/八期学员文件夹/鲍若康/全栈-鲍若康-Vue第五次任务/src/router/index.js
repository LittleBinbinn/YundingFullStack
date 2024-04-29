import { createRouter, createWebHistory } from 'vue-router'
import About from '../components/About.vue'
import Home from '../components/Home.vue'
import List from '../components/list.vue'
import Selected from '../components/selected.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'selected',
          component: Selected,
        },
         {
          path: 'list',
          component: List
        }
       ]
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router
