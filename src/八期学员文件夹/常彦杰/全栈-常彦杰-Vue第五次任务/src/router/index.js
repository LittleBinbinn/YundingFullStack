import { createRouter, createWebHistory } from 'vue-router'
import AboutCp from '../components/About-cp.vue'
import HomeCp from '../components/Home-cp.vue'
import HomeChoice from '@/components/Home-choice.vue'
import HomeList from '@/components/Home-list.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeCp,
      children: [
        {
          path: 'list',
          component: HomeList,
        },
        {
          path: 'choice',
          component: HomeChoice,
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: AboutCp
    }
  ]
})

export default router
