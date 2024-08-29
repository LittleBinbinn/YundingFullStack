
import { createRouter, createWebHashHistory } from "vue-router"


const router = createRouter({
  history:createWebHashHistory(),
  routes: [
    {
      path: "/",
      component:()=>import('../views/home.vue')
    },
    {
      path: "/home",
      component: () => import('../views/home.vue'),
      meta: {
        isalive: false
      }
    },
    {
      path: "/about",
      component: () => import('../views/about.vue')
    },
    {
      path: "/home/user/:id",
      component: () => import('../views/user.vue'),
      children:[
        {
          path: "userModule1",
          component: () => import('../views/userModule1.vue')
        },
        {
          path: "userModule2",
          component: () => import('../views/userModule2.vue')
        }
      ],
    },
  ]
})


export default router