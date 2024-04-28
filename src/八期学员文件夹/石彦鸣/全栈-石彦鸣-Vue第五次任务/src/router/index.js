import { createRouter,createWebHistory } from 'vue-router'
const router = createRouter({
  history:createWebHistory(),
  routes: [
    {path: "/",redirect: "/home",},
    {
      path: "/home",
      component: () => import("../components/home.vue"),
      children: [
        { path: "list", component: () => import("../components/list.vue") },
        { path: "selected", component: () => import("../components/selected.vue") }
      ]
    },
    { path: "/about", component: () => import("../components/about.vue") },
    { path: "/:pathMatch(.*)", component: () => import('../components/notfound.vue') }
  ]
})

export default router
