import { createRouter, createWebHistory } from 'vue-router'
import About from '../components/About.vue';
import Home from '@/components/Home.vue';
import HomeChoice from '@/components/Home-choice.vue';
import HomeList from '@/components/Home-list.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path:'list',
          component:HomeList,
        },
        {
          path:'choice',
          component:HomeChoice,
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:About
    }
  ]
})

export default router
