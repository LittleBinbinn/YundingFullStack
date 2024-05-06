import { createRouter, createWebHistory } from 'vue-router'
import about from '../components/about.vue'
import home from '../components/home.vue'
import list from '../components/list.vue'
import selected from '../components/selected.vue'
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
        component: home,
        children: [
          {
            path: 'selected',
            component: selected,
          },
           {
            path: 'list',
            component: list
          }
         ]
      },
      {
        path: '/about',
        name: 'about',
        component: about
      }
    ]
  })
  
  export default router