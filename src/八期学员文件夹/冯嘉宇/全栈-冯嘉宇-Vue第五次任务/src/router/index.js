import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import show from '../views/homeshow.vue'
import choose from '../views/homechoose.vue'
import { KeepAlive } from 'vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: "/Home"
    },
    {
      path: '/Home',
      component: Home,
      children: [
        {
          path: '',
          redirect: ''
        },
        {
          path: 'show',
          component: show
        },
        {
          path: 'choose',
          component: choose
        }
      ]
    },
    {
      path: '/About',
      component: About
    }
  ]
})

export default router
